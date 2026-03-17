function page(n) {
    const pages = ['index.html', 'books.html', 'tafsir.html', 'video.html','aboutus.html'];
    if (pages[n]) location.href = pages[n];
}const myBooks = [
    {
        title: "صحيح مسلم",
        author: "الإمام مسلم",
        desc: "أحد أهم دواوين السنة النبوية، يحتوي على الأحاديث الصحيحة المرفوعة إلى النبي ﷺ.",
        image: "download.jpg",
        link: "book1.html"
    },
    {
        title: "صحيح البخاري",
        author: "الإمام البخاري",
        desc: "أصح كتاب بعد القرآن الكريم، اعتنى فيه المصنف بجمع أصح الأحاديث الصحيحة.",
        image: "download (1).jpg",
        link: "book2.html"
    },
    {
        title: "البداية والنهاية",
        author: "ابن كثير",
        desc: "موسوعة تاريخية ضخمة تسرد التاريخ من بدء الخلق حتى أحداث القيامة.",
        image: "56d83b9aebebdc2d6ea25e97f7b6f521.png.webp",
        link: "book4.html"
    },
    {
        title: "الداء والدواء",
        author: "ابن قيم الجوزية",
        desc: "كتاب عظيم في تهذيب النفس وأدواء القلوب وطرق علاجها من المعاصي والذنوب.",
        image: "download (4).jpg", // تأكد من وجود صورة بهذا الاسم أو غيره
        link: "book6.html"
    },
    {
        title: "رياض الصالحين",
        author: "الإمام النووي",
        desc: "يجمع الأحاديث الصحيحة المروية عن رسول الله ﷺ في جميع شؤون العقيدة والعبادة والحياة.",
        image: "download (3).jpg",
        link: "book5.html"
    },
    {
        title: "الأربعون النووية",
        author: "الإمام النووي",
        desc: "مجموعة من جوامع كلم النبي ﷺ، تضم 42 حديثاً تعتبر قواعد جامعة في الدين.",
        image: "download (2).jpg",
        link: "book3.html"
    }
];

function renderBooks() {
    const grid = document.getElementById('booksGrid');
    if (!grid) return;

    grid.innerHTML = myBooks.map(book => `
        <div class="book-card" onclick="window.location.href='${book.link}'">
            <img src="${book.image}" alt="${book.title}">
            <div class="book-overlay">
                <h3>${book.title}</h3>
                <p class="author"><strong>المؤلف:</strong> ${book.author}</p>
                <p class="desc">${book.desc}</p>
                <div class="read-btn">قراءة الآن</div>
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', renderBooks);
window.onload = displayBooks;
function back(){
    location.href='books.html';
}