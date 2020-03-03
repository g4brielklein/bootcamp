const modalOverlay = document.querySelector(".modal-overlay")
const receitas = document.querySelectorAll(".receita")
const modal = document.querySelector(".modal")

for(let receita of receitas) {
    receita.addEventListener("click", function(){
        modal.classList.remove("maximize")
        const receitaId = receita.getAttribute("id")
        modalOverlay.querySelector("iframe").src = `receitas/${receitaId}.html`
        modalOverlay.classList.add("active")
    })
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("iframe").src = ``
})

document.querySelector(".maximize-modal").addEventListener("click", function(){
    const is_maximize = modal.classList.contains("maximize")
    if(!is_maximize) {
        modal.classList.add("maximize")
    } else {
        modal.classList.remove("maximize")
    }
})
