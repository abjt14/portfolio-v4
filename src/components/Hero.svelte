<script>
	import { onMount } from 'svelte';
	import { MagneticElement } from '../helpers/magneticElement.js';
	import { ScrollParallaxElement } from '../helpers/scrollParallax';

	let downloadClicked = false;

	const downloadResume = () => {
		if (!downloadClicked) {
			downloadClicked = true;
			let link = document.createElement("a");
			link.download = 'Abhijeet Singh_Resume';
			link.href = './assets/resume/Abhijeet Singh_Resume.pdf';
			link.click();
			setTimeout(() => {
				downloadClicked = false;
			}, 1000);
		}
	}

	const scrollToTechnologies = () => {
		if (window.innerWidth > 650) {
			window.scrollTo({
				top: document.querySelector('#technologies').getBoundingClientRect().top,
				behavior: 'smooth'
			});
		} else {
			window.scrollTo({
				top: document.querySelector('#technologies').getBoundingClientRect().top*.95,
				behavior: 'smooth'
			});
		}
	}

	onMount(() => {
		if(window.innerWidth > 650) {
			// magnetize
			new MagneticElement('#view-resume-btn');
			// magnetize end
		}

		// scroll parallax
		new ScrollParallaxElement('#hero .cont-1 h1', 0, window.innerHeight*.2);
		new ScrollParallaxElement('#hero .cont-2', 0, window.innerHeight*.6);
		// scroll parallax end
	})
</script>

<div id="hero">
	<div class="cont-1">
		<h1>
			<span>
				Hello. I am Abhijeet.
				<div class="after"></div>
			</span>
			<span>
				I build engaging experiences for
				<div class="after"></div>
			</span>
			<span>
				my audience with pixel perfect
				<div class="after"></div>
			</span>
			<span>
				and performant applications.
				<div class="after"></div>
			</span>
		</h1>
		<button id="view-resume-btn" on:click={downloadResume} class="backdrop-filter-hue-rotate">
			View Resume
		</button>
	</div>
	<div class="cont-2">
		<button id="scroll-to-next-section" on:click={scrollToTechnologies}>
			<svg width="44" height="24" viewBox="0 0 44 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M40.9459 0.532178L21.9981 19.4502L3.05018 0.532178C2.71165 0.193493 2.25719 0.00388273 1.78396 0.00388273C1.31073 0.00388273 0.856272 0.193493 0.517736 0.532178C0.353817 0.696678 0.223593 0.893025 0.134692 1.10972C0.0457913 1.32642 0 1.5591 0 1.79415C0 2.0292 0.0457913 2.26189 0.134692 2.47859C0.223593 2.69528 0.353817 2.89163 0.517736 3.05613L20.675 23.1856C21.029 23.539 21.5037 23.7368 21.9981 23.7368C22.4924 23.7368 22.9672 23.539 23.3212 23.1856L43.4784 3.06002C43.6435 2.89539 43.7747 2.69856 43.8643 2.48115C43.9538 2.26373 44 2.03014 44 1.79415C44 1.55817 43.9538 1.32457 43.8643 1.10716C43.7747 0.889746 43.6435 0.692917 43.4784 0.528293C43.1398 0.189608 42.6854 0 42.2122 0C41.7389 0 41.2845 0.189608 40.9459 0.528293V0.532178Z" fill="black"/>
			</svg>
		</button>
	</div>
</div>

<style lang="scss">
	#hero {
		min-height: 100vh;
		padding: 2rem;
		display: flex;
		flex-direction: column;
		z-index: 3;

		* {
			z-index: 3;
		}

		.cont-1 {
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;
			gap: 1.25rem;

			h1 {
				font-family: "Inter", sans-serif;
				font-style: normal;
				font-weight: 300;
				font-size: 3.66rem;
				display: flex;
				flex-direction: column;

				span {
					position: relative;
					overflow: hidden;
					will-change: transform;

					.after {
						position: absolute;
						top: 0;
						left: 0;
						transform: translateY(120%);
						background-color: #fff;
						width: 100%;
						height: 100%;
					}
				}

				@media screen and (max-width: 650px) {
					margin-top: 10vh;
					line-height: 4.4rem;
				}
			}

			#view-resume-btn {
				font-family: "Inter", sans-serif;
				font-size: 1.16rem;
				background-color: #000;
				color: #fff;
				padding: .875rem 1.916rem;
				border: 2px solid #000;
    		border-radius: 2.083rem;
				transform-origin: bottom left;
				transition: color .2s ease, background-color .2s ease, box-shadow .5s ease;
				box-shadow:
					0 1px 1px rgb(0 0 0 / 9%),
					0 2px 2px rgb(0 0 0 / 9%),
					0 4px 4px rgb(0 0 0 / 9%),
					0 6px 8px rgb(0 0 0 / 9%),
					0 8px 16px rgb(0 0 0 / 9%);

				&:hover {
					background-color: unset;
					color: #000;
					box-shadow:
						0 1px 1px rgba(0,0,0,0.18),
						0 2px 2px rgba(0,0,0,0.18),
						0 4px 4px rgba(0,0,0,0.18),
						0 6px 8px rgba(0,0,0,0.18),
						0 8px 16px rgba(0,0,0,0.18);
				}

				@media screen and (max-width: 650px) {
					font-size: 1.66rem;
					margin-top: 1rem;
				}
			}
		}

		.cont-2 {
			text-align: right;
			will-change: transform;

			#scroll-to-next-section {
				transform: translateY(0);
				animation: scrollToNextHint 2s ease-in-out infinite;

				@keyframes scrollToNextHint {
					0%, 100% {
						transform: translateY(0);
					}

					50% {
						transform: translateY(-1rem);
					}
				}
			}
		}

		@media screen and (max-width: 650px) {
			padding: 1rem;
		}
	}
</style>