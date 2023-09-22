(() => {
	const refs = {
		openModalBtn: document.querySelector("[data-modal-open]"),
		closeModalBtn: document.querySelector("[data-modal-close]"),
		closeModalLink: document.querySelector("[data-modal-close-link]"),
		modal: document.querySelector("[data-modal]"),
	};

	refs.openModalBtn.addEventListener("click", toggleModal);
	refs.closeModalBtn.addEventListener("click", toggleModal);
	refs.closeModalLink.addEventListener("click", toggleModal);
	refs.modal.addEventListener("click", onBackdropClik);

	function toggleModal() {
		refs.modal.classList.toggle("is-hidden");
	}

	function onBackdropClik(event) {
		if (event.currentTarget === event.target) {
			
			console.log(toggleModal());
		}
	}
	// document.addEventListener("keypress", function (e) {
	// 	if (e.keyCode === 27) document.getElementById("modal_id").hidden = 1;
	// }); 
})();

// const refs = {
// 	openModalBtn: document.querySelector("[data-modal-open]"),
// 	closeModalBtn: document.querySelector("[data-modal-close]"),
// 	closeModalLink: document.querySelector("[data-modal-close-link]"),
// 	modal: document.querySelector("[data-modal]"),
// };

// refs.openModalBtn.addEventListener("click", onOpenModal);
// refs.closeModalBtn.addEventListener("click", onCloseModal);
// refs.closeModalLink.addEventListener("click", onCloseModal);
// refs.modal.addEventListener("click", onBackdropClik);
// function onOpenModal() {
// 	refs.modal.classList.add("is-hidden");
// }
// function onCloseModal() {
// 	refs.modal.classList.remove("is-hidden");
// }
// function onBackdropClik(event) {
// 	if (event.currentTarget === event.target) {
// 		onCloseModal();
// 	}
// }
