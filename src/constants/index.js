// EFF5EF
// EB644D
// D37194
// 875949
// 2C2C3C
import {
  gmail,
  linkedin,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  google,
  amazon,
  honeywell,
  gt,
  resume,
  vantage,
  github,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experiences",
  },
  {
    id: "project",
    title: "Projects",
  },
];

const services = [
  {
    title: "GitHub",
    icon: github,
    link: "https://github.com/nicole-sin",
  },
  {
    title: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/in/nicole-sin/",
  },
  {
    title: "Resume",
    icon: resume,
    link: "/Nicole_Sin_Resume.pdf",
  },
  {
    title: "Email",
    icon: gmail,
    link: "mailto:nicolesin.nyc@gmail.com",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineering Intern",
    company_name: "Bank of America",
    location: "New York, NY",
    icon: "/company_logos/bofa.png",
    iconBg: "#383E56",
    date: "June 2024 - August 2024",
    points: [
      "Developed and optimized endpoints using Flask to efficiently retrieve user credit card data and categorize purchases, improving response times by approximately 20% across all queries.",
      "Implemented indexed searches and refined query execution plans in Trino/Starburst, reducing data fetching time by ~15%. Leveraged Trino Python client to format SQL query results from Oracle Exadata into JSON.",
      "Received Honorable Mention in Innovation Challenge for integrating family banking accounts with Erica Chat Assistant."
    ],
  },
  {
    title: "Data Science Associate · Operations",
    company_name: "OnePointFive",
    location: "New York, NY",
    icon: "/company_logos/OPF.jpg", // Update with the correct icon
    iconBg: "#E6DEDD",
    date: "June 2023 - September 2023",
    points: [
      "Developed a content-based article recommendation engine using Pandas, Scikit-learn, and CountVectorizer to recommend sustainability articles based on similarity scores.",
      "Designed and developed a visual sales funnel analysis using Sankey diagrams to track customer retention, improving retention by 40% by identifying key drop-off points."
    ],
  },
  {
    title: "Software Engineering Summer Intern",
    company_name: "Cornell Tech · FarLabs",
    location: "New York, NY",
    icon: "/company_logos/cornelltech.png", // Update with the correct icon
    iconBg: "#383E56",
    date: "June 2023 - August 2023",
    points: [
      "Collaborated on deploying 2 remote trash robots (featured on FOX and Spectrum News), conducting a Wizard of Oz study to analyze human-robot interaction using a video-coded dataset with YOLOv5.",
      "Leveraged ROS2 to program MiniBot, a scaled-down TrashBot model, for data retrieval from ESP-32CAM, managing linear and angular velocities for optimal performance."
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "Medgar Evers College · SEO Team",
    location: "Brooklyn, NY",
    icon: "/company_logos/medgar.jpeg", // Update with the correct icon
    iconBg: "#E6DEDD",
    date: "January 2023 - May 2023",
    points: [
      "Implemented meta tags and optimized keywords in website content, improving visibility and search engine ranking by over 25% and enhancing organic traffic through link building strategies.",
      "Led a UX redesign of the Medgar Evers College website using Figma to improve UX responsiveness and translated high-fidelity designs into a functional website for Spring 2024 deployment."
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Driver Drowsiness",
    description:
      "Evaluates if a driver's eyes is open or closed in real time.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "YOLOv5",
        color: "green-text-gradient",
      },
      {
        name: "Pytorch",
        color: "pink-text-gradient",
      },
    ],
    image: gmail,
    source_code_link: "https://github.com/Nicole-sin/Drowsiness-detection",
  },
  {
    name: "BarrelBot",
    description:
      "Trash Barrel Robot Study at Cornell Tech under Dr. Wendy Ju and PhD Frank Bu.",
    tags: [
      {
        name: "ROS",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "YOLOv5",
        color: "pink-text-gradient",
      },
    ],
    image: gmail,
    source_code_link: "https://news.cornell.edu/stories/2023/08/trashbots-help-brooklynites-clean-connect",
  },
  {
    name: "Gabe Goes Green",
    description:
      "Interactive game promoting awareness about livestock carbon emissions and waste.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Pygame",
        color: "green-text-gradient",
      },
      {
        name: "Tiled",
        color: "pink-text-gradient",
      },
    ],
    image: gmail,
    source_code_link: "https://devpost.com/software/a-dvje5i",
  },
  {
    name: "Medgar Evers",
    description:
      "UX Redesign of the Medgar Evers SPCD website. ",
    tags: [
      {
        name: "HTML/CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Figma",
        color: "pink-text-gradient",
      },
    ],
    image: gmail,
    source_code_link: "https://www.figma.com/proto/zWr5vsHj0yYe3OVF6xZn8I/SPCD-Layouts-%5Bfinal%5D-(Copy)?node-id=1317-994&starting-point-node-id=1317%3A994&scaling=scale-down",
  },
  {
    name: "OnePointFive",
    description:
      "Case study of user engagement. Mock values to protect privacy.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "NumPy",
        color: "pink-text-gradient",
      },
    ],
    image: gmail,
    source_code_link: "https://docs.google.com/presentation/d/1CfAKsgfBfxngL0-E5Bisid81c4vgUFYRGaZ6HTrIdZA/edit#slide=id.ga00a88a2fe_0_377",
  },
  {
    name: "Sales Funnel Analysis",
    description:
      "Sankey Keys diagram to generate insights on client retention. Mock values.",
    tags: [
      {
        name: "R",
        color: "blue-text-gradient",
      },
      {
        name: "RStudio",
        color: "green-text-gradient",
      },
      {
        name: "GoogleVis",
        color: "pink-text-gradient",
      },
    ],
    image: gmail,
    source_code_link: "https://github.com/Nicole-sin/OPF",
  },
];

export { services, technologies, experiences, testimonials, projects };
