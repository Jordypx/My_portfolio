import {
  mobile,
  backend,
  web,
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
  meta,
  tesla,
  shopify,
  audiophile,
  jobit,
  tripguide,
  threejs,
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
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Freelance",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Feb 2022",
    points: [
      "Developing a website using React.js and other related technologies.",
      "Employed performance optimization techniques to enhance the page loading speed, creating a smooth and efficient browsing experience for users.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Implemented SEO best practices, including proper meta tags and semantic HTML, to improve the landing page's search engine visibility and overall online presence.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "UpWork",
    iconBg: "#383E56",
    date: "April 2022 - May 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Freelance",
    icon: shopify,
    iconBg: "#383E56",
    date: "July 2022 - Feb 2023",
    points: [
      "Integrated interactive elements using React.js to enhance user engagement and provide a modern and dynamic feel to the landing page.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implemented a responsive design to ensure optimal viewing across a variety of devices, enhancing the accessibility and user satisfaction.",
      "Implemented SEO best practices, including proper meta tags and semantic HTML, to improve the landing page's search engine visibility and overall online presence.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Freelance",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "May 2023 - June 2023",
    points: [
      "Implemented a secure user authentication process using industry-standard encryption and authentication mechanisms, ensuring the confidentiality of user credentials.",
      "Developed a role-based authorization system to control access levels and permissions, providing a scalable and flexible solution tailored to the client's specific requirements",
      "Implemented token-based authentication to enhance security and streamline communication between the Node.js backend and React frontend, preventing unauthorized access and protecting sensitive user data.",
      "Designed and integrated an intuitive and user-friendly interface with React, enhancing the overall user experience during the signup and login processes.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I had the pleasure of working with Jordan on a frontend development project. Jordan demonstrated strong attention to detail, excellent communication skills, and an ability to deliver high-quality work within the given timeframe.",
    name: "Emmanuel.O.",
    designation: "Employer",
    company: "UpWork",
    image:
      "https://media-los2-1.cdn.whatsapp.net/v/t61.24694-24/413589433_686215130391261_4950954856587814806_n.jpg?ccb=11-4&oh=01_AdR88ntpNybnb9XjXsZByF7noxQMCJbjvZwf4E_htZy5uw&oe=65E4427A&_nc_sid=e6ed6c&_nc_cat=106",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Jordan does.I highly recommend Jordan for any front-end development project and look forward to working with him again in the future.",
    name: "Audrey",
    designation: "Employer",
    company: "UpWork",
    image:
      "https://media.licdn.com/dms/image/D4D03AQGGQZxXF-EvKg/profile-displayphoto-shrink_200_200/0/1706265343788?e=2147483647&v=beta&t=yAsnMOBzExhz2L5XfCyIZvxzX8MZGEsm2-AWUK5qo1c",
  },
  {
    testimonial:
      "Jordan was always quick to respond to any questionsI had and provided regular updates on the project's progress. He went above and beyond to ensure that my expectation and requirements where met",
    name: "John",
    designation: "Employer",
    company: "Fiver",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects = [
  {
    name: "AudioPhile",
    description:
      "An e-commerce website for a purchasing audio devices that are available.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "chakra ui",
        color: "pink-text-gradient",
      },
    ],
    image: audiophile,
    source_code_link: "https://github.com/Jordypx/Audiophile_webpage",
    site_url: "https://audiophile-ecommerce-mbart13.vercel.app/",
  },
  {
    name: "PhotoSnap",
    description:
      "A marketing website for a photo-sharing application and photo display.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "flexbox",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Jordypx/photosnapWeb",
    site_url: "https://photosnap-web-gold.vercel.app",
  },
  {
    name: "Scoot website",
    description:
      "Scoot is a platform that takes the hassle out of urban mobility for the people.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "vite",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Jordypx/scoot-website",
    site_url: "https://scoot-website-delta.vercel.app",
  },
];

export { services, technologies, experiences, testimonials, projects };
