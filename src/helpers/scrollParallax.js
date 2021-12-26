import { gsap } from "gsap"

class ScrollParallaxElement {
	constructor(selector, start, end, direction = 'y') {
		if (document.querySelector(selector)) {
			this.selector = selector;
			this.start = start;
			this.end = end;
			this.direction = direction;

			this.init();
		}
	}

	init() {
		// scroll event listener
		document.addEventListener('scroll', (e) => {
			let offset = window.scrollY / (document.body.scrollHeight - window.innerHeight);

			if (this.direction == 'y') {
				if (this.start == 0) {
					gsap.to(this.selector, {
							duration: .3,
							y: -this.end*offset,
							ease: "Power1.easeOut"
						}
					)
				} else if (this.end == 0) {
					gsap.to(this.selector, {
							duration: .3,
							y: -this.start*(1 - offset),
							ease: "Power1.easeOut"
						}
					)
				}
			} else if (this.direction == 'x') {
				if (this.start == 0) {
					gsap.to(this.selector, {
							duration: .3,
							x: -this.end*offset,
							ease: "Power1.easeOut"
						}
					)
				} else if (this.end == 0) {
					gsap.to(this.selector, {
							duration: .3,
							x: -this.start*(1 - offset),
							ease: "Power1.easeOut"
						}
					)
				}
			}
		})
		// scroll event listener end
	}
}

export { ScrollParallaxElement }