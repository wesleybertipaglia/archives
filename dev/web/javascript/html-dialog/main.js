const modal = document.querySelector("dialog")
const btnOpenModal = document.querySelector(".btn-open")
const btnCloseModal = document.querySelector(".btn-close")

btnOpenModal.addEventListener("click", () => {
    modal.showModal()
})

btnCloseModal.addEventListener("click", () => {
    modal.close()
})