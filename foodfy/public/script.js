
const recipes = document.querySelectorAll('.recipe')
const details = document.querySelector('.recipe-details')
const contents = document.querySelectorAll('.button-content')
// var content = document.getElementById('content')

for (let i = 0; i < recipes.length; i++) {
    recipes[i].addEventListener('click', function() {
        window.location.href = `/recipe/${i}`
    })
}

const buttons = document.querySelectorAll('.button')

for (let button of buttons) {
    button.addEventListener('click', function() {

        if (button.classList.contains('hide')) {
            button.innerHTML = "ESCONDER"
            button.classList.remove('hide')
            // content.style.display = 'block'
            content[0]
        } else {
            button.classList.add('hide')
            button.innerHTML = "MOSTRAR"
            // content.style.display = 'none'
        }

    })
}

for (let content of contents) {
    content.addEventListener('click', function() {
        alert('clicou na content')
    })
}

function acao(){
    var submenu = document.getElementById('submenu');

    if(submenu.style.display == 'block'){
        submenu.style.display = 'none';
    } else {
        submenu.style.display = 'block';
    }
}

function action() {
    var content = document.getElementById('content')

    if (content.style.display == 'block') {
        content.style.display = 'none'
    } else {
        content.style.display = 'block'
    }
}