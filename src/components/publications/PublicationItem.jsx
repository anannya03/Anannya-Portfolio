import { Chip } from "../util/Chip";
import Reveal from "../util/Reveal";

export const PublicationItem = ({
  title,
  conference,
  time,
  location,
  description,
  citation,
}) => {
  return (
    <div className="mb-6 border-b pb-6 border-zinc-700">
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
          <span className="text-amber font-bold">{conference}</span>
        </Reveal>
        <Reveal>
          <span>{location}</span>
        </Reveal>
      </div>
      <Reveal>
        <p className="mb-6 text-zinc-300 leading-relaxed">{description}</p>
      </Reveal>
      <Reveal>
      <p className="mb-6 italic text-zinc-300 leading-relaxed"><span className="text-amber not-italic">Citation:</span> {citation}</p>
      </Reveal>
    </div>
  );
};
