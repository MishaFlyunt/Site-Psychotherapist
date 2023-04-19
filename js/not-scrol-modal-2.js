const btnOff = document.querySelector(".scroll-off-1");
const btnOn = document.querySelector(".scroll-on-1");
const btnOnData = document.querySelector("[data-modal-close-link-1]");
const body = document.body;

function disableScroll() {
	let pagePosition = window.scrollY;
	body.classList.add("disable-scroll");
	body.dataset.position = pagePosition;
}

function enableScroll() {
	body.classList.remove("disable-scroll");
}

btnOff.addEventListener("click", e => {
	disableScroll();
	e.currentTarget.style.pointerEvents = "none";
	btnOn.style.pointerEvents = "auto";
	btnOnData.style.pointerEvents = "auto";
});

btnOn.addEventListener("click", e => {
	enableScroll();
	e.currentTarget.style.pointerEvents = "none";
	btnOff.style.pointerEvents = "auto";
});

btnOnData.addEventListener("click", e => {
	enableScroll();
	e.currentTarget.style.pointerEvents = "none";
	btnOff.style.pointerEvents = "auto";
});

