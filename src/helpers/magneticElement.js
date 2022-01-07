import { gsap } from "gsap"

let mouseX = -1000;
let mouseY = -1000;

window.addEventListener('mousemove', (e) => {
	mouseX = e.clientX;
	mouseY = e.clientY;
});

class MagneticElement {
	constructor(selector, breakDistance = 0) {
		if (document.querySelector(selector)) {
			this.selector = selector;
			this.element = document.querySelector(selector);

			this.locked = false;

			if (breakDistance == 0) {
				this.breakDistance =
					this.element.getBoundingClientRect().width*1.2 > window.innerWidth*0.12 ?
					this.element.getBoundingClientRect().width*1.2 : window.innerWidth*0.12;
			} else {
				this.breakDistance = breakDistance;
			}

			this.setLocked();
			window.addEventListener('mousemove', (e) => {
				this.magnetize();
				this.setOnClick();
			})
			window.addEventListener('resize', (e) => {
				this.breakDistance =
					this.element.getBoundingClientRect().width*1.2 > window.innerWidth*0.12 ?
					this.element.getBoundingClientRect().width*1.2 : window.innerWidth*0.12;
			})
		} else {
			return false
		}
	}

	getDimensions() {
		let dimensions = this.element.getBoundingClientRect();
		return {
			x: dimensions.x,
			y: dimensions.y,
			top: dimensions.top,
			right: dimensions.right,
			bottom: dimensions.bottom,
			left: dimensions.left,
			height: dimensions.height,
			width: dimensions.width,
			center: [ (dimensions.left + (dimensions.width / 2)), (dimensions.top + (dimensions.height / 2)) ],
		}
	}

	magnetize() {
		if (this.locked === true) {
			const center = this.getDimensions().center;
			const setX = (mouseX - center[0])*.5;
			const setY = (mouseY - center[1])*.5;
			gsap.to(this.selector, { duration: .5, x: setX, y: setY, ease: "power1.out" })
		}
	}

	setOnClick() {
		if (this.locked === true) {
			document.body.style.cursor = 'pointer'
		} else {
			document.body.style.cursor = 'auto'
		}
		document.body.onmousedown = () => {
			if (this.locked === true) {
				this.element.click()
			}
		}
	}

	setLocked() {
		this.element.addEventListener('mouseenter', (e) => {
			this.locked = true;
		})
		window.addEventListener('mousemove', (e) => {
			const center = this.getDimensions().center;
			const distanceFromCenter = Math.sqrt( Math.pow(center[0] - mouseX, 2) + Math.pow(center[1] - mouseY, 2) );
			const sizeOffset = distanceFromCenter + (this.getDimensions().height > this.getDimensions().width ? this.getDimensions().height : this.getDimensions().width)/2;
			if (sizeOffset > this.breakDistance) {
				this.reset();
			}
		})
	}

	reset() {
		this.locked = false;
		gsap.to(this.selector, { duration: .5, x: 0, y: 0, ease: "power1.out"  })
	}
}

export { MagneticElement }