const modalOverlay = document.querySelector(".modal-overlay")
const modal = document.querySelector(".modal")
const cursos = document.querySelectorAll(".curso")

for(let curso of cursos) {
    curso.addEventListener("click", function(){
        const cursoId = curso.getAttribute("id")
        modalOverlay.classList.add("active")
        modal.classList.add("maximize")
        modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${cursoId}`
    })
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector("iframe").src = ""
})