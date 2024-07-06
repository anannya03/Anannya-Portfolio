import { SectionHeader } from "../util/SectionHeader";
import { PublicationItem } from "./PublicationItem";

export const Publication = () => {
  return (
    <section className="section-wrapper" id="publication">
      <SectionHeader title="Publications" dir="r" />
      {publication.map((item) => (
        <PublicationItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const publication = [
  {
    title: "Product Classification in E-Commerce Sites",
    conference: "Springer: Progress in Advanced Computing and Intelligent Engineering (ICACIE)",
    time: "2021",
    location: "Bangalore",
    description:
      "The research utilizes supervised learning to categorize products into predefined catalog hierarchies based on their names and descriptions. Various machine learning models, including decision trees, SVM, random forest, logistic regression, and Naïve Bayes, were tested, with logistic regression achieving the highest accuracy at 91.55%.",
    citation: [
      "Patra, Anannya, et al. \"Product Classification in E-Commerce Sites.\" Progress in Advanced Computing and Intelligent Engineering. Springer, Singapore, 2021. 485-495.",
    ],
  },
  {
    title: "Air Quality Monitor using Arduino",
    conference: "International Journal of Computer Trends and Technology (IJCTT)",
    time: "2021",
    location: "Bangalore",
    description:
      "This research introduces an efficient, cost-effective, and user-friendly IoT-based indoor air quality monitor developed using Arduino Uno. The system detects harmful gases such as CO, CO2, CH4, SO2, Acetone, and NH3, sends sensor data to the cloud, and provides users with real-time updates and alerts through interactive graphs and email notifications. This initiative addresses the growing concern over indoor air pollutants, exacerbated by increased indoor time due to the COVID-19 pandemic.",
    citation: [ "Anannya Patra, Arvind S, Gautham M K, Sreelatha R, \"Air Quality Monitor using Arduino,\"International Journal of Computer Trends and Technology, vol. 69, no. 7, pp. 29-34, 2021.Crossref, 10.14445/22312803/IJCTT-V69I7P104"
   ],
  },
  {
    title: "Greening Data Centres- Holistic Methodology",
    conference: "International Journal of Engineering Research and Technology (IJERT)",
    time: "2021",
    location: "Bangalore",
    description:
      "The research addresses the high energy consumption and carbon footprint of data centers due to advanced hardware and cooling systems. It reviews solutions for reducing energy use without sacrificing efficiency and discusses challenges in in achieving these greening objectives for the data centers.",
    citation: [
      "Anannya Patra, Anirudh B, Arvindh S K, Gautham M K, Irene Komal P, Lalitashree Hedge, Dr. Sheela S V, 2021, Greening Data Centers- Holistic Methodology, INTERNATIONAL JOURNAL OF ENGINEERING RESEARCH & TECHNOLOGY (IJERT) NCREIS – 2021 (Volume 09 – Issue 13)"
    ],
  },
];
