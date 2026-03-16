function page(n) {
    const pages = ['index.html', 'books.html', 'tafsir.html', 'video.html'];
    if (pages[n]) location.href = pages[n];
}