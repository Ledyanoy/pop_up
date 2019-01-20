var modal = document.getElementById('modal');
var btn = document.getElementById('myBtn');
var close = document.getElementById('modal-close');

btn.onclick = function() {
    modal.classList.add('modal--active');    
};

close.onclick = function() {
    modal.classList.remove('modal--active')
};

window.onclick = function(evt) {
    if (evt.target !== modal) {
        return 
    }
    modal.classList.remove('modal--active')    
};

document.addEventListener('keydown', function (esc) {
    if(esc.keyCode === 27) {
        modal.classList.remove('modal--active')
    }
});

var input1 = document.getElementById('name');
var input2 = document.getElementById('pass');
var formButton = document.getElementById('form-button');

input1.oninput = function (evt) {    
     evt = checkBtn();    
};

input2.oninput = function (evt) {    
    evt = checkBtn()
};

function checkBtn() {  
  formButton.disabled = !(input1.value && input2.value);
};

formButton.onclick = function() {
    localStorage.setItem('firstInput', input1.value);  
}  
    

window.onload = function() {
    var nameInput = localStorage.getItem('firstInput');
    if (nameInput !== null) {        
        input1.value = nameInput;
    } else  {
        alert('не заполнял еще!')
    }
}


