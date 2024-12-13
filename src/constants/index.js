import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  // typescript,
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
  // meta,
  // starbucks,
  // tesla,
  // shopify,
  selfwork,
  EE,
  emojify,
  carrent,
  jobit,
  tripguide,
  ecms,
  threejs,
  cpp,
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
    id: "project",
    title: "Projects",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume",
  },
];

const services = [
  {
    title: "Full-Stack Web Developer",
    icon: web,
  },
  {
    title: "Software Developer",
    icon: mobile,
  },
  {
    title: "UI/UX Designer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
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
    name: "Three JS",
    icon: threejs,
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
  {
    name: "cpp",
    icon: cpp,
  },
];

const experiences = [
  {
    title: "Frontend Developer Intern",
    company_name: "Engineering & Environmental Solution Pvt Ltd",
    icon: EE,
    iconBg: "#383E56",
    date: "Aug 2023 - Nov 2023  ",
    points: [
      "Developing and maintaining web applications of company's own website using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Design  Gallery and About Us Sections",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Selfwork",
    icon: selfwork,
    iconBg: "#383E56",
    date: "March 2021 - Present ",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Selfwork",
    icon: selfwork,
    iconBg: "#E6DEDD",
    date: "Jan 2022 -  Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web App Developer",
    company_name: "Selfwork",
    icon: selfwork,
    iconBg: "#383E56",
    date: "Jan 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Selfwork",
  //   icon: selfwork,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Anayat proved me wrong.",
    name: "Saima Naseem",
    designation: "Software Engineer",
    company: "Edx",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Anayat does.",
    name: "Md Jaweed",
    designation: "Sales Engineer",
    company: "DLF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Anayat optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Safina Khan",
    designation: "Owner",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Online Book Store",
    description:
      "Web-based an online platform for purchasing and selling book. A  full-stack application with user registration, login, and secure checkout features",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/MdAnayatullah/Online-Book-Store",
  },
  {
    name: "Portfolio website",
    description:
      "Modern Portfolio Web application to showcase my personal works and projects. It's well designed and animated with tailwind css and react.js.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/MdAnayatullah/portfolio-webapp",
  },
  {
    name: " Remote Control PC App",
    description:
      "A user-friendly Android app enabling remote control of personal computers. features like Control left/right click, mouse scroll, virtual keyboard, file transfer by phone",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "xml",
        color: "green-text-gradient",
      },
      {
        name: "socket.io",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link:
      "https://github.com/MdAnayatullah/Remote-Control-PC-Android-App",
  },
  {
    name: " Emojify using Deep Learning",
    description:
      "An Emojify is a deep learning project . It will detect the human expression and coordingly create an emoji in real time.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "deep-learning",
        color: "green-text-gradient",
      },
      {
        name: "Tensorflow",
        color: "pink-text-gradient",
      },
    ],
    image: emojify,
    source_code_link: "https://github.com/MdAnayatullah/Minor_Project-Emojify",
  },
  {
    name: " ECMS ",
    description:
      "Examination Control Management system (ECMS) is a web appliaction. Design to assign time table and duties of teachers/faculty digitally. It also helps to assign the duties of teachers at examination times.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Bootsrap",
        color: "blue-text-gradient",
      },
    ],
    image: ecms,
    source_code_link:
      "https://github.com/MdAnayatullah/examination-control-management-system",
  },
];

export { services, technologies, experiences, testimonials, projects };
