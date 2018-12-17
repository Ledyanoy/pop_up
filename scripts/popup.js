var modal = document.getElementById('modal');
var btn = document.getElementById('myBtn');
var close = document.getElementById('modal-close');

btn.onclick = function() {
    modal.classList.add('modal--active')
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

function checkBtn() {
  var input1 = document.getElementById('name');
  var input2 = document.getElementById('pass'); 
  var formButton = document.getElementById('form-button');
  formButton.disabled = input1.value && input2.value ? false : "disabled";
}  
