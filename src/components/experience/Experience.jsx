import { SectionHeader } from "../util/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="r" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Athenahealth",
    position: "Software Engineer",
    time: "Aug 2021 - Jul 2023",
    location: "Bangalore, India",
    description:
      "I enhanced medication tracking and system efficiency by designing scalable features and developing REST APIs for the Ambulatory Care Management system. I also improved database performance, implemented telemetry logging, and significantly boosted patient care and pharmacy communication.",
    tech: [
      "Java",
      "C# .NET",
      "SpringBoot",
      "Hibernate JPA",
      "SQL",
      "OracleDB",
      "Object Oriented Design",
      "ActiveMQ",
      "Git"
    ],
    modalContent: (
      <>
        <p>
           I began my full-time career at Athenahealth in July 2021 as an Associate Member of Technical Staff and was promoted to Member of Technical Staff in August 2022.
            As a software Developer at Athenahealth, I designed and implemented multiple high-impact features for the Ambulatory Care Management system, handling the entire development process from conceptualization to deployment, developed and fine-tuned database schemas to ensure optimal performance and mentored two interns during my tenure. 
          <br/>
          </p>
          <ul>
            <li>
            1. Implemented several concurrent scalable features including transactional annotation fix and HCC coefficient inclusion, contributing to enhanced patient care and pharmacy communication, improving patient feedback by 60%.
            </li>
            <li>
            2. Formulated REST APIs to integrate DrFirst API with AthenaClinical application to send prescriptions to pharmacies, display prescription statuses, and monitor pharmacy responses, improving medication tracking by physicians by 90%
            </li>
            <li>
            3. Implemented telemetry logging for 3 services, improving error logging and system maintenance by 10%.
            </li>
            <li>
            4. Crafted Stored Procedures for 10 services to implement data purging mechanisms, resulting in optimized database storage by 6%
            </li>
            <li>
            5. Played a pivotal role in fixing transactional annotation in 16 services, enabling proper database entry and error logging in the
event of errors and negative scenarios, fixing rollback errors and ensuring 100% ACID property maintenance
            </li>
          </ul>
          
      </>
    ),
  },
  {
    title: "Athenahealth",
    position: "Software Engineer Intern",
    time: "Jan 2021 - Jul 2021",
    location: "Bangalore, India",
    description:
      "I spearheaded the upgrade and modularization of Angular components, reducing security vulnerabilities by 25%. Additionally, I led the improvement of hashing logic for prescriptions, significantly boosting medication accuracy and patient safety, and addressed high-impact bugs.",
    tech: ["Angular", "Node", "HTML", "CSS", "Git"],
    modalContent: (
      <>
        <p>
            As a Software Engineer Intern at Athenahealth, I worked on upgrading Angular modules and fixing high impact bugs and sonar issues. 
          <br/>
          </p>
          <ul>
            <li>
            1. Led the implementation of improving the hashing logic for mapping prescriptions and medications correctly, enhancing medication accuracy and patient safety for 100% of customers.
            </li>
            <li>
            2. Undertook a critical project focused on merging disparate components of Northstar project into a cohesive structure, increasing maintaibility in 100% of our UI component code. 
            </li>
            <li>
            3. Upgraded the front-end Angular components of Northstar project from V7 to V10, decreasing security vulnerability by 25%. 
            </li>
            <li>
            4. Worked on fixing 5 high impact bugs and addressed code quality concerns highlighted by Sonar and conducted necessary code improvements.
            </li>
          </ul>
      </>
    ),
  },
  {
    title: "Bounce Scooter Share",
    position: "Backend Intern",
    time: "Aug 2020 - Oct 2020",
    location: "Bangalore, India",
    description:
      "As a backend Intern, I developed REST APIs for real-time scooter tracking, designed a comprehensive scooter maintenance inventory system, and scaled the platform to handle 300,000 users daily.",
    tech: [
      "Java",
      "SpringBoot",
      "Postgres",
      "REST APIs",
      "Git"
    ],
    modalContent: (
      <>
        <p>
            As a Backend Intern at Bounce Scooter Share, I worked with the Smart Mobility team, and developed features enabling commuters to pick up a scooter from anywhere and drop it off at any legal public parking. 
          <br/>
          </p>
          <ul>
            <li>
              1. Formulated Rest APIs implementing Geolocation API and Breadth First Search algorithm for real-time scooter location tracking
to retrieve the location of the nearest available scooter, boosting user convenience by 78%
            </li>
            <li>
              2. Designed an inventory feature, keeping track of agents responsible for repairing broken scooters and the payment due per month,
ensuring seamless maintenance of 100% of scooters
            </li>
            <li>
              3. Acquired average hit rate for Dock-less Scooter model at 10,000 hits per second and scaled system to handle 300,000 users per
day in 2020
            </li>
          </ul>
      </>
    ),
  },
];
