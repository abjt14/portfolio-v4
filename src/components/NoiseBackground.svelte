<div id="noise-bg"></div>

<style lang="scss">
	#noise-bg {
		position: fixed;
		top: -50%;
		left: -50%;
		right: -50%;
		bottom: -50%;
		width: 400%;
		height: 400vh;
		background: transparent url('/assets/images/noise/noise.png') repeat 0 0;
		background-repeat: repeat;
		animation: 90ms infinite noise;
		z-index: 100;
		pointer-events: none;
		opacity: 1;

		@media screen and (max-width: 650px) {
			animation: none;
		}
	}

	@keyframes noise {
		0%, 100% {
			background-position: 0 0
		}
		10% {
			background-position: -5% -10%
		}
		20% {
			background-position: -15% 5%
		}
		30% {
			background-position: 7% -25%
		}
		40% {
			background-position: 20% 25%
		}
		50% {
			background-position: -25% 10%
		}
		60% {
			background-position: 15% 5%
		}
		70% {
			background-position: 0 15%
		}
		80% {
			background-position: 25% 35%
		}
			90% {
		background-position: -10% 10%
		}
	}
</style>