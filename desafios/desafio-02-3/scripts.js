const modalOverlay = document.querySelector(".modal-overlay")
const cursos = document.querySelectorAll(".curso")
const modal = document.querySelector(".modal")

for(let curso of cursos) {
    curso.addEventListener("click", function(){
        modal.classList.remove("maximize")
        const cursoId = curso.getAttribute("id")
        modalOverlay.classList.add("active")
        modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${cursoId}`
    })
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector("iframe").src = ""
})

document.querySelector(".maximize-modal").addEventListener("click", function(){
    const is_maximize = modal.classList.contains('maximize')
    if(is_maximize) {
        modal.classList.remove('maximize')
    } else {
        modal.classList.add('maximize')
    }
})