
(() => {
	const refs = {
		openModalBtn: document.querySelector("[data-modal-open]"), // Кнопка відкриття модального вікна
		closeModalBtn: document.querySelector("[data-modal-close]"), // Кнопка закриття модального вікна
		closeModalLink: document.querySelector("[data-modal-close-link]"), // Посилання для закриття модального
		modal: document.querySelector("[data-modal]"), // Модальне вікно
		backdrop: document.querySelector("[data-modal-backdrop]"), // Бекдроп модального вікна
	};

	// Додаємо слухачі подій
	refs.openModalBtn.addEventListener("click", toggleModal);
	refs.closeModalBtn.addEventListener("click", toggleModal);
	refs.closeModalLink.addEventListener("click", toggleModal);
	refs.backdrop.addEventListener("click", closeModalOnBackdropClick);

	// Функція перемикання модального вікна
	function toggleModal() {
		refs.modal.classList.toggle("is-hidden");
	}

	// Функція закриття при кліку на бекдроп
	function closeModalOnBackdropClick(event) {
		if (event.target === refs.backdrop) {
			toggleModal();
		}
	}
})();