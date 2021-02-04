alert('clicou!')
const recipes = document.querySelectorAll('.recipe')

for (let i = 0; i < recipes.length; i++) {
    recipes[i].addEventListener('click', function() {
        window.location.href = `/recipe/${i}`
    })
}

document.querySelector('.hide-show').addEventListener('click', function() {
    alert('clicou!')
})