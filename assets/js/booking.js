//Auto slider
var couter = 1;
setInterval(function(){
    document.getElementById('radio' + couter).checked = true;
    couter++;
    if(couter>4){
        couter=1;
        }
    }, 5000
);

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




// taoj hiệu ứng cho nút
function mouseOver(obj) {
    obj.style.border.background="grey"
}
 function mouseOut(obj){
     obj.style.border.background="rgb(192,248,170)";
}

//dien thong tin

function myForm(){
    document.getElementById('infoForm').style.display='block';
    document.getElementById('nud').style.display='none';
}
 function closeForm(){
     document.getElementById("infoForm").style.display="none";
     document.getElementById('nud').style.display='block';
 }
function openForm(){
    document.getElementById("infoForm").style.display='block';
    document.getElementById("infoOutput").style.display="none";
}
function Ffinish(){
    var name=document.getElementById('name').value;
    document.getElementById('ifinish').classList.add('show-ifinish');
    document.getElementById('ifinish').style.display="block";
    document.getElementById('outputName').innerHTML=name; 
    document.getElementById("infoOutput").style.display="none";
}
function closeFinish(){
    document.getElementById('ifinish').style.display='none';
    document.getElementById('nud').style.display='block';
}
var phoneNumberInput=document.getElementById('phone');
var phoneErrorContainer = document.getElementById('errorContainer');

phoneNumberInput.addEventListener('input', function () {
    var phoneNumber = phoneNumberInput.value;
    phoneNumber = phoneNumber.replace(/\s|-/g, '');
    var regex = /^\d{10}$/;
    if (regex.test(phoneNumber)) {
        phoneErrorContainer.textContent = '';
    } else {
        phoneErrorContainer.textContent = 'The phone number is not valid!';
    }
});
var emailInput = document.getElementById('email');
var emailErrorContainer = document.getElementById('emailErrorContainer');

emailInput.addEventListener('input', function () {
    var email = emailInput.value;
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(email)) {
        emailErrorContainer.textContent = ''; 
    } else {
        emailErrorContainer.textContent = 'The email is not valid!';
    }
});
var startDateInput = document.getElementById('Sdate');
var endDateInput = document.getElementById('Edate');
var startDateErrorContainer = document.getElementById('startDateErrorContainer');
var endDateErrorContainer = document.getElementById('endDateErrorContainer');
function validateDates() {
    var startDate = new Date(startDateInput.value);
    var endDate = new Date(endDateInput.value);
    if (!startDateInput.value) {
        startDateErrorContainer.textContent = 'Please fill in all the required information.';
        return false;
    }
    if (endDate <= startDate) {
        endDateErrorContainer.textContent = 'The end date must be greater than the start date.';
        return false;
    } else {
        startDateErrorContainer.textContent = '';
        endDateErrorContainer.textContent = '';
        return true;
    }
}
startDateInput.addEventListener('input', validateDates);
endDateInput.addEventListener('input', validateDates);

function getCalcValue(selectElement){
    switch(selectElement){
        case '0':
        case '4':
        case '8':
        case '13':
            return 0;
        case '1':   //standard
            return 123.45;//single
        case '2':
            return 185.50;//twin
        case '3':
            return 210.00;//double
        case '5':   //superior
            return 399.90;//single
        case '6':
            return 488.60;//twin
        case '7':
            return 510.20;//double
        case '9':   //deluxe
            return 600.40;//king
        case '10':
            return 699.99;//twin
        case '11':
            return 720.40;//double
        case '12':
            return 800.80;//triple
        case '14':  //suite
            return 899.60;//junior
        case '15':
            return 960.50;//excutive
        default: 
            return 0;
    }
}
var room=[
    '','Single room','Twin room','Double room',
    '','Single room','Twin room','Double room',
    '','King deluxe','Twin deluxe','Double deluxe','Triple deluxe',
    '','Junior suite','Excutive suite'
];
function getAllselectRoomtype(){
    var getValue1=document.getElementById('roomType1');
    var getValue2=document.getElementById('roomType2');
    var getValue3=document.getElementById('roomType3');
    var getValue4=document.getElementById('roomType4');
    var selectedValues=[];
    var display="";
    
    for(var i=0;i<getValue1.options.length;i++){
        if(getValue1.options[i].selected){
            var selectedValue=getValue1.options[i].value;
            selectedValues.push(selectedValue);
        }
    }
    for(var i=0;i<getValue2.options.length;i++){
        if(getValue2.options[i].selected){
            var selectedValue=getValue2.options[i].value;
            selectedValues.push(selectedValue);
        }
    }
    for(var i=0;i<getValue3.options.length;i++){
        if(getValue3.options[i].selected){
            var selectedValue=getValue3.options[i].value;
            selectedValues.push(selectedValue);
        }
    }
    for(var i=0;i<getValue4.options.length;i++){
        if(getValue4.options[i].selected){
            var selectedValue=getValue4.options[i].value;
            selectedValues.push(selectedValue);
        }
    }
    var time=document.getElementById('Sdate').value;
    var time1=document.getElementById('Edate').value;
    var count=0;
    while(time<time1){
        var currentDate=new Date(time);
        currentDate.setDate(currentDate.getDate()+1);
        time=currentDate.toISOString().slice(0,10);
        count++;
    }
    var value1=parseInt(document.getElementById('roomNumber1').value,10);
    var value2=parseInt(document.getElementById('roomNumber2').value,10);
    var value3=parseInt(document.getElementById('roomNumber3').value,10);
    var value4=parseInt(document.getElementById('roomNumber4').value,10);
    var total=0;
    for(var i=0;i<selectedValues.length;i++){
        if(0<selectedValues[i] && selectedValues[i]<4){
            total+=getCalcValue(selectedValues[i])*value1;
            display+="<p>Standard : "+value1+" , "+room[selectedValues[i]];
        }
        else if(4<selectedValues[i] && selectedValues[i]<8){
            total+=getCalcValue(selectedValues[i])*value2;
            display+="</p><p>Superior : "+value2+" , "+room[selectedValues[i]];
        }
        else if(8<selectedValues[i] && selectedValues[i]<13){
            total+=getCalcValue(selectedValues[i])*value3;
            display+="</p><p>Deluxe : "+value3+" , "+room[selectedValues[i]];
        }
        else if(13<selectedValues[i] && selectedValues[i]<16){
            total+=getCalcValue(selectedValues[i])*value4;
            display+="</p><p>Suite : "+value4+" , "+room[selectedValues[i]];
        }
    }
    display+="</p><p>Total : "+total+"$</p>";
    return display;
}
function printDisplay(){
    var total=getAllselectRoomtype();

    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var phone=document.getElementById('phone').value;
    var time=document.getElementById('Sdate').value;
    var time1=document.getElementById('Edate').value;
    var display="<p>Name : "+name+
                "</p><p>Email : "+email+
                "</p><p>Phone : "+phone+
                "</p><p>Start Time : "+time+
                "</p><p>End Time : "+time1+"</p>"+total;
    if(!email){
        emailErrorContainer.textContent = 'Please fill in all the required information';
    } else if(!phone){
        phoneErrorContainer.textContent = 'Please fill in all the required information';
    } else if(!time){
        startDateErrorContainer.textContent = 'Please fill in all the required information';
    } else if(!time1){
        endDateErrorContainer.textContent = 'Please fill in all the required information';
    } else if (name && email && phone && time && time1){
        phoneErrorContainer.textContent = '';
        emailErrorContainer.textContent = ''; 
        startDateErrorContainer.textContent ='';
        endDateErrorContainer.textContent = '';
        document.getElementById('Sdate').value = '';
        document.getElementById('infoOutput').classList.add('show-info');
        document.getElementById('infoOutput').style.display="block"; 
        document.getElementById('outputContent').innerHTML=display;
        document.getElementById("infoForm").style.display="none";
    }
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