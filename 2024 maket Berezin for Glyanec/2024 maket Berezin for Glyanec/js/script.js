"use strict"

//- Burger -//
document.addEventListener('click', documentClick);

function documentClick(e) {
	const targetItem = e.target;
	if (targetItem.closest('.burger-menu')) {
		document.documentElement.classList.toggle('menu-open');
	}
}
//----------//

//= Swiper ================================================//
new Swiper('.slider-partners', {
	//! Optional parameters
		// Infinity Slides
	loop: true,
		// Speed
	speed: 700,
		// Auto Height
	autoHeight: true,
		// Space between slides
	spaceBetween: 20,
		//Swipe Cursor
	grabCursor:true,
		// Number of slides on the screen
	slidesPerView: 2,
		// Number of swiped slides in one time
	slidesPerGroup: 1,

	// =========================================================

	//! Adaptive Break Points
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		560: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
		},
		920: {
			slidesPerView: 4,
		},
		1334: {
			slidesPerView: 6,
		},
	},

	//* Auto Play
	//autoplay: {
	//	delay: 2000,
	//	stopOnLastSlide: false,
	//	disableOnInteraction: false,
	//},

	// =========================================================

	//! Navigation arrows
	navigation: {
		nextEl: '.slider-partners__arrows.swiper-button-next',
		prevEl: '.slider-partners__arrows.swiper-button-prev',
	},
});
// =========================================================

