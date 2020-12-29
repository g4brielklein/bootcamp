const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener('click', function() {
        const id = card.getAttribute('id')
        alert(id)
        window.location.href = `/posts/${id}`
    })
}