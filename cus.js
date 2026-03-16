// 1. يجب تعريف العناصر خارج الدالة لكي يراها المتغير في الأسفل
async function handleSubmit(event) {
    const form = document.getElementById("my-form");
const status = document.getElementById("status");
const btn = document.getElementById("submit-btn");
    event.preventDefault(); // منع الصفحة من التحديث
    
    const data = new FormData(event.target);
    
    // تغيير نص الزر أثناء الإرسال
    btn.innerHTML = "جاري الإرسال...";
    btn.disabled = true;

    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            status.innerHTML = "تم إرسال رسالتك بنجاح! شكراً لك.";
            status.style.color = "green";
            form.reset(); 
        } else {
            status.innerHTML = "عذراً، حدثت مشكلة في الإرسال.";
            status.style.color = "red";
        }
    }).catch(error => {
        // هنا الكود سيقرأ الخطأ إذا حدث
        console.error(error); 
        status.innerHTML = "عذراً، هناك خطأ في الاتصال بالإنترنت.";
        status.style.color = "red";
    }).finally(() => {
        btn.innerHTML = "إرسال الآن";
        btn.disabled = false;
    });
}

// الآن السطر التالي سيعمل لأن 'form' أصبح معرفاً في النطاق العام
form.addEventListener("submit", handleSubmit);