<script>
	import { onMount } from 'svelte';
	import { scrolledRatio, innerWidth } from '../helpers/stores.js';

	let scrolledRatioInner;
	scrolledRatio.subscribe(value => {
		scrolledRatioInner = value;
	})

	const scrollToProjects = () => {
		if ($innerWidth <= 650) {
			document.querySelector('#mobile-menu').classList.toggle('active');
			document.querySelector('nav').classList.toggle('white-bg');
			document.querySelector('body').classList.toggle('overflow-hidden');
		}
		window.scrollTo({
			top: document.querySelector('#projects').offsetTop,
			behavior: 'smooth'
		});
	}

	const scrollToInformation = () => {
		if ($innerWidth <= 650) {
			document.querySelector('#mobile-menu').classList.toggle('active');
			document.querySelector('nav').classList.toggle('white-bg');
			document.querySelector('body').classList.toggle('overflow-hidden');
		}
		window.scrollTo({
			top: document.querySelector('#technologies').offsetTop,
			behavior: 'smooth'
		});
	}

	const scrollToContact = () => {
		if ($innerWidth <= 650) {
			document.querySelector('#mobile-menu').classList.toggle('active');
			document.querySelector('nav').classList.toggle('white-bg');
			document.querySelector('body').classList.toggle('overflow-hidden');
		}
		window.scrollTo({
			top: document.querySelector('#contact').offsetTop,
			behavior: 'smooth'
		});
	}

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}

	let nav;
	let mobileMenu;

	const toggleMobileMenu = () => {
		document.querySelector('#mobile-menu').classList.toggle('active');
		document.querySelector('nav').classList.toggle('white-bg');
		document.querySelector('body').classList.toggle('overflow-hidden');
	}

	const handleLinkMouseEnter = () => {
		document.querySelectorAll('nav .links button').forEach(e => {
			e.classList.add('blur');
		})
	}

	const handleLinkMouseLeave = () => {
		document.querySelectorAll('nav .links button').forEach(e => {
			e.classList.remove('blur');
		})
	}

	onMount(() => {
		mobileMenu.style.paddingBottom = `${2*nav.getBoundingClientRect().height}px`;
	})
</script>

<nav
	bind:this={nav}
	class={scrolledRatioInner >= 1 ? '' : 'nav-glass-effect-and-box-shadow'}
>
	<div id="site-name" on:click={scrollToTop}>
		abjt
	</div>
	<div class="links">
		<button on:click={scrollToProjects} on:mouseenter={handleLinkMouseEnter} on:mouseleave={handleLinkMouseLeave}>Projects</button>
		<button on:click={scrollToInformation} on:mouseenter={handleLinkMouseEnter} on:mouseleave={handleLinkMouseLeave}>Information</button>
		<button on:click={scrollToContact} on:mouseenter={handleLinkMouseEnter} on:mouseleave={handleLinkMouseLeave}>Contact</button>
	</div>
	<button id="mobile-menu-toggle" on:click={toggleMobileMenu}>
		<svg width="43" height="33" viewBox="0 0 43 33" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M2 30.75H40.3333M2 2H40.3333H2ZM2 16.375H40.3333H2Z" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
	</button>
	<div id="mobile-menu" bind:this={mobileMenu}>
		<button on:click={scrollToProjects}>Projects</button>
		<button on:click={scrollToInformation}>Information</button>
		<button on:click={scrollToContact}>Contact</button>
	</div>
</nav>

<style type="text/scss">
	nav {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding: 1rem 2rem;
		transition: box-shadow .3s ease, background-color .3s ease;
		z-index: 10;
		will-change: background-color;

		#site-name {
			font-family: "Bebas Neue", sans-serif;
			font-size: 2rem;
			letter-spacing: 0.115em;
			text-transform: uppercase;
			transition: color .3s ease;
			cursor: pointer;

			@media screen and (max-width: 650px) {
				font-size: 2rem;
			}
		}

		.links {
			display: flex;
			align-items: center;
			gap: 1.45rem;

			button {
				font-family: "Inter", sans-serif;
				font-weight: 400;
				font-size: 1.15rem;
				color: #000;
				transition: filter .3s ease;

				&:global(.blur) {
					filter: blur(.075rem);
				}

				&:hover {
					filter: none;
				}
			}

			@media screen and (max-width: 650px) {
				display: none;
			}
		}

		&:global(.nav-glass-effect-and-box-shadow) {
			box-shadow: 0 0 2px rgba(0,0,0,0.05),
									0 0 4px rgba(0,0,0,0.05),
									0 0 8px rgba(0,0,0,0.05),
									0 0 16px rgba(0,0,0,0.05),
									0 0 32px rgba(0,0,0,0.05),
									0 0 64px rgba(0,0,0,0.05);
			background-color: rgba(255, 255, 255, .15);
		}

		#mobile-menu-toggle {
			display: none;
			align-self: center;
			align-items: center;

			svg {
				height: 1.5rem;
    		width: auto;
			}

			@media screen and (max-width: 650px) {
				display: flex;
			}
		}

		#mobile-menu {
			position: absolute;
			top: 100%;
			left: 0;
			right: 0;
			bottom: 0;
			background-color: #fff;
			height: 100vh;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 2rem;
			padding: 1rem;
			opacity: 0;
			transition: opacity .3s ease;
			pointer-events: none;

			button {
				font-family: "Inter", sans-serif;
				font-weight: 400;
				font-size: 2.15rem;
				color: #000;
			}

			&:global(.active) {
				opacity: 1;
				pointer-events: all;
			}
		}

		&:global(.white-bg) {
			background-color: #fff;
		}

		@media screen and (max-width: 650px) {
			padding: 1rem;
		}
	}
</style>