function page(n) {
    const pages = ['index.html', 'books.html', 'tafsir.html', 'video.html','aboutus.html'];
    if (pages[n]) location.href = pages[n];
}
function book(n1){
    if(n1==1)
        location.href='book1.html';
    if(n1==2)
        location.href='book2.html';
    if(n1==3)
        location.href='book3.html';
if(n1==4)
        location.href='book4.html';
if(n1==5)
        location.href='book5.html';
if(n1==6)
        location.href='book6.html';
}
function back(){
    location.href='books.html';
}