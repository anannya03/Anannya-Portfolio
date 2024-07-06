import { Chip } from "../util/Chip";
import Reveal from "../util/Reveal";
import { AiFillCode, AiFillSmile } from "react-icons/ai";

export const Stats = () => {
  return (
    <div className="relative">
      <Reveal>
        <div>
          <h4 className="flex items-center mb-6">
            <AiFillCode className="text-amber text-2xl" />
            <span className="font-bold ml-2">Work Experience Skills</span>
          </h4>
          <div className="flex flex-wrap gap-2 mb-12">
            <Chip>Java</Chip>
            <Chip>Spring Boot</Chip>
            <Chip>Hibernate JPA</Chip>
            <Chip>SQL Database</Chip>
            <Chip>Angular</Chip>
            <Chip>Oracle Database</Chip>
            <Chip>NodeJS</Chip>
            <Chip>Postgres</Chip>
            <Chip>Git</Chip>
            <Chip>HTML</Chip>
            <Chip>CSS</Chip>
            <Chip>ActiveMQ</Chip>
            <Chip>C# .NET</Chip>
            <Chip>REST API</Chip>
            <Chip>Agile Methodology</Chip>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div>
          <h4 className="flex items-center mb-6">
            <AiFillSmile className="text-amber text-2xl" />
            <span className="font-bold ml-2">Projects Skills</span>
          </h4>
          <div className="flex flex-wrap gap-2 mb-12">
            <Chip>React</Chip>
            <Chip>Tailwind</Chip>
            <Chip>NextJS</Chip>
            <Chip>Figma</Chip>
            <Chip>MongoDB</Chip>
            <Chip>Python</Chip>
            <Chip>Bootstrap</Chip>
            <Chip>jQuery</Chip>
            <Chip>Django</Chip>
            <Chip>Flask</Chip>
            <Chip>Express</Chip>
            <Chip>Google Cloud Platform</Chip>
            <Chip>Natural Language Processing</Chip>
            <Chip>Machine Learning</Chip>
            <Chip>TensorFlow</Chip>
            <Chip>NLTK</Chip>
            <Chip>PyTorch</Chip>
            <Chip>Sentiment Analysis</Chip>
            <Chip>Named Entity Recognition</Chip>
            <Chip>Go</Chip>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
