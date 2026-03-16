
let remoteHadiths = []; // هنا سيتم تخزين الـ 7000 حديث

// 1. دالة تنظيف النص (مهمة جداً لنجاح البحث بدون تشكيل)
function normalizeText(text) {
    if (!text) return "";
    return text
        .replace(/[\u064B-\u0652]/g, "") // إزالة التشكيل
        .replace(/[أإآ]/g, "ا")         // توحيد الألف
        .replace(/ة/g, "ه")             // توحيد التاء والهاء
        .trim();
}

// 2. دالة جلب البيانات من الرابط الذي أرسلته
async function loadHadithData() {
    const pElement = document.getElementById("p");
    if (pElement) pElement.innerHTML = "جاري تحميل صحيح البخاري (7000 حديث)...";

    // الرابط المباشر للملف (Raw)
    const url = "https://raw.githubusercontent.com/fawazahmed0/hadith-api/1/editions/ara-bukhari.json";

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Network response was not ok");
        
        const data = await response.json();
        
        // تحويل البيانات لتناسب تطبيقك
        remoteHadiths = data.hadiths.map(h => ({
            text: h.text,
            normalized: normalizeText(h.text),
            source: "صحيح البخاري - حديث رقم: " + h.hadithnumber
        }));

        if (pElement) pElement.innerHTML = "تم تحميل " + remoteHadiths.length + " حديث بنجاح. ابدأ البحث الآن!";
        console.log("تم تحميل البيانات بنجاح");
    } catch (error) {
        if (pElement) pElement.innerHTML = "حدث خطأ في جلب البيانات. تأكد من اتصال الإنترنت.";
        console.error("Fetch error:", error);
    }
}

// تشغيل الجلب فوراً
loadHadithData();

// 3. دالة البحث
function search() {
    let query = document.getElementById('sh').value;
    let normalizedQuery = normalizeText(query);

    if (normalizedQuery === "") {
        document.getElementById("p").innerHTML = "يرجى كتابة كلمة للبحث...";
        document.getElementById("p1").innerHTML = "";
        return;
    }

    // البحث في الـ 7000 حديث
    let results = remoteHadiths.filter(item => item.normalized.includes(normalizedQuery));

    if (results.length > 0) {
        document.getElementById("p").innerHTML = results[0].text;
        document.getElementById("p1").innerHTML = "المصدر: " + results[0].source;
    } else {
        document.getElementById("p").innerHTML = "لم يتم العثور على نتائج في صحيح البخاري.";
        document.getElementById("p1").innerHTML = "";
    }
}

// 4. دالة التنقل (كما هي في كودك)
function page(n) {
    const pages = ['index.html', 'books.html', 'tafsir.html', 'video.html','aboutus.html'];
    if (pages[n]) location.href = pages[n];
}