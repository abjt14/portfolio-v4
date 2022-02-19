<script>
	import { onMount } from "svelte";
	import { ScrollParallaxElement } from '../helpers/scrollParallax';
  import { innerHeight, innerWidth } from "../helpers/stores.js";

	onMount(() => {
		if ($innerWidth > 650) {
			const getRandomArbitrary = (min, max) => {
				return Math.random() * (max - min) + min;
			}

			// scroll parallax
			document.querySelectorAll('#technologies .tech-names .name').forEach(element => {
				let rand = getRandomArbitrary(-.025, .025);
				new ScrollParallaxElement(`#technologies .tech-names .name:nth-child(${Array.from(element.parentNode.children).indexOf(element) + 1})`, $innerWidth*rand, 0, 'x');
			})

			new ScrollParallaxElement('#technologies h2 span', $innerHeight, 0);
			new ScrollParallaxElement('#technologies h2 span:nth-child(2)', $innerHeight, 0);
			new ScrollParallaxElement('#technologies h2 span:nth-child(3)', $innerHeight, 0);
			new ScrollParallaxElement('#technologies h2 span:nth-child(4)', $innerHeight, 0);
			new ScrollParallaxElement('#technologies h2 span:nth-child(5)', $innerHeight, 0);
			// scroll parallax end
		}
	})

</script>

<div class="marquee">
	<div class="marquee__inner" aria-hidden="true">
		{#each Array.from(Array(12).keys()) as a}
			<span>
				Skill and Technologies
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M24 12C24 15.1826 22.7357 18.2348 20.4853 20.4853C18.2348 22.7357 15.1826 24 12 24C8.8174 24 5.76516 22.7357 3.51472 20.4853C1.26428 18.2348 0 15.1826 0 12C0 8.8174 1.26428 5.76516 3.51472 3.51472C5.76516 1.26428 8.8174 0 12 0C15.1826 0 18.2348 1.26428 20.4853 3.51472C22.7357 5.76516 24 8.8174 24 12V12ZM12.75 6.75C12.75 6.55109 12.671 6.36032 12.5303 6.21967C12.3897 6.07902 12.1989 6 12 6C11.8011 6 11.6103 6.07902 11.4697 6.21967C11.329 6.36032 11.25 6.55109 11.25 6.75V15.4395L8.031 12.219C7.89017 12.0782 7.69916 11.9991 7.5 11.9991C7.30084 11.9991 7.10983 12.0782 6.969 12.219C6.82817 12.3598 6.74905 12.5508 6.74905 12.75C6.74905 12.9492 6.82817 13.1402 6.969 13.281L11.469 17.781C11.5387 17.8508 11.6214 17.9063 11.7125 17.9441C11.8037 17.9819 11.9013 18.0013 12 18.0013C12.0987 18.0013 12.1963 17.9819 12.2874 17.9441C12.3786 17.9063 12.4613 17.8508 12.531 17.781L17.031 13.281C17.1718 13.1402 17.2509 12.9492 17.2509 12.75C17.2509 12.5508 17.1718 12.3598 17.031 12.219C16.8902 12.0782 16.6992 11.9991 16.5 11.9991C16.3008 11.9991 16.1098 12.0782 15.969 12.219L12.75 15.4395V6.75Z" fill="black" fill-opacity="0.5"/>
				</svg>
			</span>
		{/each}
	</div>
</div>
<div id="technologies">
	<h2>
		As an enforcer of <span>clean code</span>, <span>attention to details</span>, and <span>scalability</span>, I use the latest <span>industry approved</span> technologies, tools, and standards to deliver <span>well-engineered, semantic, and carefully-crafted applications</span>.
	</h2>
	<div class="tech-names">
		<div class="name">HTML5</div>
		<div class="name">CSS3</div>
		<div class="name">Sass</div>
		<div class="name">JavaScript ES6+</div>
		<div class="name">GSAP</div>
		<div class="name">Webpack</div>
		<div class="name">Svelte</div>
		<div class="name">ReactJS</div>
		<div class="name">React Native</div>
		<div class="name">NodeJS</div>
		<div class="name">GraphQL</div>
		<div class="name">MongoDB</div>
		<div class="name">Shell Scripting</div>
		<div class="name">Git & Github</div>
		<div class="name">Figma</div>
	</div>
</div>

<style lang="scss">
	#technologies {
		padding: 10vw 2rem;
		display: flex;
		flex-direction: column;
		gap: 4.5rem;
		justify-content: center;
		z-index: 3;

		* {
			z-index: 3;
		}

		h2 {
			font-family: "Inter", sans-serif;
			font-size: 2.16rem;
			font-weight: 200;
			max-width: 75%;

			span {
				font-weight: 400;
			}

			@media screen and (max-width: 1000px) {
				max-width: unset;
				font-size: 1.66rem;
			}
		}

		.tech-names {
			display: flex;
			flex-wrap: wrap;
			align-self: flex-end;
			justify-content: center;
			gap: 3rem;
			width: 85%;

			.name {
				font-family: "Inter", sans-serif;
				font-weight: 300;
				font-size: 1.5rem;
				padding: 1.5rem;
				color: #000;
				text-align: center;
				border-radius: 3rem;
				transition: color .5s ease, background-color .5s ease;
				background-color: rgba(255, 255, 255, .15);
 				backdrop-filter: blur(.2rem);
				box-shadow:
				0 1px 2px rgb(0 0 0 / 9%),
				0 2px 4px rgb(0 0 0 / 9%),
				0 4px 8px rgb(0 0 0 / 9%);

				@media screen and (max-width: 650px) {
					font-size: 1.25rem;
					font-weight: 400;
					padding: 1rem;
				}
			}

			@media screen and (max-width: 1000px) {
				width: unset;
			}

			@media screen and (max-width: 650px) {
				gap: 1rem;
			}
		}

		@media screen and (max-width: 1000px) {
			min-height: unset;
			padding: 10vw 2rem;
		}

		@media screen and (max-width: 650px) {
			padding: 5rem 1rem;
		}
	}

	.marquee {
		position: relative;
		overflow: hidden;
		padding: 1rem 0;
		border: 1px solid rgba(0, 0, 0, 0.5);
		opacity: .5;

		.marquee__inner {
			width: fit-content;
			display: flex;
			animation: marquee 24s linear infinite;
		}

		span {
			font-size: 1.5rem;
			padding: 0 .5rem;
			width: max-content;
			display: flex;
			gap: 1rem;

			svg {
				height: 2rem;
    		width: auto;
			}

			@media screen and (max-width: 650px) {
				padding: 0 0.25rem;
			}
		}

		@keyframes marquee {
			0% {
				transform: translateX(0)
			}

			100% {
				transform: translateX(-50%)
			}
		}
	}
</style>