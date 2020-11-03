import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


function animateHomepage() {
	gsap.registerPlugin(ScrollTrigger);

	let tl_scroll = gsap.timeline({ repeat: -1, repeatDelay: 1 })
		.to(".hero__arrow-down", { y: "+=150%", ease: "power4.out", duration: 0.75 })
		.from(".hero__arrow-top", { y: "-=150%", ease: "power4.out", duration: 0.75 }, "<0.25");


	let tl_hero = gsap.timeline({})
		.from(".hero__pretitle", { opacity: 0, y: "+=80%", ease: "power4.out", duration: 1 })
		.from(".hero__title", { y: "+=100", rotationX: -80, opacity: 0, ease: "back.out", duration: 1.75 })
		.from(".hero__subtitle", { opacity: 0, ease: "back.out", duration: 1 }, "<1")
		.from(".orange-underline", { width: 0, ease: "power4.out", duration: 0.75 }, "<0.5")
		.from([".hero__number-0", ".hero__number-1", ".hero__number-2"], { scale: 0.5, y: "+=20%", opacity: 0, ease: "power4.out", stagger: 0.2, duration: 1 }, "<0.75")
		.from([".hero__number-text-0", ".hero__number-text-1", ".hero__number-text-2"], { opacity: 0, ease: "power4.out", stagger: 0.2, duration: 1 }, "<0.25")
		.from(".hero__arrow", { opacity: 0, ease: "power4.out", duration: 1 }, "<0.75");


	let tl_section2 = gsap.timeline({
		scrollTrigger: {
			trigger: ".image-desc__image-container ",
			start: "top bottom",
			toggleActions: "play none none none"
		}
	})

		.from(".image-desc__image-container-corner", { scale: 0, opacity: 0, ease: "expo.out", duration: 1 })
		.from(".image-desc__image-container-description", { x: "+=40%", ease: "power4.inout", duration: 1 }, "<0.25")
		.from(".image-desc__image-container-content-arrow", { y: "-=40%", opacity: 0, ease: "expo.out", duration: 1 }, "<0.25");


	const allImagesTrigger = document.querySelectorAll('.text-image__image');
	allImagesTrigger.forEach(element => {
		let mainImage = element.querySelector('.text-image-main-img');
		gsap.timeline({
			scrollTrigger: {
				trigger: "#" + mainImage.id + "",
				start: "100px 100%",
				toggleActions: "play none none none"
			}
		})
			//.from("#pic1", {scale:0.5, opacity:0, ease:"power4.out", duration:1}) 
			.from("." + mainImage.id + "-shape", { scale: 0, opacity: 0, ease: "expo.out", duration: 1 }, "<0.25")
			.from("." + mainImage.id + "-corner", { scale: 0, opacity: 0, ease: "expo.out", duration: 1 }, "<0.25");
	});


	function mouseOverEvent(e) {
		gsap.to(e, { scale: 1.1, transformOrigin: "50% 50%", immediateRender: false });
	}

	function mouseOutEvent(e) {
		gsap.to(e, { scale: 1.0, transformOrigin: "50% 50%", immediateRender: false });
	}

	let personButtons = document.querySelectorAll('[data-person]');

	personButtons.forEach(function (e, index) {
		e.addEventListener('mouseover', () => {
			mouseOverEvent(e.querySelector('img'));
		});
		e.addEventListener('mouseout', () => {
			mouseOutEvent(e.querySelector('img'));
		});
	});

	let tl_pie = gsap.timeline({
		scrollTrigger: {
			trigger: "#about-us__title",
			start: "top bottom-=500px",
			toggleActions: "play none none none"
		}
	})
		.from([".person-0", ".person-1", ".person-2", , ".person-3"], { y: "-=60%", opacity: 0, ease: "power4.inout", stagger: 0.2, duration: 1 })
		.from(".about-us__content-title", { opacity: 0, ease: "power4.out", duration: 1 }, "<0.25")
		.from(".orange-underline", { width: 0, ease: "power4.out", duration: 1 }, "<0.25")
		.from(".about-us__content-description", { opacity: 0, ease: "power4.out", duration: 1 }, "<0.75");


	let tl_section10 = gsap.timeline({
		scrollTrigger: {
			trigger: ".text-and-icons__description",
			toggleActions: "play none none none"
		}
	})
		//.from("#pic1", {scale:0.5, opacity:0, ease:"power4.out", duration:1}) 
		.from([".icon-0", ".icon-1", ".icon-2", ".icon-3"], { opacity: 0, y: "-=20", ease: "back.out", stagger: 0.2, duration: 1 })
		.from([".plus-0", ".plus-1", ".plus-2",], { opacity: 0, ease: "expo.out", stagger: 0.2, duration: 1 }, "<0.5")
		.from([".icon-title-0", ".icon-title-1", ".icon-title-2", ".icon-title-3"], { opacity: 0, ease: "expo.out", stagger: 0.2, duration: 1 }, "<-0.1");


	let tl_section6 = gsap.timeline({
		scrollTrigger: {
			trigger: ".testimonials__angle",
			start: "top bottom",
			toggleActions: "play none none none"
		}
	})
		.from(".testimonials__comment", { x: "+=20%", ease: "power4.out", duration: 0.75 })
		.from(".testimonials__square", { x: "-=20%", ease: "power4.out", duration: 0.75 }, "<0.2")
		.from(".testimonials__angle", { scale: 0, opacity: 0, ease: "expo.out", duration: 0.75 }, "<0.2")
		.from(".testimonials__quote", { scale: 0, opacity: 0, ease: "expo.out", duration: 0.75 }, "<0.2")
		.from(".testimonials__slider-text", { opacity: 0, ease: "power4.out", duration: 1 }, "<0.2")
		.from(".testimonials__slider-logo", { opacity: 0, ease: "power4.out", duration: 1 }, "<0.25");


	let tl_section52 = gsap.timeline({
		scrollTrigger: {
			trigger: ".text-image__circles-top-logo",
			start: "top bottom",
			toggleActions: "play none none none"
		}
	})

		.from(".text-image__circles-top-logo", { scale: 0, rotation: -30, opacity: 0, ease: "back.out", duration: 1 })
		.from(".text-image__circles-small-top ", { opacity: 0, ease: "power4.out", duration: 1 }, "<0.2")
		.from(".text-image__circles-big-top", { opacity: 0, ease: "power4.out", duration: 1 }, "<0.21")
		.from(".text-image__circles-mid-logo", { scale: 0, rotation: -30, opacity: 0, ease: "back.out", duration: 1 }, "<0.2")
		.from(".text-image__circles-small-bottom", { opacity: 0, ease: "power4.out", duration: 1 }, "<0.2")
		.from(".text-image__circles-big-bottom", { opacity: 0, ease: "power4.out", duration: 1 }, "<0.21")
		.from(".text-image__circles-bottom-logo", { scale: 0, rotation: -30, opacity: 0, ease: "back.out", duration: 1 }, "<0.2");


	let tl_section322 = gsap.timeline({
		scrollTrigger: {
			trigger: ".text-image__text-ancle-title",
			start: "top bottom",
			toggleActions: "play none none none"
		}
	})
		.from(".text-image__text-ancle-top", { scale: 0, opacity: 0, ease: "expo.out", duration: 0.75 }, "<0.25")
		.from(".text-image__text-ancle-bottom", { scale: 0, opacity: 0, ease: "expo.out", duration: 0.75 }, "<0.25")
		.from(".text-image__text-ancle-title", { opacity: 0, ease: "power4.out", duration: 1 }, "<=0.2");



	let tl_pie123 = gsap.timeline({
		scrollTrigger: {
			trigger: "#pieChart",
			start: "top bottom-=100px",
			toggleActions: "play none none none"
		}
	})
		.from(".cta-wheel__title", { rotationX: -80, opacity: 0, ease: "back.out", duration: 1.75 })
		.from("#images-wheel-unactive", { rotation: -180, ease: "back.out", duration: 2 }, "<=0.2")
		.from("#images-pieSegActive1", { scale: 0, opacity: 0, ease: "elastic.out", duration: 1 }, "<1")
		.from(".cta-wheel__content-title", { x: "+=10%", opacity: 0, ease: "power4.out", stagger: 0.2, duration: 1 }, "<0.1");


	let pieBtn1 = document.querySelector("#Segment-1");
	let pieBtn2 = document.querySelector("#Segment-2");
	let pieBtn3 = document.querySelector("#Segment-3");
	gsap.set(["#images-pieSegActive2", "#images-pieSegActive3"], { scale: 0, autoAlpha: 0 });

	function removeActive() {
		const wheelContents = document.querySelectorAll('.cta-wheel__content');
		wheelContents.forEach(element => {
			element.classList.remove('active');
		});
	}

	function addNonePointerEvent(item) {
		item.style.pointerEvents = 'none';
	}
	function addAutoPointerEvent(item) {
		item.style.pointerEvents = 'auto';
	}


	if (pieBtn1 || pieBtn2 || pieBtn3) {
		pieBtn1.onmousedown = function () {
			addNonePointerEvent(pieBtn3);
			addNonePointerEvent(pieBtn2);
			gsap.to("#images-pieSegActive1", { scale: 1, autoAlpha: 1, ease: "elastic.out", duration: 1, immediateRender: false }).eventCallback('onComplete', function () {
				addAutoPointerEvent(pieBtn3);
				addAutoPointerEvent(pieBtn2);
			});
			gsap.to("#images-pieSegActive2", { scale: 0, autoAlpha: 0, ease: "back.out", duration: 0.25, immediateRender: false });
			gsap.to("#images-pieSegActive3", { scale: 0, autoAlpha: 0, ease: "back.out", duration: 0.25, immediateRender: false });


			const wheelContent = document.querySelector('.wheel-0');
			removeActive();
			wheelContent.classList.add('active');

			// chnage text and animate container
		};

		pieBtn2.onmousedown = function () {
			addNonePointerEvent(pieBtn1);
			addNonePointerEvent(pieBtn3);
			gsap.to("#images-pieSegActive2", { scale: 1, autoAlpha: 1, ease: "elastic.out", duration: 1, immediateRender: false }).eventCallback('onComplete', function () {
				addAutoPointerEvent(pieBtn1);
				addAutoPointerEvent(pieBtn3);
			});
			gsap.to("#images-pieSegActive1", { scale: 0, autoAlpha: 0, ease: "back.out", duration: 0.25, immediateRender: false });
			gsap.to("#images-pieSegActive3", { scale: 0, autoAlpha: 0, ease: "back.out", duration: 0.25, immediateRender: false });
			// chnage text and animate container
			const wheelContent = document.querySelector('.wheel-1');
			removeActive();
			wheelContent.classList.add('active');
		};
		pieBtn3.onmousedown = function () {
			addNonePointerEvent(pieBtn1);
			addNonePointerEvent(pieBtn2);
			gsap.to("#images-pieSegActive3", { scale: 1, autoAlpha: 1, ease: "elastic.out", duration: 1, immediateRender: false }).eventCallback('onComplete', function () {
				addAutoPointerEvent(pieBtn1);
				addAutoPointerEvent(pieBtn2);
			});
			gsap.to("#images-pieSegActive1", { scale: 0, autoAlpha: 0, ease: "back.out", duration: 0.25, immediateRender: false });
			gsap.to("#images-pieSegActive2", { scale: 0, autoAlpha: 0, ease: "back.out", duration: 0.25, immediateRender: false });

			const wheelContent = document.querySelector('.wheel-2');
			removeActive();
			wheelContent.classList.add('active');

			// chnage text and animate container
		};
	}

}


export default { animateHomepage };