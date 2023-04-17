(() => {
	const refs = {
		openModalBtn: document.querySelector("[data-modal-open-2]"),
		closeModalBtn: document.querySelector("[data-modal-close-2]"),
		closeModalLink: document.querySelector("[data-modal-close-link-2]"),
		modal: document.querySelector("[data-modal-2]"),
	};

	refs.openModalBtn.addEventListener("click", toggleModal);
	refs.closeModalBtn.addEventListener("click", toggleModal);
	refs.closeModalLink.addEventListener("click", toggleModal);
	function toggleModal() {
		refs.modal.classList.toggle("is-hidden");
	}
})();
