const currentPage = window.location.pathname
const menuItems = document.querySelectorAll("header .links a")

for (item of menuItems) {
    if (currentPage.includes(item.getAttribute("href"))) {
        item.classList.add("active")
    }
}

// Delete confirmation message
const formDelete = document.querySelector("#form-delete")
formDelete.addEventListener("submit", function(event) {
    const confirmation = confirm("Do you really want to delete this user?")
    if (!confirmation) {
        event.preventDefault()
    }
})
