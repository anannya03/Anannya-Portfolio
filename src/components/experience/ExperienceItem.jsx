import { Chip } from "../util/Chip";
import Reveal from "../util/Reveal";
import { ExperienceModal } from "./ExperienceModal";
import {useState } from "react";


export const ExperienceItem = ({
  title,
  position,
  time,
  location,
  description,
  tech,
  modalContent,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>

    <div onClick={() => setIsOpen(true)} className="mb-6 border-b pb-6 border-white">
      <div className="flex items-center justify-between mb-2">
        <Reveal>
          <span className="font-bold text-xl">{title}</span>
        </Reveal>
        <Reveal>
          <span>{time}</span>
        </Reveal>
      </div>

      <div className="flex items-center justify-between mb-4">
        <Reveal>
          <span className="text-amber font-bold">{position}</span>
        </Reveal>
        <Reveal>
          <span>{location}</span>
        </Reveal>
      </div>
      <Reveal>
        {/* <p className="mb-6 text-zinc-300 leading-relaxed">{description}</p> */}
        <p className="mb-6 text-zinc-300 leading-relaxed">
          {description}{" "}
          <br/>
          <span
            className="inline-block text-sm text-amber cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            Learn more {">"}
          </span>
        </p>
      </Reveal>
      <Reveal>
        <div className="flex flex-wrap gap-2">
          {tech.map((item) => (
            <Chip key={item}>{item}</Chip>
          ))}
        </div>
      </Reveal>

    </div>
    <ExperienceModal
        modalContent={modalContent}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        title={title}
        position={position}
        tech={tech}
      />
    </>
    
  );
};
