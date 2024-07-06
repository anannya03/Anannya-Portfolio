import React from "react";
import { SectionHeader } from "../util/SectionHeader";
import { Project } from "./Project";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="l" />

      <div className="grid gap-12 grid-cols-1 md:grid-cols-2">
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "StockStream",
    imgSrc: "project-imgs/stock.png",
    code: "https://github.com/anannya03/stockStream",
    projectLink: "https://stockprojectanannya.wl.r.appspot.com/",
    tech: ["Angular", "Node", "Express", "MongoDB", "Bootstrap"],
    description:
      "A real-time stock-trading and portfolio management web application.",
    modalContent: (
      <>
        <p>
          StockStream is a web application, devised for stock trading and portfolio management, featuring real
          time updates on stock prices and company&apos;s financial data, and current news, enhancing 60% user experience.
        </p>
        <p>
        I utilized the Finnhub and Highcharts APIs to retrieve stock prices and company data for my project. 
        The backend is developed using Node.js and Express, while MongoDB serves as the database. The frontend is built 
        with Angular, and the entire application is hosted on Google Cloud Platform (GCP).
        </p>
        <p>
          <span className = "font-black text-amber">Background Story: </span>
          On a vibrant spring evening in my Webtech class, we were handed a daunting project with a mere month to execute. 
          Our professor made it crystal clear: this was no small task and demanded a full month's dedication. 
          Bright and early the next day, I dove headfirst into learning Node.js for the backend, juggling it 
          with prep for my looming NLP midterm next week.
        </p>
        <p>
        Just when I thought I had my schedule under control, an unexpected twist hit my inbox: an interview invite from Google.
        Overwhelmed, excited, and petrified, I dropped everything to prepare. Fast forward twenty-one days, and the Google 
        interview crashed and burned, leaving me gutted and frantically questioning my choices. 
        Now, with the clock ticking down and only five days left, panic set in. I was starkly unprepared, knowing next to 
        nothing about Node, Express, Angular, MongoDB and GCP.
        </p>
        <p>
        Then came the marathon: five relentless days and nights fueled by caffeine highs and powered by mere two hours of 
        sleep and instant noodles. Despite countless moments of doubt, my drive kicked in, pushing me through the finish line.
        </p>
        <p>
        Here it is— <span className = "text-amber">The &apos;Where there is a will, There is a Way&apos; Project.</span>
        </p>
      </>
    ),
  },
  {
    title: "Ideate Forum",
    imgSrc: "project-imgs/ideate.png",
    code: "https://github.com/anannya03/ideate-forum",
    projectLink: "http://13.49.238.225/",
    tech: ["Django", "SQLite", "Python", "Bootstrap", "jQuery"],
    description:
      "A social community where individuals can explore different ideas and put forth their unique content.",
    modalContent: (
      <>
        <p>
        Ideate is a Django application aiming to provide a social community for users to explore and share inspirational ideas 
        across 10+ categories, resulting in a 25% growth in unique content submissions
        </p>
        <p>
        The team consisted of 2 developers. I worked primarily on the frontend, and the backend part was divided between us 
        developers equally, to give us a chance to learn Django.
        </p>
        <p>
        <span className = "font-black text-amber">Background Story: </span>
        The inspiration for this project dates back to 2020. My friend and I wanted to work on a project but struggled to come up with something novel, unique, and interesting. 
        
        </p>
        <p>
        Then it hit us: a platform where people could post their ideas for different categories. We 
        jotted down all the requirements and usecases for our application, and thought it would be a great idea to keep a 
        word limit for the post, so that the users don't get overwhelmed with too much content. 
        Afterall, Less is more, is it not? {";))"}
        </p>
        <p>
        However, life got in the way, and we never finished what we had started—until some time back.
</p>
        <p>
          I present to you- <span className = "text-amber">The &apos;Necessity is the mother of All Creations&apos; Project</span>
        </p>
      </>
    ),
  },
  {
    title: "ChordPro",
    imgSrc: "project-imgs/piano.png",
    code: "https://github.com/anannya03/MoodMelody",
    projectLink: "https://moodmelody.netlify.app/",
    tech: ["VueJS", "Flask", "SQLite", "ToneJS", "Bulma"],
    description:
    "A tool to automatically generates chord progressions according to chosen moods, paired with a virtual piano for interactive playback.",
    modalContent: (
      <>
        <p>
        ChordPro is an application that creates chord progressions tailored to user-selected moods (Happy, Sad, Anxious, Calm), 
        complemented by a virtual piano for hands-on playing.
        </p>
        <p>
          To enable the generation of chords, we have used the HookTheory API and Spotipy, with Flask for the Python backend. 
          The frontend is developed in VueJS, and for the audio of the piano, we have made use of Tone.js
        </p>
        <p>
        <span className = "font-black text-amber">Background Story: </span>
        I have a small circle of friends, many of whom are musicians. This turned out to be a great advantage because it led me 
        to this project. Often, our conversations would revolve around music theory, its significance, and the challenges faced
         by beginners who want to learn a new instrument and start creating their own music.
        </p>
        <p>
        With this realization, an idea struck: to create a tool that helps musicians, producers, content creators, and anyone 
        interested find the right chord progression for the mood they want to create with their music. The primary aim is to 
        assist novice musicians in getting started with music composition.
        </p>
        <p>
          But, this project gave me all sorts of nightmares. Firstly, I knew as much about music as the ant next door, so I had 
          to take a few online music lessons just to get comfortable with the topic. With the help of another developer who was
           also a musician, I managed to figure out the backend. But the frontend was an entirely different challenge and nearly
          drove me crazy.
        </p>
        <p>
          But, all is well that ends well. <br/>
          Presenting you with- <span className = "text-amber"> The &apos;No Pain No Gain&apos; Project</span>
        </p>
      </>
    ),
  },
  {
    title: "HealthGenix",
    imgSrc: "project-imgs/gym.png",
    code: "https://github.com/anannya03/HealthGenix",
    projectLink: "https://youtu.be/vlYvKmEqkuo",
    tech: ["Android Studio", "SQLite", "Figma"],
    description:
      "A unified health platform, where users can track nutrition, follow fitness routine, buy membership in desired gyms and book group classes.",
    modalContent: (
      <>
        <p>HealthGenix is an Android application that provides an online platform for users to buy memberships 
          in desired partner gyms, book group classes based on availability, follow fitness routine, 
          and track nutrition intake. </p>
        <p>
          This is my baby, and a project I hold very very dearly to my heart. 
        </p>
        <p>
        <span className = "font-black text-amber">Background Story: </span>
        This project was completed as part of my undergraduate degree back in 2021. The first reason I love this project is that it was the first and last one I did with my best friend, who left the tech field to pursue her passion (sad for me but yay for her!). The second and most important reason is the immense effort I put into it. I spent countless days researching app structures, analyzing various applications, visiting multiple gyms, and drawing color inspiration from everywhere.
        </p>
        <p>
        My goal was to combine the best features of multiple applications into one unified platform for user convenience. The project took us a solid two months to complete, during which I lived and breathed this app, constantly refining the design and adding new functionalities. 
        </p>
        <p>
        Our hard work paid off with a standing ovation from the entire class and the 'Most Detailed Project' award. To this day, it remains one of the projects I am most proud of.
        </p>
        <p>
          With this, I present you <span className = "text-amber">The &apos;Leave No Stones Unturned&apos; Project</span>
        </p>
      </>
    ),
  },
  {
    title: "StockStream IOS",
    imgSrc: "project-imgs/stockStream1.png",
    code: "https://github.com/anannya03/stockStream-IOS",
    projectLink: "https://youtu.be/yxgf4gaVXes",
    tech: ["NodeJS", "Swift", "Express", "MongoDB"],
    description:
    "IOS app to enable real-time stock-trading and portfolio management.",
    modalContent: (
      <>
        <p>
        StockStream IOS is the IOS version of the earlier mentioned StockStream web application. The functionalities remain the same.
        It is devised for stock trading and portfolio management, featuring real
          time updates on stock prices and company&apos;s financial data, and current news.
        </p>
        <p>
        I utilized the Finnhub and Highcharts APIs to retrieve stock prices and company data for my project. 
        The backend is developed using Node.js and Express, while MongoDB serves as the database. The app is built via Swift.
        </p>
        <p>
        <span className = "font-black text-amber">Background Story: </span>
          There is no fancy story behind this. 
          It's just that At this point in my life, I'm navigating through uncertainties, exploring new paths, and striving to give my best despite the challenges of the job market.
          Having successfully developed a fulfilling web application for Stock Trade, I wanted to try out a new technology
          and recreated the same project as an iOS application.
          This journey into a new technology has been both daunting and rewarding, as I continue to learn, adapt, and grow as a developer.
        </p>
        <p>
          Here it is- <span className = "text-amber"> The &apos;Give It A Go&apos; Project</span>
        </p>
      </>
    ),
  },
  {
    title: "T3Gen Model",
    imgSrc: "project-imgs/T3Gen.png",
    code: "https://github.com/anannya03/T3Gen-Model",
    projectLink: "https://github.com/anannya03/T3Gen-Model",
    tech: ["Python", "Transformers", "PyTorch", "QLoRA"],
    description:
    "T3Gen aims to streamline the test case creation process, reduce manual effort, and enhance the overall efficiency and reliability of TDD practices.",
    modalContent: (
      <>
        <p>
        T3Gen Model is a Text-to-Testcase generation using CodeLlama with LoRA. This method aims to streamline the test case 
        creation process, reduce manual effort, and enhance the overall efficiency and reliability of TDD practices.
        </p>
        <p>
        Our approach leverages the natural language understanding capabilities of the CodeLlama-7B model, enhanced with LoRA 
        techniques to adapt the model to the specific nuances of TDD testcase generation. We evaluate our method using the
        Python-based MBPP dataset, comparing it against traditional CodeLLM baselines. Our evaluation metrics,
including Pass@1 accuracy, assess the effectiveness of our model in generating accurate and reliable test cases for TDD.
        </p>
        <p>
        Preliminary results show a promising increase in accuracy by up to 10%, particularly when employing both text and code prompts in the training process.
        </p>
        <p>
          Here it is- <span className = "text-amber"> The &apos;Venturing into Uncharted Territory&apos; Project</span>
        </p>
      </>
    ),
  },
];
