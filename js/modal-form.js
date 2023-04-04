
// ------------Modal---------
// 1
(() => {
	const refs = {
		openModalBtn: document.querySelector("[data-modal-open]"),
		closeModalBtn: document.querySelector("[data-modal-close]"),
		modal: document.querySelector("[data-modal]"),
	};

	refs.openModalBtn.addEventListener("click", toggleModal);
	refs.closeModalBtn.addEventListener("click", toggleModal);

	function toggleModal() {
		refs.modal.classList.toggle("is-hidden");
	}
})();
// 2
(() => {
	const refs = {
		openModalBtn: document.querySelector("[data-modal-open-1]"),
		closeModalBtn: document.querySelector("[data-modal-close-1]"),
		modal: document.querySelector("[data-modal-1]"),
	};

	refs.openModalBtn.addEventListener("click", toggleModal);
	refs.closeModalBtn.addEventListener("click", toggleModal);

	function toggleModal() {
		refs.modal.classList.toggle("is-hidden");
	}
})();
// 3
(() => {
	const refs = {
		openModalBtn: document.querySelector("[data-modal-open-2]"),
		closeModalBtn: document.querySelector("[data-modal-close-2]"),
		modal: document.querySelector("[data-modal-2]"),
	};

	refs.openModalBtn.addEventListener("click", toggleModal);
	refs.closeModalBtn.addEventListener("click", toggleModal);

	function toggleModal() {
		refs.modal.classList.toggle("is-hidden");
	}
})();
