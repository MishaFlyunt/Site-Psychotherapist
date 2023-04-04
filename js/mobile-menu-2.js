const menu = document.querySelector(".menu-body");
const menuBtn = document.querySelector(".menu-icon");

const body = document.body;

if (menu && menuBtn) {
	menuBtn.addEventListener("click", e => {
		menu.classList.toggle("active");
		menuBtn.classList.toggle("active");
		body.classList.toggle("lock");
	});

	menu.addEventListener("click", e => {
		if (e.target.classList.contains("menu-body")) {
			menu.classList.remove("active");
			menuBtn.classList.remove("active");
			body.classList.remove("lock");
		}
	});

	menu.querySelectorAll(".menu-link, .burger-btn, .burger-social-link").forEach(link => {
		link.addEventListener("click", () => {
			menu.classList.remove("active");
			menuBtn.classList.remove("active");
			body.classList.remove("lock");
		});
	});
}

