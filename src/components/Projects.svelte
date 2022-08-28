<script>
	import ProjectListingItem from './sub-components/projects/ProjectListingItem.svelte';
	import
	{
		name,
		type,
		role,
		technologies,
		description,
		url,
		images,
		modalActive
	} from '../helpers/stores.js';

	const projects = [
		{
			name: 'Sift Marketing Website',
			technologies: [ 'Sass', 'Javascript ES6', 'GSAP', 'Webpack' ],
			image: './assets/images/projects/sift-marketing-website.webp',
			type: 'Academic',
			role: 'Front-End Developer',
			description: [
				'Sift is a mobile application that lets users scan objects with the camera to learn how and where they can recycle them.',
				'The marketing served the purpose of showcasing the problem at hand and the solution the app provides for it.',
				'In order to make the website lightweight, fast, feature rich, and accessible, I decided to not use a frontend framework, and instead, use tools like Webpack for smaller bundle size, SASS for ease of development, and GSAP for lightweight and cross-browser compatible animations.'
			],
			url: 'http://www.siftapp.ca/',
			images: [
				'./assets/images/projects/sift-marketing-website/sift-marketing-website-1.webp',
				'./assets/images/projects/sift-marketing-website/sift-marketing-website-2.webp',
				'./assets/images/projects/sift-marketing-website/sift-marketing-website-3.webp',
			]
		},
		{
			name: 'Sift Mobile Application',
			technologies: [ 'React Native', 'NodeJS', 'GraphQL' ],
			image: './assets/images/projects/sift-mobile-application.webp',
			type: 'Academic',
			role: 'Full Stack Developer',
			description: [
				'Sift is a mobile application that lets users scan objects with the camera to learn how and where they can recycle them.',
				'For the initial research, built a web scaper using NodeJS and PuppeteerJS to collect public domain data.',
				'Designed and developed the GraphQL APIs on a NodeJS server for faster response times and easier frontend development.',
				'Built the search by text functionality and search result screens for the app using React Native.'
			],
			url: 'https://github.com/stsiqueira/Sift',
			images: [
				'./assets/images/projects/sift-mobile-application/sift-mobile-application-1.webp',
				'./assets/images/projects/sift-mobile-application/sift-mobile-application-2.webp',
				'./assets/images/projects/sift-mobile-application/sift-mobile-application-3.webp',
				'./assets/images/projects/sift-mobile-application/sift-mobile-application-4.webp',
			]
		},
		{
			name: 'Portfolio Concept',
			technologies: [ 'Svelte', 'Sass', 'Javascript ES6', 'GSAP' ],
			image: './assets/images/projects/portfolio-concept-4.webp',
			type: 'Personal',
			role: 'Project Owner',
			description: [
				'This is my Developer Portfolio, showcasing my projects, my social links, and more about my academic and professional background.',
				'The project took me 4 weeks to complete, which includes 3 weeks of ideation as well as design, and 1 week of development.',
				'All my previous personal projects have been built using Vanilla JavaScript, however I recently discovered Svelte and it has become my favorite way to develop web apps.',
				'For the animations, I try to make use of CSS wherever possible to keep the web app lightweight and bundle size smaller. Although, where the animations are more complex, I used GSAP as it is a robust industry-approved animation library for JavaScript, with ample of features and really good browser support.'
			],
			url: 'portfolio-v4-abjt14.vercel.app/',
			images: [
				'./assets/images/projects/portfolio-concept-4/portfolio-concept-4-1.webp',
				'./assets/images/projects/portfolio-concept-4/portfolio-concept-4-2.webp',
				'./assets/images/projects/portfolio-concept-4/portfolio-concept-4-3.webp',
			]
		},
		{
			name: 'Portfolio Concept (Minimal)',
			technologies: [ 'Sass', 'Javascript ES6', 'GSAP', 'Webpack' ],
			image: './assets/images/projects/portfolio-concept-3.webp',
			type: 'Personal',
			role: 'Project Owner',
			description: [
				'An experimental portfolio website with a focus on minimalism.',
				'The approach for this website was to only make the essential information available to the user, and use it as a quick way to reach out the developer.',
				'For the design, I made the two main sections of the page to be partially visible when the user has scrolled to top or to bottom, reducing redundancy.'
			],
			url: 'https://abjt14.github.io/portfolio-v3/',
			images: [
				'./assets/images/projects/portfolio-concept-3/portfolio-concept-3-1.webp',
				'./assets/images/projects/portfolio-concept-3/portfolio-concept-3-2.webp',
				'./assets/images/projects/portfolio-concept-3/portfolio-concept-3-3.webp',
			]
		},
		{
			name: 'Portfolio Concept (All Colors)',
			technologies: [ 'Sass', 'Javascript ES6', 'GSAP', 'Webpack' ],
			image: './assets/images/projects/portfolio-concept-2.webp',
			type: 'Personal',
			role: 'Project Owner',
			description: [
				'The inspiration for this portfolio website concept comes from Vercel\'s main website. The contrasting colors on a white/black background gives of an active and modern vibe.',
				'In order to incorporate those emotions into my website, I used CSS to rotate the hue of the text across the color wheel, making the design look lively.'
			],
			url: 'https://abjt14.github.io/portfolio-v2',
			images: ['./assets/images/projects/portfolio-concept-2/portfolio-concept-2-1.webp']
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

	const handleProjectClick = (
		name_value,
		type_value,
		role_value,
		technologies_value,
		description_value,
		url_value,
		images_value
	) => {
		name.set(name_value);
		type.set(type_value);
		role.set(role_value);
		technologies.set(technologies_value);
		description.set(description_value);
		url.set(url_value);
		images.set(images_value);
		modalActive.set(true);
	}
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
			<div
				on:mouseenter={() => handleProjectMouseEnter(i)}
				on:mouseleave={handleProjectMouseLeave}
				on:click={() => handleProjectClick(
					project.name,
					project.type,
					project.role,
					project.technologies,
					project.description,
					project.url,
					project.images
				)}
			>
				<ProjectListingItem
					number={i + 1}
					name={project.name}
					technologies={project.technologies}
				/>
			</div>
		{/each}
	</div>
	<div class="display" bind:this={imageDisplayContainer}>
		<img bind:this={imageDisplayElement} id="project-display-image" src="./assets/images/projects/sift-mobile-application.webp" alt="screenshot of selected project">
	</div>
	<span class="hint">← hover the projects to discover</span>
</div>

<style lang="scss">
	#projects {
		padding: 10vw 2rem;
		z-index: 3;
		display: grid;
		grid-template-columns: 5fr 4fr;
		position: relative;

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

		.hint {
			position: absolute;
			top: 50%;
			left: 100%;
    	left: calc(100% - 2rem);
			transform: translate(-100%, -50%);
			width: max-content;
			font-size: 2rem;
			text-align: center;
			z-index: 2;
			pointer-events: none;

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