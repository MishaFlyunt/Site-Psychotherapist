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



// // Отримуємо елементи
// const modal = document.getElementById("modal");
// const openModalBtn = document.getElementById("openModal");
// const closeModalBtn = document.getElementById("closeModal");
// const modalForm = document.getElementById("modalForm");

// // Відкрити модальне вікно
// openModalBtn.addEventListener("click", () => {
// 	modal.style.display = "block";
// });

// // Закрити модальне вікно при натисканні на "X"
// closeModalBtn.addEventListener("click", () => {
// 	modal.style.display = "none";
// });

// // Закрити модальне вікно при натисканні поза вмістом
// window.addEventListener("click", e => {
// 	if (e.target === modal) {
// 		modal.style.display = "none";
// 	}
// });

// // Закрити модальне вікно після відправки форми
// modalForm.addEventListener("submit", e => {
// 	e.preventDefault(); // Запобігаємо перезавантаженню сторінки
// 	alert("Форма успішно відправлена!"); // Можна змінити на іншу дію
// 	modal.style.display = "none"; // Закриваємо модальне вікно
// });



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
