const cards = document.querySelectorAll('.card')
const modalOverlay = document.querySelector('.modal-overlay')
const modal = modalOverlay.querySelector('.modal')

for (let card of cards) {
    card.addEventListener('click', function() {
        modalOverlay.classList.add('active')
        modal.classList.remove('maximize')
        const cursoId = card.getAttribute('id')
        modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${cursoId}`
    })
}

modalOverlay.querySelector('.close-modal').addEventListener('click', function() {
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('iframe').src = ''
})

modalOverlay.querySelector('.maximize-modal').addEventListener('click', function() {
    if (modal.classList.contains('maximize')) {
        modal.classList.remove('maximize')
    } else {
        modal.classList.add('maximize')
    }
})