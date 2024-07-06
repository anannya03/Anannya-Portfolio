import Reveal from "../util/Reveal";
import DotGrid from "./DotGrid";
import { OutlineButton } from "../buttons/OutlineButton";

const Hero = () => {
  return (
    <section className="text-slat-100 overflow-hidden py-24 md:py-32" id="hero" dir="l">
      <div className="relative">
        <div className="pointer-events-none relative z-10">
          <Reveal>
            <h1 className="pointer-events-auto text-4xl sm:text-6xl font-black text-white md:text-8xl">
              Hi, I'm Anannya<span className="text-amber">.</span>
            </h1>
          </Reveal>
          <Reveal>
            <h2 className="pointer-events-auto my-2 text-xl sm:text-2xl text-zinc-300 md:my-4 md:text-4xl">
              I'm a{" "}
              <span className="font-semibold text-amber">
                Full Stack Developer
              </span>
            </h2>
          </Reveal>
          <Reveal>
            <p className="pointer-events-auto leading-relaxed md:leading-relaxed max-w-xl text-sm text-zinc-300 md:text-base">
            I'm a developer transforming ideas into software, one feature at a time. <br/>
            I'm somewhat of a 'Jack of Multiple Trades', as I love to get my hands dirty and try out new things, 
            out of curiosity, but mostly just for the fun of it. <br/>
            If this intrigues you, Let's connect!
            </p>
          </Reveal>
          <Reveal>
            <OutlineButton
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView();
              }}
              className="pointer-events-auto before:bg-amber-dark hover:text-black hover:border-amber mt-4 bg-amber text-black border-amber md:mt-6"
            >
              Contact Me
            </OutlineButton>
          </Reveal>
        </div>
        <DotGrid />
      </div>
      <div></div>
    </section>
  );
};

export default Hero;
