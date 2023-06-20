function myFunction() {
    var start = document.getElementById('start-btn')
    var text = document.getElementById('start-text')
    var menu = document.getElementById('myLinks');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
        start.style.color = 'white';
        start.innerText = 'START';
        text.style.textAlign = 'center'
    }
}

