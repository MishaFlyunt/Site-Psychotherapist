const btnOff = document.querySelector(".scroll-off-3"); // Кнопка для вимкнення прокрутки
const btnOn = document.querySelector(".scroll-on-3"); // Кнопка для ввімкнення прокрутки
const btnOnData = document.querySelector("[data-modal-close-link-2]"); // Альтернативна кнопка для ввімкнення прокрутки
const body = document.body; // Body сторінки

// Функція вимкнення прокрутки
function disableScroll() {
	const pagePosition = window.scrollY; // Запам'ятовуємо поточну позицію сторінки
	body.classList.add("disable-scroll"); // Додаємо клас блокування прокрутки
	body.dataset.position = pagePosition; // Зберігаємо позицію у data-атрибуті
	body.style.top = `-${pagePosition}px`; // Фіксуємо body на місці
}

// Функція ввімкнення прокрутки
function enableScroll() {
	const pagePosition = parseInt(body.dataset.position, 10) || 0; // Отримуємо позицію з data-атрибута
	body.classList.remove("disable-scroll"); // Видаляємо клас блокування
	body.style.top = ""; // Скидаємо top
	window.scrollTo(0, pagePosition); // Повертаємося до попередньої позиції
}

// Функція для керування станом кнопок
function toggleButtonState(activeBtn, ...otherBtns) {
	activeBtn.style.pointerEvents = "none"; // Деактивуємо активну кнопку
	otherBtns.forEach(btn => (btn.style.pointerEvents = "auto")); // Активуємо всі інші кнопки
}

// Слухач для кнопки вимкнення прокрутки
btnOff.addEventListener("click", () => {
	disableScroll();
	toggleButtonState(btnOff, btnOn, btnOnData); // Оновлюємо стан кнопок
});

// Слухач для кнопки ввімкнення прокрутки (btnOn)
btnOn.addEventListener("click", () => {
	enableScroll();
	toggleButtonState(btnOn, btnOff, btnOnData); // Оновлюємо стан кнопок
});

// Слухач для кнопки ввімкнення прокрутки (btnOnData)
btnOnData.addEventListener("click", () => {
	enableScroll();
	toggleButtonState(btnOnData, btnOff, btnOn); // Оновлюємо стан кнопок
});