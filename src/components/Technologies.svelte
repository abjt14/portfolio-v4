<script>
	import { onMount } from "svelte";
	import { ScrollParallaxElement } from '../helpers/scrollParallax';

	onMount(() => {
		// switch tech stack init
		// const switchTechStacks = () => {
		// 	let techs =  document.querySelectorAll('#technologies .tech-names .name');
		// }

		// switchTechStacks();
		// setInterval(() => {
		// 	switchTechStacks();
		// }, 2500);
		// switch tech stacks end

		if (window.innerWidth > 650) {
			const getRandomArbitrary = (min, max) => {
				return Math.random() * (max - min) + min;
			}

			// scroll parallax
			document.querySelectorAll('#technologies .tech-names .name').forEach(element => {
				let rand = getRandomArbitrary(-.025, .025);
				new ScrollParallaxElement(`#technologies .tech-names .name:nth-child(${Array.from(element.parentNode.children).indexOf(element) + 1})`, window.innerWidth*rand, 0, 'x');
			})
			// scroll parallax end
		}
	})

</script>

<div id="technologies">
	<h2>
		As an enforcer of <span>clean code</span>, <span>attention to details</span>, and <span>scalability</span>, I use the latest <span>industry approved</span> technologies, tools, and standards to deliver <span>well-engineered, semantic, and carefully-crafted applications</span>.
	</h2>
	<div class="tech-names">
		<div class="name backdrop-filter-hue-rotate">HTML5</div>
		<div class="name backdrop-filter-hue-rotate">CSS3</div>
		<div class="name backdrop-filter-hue-rotate">Sass</div>
		<div class="name backdrop-filter-hue-rotate">JavaScript ES6+</div>
		<div class="name backdrop-filter-hue-rotate">GSAP</div>
		<div class="name backdrop-filter-hue-rotate">Webpack</div>
		<div class="name backdrop-filter-hue-rotate">Svelte</div>
		<div class="name backdrop-filter-hue-rotate">ReactJS</div>
		<div class="name backdrop-filter-hue-rotate">React Native</div>
		<div class="name backdrop-filter-hue-rotate">NodeJS</div>
		<div class="name backdrop-filter-hue-rotate">GraphQL</div>
		<div class="name backdrop-filter-hue-rotate">MongoDB</div>
		<div class="name backdrop-filter-hue-rotate">Shell Scripting</div>
		<div class="name backdrop-filter-hue-rotate">Git & Github</div>
		<div class="name backdrop-filter-hue-rotate">Figma</div>
	</div>
</div>

<style lang="scss">
	#technologies {
		min-height: 100vh;
		padding: 2rem;
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
			line-height: 2.5rem;
			font-weight: 200;
			max-width: 75%;

			span {
				font-weight: 400;
			}

			@media screen and (max-width: 1000px) {
				max-width: unset;
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
				line-height: 1.83rem;
				padding: 1.5rem;
				border: 2px solid #000;
				color: #000;
				text-align: center;
				border-radius: 3rem;
				transition: color .5s ease, background-color .5s ease;

				&:global(.bg-black) {
					background-color: #000;
					color: #fff;
				}
			}

			@media screen and (max-width: 1000px) {
				width: unset;
			}
		}

		@media screen and (max-width: 1000px) {
			min-height: unset;
			padding: 10vw 2rem;
		}

		@media screen and (max-width: 650px) {
			padding: 10vw 1rem;
		}
	}
</style>