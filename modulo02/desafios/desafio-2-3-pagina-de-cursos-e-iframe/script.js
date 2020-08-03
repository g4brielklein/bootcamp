const modal = document.querySelector('.modal')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener('click', function() {
        modal.classList.remove('maximize')
        const cursoId = card.getAttribute('id')
        modal.classList.add('active')
        modal.querySelector('iframe').src = `https://rocketseat.com.br/${cursoId}`
    })
}

modal.querySelector('.close-modal').addEventListener('click', function() {
    modal.classList.remove('active')
    modal.querySelector('iframe').src = ''
})

modal.querySelector('.maximize-modal').addEventListener('click', function() {
    if (modal.classList.contains('maximize')) {
        modal.classList.remove('maximize')
    } else {
        modal.classList.add('maximize')
    }
})