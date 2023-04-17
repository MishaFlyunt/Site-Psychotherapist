(() => {
	const refs = {
		openModalBtn: document.querySelector("[data-modal-open-1]"),
		closeModalBtn: document.querySelector("[data-modal-close-1]"),
		closeModalLink: document.querySelector("[data-modal-close-link-1]"),
		modal: document.querySelector("[data-modal-1]"),
	};

	refs.openModalBtn.addEventListener("click", toggleModal);
	refs.closeModalBtn.addEventListener("click", toggleModal);
	refs.closeModalLink.addEventListener("click", toggleModal);
	function toggleModal() {
		refs.modal.classList.toggle("is-hidden");
	}
})();
