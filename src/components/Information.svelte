<script>
	import { onMount } from "svelte";
	import { ScrollParallaxElement } from '../helpers/scrollParallax';

	$: emailButtonHovered = false;

	let emailButton;
	let emailButtonLabel;
	let emailButtonClicked = false;

	const handleEmailMouseEnter = () => {
		if(window.innerWidth > 650) {
			emailButtonHovered = true
		}
	}

	const handleEmailMouseLeave = () => {
		if(window.innerWidth > 650) {
			emailButtonHovered = false
		}
	}

	onMount(() => {
		// scroll parallax
		// new ScrollParallaxElement('#information', -window.innerHeight*.2, 0);
		new ScrollParallaxElement('#information .content .text span:nth-child(1)', -window.innerHeight*.05, 0);
		new ScrollParallaxElement('#information .content .text span:nth-child(2)', -window.innerHeight*.1, 0);
		new ScrollParallaxElement(
			'#information .content .text span:nth-child(3), #information .content .text span:nth-child(4), #information .content .text span:nth-child(5)',
			-window.innerHeight*.15,
			0
		);
		new ScrollParallaxElement('#information .content .image img', -window.innerHeight*.5, 0);
		// scroll parallax end
	})

	// email copy to clipboard
	const copyEmailToClipBoard = () => {
		if(window.innerWidth > 650) {
			if (!emailButtonClicked) {
				navigator.clipboard.writeText('abhijeetsinghmain@gmail.com');
				emailButtonLabel.classList.add('clicked-email-button');
			}
		} else {
			var link = document.createElement("a");
			link.href = 'mailto:abhijeetsinghmain@gmail.com';
			link.click();
		}
	}
	// email copy to clipboard end
</script>

<div id="information">
	<div class="content">
		<div class="text">
			<span>
				Hello!
			</span>
			<span>
				I am a Vancouver based developer who loves to add creativity and life into his work.
			</span>
			<span>
				Received my Bachelor’s degree in Information Technology from Manipal University Jaipur, and completed my PG Diploma in Web Dev and Design from Langara College Vancouver.
			</span>
			<span>
				Worked as a software engineer for a brand design agency called Outlined for over a year, delivering a design platform for enterprises to generate and manage brand assets on a large scale.
			</span>
			<span>
				Built 2 web apps, 1 marketing website, and a mobile app as part of my academic projects.
			</span>
		</div>
		<div class="image">
			<img src="/assets/portrait/main.webp" alt="Abhijeet Singh's portrait" loading="lazy">
		</div>
	</div>
	<div class="socials">
		<div class="get-in-touch-cont">
			<div
				class={"label " + (emailButtonHovered ? "hovered-email-button" : '')}
				bind:this={emailButtonLabel}
			>
				Let's build something together.
			</div>
			<button
					id="email-btn"
					bind:this={emailButton}
					on:mouseenter={handleEmailMouseEnter}
					on:mouseleave={handleEmailMouseLeave}
					on:click={copyEmailToClipBoard}
				>
				abhijeetsinghmain@gmail.com
			</button>
		</div>
		<div class="social-links-cont">
			<a href="https://www.linkedin.com/in/abjt14/" target="_blank">
				LinkedIn 
				<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M14 12.375V1H2.625" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
					<path d="M14 1L1 14" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</a>
			<a href="https://github.com/abjt14" target="_blank">
				Github 
				<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M14 12.375V1H2.625" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
					<path d="M14 1L1 14" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</a>
			<a href="https://codepen.io/abjt14" target="_blank">
				Codepen 
				<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M14 12.375V1H2.625" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
					<path d="M14 1L1 14" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</a>
		</div>
	</div>
</div>

<style lang="scss">
	#information {
		min-height: 100vh;
		background-color: rgb(24, 24, 24);
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 2rem;
		position: relative;
		z-index: 3;

		* {
			z-index: 3;
		}

		.content {
			flex: 1;
			display: grid;
			grid-template-columns: 5fr 3fr;
			gap: 3.41rem;
			justify-content: center;
			align-items: center;
			padding: calc(10vh + 1.5rem) 0 5rem 0;
			position: relative;

			.text {
				display: flex;
				flex-direction: column;
				gap: 2rem;
				align-self: flex-start;
				height: 100%;

				span {
					font-family: "Inter", sans-serif;
					font-size: 1.15rem;
					line-height: 1.96rem;
					font-weight: 200;
					color: #adadad;

					&:nth-child(1) {
						color: #fff;
						font-weight: 600;
						font-size: 2.5rem;
						line-height: 2.46rem;

						@media screen and (max-width: 650px) {
							font-weight: 500;
							font-size: 5.5rem;
							line-height: 4.46rem;
						}
					}

					&:nth-child(2) {
						color: #c5c5c5;
						font-weight: 400;
						font-size: 1.5rem;
						line-height: 1.96rem;

						@media screen and (max-width: 650px) {
							font-weight: 300;
							font-size: 1.75rem;
							line-height: 2.46rem;
						}
					}

					@media screen and (max-width: 650px) {
						font-weight: 200;
						font-size: 1.4rem;
						line-height: 2.21rem;
					}
				}

				@media screen and (max-width: 1000px) {
					align-self: unset;
					height: unset;
				}

				@media screen and (max-width: 650px) {
					grid-column: 1 / -1;
				}
			}

			.image {
				align-self: flex-start;
				text-align: right;

				img {
					max-width: 25vw;

					@media screen and (max-width: 650px) {
						flex: 1;
						max-width: 75vw;
						filter: blur(0.1rem) brightness(0.2);
					}
				}

				@media screen and (max-width: 1000px) {
					align-self: unset;
				}

				@media screen and (max-width: 650px) {
					position: absolute;
					top: 50%;
					left: 50%;
					width: 100%;
					height: 100%;
					transform: translate(-50%, -50%);
					display: flex;
					justify-content: center;
					align-items: center;
					z-index: -1;
				}
			}
		}

		.socials {
			display: flex;
			justify-content: space-between;

			.get-in-touch-cont {
				display: grid;
				gap: .25rem;

				.label {
					font-family: "Inter", sans-serif;
					font-weight: 500;
					font-size: 1rem;
					color: transparent;
					position: relative;
					overflow: hidden;

					&:global(::before), &:global(::after) {
						position: absolute;
						left: 0;
						transform: translateY(0);
						color: #848484;
						transition: transform .4s cubic-bezier(0.34, 1.56, 0.64, 1);
					}

					&:global(::before) {
						content: "Let's build something together.";
						top: 0;
					}

					&:global(::after) {
						content: 'Copy email to clipboard';
						top: 100%;
					}

					&:global(.hovered-email-button) {
						&::before, &::after {
							transform: translateY(-100%);
						}
					}

					&:global(.clicked-email-button) {
						&::after {
							content: 'Copied email to clipboard';
						}
					}


					@media screen and (max-width: 650px) {
						font-size: 1.5rem;
					}
				}

				#email-btn {
					font-family: "Inter", sans-serif;
					font-weight: 200;
					font-size: 1.15rem;
					color: #fff;

					@media screen and (max-width: 650px) {
						text-align: left;
						font-size: 1.6rem;
					}
				}

				@media screen and (max-width: 650px) {
					text-align: left;
					gap: .5rem;
				}
			}

			.social-links-cont {
				display: flex;
				gap: 2rem;
				justify-content: center;
				align-items: flex-end;

				a {
					font-family: "Inter", sans-serif;
					font-weight: 200;
					font-size: 1.15rem;
					color: #fff;

					svg {
						width: 1rem;
    				vertical-align: middle;
						transition: transform .3s ease;
					}

					&:hover {
						svg {
							transform: translateY(-.5rem)
						}
					}

					@media screen and (max-width: 650px) {
						font-size: 1.6rem;
					}
				}

				@media screen and (max-width: 650px) {
					justify-content: flex-start;
				}
			}

			@media screen and (max-width: 650px) {
				flex-direction: column;
				gap: 2rem;
				margin-bottom: 7.5rem;
			}
		}

		@media screen and (max-width: 650px) {
			padding: 1rem;
			min-height: unset;
		}
	}
</style>