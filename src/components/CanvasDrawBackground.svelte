<script>
	import { onMount } from "svelte";
	import { gsap } from "gsap";

	onMount(() => {
		const canvasDraw = () => {
			let x;
			let y;
			let transparencyPercentage = 100;

			const bgcCanvasHelper = document.querySelector('#bgc-canvas-helper');
			const colorArray = ['#00dcff', '#ffc521', '#ff5851', '#ffffff'];

			let selectedColor = colorArray[0];
			let drawing = true;
			let bgcChangeRunning = false;

			const isMobile = /Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent);

			const canvas = document.querySelector('canvas');
			const context = canvas.getContext('2d');

			canvas.height = innerHeight;
			canvas.width = innerWidth;

			window.addEventListener('resize', (e) => {
				canvas.height = innerHeight;
				canvas.width = innerWidth;
			})

			document.querySelector('html').addEventListener('mousemove', (e) => {
				if (drawing) {
					context.beginPath();

					context.moveTo(x, y);
					context.lineCap = "round";
					context.lineTo(e.clientX, e.clientY);
					context.strokeStyle = selectedColor;
					context.lineWidth = innerWidth / 7;
					if (isMobile) {
						context.lineWidth = innerHeight / 5;
					} else {
						context.lineWidth = innerWidth / 6.5;
					}
					context.stroke();

					if (isMobile) {
						context.arc(e.clientX, e.clientY, innerHeight / 10, 0, 2 * Math.PI);
					} else {
						context.arc(e.clientX, e.clientY, innerWidth / 13, 0, 2 * Math.PI);
					}
					context.fillStyle = selectedColor;
					context.fill();

					context.closePath();

					x = e.clientX;
					y = e.clientY;

					transparencyPercentage = transparency()
					if (!isMobile) {
						if (transparencyPercentage <= 50) {
							beforeColorSwitch();
						}
					} else {
						if (transparencyPercentage <= 75) {
							beforeColorSwitch();
						}
					}
				} else {
					x = e.clientX;
					y = e.clientY;
				}
			})

			const beforeColorSwitch = () => {
				if (selectedColor !== '#ffffff') {
				} else {
				}

				if (!bgcChangeRunning) {
					bgcChangeRunning = true;
					drawing = false;
					bgcCanvasHelper.style.top = y + 'px';
					bgcCanvasHelper.style.left = x + 'px';
					bgcCanvasHelper.style.backgroundColor = selectedColor;
					bgcCanvasHelper.style.height = innerHeight > innerWidth ? `${innerHeight*2.5}px` : `${innerWidth*2.5}px`;
					bgcCanvasHelper.style.width = innerHeight > innerWidth ? `${innerHeight*2.5}px` : `${innerWidth*2.5}px`;
					bgcCanvasHelper.style.transform = 'translate(-50%, -50%) scale(1)';

					setTimeout(() => {
						document.querySelector('html').style.backgroundColor = selectedColor;
						document.documentElement.style.backgroundColor = selectedColor;
						bgcCanvasHelper.style.transform = 'translate(-50%, -50%) scale(0)';
						bgcCanvasHelper.style.height = '0px';
						bgcCanvasHelper.style.width = '0px';
						context.clearRect(0, 0, canvas.width, canvas.height);
						colorSwitcher();
						drawing = true;
						bgcChangeRunning = false;
					}, 1000);
				}
			}

			document.addEventListener('touchstart', (e) => {
				let touch = e.touches[0];
				x = touch.clientX;
				y = touch.clientY;
			})

			document.addEventListener('touchmove', (e) => {
				let touch = e.touches[0];
				const mouseEvent = new MouseEvent("mousemove", {
					clientX: touch.clientX,
					clientY: touch.clientY
				});
				document.querySelector('html').dispatchEvent(mouseEvent);
			})

			const transparency = () => {
				let pixelCount = canvas.width * canvas.height;
				let arrayElemsCount = pixelCount * 4;
				let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
				let dataArray = imageData.data;
				let threshold = 0;
				let transparentPixelCount = 0;
				for (let i = 3; i < arrayElemsCount; i+= 4) {
						let alphaValue = dataArray[i];
						if (alphaValue <= threshold) {
								transparentPixelCount++;
						}
				}
				let transparencyPercentage = (transparentPixelCount / pixelCount) * 100;

				return transparencyPercentage;
			}

			const colorSwitcher = () => {
				if (colorArray[colorArray.indexOf(selectedColor) + 1]) {
					selectedColor = colorArray[colorArray.indexOf(selectedColor) + 1];
				} else {
					selectedColor = colorArray[0];
				}
			}
		}

		setTimeout(() => {
			canvasDraw();
		}, 2000);
	})
</script>

<canvas></canvas>
<div id="bgc-canvas-helper"></div>

<style>
	canvas {
		position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
		pointer-events: none;
	}

	#bgc-canvas-helper {
		position: fixed;
    top: 0;
    left: 0;
    height: 0;
    width: 0;
    z-index: -1;
    background-color: #fff;
    border-radius: 50%;
    transform-origin: center center;
    transform: translate(-50%, -50%) scale(0);
    transition: height 1s ease,width 1s ease;
	}
</style>