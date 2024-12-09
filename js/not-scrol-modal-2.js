const btnOff = document.querySelector(".scroll-off-2"); // Кнопка для вимкнення прокрутки
const btnOn = document.querySelector(".scroll-on-2"); // Кнопка для ввімкнення прокрутки
const btnOnData = document.querySelector("[data-modal-close-link-1]"); // Додатковий елемент для ввімкнення прокрутки
const body = document.body; // Елемент body

// Функція вимкнення прокрутки
function disableScroll() {
	const pagePosition = window.scrollY; // Запам'ятовуємо поточну позицію сторінки
	body.classList.add("disable-scroll"); // Додаємо клас блокування прокрутки
	body.dataset.position = pagePosition; // Зберігаємо позицію у data-атрибуті
	body.style.top = `-${pagePosition}px`; // Фіксуємо body на місці
}

// Функція ввімкнення прокрутки
function enableScroll() {
	const pagePosition = parseInt(body.dataset.position, 10) || 0; // Отримуємо позицію
	body.classList.remove("disable-scroll"); // Видаляємо клас блокування
	body.style.top = ""; // Відновлюємо прокрутку
	window.scrollTo(0, pagePosition); // Повертаємося до попередньої позиції
}

// Спільна функція для зміни активності кнопок
function toggleButtonState(activeBtn, inactiveBtns) {
	activeBtn.style.pointerEvents = "none"; // Деактивуємо натиснуту кнопку
	inactiveBtns.forEach(btn => (btn.style.pointerEvents = "auto")); // Активуємо інші кнопки
}

// Слухач для вимкнення прокрутки
btnOff.addEventListener("click", () => {
	disableScroll();
	toggleButtonState(btnOff, [btnOn, btnOnData]); // Оновлення стану кнопок
});

// Слухач для ввімкнення прокрутки (btnOn)
btnOn.addEventListener("click", () => {
	enableScroll();
	toggleButtonState(btnOn, [btnOff, btnOnData]); // Оновлення стану кнопок
});

// Слухач для ввімкнення прокрутки (btnOnData)
btnOnData.addEventListener("click", () => {
	enableScroll();
	toggleButtonState(btnOnData, [btnOff, btnOn]); // Оновлення стану кнопок
});
