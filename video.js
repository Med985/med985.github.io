// دالة جلب الفيديوهات من ملف JSON
async function loadVideos() {
    const grid = document.getElementById('video-grid');
    grid.innerHTML = '<p style="text-align:center; width:100%;">جاري تحميل الفيديوهات...</p>';

    try {
        // جلب الملف (تأكد أن الملف في نفس مجلد المشروع)
        const response = await fetch('videos.json');
        const videos = await response.json();

        grid.innerHTML = ''; // تفريغ رسالة التحميل

        videos.forEach(video => {
            const card = `
                <div class="video-card">
                    <iframe 
                        src="https://www.youtube.com/embed/${video.id}" 
                        title="${video.title}" 
                        allowfullscreen>
                    </iframe>
                    <div class="video-title">${video.title}</div>
                </div>
            `;
            grid.innerHTML += card;
        });
    } catch (error) {
        grid.innerHTML = '<p style="text-align:center; color:red; width:100%;">فشل تحميل الفيديوهات. تأكد من وجود ملف videos.json</p>';
        console.error("Error loading videos:", error);
    }
}

// تشغيل الدالة عند تحميل الصفحة
window.onload = loadVideos;

// دالة التنقل
function page(n) {
    const pages = ['index.html', 'books.html', 'tafsir.html', 'video.html','aboutus.html'];
    if (pages[n]) location.href = pages[n];
}