const modalOverlay = document.querySelector('.modal-overlay')
const modal = document.querySelector('.modal')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener('click', function(){
        modal.classList.remove('maximize')
        modalOverlay.classList.add('active')
        let id = card.getAttribute('id')
        modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${id}`
    })
}

document.querySelector('.close-modal').addEventListener('click', function(){
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('iframe').src = ''
})

document.querySelector('.maximize-modal').addEventListener('click', function(){
    let is_maximized = modal.classList.contains('maximize')
    if (is_maximized) {
        modal.classList.remove('maximize')
    } else {
        modal.classList.add('maximize')
    }
})



    

