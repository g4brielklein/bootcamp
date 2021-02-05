const recipes = document.querySelectorAll('.recipe')

for (let i = 0; i < recipes.length; i++) {
    recipes[i].addEventListener('click', function() {
        window.location.href = `/recipe/${i}`
    })
}

document.querySelector('.title-container').addEventListener('click', function() {
    alert('boa')
})

var test = document.querySelector('.hide-show').addEventListener('click', function() {
    // alert('holly sh*t')
    document.querySelector('.hide-show').innerHTML = "MOSTRAR"
})