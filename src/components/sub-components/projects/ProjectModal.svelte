<script>
  import {
    name,
    type,
    role,
    technologies,
    description,
    url,
    images,
    modalActive,
  } from "../../../helpers/stores.js";
</script>

<div id="project-modal" class={$modalActive ? "active" : ""}>
  <div class="go-back">
    <button
      on:click={() => {
        modalActive.set(false);
      }}
    >
      <svg
        width="14"
        height="24"
        viewBox="0 0 14 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.731 21.473L3.16709 11.999L12.731 2.52509C12.9022 2.35582 12.998 2.1286 12.998 1.89198C12.998 1.65536 12.9022 1.42814 12.731 1.25887C12.6478 1.17691 12.5485 1.1118 12.439 1.06735C12.3294 1.0229 12.2118 1 12.093 1C11.9741 1 11.8565 1.0229 11.747 1.06735C11.6374 1.1118 11.5382 1.17691 11.455 1.25887L1.27866 11.3375C1.09999 11.5145 1 11.7519 1 11.999C1 12.2462 1.09999 12.4836 1.27866 12.6606L11.453 22.7392C11.5363 22.8217 11.6358 22.8873 11.7457 22.9321C11.8556 22.9769 11.9737 23 12.093 23C12.2123 23 12.3304 22.9769 12.4403 22.9321C12.5502 22.8873 12.6497 22.8217 12.7329 22.7392C12.9041 22.5699 13 22.3427 13 22.1061C13 21.8695 12.9041 21.6422 12.7329 21.473L12.731 21.473Z"
          fill="white"
          stroke="white"
        />
      </svg>
      Go Back
    </button>
  </div>
  <div class="content">
		<div class="name">{$name}</div>
    <div class="column">
      <div class="info">
        <div class="item">
          <div class="label">Project Type</div>
          <div class="text">{$type}</div>
        </div>
        <div class="item">
          <div class="label">Role</div>
          <div class="text">{$role}</div>
        </div>
        <div class="item">
          <div class="label">Technologies Used</div>
          <div class="text">{$technologies.join(", ")}</div>
        </div>
      </div>
      <a href={$url} target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
    <div class="column">
			{#each $description as text}
				<span>{text}</span>
			{/each}
    </div>
  </div>
  <div class="images">
    {#each $images as image}
      <img src={image} alt="project screens" />
    {/each}
  </div>
</div>

<style lang="scss">
  #project-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: auto;
    background-color: hsl(0deg 0% 8%);
    color: hsl(0deg 0% 90%);
    padding: 2rem;
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4.66rem;
    opacity: 0;
    pointer-events: none;
    z-index: 10;
    transition: opacity 0.3s ease;
		font-family: 'Inter', sans-serif;

    .content {
      display: grid;
      gap: 2rem;
			grid-template-columns: 1fr 1fr;

			.name {
				font-weight: 400;
				font-size: 3rem;
				grid-column: 1 / -1;
			}

			.column {
				flex: 1;
        display: flex;
        flex-direction: column;
			}

      .column:nth-child(2) {
        gap: 3rem;
        justify-content: space-between;

        .info {
          display: flex;
          gap: 1.5rem;
          flex-direction: column;

          .item {
            display: flex;
            gap: .25rem;
            flex-direction: column;

            .label {
              font-size: 1.25rem;
              font-weight: 300;
							color: hsl(0deg 0% 55%);
            }

            .text {
              font-size: 1.25rem;
              font-weight: 400;
            }
          }

					@media screen and (max-width: 650px) {
						gap: 1rem;
					}
        }

        a {
          background: #fff;
          color: #000;
          font-size: 1rem;
          font-weight: 500;
          text-align: center;
          display: flex;
          margin: 0 auto 0 0;
          padding: 0.5rem 1rem;
					border-radius: 2rem;
					transition: color .3s ease, background-color .3s ease, transform .1s ease, box-shadow .3s ease;

					&:hover {
						background-color: unset;
						color: #fff;
						box-shadow: 0 0 0 1px #fff;
					}

					&:active {
						transform: scale(.95);
					}
        }

				@media screen and (max-width: 650px) {
					gap: 2rem;
				}
      }

      .column:nth-child(3) {
        gap: 1.5rem;

        span {
          font-size: 1.25rem;
          font-weight: 300;
					line-height: 1.4;
        }

				@media screen and (max-width: 650px) {
					margin-top: 2rem;
				}
      }

			@media screen and (max-width: 650px) {
				grid-template-columns: 1fr;
			}
    }

		.images {
			display: grid;
			gap: 2rem;
			grid-template-columns: 1fr 1fr;
			justify-items: center;

			img {
				border-radius: 1rem;

				@media screen and (max-width: 650px) {
					border-radius: .5rem;
				}
			}

			:global(img:nth-child(1)) {
				grid-column: 1 / -1;
				width: 100%;
			}

			@media screen and (max-width: 650px) {
				grid-template-columns: 1fr;
			}
		}

    .go-back {
      button {
        font-family: "Inter", sans-serif;
        font-weight: 500;
        font-size: 1rem;
        color: #fff;
        background: hsl(0deg, 0%, 25%);
        padding: 0.5rem 1rem;
				display: flex;
				align-items: center;
				gap: .5rem;
				border-radius: 2rem;
				transition: box-shadow .3s ease;

				svg {
					width: auto;
					height: 1rem;
				}

				&:hover {
					box-shadow: 0 0 0 1px #fff;
				}

				&:active {
					transform: scale(.95);
				}
      }
    }

    &:global(.active) {
      opacity: 1;
      pointer-events: all;
    }

		@media screen and (max-width: 650px) {
			padding: 1rem;
		}
  }
</style>
