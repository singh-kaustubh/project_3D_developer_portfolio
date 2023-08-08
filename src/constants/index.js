import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  css,
  reactjs,
  flask,
  sql,
  nodejs,
  mongodb,
  golang,
  git,
  php,
  docker,
  codeseven,
  codeseven_flutter,
  coldspray,
  flutter,
  niroggyan,
  truminds,
  zomato
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Blogs and Writing",
    icon: creator,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Three JS",
    icon: golang,
  },
  {
    name: "php",
    icon: php,
  },
  {
    name: "Tailwind CSS",
    icon: flask,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "MySQL",
    icon: sql,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
];

const experiences = [
  {
    title: "Data Analyst",
    company_name: "NirogGyan",
    icon: niroggyan,
    iconBg: "#E6DEDD",
    date: "July 2020 - Sep 2020",
    points: [
      "Diagnosed their market expansion possibilities into the SAARC countries after the established themselves well in India.",
      "Research included in-depth study and analysis of premium healthcare markets, life insurance subsidies, healthcare infrastructure",
      "Used E-views and python modelling to explore possibility of market behavior and expansion results",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Truminds",
    icon: truminds,
    iconBg: "#383E56",
    date: "May 2022 - July 2022",
    points: [
      "Built a Spatial solution SDK to onload jpg/dwg files representing floor layouts in Canvas over a website and build floor plans with electrical devices displayed and associated control methods",
      "ReactJS library frameworks: GoJS, integrtr diagram, NextJS, React-redux employed",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Worked on their website counterpart to build, maintain and update the homepage",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Zomato",
    icon: zomato,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Worked on Merchant Api Gateway built with golang to cater requests and servicability of merchant domain",
      "Worked on full stack project surrounding Point Of Service toggles and compatability",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Kaustubh contributed in the MirAIe  spatial solution with trustworthy skills and reliability in his ability of fullstack development throughout his internship",
    name: "Abhijit Chakrabarty",
    designation: "CFO",
    company: "Acme Co",
    image: "https://media.licdn.com/dms/image/C5103AQF2ULLKkQ2Nrg/profile-displayphoto-shrink_800_800/0/1555046948713?e=1697068800&v=beta&t=2a75zW14fsWKA87UpoBSARoUqHxVhL_ImHw290DyBUY",
  },
  {
    testimonial:
      "We recommend Kaustubh Kumar Singh for any position that will draw upon his skills and his proven record of development intern. He has been exceptional contributor!",
    name: "Shweta Gandhi",
    designation: "Co Founder",
    company: "NirogGyan",
    image: "https://media.licdn.com/dms/image/C5103AQG0Zc3pfEorMg/profile-displayphoto-shrink_800_800/0/1583758019449?e=1697068800&v=beta&t=XJs9lzx7EAg9GuKwhmC9GgMy68GVmoVinr0NmaqIE-0",
  },
  {
    testimonial:
      "Kaustubh has been an ingenious and dedicated student during his project of building the COLDSPRAY Home for IIT Ropar both in the website and the data analysis part.",
    name: "Dr Harpreet Singh",
    designation: "Prof.",
    company: "IIT Ropar",
    image: "https://media.licdn.com/dms/image/C5103AQG7UbYC8T1kOA/profile-displayphoto-shrink_800_800/0/1523010849289?e=1697068800&v=beta&t=phr75EHN7pGdUStfc_zkxujVF9cyzqBrcA4k_mB1noU",
  },
];

const projects = [
  {
    name: "CodeSeven.com",
    description:
      "A full stack project to build an online market place for faishon and electronics. Built over the framework of NextJS, it employs restful APIs, redux state manager and MongoDB for database catering. It also houses JWT encryption for user credentials and data housing.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: codeseven,
    source_code_link: "https://github.com/singh-kaustubh/CodeSeven.com",
  },
  {
    name: "CodeSeven App",
    description:
      "An extension of the CodeSeven.com made available on the mobile platform by employing the Google's flutter framework to build cross platform compatible applications that cater to the needs of the users. It employs use of firebase for managing the backend handling of the whole app.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "golang",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: codeseven_flutter,
    source_code_link: "https://github.com/singh-kaustubh/flutter_application_1",
  },
  {
    name: "Coldspray Home (IIT RPR )",
    description:
      "A comprehensive cold spray velocity and temprature predicting interface based over the ML modelling of Ansys data via the pycaret library bundled into a NextJS interface at the frontend built in typescript built over restful api logic and designing from NextJS Material Kit.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "pycaret",
        color: "pink-text-gradient",
      },
    ],
    image: coldspray,
    source_code_link: "https://github.com/singh-kaustubh/COLDSPRAY_BTP",
  },
];

export { services, technologies, experiences, testimonials, projects };
