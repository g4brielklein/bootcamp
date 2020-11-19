const recepis = document.querySelectorAll('.recepi')
const modalOverlay = document.querySelector('.modal-overlay')

for (let recepi of recepis) {
    recepi.addEventListener('click', function() {
        modalOverlay.classList.add('active')
    })
}

modalOverlay.querySelector('.close-modal').addEventListener('click', function() {
    modalOverlay.classList.remove('active')
})