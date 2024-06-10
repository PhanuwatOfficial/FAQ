const questionBtn = document.querySelectorAll('.question')
const answerBtn = document.querySelectorAll('.answer')
const plusBtn = document.querySelectorAll('.plus-icon')
const minusBtn = document.querySelectorAll('.minus-icon')

window.onload = () => {
    questionBtn[0].parentElement.classList.add("active");
    answerBtn[0].style.display = "block";
}

questionBtn.forEach( (btn, index) => {

    btn.addEventListener('click', function(){

        answerBtn[index].classList.toggle('inactive')
        plusBtn[index].classList.toggle('inactive')
        minusBtn[index].classList.toggle('inactive')
        // เพิ่มโค้ดเพื่อให้แสดงผลของปุ่มตามที่ต้องการ
        if (answerBtn[index].style.display === "block") {
            answerBtn[index].style.display = "none";
        } else {
            answerBtn[index].style.display = "block";
        }
        
    })

})