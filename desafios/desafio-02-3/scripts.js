const modalOverlay = document.querySelector('.modal-overlay')
const modal = document.querySelector('.modal')
const cursos = document.querySelectorAll('.curso')

for (let curso of cursos) {
    curso.addEventListener("click", function(){
        modalOverlay.classList.add('active')
    })
}

document.querySelector('.close-modal').addEventListener("click", function(){
    modalOverlay.classList.remove('active')
})

document.querySelector('.maximize-modal').addEventListener("click", function(){
    is_maximize = modal.classList.contains('maximize')
    if(is_maximize) {
        modal.classList.remove('maximize')
    } else {
        modal.classList.add('maximize')
    }
})