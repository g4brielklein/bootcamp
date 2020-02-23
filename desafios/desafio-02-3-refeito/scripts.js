const modalOverlay = document.querySelector(".modal-overlay")
const cursos = document.querySelectorAll(".curso")

for(let curso of cursos) {
    curso.addEventListener("click", function(){
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
    alert("Funcionando!")
    modalOverlay.classList.contains("maximize")
})