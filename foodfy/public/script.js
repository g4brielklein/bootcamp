const recipes = document.querySelectorAll('.recipe')
const details = document.querySelector('.recipe-details')
const contents = document.querySelectorAll('.button-content')

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
        } else {
            button.classList.add('hide')
            button.innerHTML = "MOSTRAR"
        }

    })
}
for (let content of contents) {
    content.addEventListener('click', function() {
        alert('clicks')
    })
}