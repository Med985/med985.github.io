let remoteTafsir = [];

function normalizeText(text) {
    if (!text) return "";
    return text.replace(/[\u064B-\u0652]/g, "").replace(/[أإآ]/g, "ا").replace(/ة/g, "ه").trim();
}

async function loadTafsirData() {
    const pElement = document.getElementById("p");
    pElement.innerHTML = "<p style='text-align:center'>جاري تحميل التفاسير...</p>";

    try {
        const response = await fetch('https://raw.githubusercontent.com/fawazahmed0/hadith-api/1/editions/ara-bukhari.json');
        const data = await response.json();
        
        remoteTafsir = data.hadiths.map(h => ({
            text: h.text,
            normalized: normalizeText(h.text),
            source: "صحيح البخاري - رقم: " + h.hadithnumber,
            explanation: "الشرح: هذا الحديث الشريف يبين أصلاً من أصول الدين وقاعدة عظمية من قواعد الإسلام في العبادات والمعاملات."
        }));

        pElement.innerHTML = "<p style='text-align:center; color:green;'>تم تحميل قاعدة بيانات التفسير بنجاح</p>";
    } catch (error) {
        pElement.innerHTML = "<p style='text-align:center; color:red;'>فشل تحميل البيانات، تأكد من الإنترنت</p>";
    }
}

window.onload = loadTafsirData;

function search() {
    let query = document.getElementById('sh').value;
    let normalizedQuery = normalizeText(query);

    if (normalizedQuery === "") {
        document.getElementById("p").innerHTML = "يرجى كتابة كلمة للبحث...";
        return;
    }

    let results = remoteTafsir.filter(item => item.normalized.includes(normalizedQuery));

    if (results.length > 0) {
        document.getElementById("p").innerHTML = `
            <div class="hadit-card">
                ${results[0].text}
                <br>
                <span class="source-label">${results[0].source}</span>
            </div>
            <div class="tafsir-card">
                <span class="tafsir-title">تفسير الحديث:</span>
                <p class="tafsir-text">${results[0].explanation}</p>
            </div>
        `;
    } else {
        document.getElementById("p").innerHTML = "<p style='text-align:center'>لم نجد تفسيراً لهذا الحديث.</p>";
    }
}

function page(n) {
    const pages = ['index.html', 'books.html', 'tafsir.html', 'video.html','aboutus.html'];
    if (pages[n]) location.href = pages[n];
}