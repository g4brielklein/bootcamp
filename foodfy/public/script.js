const recepis = document.querySelectorAll('.recepi')
const modalOverlay = document.querySelector('.modal-overlay')

for (let recepi of recepis) {
    recepi.addEventListener('click', function() {
        const id = recepi.getAttribute('id')
        modalOverlay.querySelector('iframe').src = `recepis/${id}.njk`
        modalOverlay.classList.add('active')
    })
}

modalOverlay.querySelector('.close-modal').addEventListener('click', function() {
    modalOverlay.querySelector('iframe').src = ''
    modalOverlay.classList.remove('active')
})