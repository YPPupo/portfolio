import PanelImage from "@/assets/img/piedrasvivas_panel.png";
import ApiImage from "@/assets/img/piedrasvivas_api.png";
import AppImage from "@/assets/img/piedrasvivas_app.png";
import AppPrayer from "@/assets/img//diario_de_oracion.png";

interface ExperienceItem {
  positionTitle: string;
  companyName: string;
  activities: string[];
  techs: string[];
}

export const ExperienceItems: ExperienceItem[] = [
  {
    positionTitle: "Fullstack Developer",
    companyName: "La Liguilla",
    activities: [
      "- Actively contributed to the implementation of best practices in Angular for incorporating new features designed by stakeholders.",
      "- Collaborated on the design of the platform using tools like Figma.",
      "- Seamlessly integrated functionalities with the backend developed in .NET.",
      "- Proactively identified and resolved errors, ensuring optimal performance.",
      "- Provided valuable suggestions to enhance the user experience.",
    ],
    techs: ["Angular", ".NET", "Figma", "Azure"],
  },
  {
    positionTitle: "Frontend Developer",
    companyName: "Code Works Labs - Square Script Project",
    activities: [
      "- Designed and developed the “Square Script” project using ReactJs and Figma.",
      "- Integrated services such as Firebase, OpenAI, and Stripe.",
      "- Successfully deployed the site using Hostinger.",
      "- Collaborated closely with stakeholders to refine project requirements.",
    ],
    techs: ["React.js", "Firebase", "OpenAI", "Figma"],
  },
  {
    positionTitle: "Frontend Developer",
    companyName: "Brandtech Labs - Reviewr Project",
    activities: [
      "- Collaborated on the “Reviewr” project, starting from ground zero in ReactJs.",
      "- Responsible for the frontend area, adhering to best practices.",
      "- Utilized technologies like React Query and Tailwind.",
      "- Fully integrated the project with a RESTful API built in NestJS.",
      "- Conducted code reviews and provided constructive feedback.",
    ],
    techs: ["React.js", "Tailwind", "React Query", "Stripe"],
  },
  {
    positionTitle: "Frontend Developer",
    companyName: "Brandtech Labs - Amzhub Project",
    activities: [
      "- Developed the “Amzhub” project from scratch using ReactJs.",
      "- Implemented a Clean Architecture with best practices.",
      "- Integrated the platform with services such as Stripe, Firebase, and OpenAI.",
      "- Collaborated with cross-functional teams to ensure seamless functionality.",
    ],
    techs: ["React.js", "Firebase", "OpenAI", "Stripe"],
  },

  {
    positionTitle: "Fullstack Developer",
    companyName: "La Liguilla",
    activities: [
      "- Actively contributed to the implementation of best practices in Angular for incorporating new features designed by stakeholders.",
      "- Collaborated on the design of the platform using tools like Figma.",
      "- Seamlessly integrated functionalities with the backend developed in .NET.",
      "- Proactively identified and resolved errors, ensuring optimal performance.",
      "- Provided valuable suggestions to enhance the user experience.",
    ],
    techs: ["Angular", ".NET", "Figma", "Azure"],
  },
];

export const projectItems = [
  {
    title: "Piedras Vivas",
    description:
      "Piedras Vivas is a digital ecosystem that combines a mobile application and a web control panel. Designed for the Cuban Christian community Piedras Vivas, it provides news, announcements, events, a directory of pastors and churches within the community, and a daily devotional section. The mobile app allows users to explore all the content, while the web control panel facilitates content management. At the core of all this lies a robust backend RestAPI that ensures scalability and integration with external services",
    techs: ["Flutter", "Next.js", "Nest.js"],
    images: [AppImage, PanelImage, ApiImage],
  },
  {
    title: "Prayer Diary",
    description: "Prayer Diary is a purpose-built app for the Christian community. It comprises two main sections: Pending Prayers, where users can record their prayer requests, and the Answered Prayers section, which allows them to to track answered prayers in our lives, of God’s intervention. Overall, it serves as a valuable tool for maintaining prayer records, fostering faith, and strengthening spiritual bonds within the community.",
    techs: ["Flutter"],
    images: [AppPrayer],
  },
];
