<script>
	import { onMount } from "svelte";
	import Nav from "./components/Nav.svelte";
	import Hero from "./components/Hero.svelte";
	import Technologies from "./components/Technologies.svelte";
	import Information from "./components/Information.svelte";
	import NoiseBackground from "./components/NoiseBackground.svelte";
	import CanvasDrawBackground from "./components/CanvasDrawBackground.svelte";
	import { scrolledRatio, pageHeight } from './helpers/stores.js';
	import gsap from 'gsap';

	let pageHeightInner;

	pageHeight.subscribe(value => {
		pageHeightInner = value;
	})

	onMount(() => {
		const main = document.querySelector('main');

		// scroll event listener
		document.addEventListener('scroll', (e) => {
			let offset = window.scrollY / (document.body.scrollHeight - window.innerHeight);
			scrolledRatio.update(s => offset);

			gsap.to('main', {
					duration: .4,
					y: -(main.getBoundingClientRect().height - window.innerHeight)*offset,
					ease: "Power1.easeOut"
				}
			)
		})
		// scroll event listener end

		pageHeight.update(s => main.getBoundingClientRect().height);
		document.body.style.height = `${pageHeightInner}px`;

		window.addEventListener('resize', (e) => {
			document.body.style.height = `${pageHeightInner}px`;

			let offset = window.scrollY / (document.body.scrollHeight - window.innerHeight);
			scrolledRatio.update(s => offset);

			gsap.to('main', {
					duration: .4,
					y: -(main.getBoundingClientRect().height - window.innerHeight)*offset,
					ease: "Power1.easeOut"
				}
			)
		})

		// gsap init
		const gsapInitTimeline = gsap.timeline();
		gsapInitTimeline
		.from('nav', { duration: 1, yPercent: -100, autoAlpha: 0, ease: "back.out(1)" })
		.from('#hero .cont-1 h1 span', { duration: 1, yPercent: 200, ease: "back.out(1)", stagger: .1 }, "-=.5")
		.from('#hero .cont-1 h1 span', { duration: 1, autoAlpha: 0.01, ease: "back.out(1)", stagger: .1 }, "-=1")
		.from('#hero .cont-1 h1 span .after', { duration: 2, yPercent: -100, ease: "back.out(1)", stagger: .1 }, "-=1.5")
		.to('#hero .cont-1 h1 span .after', { duration: 0, autoAlpha: 0 })
		.from('#view-resume-btn', { duration: 1, xPercent: -10, autoAlpha: 0, ease: "back.out(1)" }, "-=1.5")
		.from('#scroll-to-next-section', { duration: 1, autoAlpha: 0 }, "-=.75")
		// gsap end
	})
</script>

<svelte:head>
	<meta name="description" content="Hello. I am Abhijeet. I build engaging experiences for my audience with pixel perfect and performant applications.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@200;300;400;500;600&display=swap" rel="stylesheet">
</svelte:head>

<Nav />
<main>
	<Hero />
	<Technologies />
	<Information />
</main>
<CanvasDrawBackground />
<NoiseBackground />

<style lang="scss">
	main {
		position: fixed;
		top: 0;
		left: 0;
		min-height: 100vh;
		width: 100%;
	}

	:global(html) {
		font-size: 1.15vw;

		@media screen and (max-width: 1000px) {
			font-size: 1.65vw;
		}

		@media screen and (max-width: 650px) {
			font-size: 3vw;
		}
	}

	:global(.backdrop-filter-hue-rotate) {
		animation: bfhr-animation 8s infinite linear;

		@keyframes bfhr-animation {
			0%{
				backdrop-filter: hue-rotate(0deg);
				-webkit-backdrop-filter: hue-rotate(0deg);
			}
			100% {
				backdrop-filter: hue-rotate(360deg);
				-webkit-backdrop-filter: hue-rotate(360deg);
			}
		}
	}
</style>