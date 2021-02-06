const recipes = document.querySelectorAll('.recipe')
const details = document.querySelector('.recipe-details')

for (let i = 0; i < recipes.length; i++) {
    recipes[i].addEventListener('click', function() {
        window.location.href = `/recipe/${i}`
    })
}

const buttons = document.querySelectorAll('.button')

for (let button of buttons) {
    button.addEventListener('click', function() {
        button.innerHTML = "MOSTRAR"
        details.classList.remove('.content')
    })
}

details.addEventListener('click', function() {
    alert('recipes')
})