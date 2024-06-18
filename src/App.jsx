import Container from "./components/Container";
import gsap from "gsap";
import { ScrollTrigger } from "react-gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger);
const App = () => {
  useGSAP(() => {
    gsap.to(".model", {
      scrollTrigger: {
        trigger: ".App",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        markers: true,
      },
      y: 1000,
      x: 1000,
      ease: "none",
    });
  });
  return (
    <div className="App px-20">
      <div className="h-full w-full">
        <div className="mt-10 flex items-center justify-between ">
          <div className="model ">
            <Container />
          </div>
          <div>
            <h1>Best Shoes Ever!</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sit
              dignissimos maiores iste, sint eligendi laborum quaerat harum
              illo. Facilis, sapiente expedita? Sint.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[70rem] bg-black"></div>
    </div>
  );
};
export default App;
