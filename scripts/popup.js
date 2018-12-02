var modal = document.getElementById('modal');
var btn = document.getElementById('myBtn');
var close = document.getElementById('modal-close');

btn.onclick = function() {
    modal.classList.add("modal--active")
};

close.onclick = function() {
    modal.classList.remove("modal--active")
};

window.onclick = function(evt) {
    if (evt.target == modal) {
        modal.classList.remove("modal--active")
    }
}

