document.addEventListener("DOMContentLoaded", () => {
	const header = document.querySelector(".header");
	const first = document.querySelector(".hero, .club");
	const headerHeight = header?.offsetHeight || 0;
	let lastScrollTop = 0;

	if (header && first) {
		// Функція для обробки прокрутки
		const handleScroll = () => {
			const scrollDistance = window.scrollY;

			// Визначення напрямку прокрутки
			if (scrollDistance > lastScrollTop) {
				header.classList.remove("header--fixed");
				first.style.marginTop = null;
			} else {
				header.classList.add("header--fixed");
				first.style.marginTop = `${headerHeight}px`;
			}

			// Якщо прокрутка вгорі, скидаємо стилі
			if (scrollDistance === 0) {
				header.classList.remove("header--fixed");
				first.style.marginTop = null;
			}

			lastScrollTop = scrollDistance;
		};

		// Додавання слухача подій прокрутки
		window.addEventListener("scroll", handleScroll);
	}
});