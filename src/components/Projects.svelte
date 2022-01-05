<script>
	import { onMount } from 'svelte';
	import ProjectListingItem from './sub-components/projects/ProjectListingItem.svelte';

	const projects = [
		{
			name: 'Sift Mobile Application',
			technologies: [ 'React Native', 'NodeJS', 'GraphQL' ],
			image: './assets/images/projects/sift-mobile-application.webp',
			type: 'academic',
			description: '',
			url: 'http://www.siftapp.ca/'
		},
		{
			name: 'Sift Marketing Website',
			technologies: [ 'Sass', 'Javascript ES6', 'GSAP', 'Webpack' ],
			image: './assets/images/projects/sift-marketing-website.webp',
			type: 'academic',
			description: '',
			url: 'http://www.siftapp.ca/'
		},
		{
			name: 'Portfolio Concept',
			technologies: [ 'Svelte', 'Sass', 'Javascript ES6', 'GSAP' ],
			image: './assets/images/projects/portfolio-concept-4.webp',
			type: 'academic',
			description: '',
			url: 'https://www.abjt.dev/'
		},
		{
			name: 'Portfolio Concept (Minimal)',
			technologies: [ 'Sass', 'Javascript ES6', 'GSAP', 'Webpack' ],
			image: './assets/images/projects/portfolio-concept-3.webp',
			type: 'academic',
			description: '',
			url: 'https://abjt14.github.io/portfolio-concept-3'
		},
		{
			name: 'Portfolio Concept (All Colors)',
			technologies: [ 'Sass', 'Javascript ES6', 'GSAP', 'Webpack' ],
			image: './assets/images/projects/portfolio-concept-2.webp',
			type: 'academic',
			description: '',
			url: 'https://abjt14.github.io/portfolio-concept-2'
		},
	]

	let imageDisplayContainer;
	let imageDisplayElement;

	const handleProjectMouseEnter = (i) => {
		if (projects[i]) {
			imageDisplayElement.src = projects[i].image;
			imageDisplayContainer.classList.add('active');
		}
	}

	const handleProjectMouseLeave = () => {
		imageDisplayContainer.classList.remove('active');
	}

	onMount(() => {
	})
</script>

<div class="marquee">
	<div class="marquee__inner" aria-hidden="true">
		{#each Array.from(Array(12).keys()) as a}
			<span>
				Select Projects
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M24 12C24 15.1826 22.7357 18.2348 20.4853 20.4853C18.2348 22.7357 15.1826 24 12 24C8.8174 24 5.76516 22.7357 3.51472 20.4853C1.26428 18.2348 0 15.1826 0 12C0 8.8174 1.26428 5.76516 3.51472 3.51472C5.76516 1.26428 8.8174 0 12 0C15.1826 0 18.2348 1.26428 20.4853 3.51472C22.7357 5.76516 24 8.8174 24 12V12ZM12.75 6.75C12.75 6.55109 12.671 6.36032 12.5303 6.21967C12.3897 6.07902 12.1989 6 12 6C11.8011 6 11.6103 6.07902 11.4697 6.21967C11.329 6.36032 11.25 6.55109 11.25 6.75V15.4395L8.031 12.219C7.89017 12.0782 7.69916 11.9991 7.5 11.9991C7.30084 11.9991 7.10983 12.0782 6.969 12.219C6.82817 12.3598 6.74905 12.5508 6.74905 12.75C6.74905 12.9492 6.82817 13.1402 6.969 13.281L11.469 17.781C11.5387 17.8508 11.6214 17.9063 11.7125 17.9441C11.8037 17.9819 11.9013 18.0013 12 18.0013C12.0987 18.0013 12.1963 17.9819 12.2874 17.9441C12.3786 17.9063 12.4613 17.8508 12.531 17.781L17.031 13.281C17.1718 13.1402 17.2509 12.9492 17.2509 12.75C17.2509 12.5508 17.1718 12.3598 17.031 12.219C16.8902 12.0782 16.6992 11.9991 16.5 11.9991C16.3008 11.9991 16.1098 12.0782 15.969 12.219L12.75 15.4395V6.75Z" fill="black" fill-opacity="0.5"/>
				</svg>
			</span>
		{/each}
	</div>
</div>
<div id="projects">
	<div class="listing">
		{#each projects as project, i}
			<div on:mouseenter={() => handleProjectMouseEnter(i)} on:mouseleave={handleProjectMouseLeave}>
				<ProjectListingItem
					number={i + 1}
					name={project.name}
					technologies={project.technologies}
					url={project.url}
				/>
			</div>
		{/each}
	</div>
	<div class="display" bind:this={imageDisplayContainer}>
		<img bind:this={imageDisplayElement} id="project-display-image" src="./assets/images/projects/sift-mobile-application.webp" alt="screenshot of selected project">
	</div>
</div>

<style lang="scss">
	#projects {
		padding: 10vw 2rem;
		z-index: 3;
		display: grid;
		grid-template-columns: 5fr 4fr;

		* {
			z-index: 3;
		}

		.listing {
			display: flex;
			flex-direction: column;
			justify-content: center;

			> div {
				padding: 1rem 0;
				transition: filter .3s ease;

				&:hover {
					filter: none !important;
				}
			}

			@media screen and (min-width: 651px) {
				&:hover {
					> div {
						filter: blur(.1rem) opacity(.5);
					}
				}
			}

			@media screen and (max-width: 650px) {
				grid-column: 1 / -1;
			}
		}

		.display {
			display: flex;
			align-items: center;
			opacity: 0;
			transition: opacity .3s ease, transform .3s ease;
			transform: translateX(1vw);

			img {
				transform-origin: center right;
				transform: scale(1.15);
				border-radius: 0.5rem;
    		box-shadow:
					0 0 2px rgb(0 0 0 / 5%),
					0 0 4px rgb(0 0 0 / 5%),
					0 0 8px rgb(0 0 0 / 5%);

				@media screen and (max-width: 1200px) {
					transform: scale(1);
				}
			}

			&:global(.active) {
				opacity: 1;
				transform: translateX(0vw);
			}

			@media screen and (max-width: 650px) {
				display: none;
			}
		}

		@media screen and (max-width: 1200px) {
			grid-template-columns: 1fr 1fr;
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
			animation: marquee 20s linear infinite;
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