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


function mouseover1() {
    document.getElementById('room-info1').style.display = 'block';
    document.getElementById('room-info1').classList.add('room-infor');
}

function mouseout1() {
    document.getElementById('room-info1').style.display = 'none';
}
function mouseover2() {
    document.getElementById('room-info2').style.display = 'block';
    document.getElementById('room-info2').classList.add('room-infor');
}

function mouseout2() {
    document.getElementById('room-info2').style.display = 'none';
}
function mouseover3() {
    document.getElementById('room-info3').style.display = 'block';
    document.getElementById('room-info3').classList.add('room-infor');
}

function mouseout3() {
    document.getElementById('room-info3').style.display = 'none';
}

// main
const cards = document.querySelectorAll('.h2');
const divImages = document.querySelectorAll('.standards');

const observerOptions = {
    root: null, // null để sử dụng viewport làm root
    rootMargin: '0px', // có thể điều chỉnh nếu bạn muốn thêm hoặc giảm khoảng cách
    threshold: 0.5 // ngưỡng cho biết bao nhiêu phần trăm của phần tử cần xuất hiện để trigger callback
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const { target } = entry;
        target.classList.toggle('active', entry.isIntersecting);
    });
}, observerOptions);

cards.forEach(card => {
    observer.observe(card);
});

divImages.forEach(image => {
    observer.observe(image);
});

//footer 

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


let testSlide = document.querySelectorAll('.testItems');

        var counter = 0;

        // Add and remove active class from the indicators
        // function indicators(){
        //     for(i = 0; i < dots.length; i++){
        //         dots[i].className = dots[i].className.replace(' active', '');
        //     }
        //     dots[counter].className += ' active';
        // }

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
            // indicators();
        }
        function autoSliding(){
            deleteInterval = setInterval(timer, 3000);
            function timer(){
                slideNext();
                // indicators();
            }
        }
        autoSliding();
