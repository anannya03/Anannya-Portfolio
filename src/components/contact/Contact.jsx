import { AiFillMail } from "react-icons/ai";
import Link from "next/link";
import Reveal from "../util/Reveal";

export const Contact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <div className="max-w-xl mx-auto bg-contact px-8 py-12 rounded-xl">
        <Reveal width="w-full">
          <h4 className="text-4xl md:text-5xl text-center font-black">
            Contact<span className="text-amber">.</span>
          </h4>
        </Reveal>
        <Reveal width="w-full">
          <p className="text-center my-8 text-zinc-300 leading-relaxed">
          I'm always open to discussing new opportunities, collaborations, or just having a chat about anything 
          and everything. I look forward to creating meaningful connections!
          <br/> <br/>
          Shoot me an email or reach out to me via {" "}
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              className="text-amber hover:underline"
            >
              LinkedIn.
            </Link>{" "}
          </p>
        </Reveal>
        <Reveal width="w-full">
          <Link href="mailto:anannyap@usc.edu">
            <div className="flex items-center justify-center gap-2 w-fit text-base md:text-xl whitespace-normal mx-auto text-amber hover:text-amber-dark transition-colors">
              <AiFillMail />
              <span>anannyap@usc.edu</span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
};
