<script>
  import { onMount } from "svelte";
  import Nav from "./components/Nav.svelte";
  import Hero from "./components/Hero.svelte";
  import Projects from "./components/Projects.svelte";
  import Technologies from "./components/Technologies.svelte";
  import About from "./components/About.svelte";
  import Contact from "./components/Contact.svelte";
  import NoiseBackground from "./components/NoiseBackground.svelte";
  import CanvasDrawBackground from "./components/CanvasDrawBackground.svelte";
  import { scrolledRatio } from "./helpers/stores.js";
  import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";

  onMount(() => {
    // scroll event listener
    document.addEventListener("scroll", (e) => {
      let offset = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      scrolledRatio.update((s) => offset);
    });

		// ********** code for smooth scrolling init **********
    gsap.registerPlugin(ScrollTrigger);
    const smoothScroll = (content, viewport, smoothness) => {
      content = gsap.utils.toArray(content)[0];
      smoothness = smoothness || 1;

      gsap.set(viewport || content.parentNode, {
        overflow: "hidden",
        position: "fixed",
        height: "100%",
        width: "100%",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      });
      gsap.set(content, { overflow: "visible", width: "100%" });

      let getProp = gsap.getProperty(content),
        setProp = gsap.quickSetter(content, "y", "px"),
        setScroll = ScrollTrigger.getScrollFunc(window),
        removeScroll = () => (content.style.overflow = "visible"),
        killScrub = (trigger) => {
          let scrub = trigger.getTween
            ? trigger.getTween()
            : gsap.getTweensOf(trigger.animation)[0]; // getTween() was added in 3.6.2
          scrub && scrub.kill();
          trigger.animation.progress(trigger.progress);
        },
        height,
        isProxyScrolling;

      function refreshHeight() {
        height = content.clientHeight;
        content.style.overflow = "visible";
        document.body.style.height = height + "px";
        return height - document.documentElement.clientHeight;
      }

      ScrollTrigger.addEventListener("refresh", () => {
        removeScroll();
        requestAnimationFrame(removeScroll);
      });
      ScrollTrigger.defaults({ scroller: content });
      ScrollTrigger.prototype.update = (p) => p; // works around an issue in ScrollTrigger 3.6.1 and earlier (fixed in 3.6.2, so this line could be deleted if you're using 3.6.2 or later)

      ScrollTrigger.scrollerProxy(content, {
        scrollTop(value) {
          if (arguments.length) {
            isProxyScrolling = true; // otherwise, if snapping was applied (or anything that attempted to SET the scroll proxy's scroll position), we'd set the scroll here which would then (on the next tick) update the content tween/ScrollTrigger which would try to smoothly animate to that new value, thus the scrub tween would impede the progress. So we use this flag to respond accordingly in the ScrollTrigger's onUpdate and effectively force the scrub to its end immediately.
            setProp(-value);
            setScroll(value);
            return;
          }
          return -getProp("y");
        },
        scrollHeight: () => document.body.scrollHeight,
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
      });

      return ScrollTrigger.create({
        animation: gsap.fromTo(
          content,
          { y: 0 },
          {
            y: () => document.documentElement.clientHeight - height,
            ease: "none",
            onUpdate: ScrollTrigger.update,
          }
        ),
        scroller: window,
        invalidateOnRefresh: true,
        start: 0,
        end: refreshHeight,
        refreshPriority: -999,
        scrub: smoothness,
        onUpdate: (self) => {
          if (isProxyScrolling) {
            killScrub(self);
            isProxyScrolling = false;
          }
        },
        onRefresh: killScrub,
      });
    }

		if (window.innerWidth > 650) {
    	smoothScroll("main", "#content", .3);
		} else {
    	// smoothScroll("main", "#content", 0.001);
		}
		// ********** code for smooth scrolling end **********

    // gsap init
    const gsapInitTimeline = gsap.timeline();
    gsapInitTimeline
      .from("nav", {
        duration: 1.1,
        yPercent: -110,
        autoAlpha: 0,
        ease: "back.out(1)",
      })
      .from("#hero .cont-1 h1 span", {
        duration: 1,
        yPercent: 25,
        autoAlpha: 0,
        ease: "back.out(.75)",
        stagger: 0.125,
      })
      .from(
        "#go-to-contact-cta",
        { duration: 1, xPercent: -10, autoAlpha: 0, ease: "back.out(1.5)" },
        "-=.85"
      )
      .from("#hero .cont-2 button, #hero .cont-2 a", { duration: .75, autoAlpha: 0, y: '5vh', stagger: .075 }, "-=.85");
    // gsap end
  });
</script>

<svelte:head>
  <meta
    name="description"
    content="I build engaging web-based experiences for my audience."
  />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@200;300;400;500;600&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<Nav />
<div id="content">
  <main>
    <Hero />
		<Projects />
    <Technologies />
		<About />
    <Contact />
  </main>
</div>
<CanvasDrawBackground />
<NoiseBackground />

<style lang="scss">
  main {
    overflow: visible;
    width: 100%;

    @media screen and (max-width: 650px) {
      position: relative;
      top: unset;
      left: unset;
    }
  }

  :global(html) {
    font-size: 1vw;

		@media screen and (max-width: 2200px) {
			font-size: 22px;
		}

		@media screen and (max-width: 2000px) {
			font-size: 20px;
		}

		@media screen and (max-width: 1800px) {
			font-size: 18px;
		}

		@media screen and (max-width: 1600px) {
			font-size: 16px;
		}

		@media screen and (max-width: 1400px) {
			font-size: 14px;
		}

		@media screen and (max-width: 1200px) {
    	font-size: 14px;
		}

    @media screen and (max-width: 1000px) {
    	font-size: 10px;
    }

    @media screen and (max-width: 650px) {
    	font-size: 16px;
    }
  }

  :global(.backdrop-filter-hue-rotate) {
    animation: bfhr-animation 8s infinite linear;

    @keyframes bfhr-animation {
      0% {
        backdrop-filter: hue-rotate(0deg);
        -webkit-backdrop-filter: hue-rotate(0deg);
      }
      100% {
        backdrop-filter: hue-rotate(360deg);
        -webkit-backdrop-filter: hue-rotate(360deg);
      }
    }
  }
</style>
