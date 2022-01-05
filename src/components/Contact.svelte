<script>
	import { onMount } from "svelte";
	import { ScrollParallaxElement } from '../helpers/scrollParallax';

	// email copy email to clipboard
	let copyEmailToClipboardButton;
	let copied = false;
	const copyEmailToClipBoard = () => {
		if (!copied) {
			copyEmailToClipboardButton.innerText = "copied to clipboard";
			navigator.clipboard.writeText('abhijeetsinghmain@gmail.com');
			copied = true;
			setTimeout(() => {
				copyEmailToClipboardButton.innerText = "copy email to clipboard";
				copied = false;
			}, 5000);
		}
	}
	// email copy email to clipboard end

	onMount(() => {
	})
</script>

<div id="contact">
	<div class="content">
		<div class="label">
			Lets build something together
		</div>
		<div class="email">
			<a href="mailto:abhijeetsinghmain@gmail.com">
				Send an email
				<svg width="34" height="32" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M31 25.3787V3H6.5" stroke="black" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
					<path d="M31 3L3 28.5757" stroke="black" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</a>
			<span>
				or
				<button bind:this={copyEmailToClipboardButton} on:click={copyEmailToClipBoard}>copy email to clipboard</button>
			</span>
		</div>
	</div>
	<div class="footer">
		<div class="socials">
			<a href="https://www.linkedin.com/in/abjt14" target="_blank" rel="noopener noreferrer">
				<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M4.45188e-07 3.00764C4.45188e-07 2.20997 0.316875 1.44496 0.880917 0.88092C1.44496 0.316879 2.20996 4.0096e-06 3.00764 4.0096e-06H32.9891C33.3844 -0.00064162 33.7759 0.0766888 34.1413 0.227568C34.5067 0.378447 34.8387 0.599911 35.1184 0.879281C35.3981 1.15865 35.6199 1.49044 35.7712 1.85566C35.9225 2.22087 36.0002 2.61234 36 3.00764V32.9891C36.0004 33.3845 35.9229 33.7761 35.7718 34.1414C35.6208 34.5068 35.3992 34.8389 35.1197 35.1185C34.8402 35.3982 34.5083 35.62 34.143 35.7712C33.7776 35.9225 33.3861 36.0002 32.9907 36H3.00764C2.61253 36 2.2213 35.9222 1.85629 35.7709C1.49128 35.6197 1.15964 35.398 0.880338 35.1185C0.601032 34.839 0.379525 34.5073 0.228473 34.1422C0.0774217 33.7771 -0.00021452 33.3858 4.45188e-07 32.9907V3.00764ZM14.2495 13.7258H19.1242V16.1738C19.8278 14.7665 21.6278 13.5 24.3327 13.5C29.5184 13.5 30.7473 16.3031 30.7473 21.4462V30.9731H25.4995V22.6178C25.4995 19.6887 24.7958 18.036 23.0089 18.036C20.5298 18.036 19.4989 19.818 19.4989 22.6178V30.9731H14.2495V13.7258ZM5.24945 30.7489H10.4989V13.5H5.24945V30.7473V30.7489ZM11.25 7.87418C11.2599 8.32365 11.1799 8.77056 11.0148 9.1887C10.8496 9.60684 10.6026 9.98777 10.2882 10.3091C9.97382 10.6305 9.59842 10.8859 9.18402 11.0602C8.76962 11.2345 8.32457 11.3243 7.875 11.3243C7.42543 11.3243 6.98038 11.2345 6.56598 11.0602C6.15158 10.8859 5.77618 10.6305 5.4618 10.3091C5.14743 9.98777 4.90041 9.60684 4.73524 9.1887C4.57008 8.77056 4.4901 8.32365 4.5 7.87418C4.51943 6.99195 4.88354 6.15239 5.51436 5.53531C6.14518 4.91823 6.99255 4.57269 7.875 4.57269C8.75745 4.57269 9.60482 4.91823 10.2356 5.53531C10.8665 6.15239 11.2306 6.99195 11.25 7.87418V7.87418Z" fill="black"/>
				</svg>
			</a>
			<a href="https://www.github.com/abjt14" target="_blank" rel="noopener noreferrer">
				<svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M18.5002 0C8.27883 0 0 8.27883 0 18.5002C0 26.6865 5.29568 33.601 12.6495 36.0522C13.5745 36.2141 13.9214 35.6591 13.9214 35.1735C13.9214 34.7341 13.8983 33.2772 13.8983 31.7278C9.25009 32.5834 8.04758 30.5947 7.67758 29.554C7.46945 29.0222 6.56756 27.3803 5.78131 26.9409C5.1338 26.594 4.20879 25.7384 5.75818 25.7153C7.21507 25.6921 8.25571 27.0565 8.60258 27.6115C10.2676 30.4097 12.927 29.6234 13.9908 29.1378C14.1526 27.9353 14.6383 27.1259 15.1701 26.6634C11.0539 26.2009 6.75257 24.6052 6.75257 17.5289C6.75257 15.517 7.46945 13.852 8.64884 12.557C8.46383 12.0945 7.81633 10.1982 8.83384 7.65445C8.83384 7.65445 10.3832 7.16882 13.9214 9.55072C15.4014 9.13447 16.9739 8.92634 18.5464 8.92634C20.1189 8.92634 21.6915 9.13447 23.1715 9.55072C26.7096 7.1457 28.259 7.65445 28.259 7.65445C29.2765 10.1982 28.629 12.0945 28.444 12.557C29.6234 13.852 30.3403 15.4939 30.3403 17.5289C30.3403 24.6284 26.0159 26.2009 21.8996 26.6634C22.5702 27.2415 23.1484 28.3515 23.1484 30.0859C23.1484 32.5603 23.1252 34.5491 23.1252 35.1735C23.1252 35.6591 23.4721 36.2372 24.3971 36.0522C28.0697 34.8123 31.261 32.4519 33.5218 29.3033C35.7827 26.1547 36.9993 22.3764 37.0004 18.5002C37.0004 8.27883 28.7215 0 18.5002 0Z" fill="black"/>
				</svg>
			</a>
			<a href="https://www.codepen.com/abjt14" target="_blank" rel="noopener noreferrer">
				<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M17.0582 0.284628C17.6282 -0.094876 18.3707 -0.094876 18.9422 0.284628L35.2384 11.0997C35.7139 11.4147 36.0004 11.9472 36.0004 12.5188V23.4809C36.0004 24.0509 35.7154 24.5849 35.2384 24.9014L18.9422 35.7165C18.3722 36.0945 17.6297 36.0945 17.0582 35.7165L0.762008 24.8999C0.527833 24.7445 0.335714 24.5337 0.202763 24.2861C0.069812 24.0385 0.000156353 23.7619 0 23.4809L0 12.5188C0 11.9487 0.285003 11.4147 0.762008 11.0982L17.0582 0.284628ZM3.40804 15.6943V20.2813L6.84007 17.9713L3.40804 15.6943V15.6943ZM9.9136 20.0113L4.77005 23.4719L16.2962 31.1219V24.2474L9.9151 20.0113H9.9136ZM19.7042 24.2474V31.1204L31.2303 23.4704L26.0853 20.0113L19.7042 24.2474V24.2474ZM29.1588 17.9728L32.5938 20.2828V15.6928L29.1588 17.9728V17.9728ZM31.2153 12.5188L26.1003 15.9133L19.7042 11.6112V4.87918L31.2153 12.5188ZM16.2962 4.87918V11.6097L9.9016 15.9118L4.78505 12.5188L16.2962 4.87918V4.87918ZM18.0002 14.5723L12.9751 17.9533L18.0002 21.2878L23.0252 17.9533L18.0002 14.5723Z" fill="black"/>
				</svg>
			</a>
		</div>
		<div class="end">
			<span>Portfolio @ 2022</span>
			<span>
				Designed and Developed by
				<a href="https://www.abjt.dev">ABJT</a>
			</span>
		</div>
	</div>
</div>

<style lang="scss">
	#contact {
		min-height: 100vh;
		padding: 2rem;
		display: flex;
		flex-direction: column;

		.content {
			display: flex;
			flex-direction: column;
			flex: 3;
			justify-content: center;
			gap: 3rem;

			.label {
				font-weight: 600;
				font-size: 1.5rem;
				color: rgba(0, 0, 0, 0.5);

				@media screen and (max-width: 650px) {
					font-weight: 700;
					font-size: 3rem;
				}
			}

			.email {
				display: flex;
				flex-direction: column;
				gap: 0.75rem;

				a {
					font-weight: 400;
					font-size: 2.66rem;
					color: #000000;
					width: fit-content;

					svg {
						height: 1.5rem;
						width: auto;
						transition: transform .3s ease;

						@media screen and (max-width: 650px) {
							height: 1.25rem;
						}
					}

					&:hover {
						svg {
							transform: translateY(-50%);
						}
					}

					@media screen and (max-width: 650px) {
						font-size: 2.25rem;
					}
				}

				span {
					display: flex;
					gap: 1rem;
					align-items: center;
    			font-size: 1.5rem;

					button {
						font-family: 'Inter', sans-serif;
    				font-weight: 400;
						font-size: 1rem;
						color: #fff;
						background-color: #000;
						padding: 0.5rem 1.25rem;
						border: 2px solid #000;
						border-radius: 2.083rem;
						transform-origin: bottom left;
						transition: color .3s ease, background-color .3s ease, transform .1s ease;

						&:hover {
							background-color: unset;
							color: #000;
						}

						&:active {
							transform: scale(.95);
						}
					}

					@media screen and (max-width: 650px) {
						font-size: 1rem;
						gap: .75rem;
					}
				}
			}
		}

		.footer {
			flex: 1;
			display: flex;
			flex-direction: column;
			gap: 2rem;

			.socials {
				padding-bottom: 2rem;
				border-bottom: 2px solid #000;
				display: flex;
				gap: 1rem;

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
			}

			.end {
				display: flex;
    		justify-content: space-between;

				span {
					font-weight: 400;
					font-size: 1.25rem;
					color: #000000;

					a {
						font-family: "Bebas Neue", sans-serif;
						letter-spacing: 0.115em;
						font-weight: 900;
						text-transform: uppercase;
					}
				}

				@media screen and (max-width: 650px) {
					flex-direction: column;
					gap: .25rem;
				}
			}
		}

		@media screen and (max-width: 650px) {
			padding: 1rem;
		}
	}
</style>