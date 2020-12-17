const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener('click', function() {
        const id = card.getAttribute('id')
        window.localtion.href = `/post?id=${id}`
    })
}