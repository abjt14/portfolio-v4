<script>
	export let name;
	export let type;
	export let role;
	export let technologies;
	export let description;
	export let url;
	let goBackButton;
</script>

<div id="project">
	<div class="go-back">
		<button bind:this={goBackButton}>
			<svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M12.731 21.473L3.16709 11.999L12.731 2.52509C12.9022 2.35582 12.998 2.1286 12.998 1.89198C12.998 1.65536 12.9022 1.42814 12.731 1.25887C12.6478 1.17691 12.5485 1.1118 12.439 1.06735C12.3294 1.0229 12.2118 1 12.093 1C11.9741 1 11.8565 1.0229 11.747 1.06735C11.6374 1.1118 11.5382 1.17691 11.455 1.25887L1.27866 11.3375C1.09999 11.5145 1 11.7519 1 11.999C1 12.2462 1.09999 12.4836 1.27866 12.6606L11.453 22.7392C11.5363 22.8217 11.6358 22.8873 11.7457 22.9321C11.8556 22.9769 11.9737 23 12.093 23C12.2123 23 12.3304 22.9769 12.4403 22.9321C12.5502 22.8873 12.6497 22.8217 12.7329 22.7392C12.9041 22.5699 13 22.3427 13 22.1061C13 21.8695 12.9041 21.6422 12.7329 21.473L12.731 21.473Z" fill="white" stroke="white"/>
			</svg>
			go back
		</button>
	</div>
	<div class="content">
		<div class="column">
			<div class="name">{name}</div>
			<div class="info">
				<div class="item">
					<div class="label">Project Type</div>
					<div class="text">{type}</div>
				</div>
				<div class="item">
					<div class="label">Role</div>
					<div class="text">{role}</div>
				</div>
				<div class="item">
					<div class="label">Technologies Used</div>
					<div class="text">{technologies}</div>
				</div>
			</div>
			<a href={url} target="_blank" rel="noopener noreferrer">View Project</a>
		</div>
		<div class="column">
			<div class="text">
				{description}
			</div>
		</div>
	</div>
	<div class="images">
		
	</div>
</div>

<style lang="scss">
	#project {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #000;
		padding: 2rem;
		min-height: 100vh;
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 4.66rem;

		.go-back {
			button {
				font-family: 'Inter', sans-serif;
				font-weight: 500;
				font-size: 1rem;
				color: #fff;
				background: rgba(255, 255, 255, 0.25);
				padding: .5rem 1rem;
			}
		}
	}
</style>