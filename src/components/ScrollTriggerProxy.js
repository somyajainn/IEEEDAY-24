import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const ScrollTriggerProxy = () => {
  const { scroll } = useLocomotiveScroll();
  
  // Register GSAP ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (scroll) {
      const element = scroll.el;

      // Update ScrollTrigger on Locomotive Scroll
      scroll.on("scroll", ScrollTrigger.update);

      // Setup ScrollTrigger proxy
      ScrollTrigger.scrollerProxy(element, {
        scrollTop(value) {
          return arguments.length
            ? scroll.scrollTo(value, 0, 0)
            : scroll.scroll.instance.scroll.y;
        },
        // We don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        // Determine pinType based on the presence of a transform style
        pinType: element.style.transform ? "transform" : "fixed",
      });
    }

    // Cleanup
    return () => {
      // Update the Locomotive Scroll instance when ScrollTrigger is refreshed
      ScrollTrigger.addEventListener("refresh", () => scroll?.update());
      ScrollTrigger.refresh();
    };
  }, [scroll]);

  return null;
};

export default ScrollTriggerProxy;
