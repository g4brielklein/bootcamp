const modalOverlay = document.querySelector(".modal-overlay")
const receitas = document.querySelectorAll(".receita")
const modal = document.querySelector(".modal")

for(let receita of receitas) {
    receita.addEventListener("click", function(){
        modal.classList.remove("maximize")
        const receitaId = receita.getAttribute("id")
        modalOverlay.querySelector("iframe").src = `${receitaId}.html`
        modalOverlay.classList.add("active")
    })
}

document.querySelector(".modal-overlay").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
})

document.querySelector(".maximize-modal").addEventListener("click", function(){
    const is_maximize = modal.classList.contains("maximize")
    if(is_maximize) {
        modal.classList.remove("maximize")
    } else {
        modal.classList.add("maximize")
    }
})
