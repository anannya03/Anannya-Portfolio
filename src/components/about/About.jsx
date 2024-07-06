import { AiOutlineArrowRight } from "react-icons/ai";
import { SectionHeader } from "../util/SectionHeader";
import Reveal from "../util/Reveal";
import { MyLinks } from "../nav/Header";
import { Stats } from "./Stats";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
        <div className="space-y-4">
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              <span className="bg-amber text-blue py-2 px-3 rounded font-bold mr-1 float-left text-2xl">
                H
              </span>
              ello! I&apos;m Anannya,  a USC Computer Science Master's candidate with a knack for 
              building scalable solutions and a passion for impactful technology. From enhancing patient 
              care systems at Athenahealth to optimizing real-time scooter tracking at Bounce, I apply my expertise 
              in Python, Java, and a suite of backend technologies to solve complex challenges. I've also ventured into frontend development with 
              Angular, Vue, and NextJS and am currently exploring Machine Learning.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
            Beyond technical skills, I actively contribute to the tech community through my involvement in ACM and 
            the Society of Women Engineers, advocating for technology as a tool for positive change.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              Outside of work, I love to bake delicious treats and feed my friends. 
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              I&apos;m actively looking for Software Development Engineering positions where I can utilize my
              love for code to create futuristic software. If you're looking for someone who blends analytical 
              prowess with innovation and strategic insight, let's connect and explore how we can drive 
              technology forward together!
              🔗
            </p>
          </Reveal>
          <Reveal>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 text-sm text-amber">
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
