<script>
		import { scrolledRatio } from '../helpers/stores.js';

		let scrolledRatioInner;
		scrolledRatio.subscribe(value => {
			scrolledRatioInner = value;
		})

		const scrollToInformation = () => {
			window.scrollTo({
				top: document.body.getBoundingClientRect().height,
				behavior: 'smooth'
			});
		}

		const scrollToTop = () => {
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			});
		}
</script>

<nav
	class={scrolledRatioInner >= 1 ? 'black' : 'nav-box-shadow'}
>
	<div id="site-name" on:click={scrollToTop}>
		abjt
	</div>
	<div class="links">
		<button on:click={scrollToInformation}>Information</button>
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
		background-color: rgba(255, 255, 255, .15);
 		backdrop-filter: blur(.2rem);
 		-webkit-backdrop-filter: blur(.2rem);
 		-moz-backdrop-filter: blur(.2rem);
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
				font-size: 3rem;
			}
		}

		.links {
			display: flex;
			align-items: center;

			button {
				font-family: "Inter", sans-serif;
				font-weight: 500;
				font-size: 1.25rem;
				transition: color .3s ease;

				@media screen and (max-width: 650px) {
					font-size: 1.75rem;
				}
			}
		}

		&:global(.nav-box-shadow) {
			box-shadow: 0 0 2px rgba(0,0,0,0.05),
									0 0 4px rgba(0,0,0,0.05),
									0 0 8px rgba(0,0,0,0.05),
									0 0 16px rgba(0,0,0,0.05),
									0 0 32px rgba(0,0,0,0.05),
									0 0 64px rgba(0,0,0,0.05);
		}

		&:global(.black) {
			background-color: rgb(24, 24, 24) !important;

			#site-name {
				color: #fff;
			}

			.links {
				button {
					color: #fff;
				}
			}
		}

		@media screen and (max-width: 650px) {
			padding: 1rem;
		}
	}
</style>