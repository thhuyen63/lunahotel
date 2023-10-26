var couter = 1;
setInterval(function(){
    document.getElementById('radio' + couter).checked = true;
    couter++;
    if(couter > 5){
        couter = 1;
    }
}, 3000);

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

function dich1(){
    document.getElementById('col1-row1').classList.add('col1-row1');
    document.getElementById('col1-row2').style.display='none';
    document.getElementById('col1-row3').style.display='none';
    document.getElementById('col1-row4').style.display='none';
    document.getElementById('col1-row5').style.display='none';
}
function dich1s(){
    document.getElementById('col1-row2').style.display='block';
    document.getElementById('col1-row3').style.display='block';
    document.getElementById('col1-row4').style.display='block';
    document.getElementById('col1-row5').style.display='block';
}
function dich2(){
    document.getElementById('col1-row2').classList.add('col1-row2');
    document.getElementById('col1-row3').style.display='none';
    document.getElementById('col1-row4').style.display='none';
    document.getElementById('col1-row5').style.display='none';
}
function dich2s(){
    document.getElementById('col1-row3').style.display='block';
    document.getElementById('col1-row4').style.display='block';
    document.getElementById('col1-row5').style.display='block';
}
function dich3(){
    document.getElementById('col1-row3').classList.add('col1-row3');
    document.getElementById('col1-row4').style.display='none';
    document.getElementById('col1-row5').style.display='none';
}
function dich3s(){
    document.getElementById('col1-row4').style.display='block';
    document.getElementById('col1-row5').style.display='block';
}
function dich4(){
    document.getElementById('col1-row4').classList.add('col1-row4');
    document.getElementById('col1-row5').style.display='none';
}
function dich4s(){
    document.getElementById('col1-row5').style.display='block';
}
function dich5(){
    document.getElementById('col1-row5').classList.add('col1-row5');
}



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