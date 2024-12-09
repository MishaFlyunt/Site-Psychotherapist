document.addEventListener("DOMContentLoaded", () => {
	const menu = document.querySelector(".menu-body");
	const menuBtn = document.querySelector(".menu-icon");
	const body = document.body;

	// Перевірка наявності елементів
	if (menu && menuBtn) {
		// Функція для перемикання стану меню
		const toggleMenu = () => {
			menu.classList.toggle("active");
			menuBtn.classList.toggle("active");
			body.classList.toggle("lock");
		};

		// Функція для закриття меню
		const closeMenu = () => {
			menu.classList.remove("active");
			menuBtn.classList.remove("active");
			body.classList.remove("lock");
		};

		// Відкриття/закриття меню при натисканні на іконку
		menuBtn.addEventListener("click", toggleMenu);

		// Закриття меню при кліку на бекдроп
		menu.addEventListener("click", e => {
			if (e.target === menu) closeMenu();
		});

		// Закриття меню при кліку на посилання або кнопки
		menu.querySelectorAll(".menu-link, .burger-btn, .burger-social-link").forEach(link => {
			link.addEventListener("click", closeMenu);
		});
	}

	// Плавний скрол до якоря
	const anchors = document.querySelectorAll('a[href*="#"]');

	anchors.forEach(anchor => {
		anchor.addEventListener("click", event => {
			event.preventDefault(); // Запобігаємо стандартній поведінці

			const blockID = anchor.getAttribute("href").substring(1); // Отримуємо ID блоку

			document.getElementById(blockID)?.scrollIntoView({
				behavior: "smooth", // Плавна прокрутка
				block: "start",
			});
		});
	});
});