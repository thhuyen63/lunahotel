//Auto slider

var couter = 1;
setInterval(function(){
    document.getElementById('radio' + couter).checked = true;
    couter++;
    if(couter>4){
        couter=1;
        }
    }, 5000);

//Cố định nav
document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.nav');
        if (window.scrollY > 50) {
            navbar.classList.add('fixed');
        } else {
            navbar.classList.remove('fixed');
        }
    });
});



var curDate = new Date();
            
// Ngày hiện tại
var curDay = curDate.getDate();
            
// Tháng hiện tại
var curMonth = curDate.getMonth() + 1;
            
// Năm hiện tại
var curYear = curDate.getFullYear();

// Giờ hiện tại
var curHours = curDate.getHours();

// Phút hiện tại
var curMinutes = curDate.getMinutes();


// Đảm bảo rằng giờ và phút luôn có 2 chữ số
curHours = curHours.toString().padStart(2, '0');
curMinutes = curMinutes.toString().padStart(2, '0');
            
// Gán vào thẻ HTML
document.getElementById('current-time').innerHTML = curDay + " / " + curMonth + " / " + curYear;
document.getElementById('current-hours').innerHTML = curHours + " : " + curMinutes;


// //Phản hồi
// Access the testimonials
let testSlide = document.querySelectorAll('.testItem');
// Access the indicators
let dots = document.querySelectorAll('.dot');

var counter = 0;

// Add click event to the indicators
function switchTest(currentTest){
    currentTest.classList.add('active');
    var testId = currentTest.getAttribute('attr');
    if(testId > counter){
        testSlide[counter].style.animation = 'next1 0.5s ease-in forwards';
        counter = testId;
        testSlide[counter].style.animation = 'next2 0.5s ease-in forwards';
    }
    else if(testId == counter){return;}
    else{
        testSlide[counter].style.animation = 'prev1 0.5s ease-in forwards';
        counter = testId;
        testSlide[counter].style.animation = 'prev2 0.5s ease-in forwards';
    }
    indicators();
}

// Add and remove active class from the indicators
function indicators(){
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(' active', '');
    }
    dots[counter].className += ' active';
}

// Code for auto sliding
function slideNext(){
    testSlide[counter].style.animation = 'next1 0.5s ease-in forwards';
    if(counter >= testSlide.length - 1){
        counter = 0;
    }
    else{
        counter++;
    }
    testSlide[counter].style.animation = 'next2 0.5s ease-in forwards';
    indicators();
}
function autoSliding(){
    deleteInterval = setInterval(timer, 3000);
    function timer(){
        slideNext();
        indicators();
    }
}
autoSliding();



//Gallery
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.gallery-slider');
    let isDragging = false;
    let startPos = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationId = 0;

    function startDrag(e) {
        e.preventDefault();
        isDragging = true;
        startPos = e.clientX;
        prevTranslate = currentTranslate;

        cancelAnimationFrame(animationId);
    }

    function endDrag() {
        isDragging = false;
        const movedBy = currentTranslate - prevTranslate;

        if (movedBy < -100 && currentTranslate !== 0) {
            currentTranslate += 100;
        } else if (movedBy > 100 && currentTranslate !== -100 * (slider.children.length - 1)) {
            currentTranslate -= 100;
        }

        setSliderPosition();
    }

    function drag(e) {
        if (isDragging) {
            const currentPosition = e.clientX;
            currentTranslate = prevTranslate + currentPosition - startPos;
            setSliderPosition();
        }
    }

    function setSliderPosition() {
        slider.style.transform = `translateX(${currentTranslate}%)`;
    }

    slider.addEventListener('mousedown', startDrag);
    slider.addEventListener('mouseup', endDrag);
    slider.addEventListener('mouseleave', endDrag);
    slider.addEventListener('mousemove', drag);
});
