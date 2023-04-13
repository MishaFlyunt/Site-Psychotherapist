const swiper = new Swiper(".mySwiper", {
	slidesPerView: 4,
	spaceBetween: 18,
	grabCursor: true,
	loop: false,
	pagination: {
		el: ".swiper-pagination-2",
		clickable: true,
	},
	breakpoints: {
		// when window width is >= 250px
		250: {
			slidesPerView: 1,
		},
		// when window width is >= 768px
		768: {
			slidesPerView: 2,
			spaceBetween: 18,
		},
		// when window width is >= 1200px
		1200: {
			slidesPerView: 4,
			spaceBetween: 18,
		},
	},
});
