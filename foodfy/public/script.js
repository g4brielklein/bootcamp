const recipes = document.querySelectorAll('.recipe')
const contents = document.querySelectorAll('.button-content')
const buttons = document.querySelectorAll('.button')

for (let i = 0; i < recipes.length; i++) {
    recipes[i].addEventListener('click', function() {
        window.location.href = `/recipe/${i}`
    })
}

for (let i = 0; i < 3; i++) {
    buttons[i].addEventListener('click', function() {
        if (buttons[i].classList.contains('hide')) {
            buttons[i].innerHTML = "ESCONDER"
            buttons[i].classList.remove('hide')
            contents[i].style.display = 'block'
        } else {
            buttons[i].classList.add('hide')
            buttons[i].innerHTML = "MOSTRAR"
            contents[i].style.display = 'none'
        }
    })
}