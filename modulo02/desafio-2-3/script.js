const modalOverlay = document.querySelector('.modal-overlay')
const modal = modalOverlay.querySelector('.modal')
const cards = document.querySelectorAll('.card')
const iframe = modalOverlay.querySelector('iframe')

for (let card of cards) {
    card.addEventListener('click', function() {
        modal.classList.remove('maximize')
        modalOverlay.classList.add('active')
        const id = card.getAttribute('id')
        iframe.src = `https://blog.rocketseat.com.br/${id}`
    })
}

modalOverlay.querySelector('.close-modal').addEventListener('click', function() {
    modalOverlay.classList.remove('active')
    iframe.src = ''
})

modal.querySelector('.maximize-modal').addEventListener('click', function() {
    if (modal.classList.contains('maximize')) {
        modal.classList.remove('maximize')
    } else {
        modal.classList.add('maximize')
    }
})  