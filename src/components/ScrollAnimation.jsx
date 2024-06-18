import React, { useRef, useEffect } from "react";
import { Model } from "./Model";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"; // Import ScrollTrigger

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

function ScrollAnimation() {
  const shoeRef = useRef();

  useEffect(() => {
    // Ensure ScrollTrigger is enabled
    gsap.to(shoeRef.current.rotation, {
      scrollTrigger: {
        trigger: shoeRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
      y: Math.PI * 2,
      ease: "none",
    });
  }, []);

  return (
    <div ref={shoeRef} style={{ height: "200vh" }}>
      <Model />
    </div>
  );
}

export default ScrollAnimation;
