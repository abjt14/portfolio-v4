<script>
	export let number;
	export let name;
	export let technologies;
	export let url;

	const handleProjectClick = (url) => {
		let link = document.createElement('a');
		link.setAttribute('href', url);
		link.setAttribute('target', '_blank');
		link.setAttribute('rel', 'noopener noreferrer');
		link.click();
	}
</script>

<div class="item" on:click={() => handleProjectClick(url)}>
	<div class="number">0{number}</div>
	<div class="name">
		{name}
		<div class="technologies">
			{#each technologies as tech}
				<div class="tech-name">{tech}</div>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	.item {
		display: flex;
		cursor: pointer;

		.number {
			font-size: 1rem;
			color: rgba(0, 0, 0, .5);
			padding: 1rem 1rem 1rem 0;
			align-self: center;

			@media screen and (max-width: 650px) {
				display: none;
			}
		}

		.name {
			flex: 1;
			font-weight: 400;
			font-size: 3rem;
			color: #000000;

			.technologies {
				display: flex;
				gap: 1.83rem;

				.tech-name {
					font-size: 1.25rem;
					color: rgba(0, 0, 0, 0.75);
					font-weight: 300;
					margin-top: .25rem;

					@media screen and (max-width: 650px) {
						font-size: 1rem;
					}
				}

				@media screen and (max-width: 650px) {
					gap: 1rem;
				}
			}

			@media screen and (max-width: 650px) {
				font-size: 2rem;
			}
		}
	}
</style>