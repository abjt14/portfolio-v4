<script>
	import { onMount } from 'svelte';
	import { MagneticElement } from '../helpers/magneticElement.js';
	import { ScrollParallaxElement } from '../helpers/scrollParallax';

	const scrollToContact = () => {
		window.scrollTo({
			top: document.querySelector('body').getBoundingClientRect().height,
			behavior: 'smooth'
		});
	}

	const scrollToProjects = () => {
		window.scrollTo({
			top: document.querySelector('#projects').offsetTop,
			behavior: 'smooth'
		});
	}

	onMount(() => {
		if(window.innerWidth > 650) {
			// magnetize
			new MagneticElement('#go-to-contact-cta');
			// magnetize end

			// scroll parallax
			new ScrollParallaxElement('#hero .cont-1 h1', 0, window.innerHeight*.2);
			new ScrollParallaxElement('#hero .cont-1 h1 span:nth-child(1)', 0, -window.innerWidth*.06, 'x');
			new ScrollParallaxElement('#hero .cont-1 h1 span:nth-child(2)', 0, -window.innerWidth*.01, 'x');
			new ScrollParallaxElement('#hero .cont-1 h1 span:nth-child(3)', 0, -window.innerWidth*.03, 'x');
			new ScrollParallaxElement('#hero .cont-1 h1 span:nth-child(4)', 0, -window.innerWidth*.09, 'x');
			new ScrollParallaxElement('#hero .cont-2', 0, window.innerHeight*.6);
			// scroll parallax end
		}
	})
</script>

<div id="hero">
	<div class="cont-1">
		<h1>
			<span>
				Hello. I am Abhijeet.
			</span>
			<span>
				I build engaging experiences for
			</span>
			<span>
				my audience with pixel perfect
			</span>
			<span>
				and performant applications.
			</span>
		</h1>
		<button id="go-to-contact-cta" on:click={scrollToContact} class="backdrop-filter-hue-rotate">
			Lets Work Together 👋
		</button>
	</div>
	<div class="cont-2">
		<a href="https://www.linkedin.com/in/abjt14" target="_blank" rel="noopener noreferrer">
			<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M4.45188e-07 3.00764C4.45188e-07 2.20997 0.316875 1.44496 0.880917 0.88092C1.44496 0.316879 2.20996 4.0096e-06 3.00764 4.0096e-06H32.9891C33.3844 -0.00064162 33.7759 0.0766888 34.1413 0.227568C34.5067 0.378447 34.8387 0.599911 35.1184 0.879281C35.3981 1.15865 35.6199 1.49044 35.7712 1.85566C35.9225 2.22087 36.0002 2.61234 36 3.00764V32.9891C36.0004 33.3845 35.9229 33.7761 35.7718 34.1414C35.6208 34.5068 35.3992 34.8389 35.1197 35.1185C34.8402 35.3982 34.5083 35.62 34.143 35.7712C33.7776 35.9225 33.3861 36.0002 32.9907 36H3.00764C2.61253 36 2.2213 35.9222 1.85629 35.7709C1.49128 35.6197 1.15964 35.398 0.880338 35.1185C0.601032 34.839 0.379525 34.5073 0.228473 34.1422C0.0774217 33.7771 -0.00021452 33.3858 4.45188e-07 32.9907V3.00764ZM14.2495 13.7258H19.1242V16.1738C19.8278 14.7665 21.6278 13.5 24.3327 13.5C29.5184 13.5 30.7473 16.3031 30.7473 21.4462V30.9731H25.4995V22.6178C25.4995 19.6887 24.7958 18.036 23.0089 18.036C20.5298 18.036 19.4989 19.818 19.4989 22.6178V30.9731H14.2495V13.7258ZM5.24945 30.7489H10.4989V13.5H5.24945V30.7473V30.7489ZM11.25 7.87418C11.2599 8.32365 11.1799 8.77056 11.0148 9.1887C10.8496 9.60684 10.6026 9.98777 10.2882 10.3091C9.97382 10.6305 9.59842 10.8859 9.18402 11.0602C8.76962 11.2345 8.32457 11.3243 7.875 11.3243C7.42543 11.3243 6.98038 11.2345 6.56598 11.0602C6.15158 10.8859 5.77618 10.6305 5.4618 10.3091C5.14743 9.98777 4.90041 9.60684 4.73524 9.1887C4.57008 8.77056 4.4901 8.32365 4.5 7.87418C4.51943 6.99195 4.88354 6.15239 5.51436 5.53531C6.14518 4.91823 6.99255 4.57269 7.875 4.57269C8.75745 4.57269 9.60482 4.91823 10.2356 5.53531C10.8665 6.15239 11.2306 6.99195 11.25 7.87418V7.87418Z" fill="black"/>
			</svg>
		</a>
		<a href="https://github.com/abjt14" target="_blank" rel="noopener noreferrer">
			<svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M18.5002 0C8.27883 0 0 8.27883 0 18.5002C0 26.6865 5.29568 33.601 12.6495 36.0522C13.5745 36.2141 13.9214 35.6591 13.9214 35.1735C13.9214 34.7341 13.8983 33.2772 13.8983 31.7278C9.25009 32.5834 8.04758 30.5947 7.67758 29.554C7.46945 29.0222 6.56756 27.3803 5.78131 26.9409C5.1338 26.594 4.20879 25.7384 5.75818 25.7153C7.21507 25.6921 8.25571 27.0565 8.60258 27.6115C10.2676 30.4097 12.927 29.6234 13.9908 29.1378C14.1526 27.9353 14.6383 27.1259 15.1701 26.6634C11.0539 26.2009 6.75257 24.6052 6.75257 17.5289C6.75257 15.517 7.46945 13.852 8.64884 12.557C8.46383 12.0945 7.81633 10.1982 8.83384 7.65445C8.83384 7.65445 10.3832 7.16882 13.9214 9.55072C15.4014 9.13447 16.9739 8.92634 18.5464 8.92634C20.1189 8.92634 21.6915 9.13447 23.1715 9.55072C26.7096 7.1457 28.259 7.65445 28.259 7.65445C29.2765 10.1982 28.629 12.0945 28.444 12.557C29.6234 13.852 30.3403 15.4939 30.3403 17.5289C30.3403 24.6284 26.0159 26.2009 21.8996 26.6634C22.5702 27.2415 23.1484 28.3515 23.1484 30.0859C23.1484 32.5603 23.1252 34.5491 23.1252 35.1735C23.1252 35.6591 23.4721 36.2372 24.3971 36.0522C28.0697 34.8123 31.261 32.4519 33.5218 29.3033C35.7827 26.1547 36.9993 22.3764 37.0004 18.5002C37.0004 8.27883 28.7215 0 18.5002 0Z" fill="black"/>
			</svg>
		</a>
		<a href="https://codepen.io/abjt14" target="_blank" rel="noopener noreferrer">
			<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M17.0582 0.284628C17.6282 -0.094876 18.3707 -0.094876 18.9422 0.284628L35.2384 11.0997C35.7139 11.4147 36.0004 11.9472 36.0004 12.5188V23.4809C36.0004 24.0509 35.7154 24.5849 35.2384 24.9014L18.9422 35.7165C18.3722 36.0945 17.6297 36.0945 17.0582 35.7165L0.762008 24.8999C0.527833 24.7445 0.335714 24.5337 0.202763 24.2861C0.069812 24.0385 0.000156353 23.7619 0 23.4809L0 12.5188C0 11.9487 0.285003 11.4147 0.762008 11.0982L17.0582 0.284628ZM3.40804 15.6943V20.2813L6.84007 17.9713L3.40804 15.6943V15.6943ZM9.9136 20.0113L4.77005 23.4719L16.2962 31.1219V24.2474L9.9151 20.0113H9.9136ZM19.7042 24.2474V31.1204L31.2303 23.4704L26.0853 20.0113L19.7042 24.2474V24.2474ZM29.1588 17.9728L32.5938 20.2828V15.6928L29.1588 17.9728V17.9728ZM31.2153 12.5188L26.1003 15.9133L19.7042 11.6112V4.87918L31.2153 12.5188ZM16.2962 4.87918V11.6097L9.9016 15.9118L4.78505 12.5188L16.2962 4.87918V4.87918ZM18.0002 14.5723L12.9751 17.9533L18.0002 21.2878L23.0252 17.9533L18.0002 14.5723Z" fill="black"/>
			</svg>
		</a>
		<button id="scroll-to-next-section" on:click={scrollToProjects}>
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
					font-weight: 200;

					&:nth-child(1) {
						font-weight: 400;
					}
				}

				@media screen and (max-width: 650px) {
					margin-top: 15vh;
					line-height: unset;
					font-size: 2rem;
				}
			}

			#go-to-contact-cta {
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
					0 2px 2px rgb(0 0 0 / 9%),
					0 4px 4px rgb(0 0 0 / 9%),
					0 8px 8px rgb(0 0 0 / 9%),
					0 16px 16px rgb(0 0 0 / 9%),
					0 32px 32px rgb(0 0 0 / 9%);

				&:hover {
					background-color: unset;
					color: #000;
					box-shadow:
						0 4px 4px rgba(0,0,0,0.18),
						0 8px 8px rgba(0,0,0,0.18),
						0 16px 16px rgba(0,0,0,0.18),
						0 32px 32px rgba(0,0,0,0.18),
						0 64px 64px rgba(0,0,0,0.18);
				}

				@media screen and (max-width: 650px) {
					font-size: 1rem;
					margin-top: .5rem;
					padding: 0.5rem 1rem;
				}
			}
		}

		.cont-2 {
			will-change: transform;
			display: flex;
			justify-content: flex-end;
			gap: 2rem;

			a {
				display: flex;
				align-items: center;

				svg {
					height: 2rem;
					width: auto;
					transition: transform .3s ease;
				}

				&:hover {
					svg {
						transform: scale(1.2);
					}
				}
			}

			#scroll-to-next-section {
				transform: translateY(0);
				animation: scrollToNextHint 2s ease-in-out infinite 3.5s;

				svg {
					height: 1.25rem;
					width: auto;
				}

				@keyframes scrollToNextHint {
					0%, 100% {
						transform: translateY(0);
					}

					50% {
						transform: translateY(-1rem);
					}
				}
			}

			@media screen and (max-width: 650px) {
				margin: 10vh 0 5vh 0;
			}
		}

		@media screen and (max-width: 650px) {
			padding: 1rem;
			min-height: unset;
			margin: 5vh 0;
		}
	}
</style>