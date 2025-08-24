document.getElementById('abrir-modal-plugin').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('modal-plugin').style.display = 'block';
});

document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('modal-plugin').style.display = 'none';
});

window.onclick = function(event) {
    if (event.target == document.getElementById('modal-plugin')) {
        document.getElementById('modal-plugin').style.display = 'none';
    }
}