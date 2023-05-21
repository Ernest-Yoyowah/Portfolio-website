import {
    mobile,
    backend,
    camza,
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
    figma,
    docker,
    meta,
    // starbucks,
    // tesla,
    // shopify,
    // carrent,
    // jobit,
    // tripguide,
    threejs,
    chatApp,
    shoe,
    gt,
    // webDev,
    // ftDev,
    itsurp,
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
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Technical Support Specialist",
      icon: backend,
    },
    {
      title: "UX/UI Designer",
      icon: figma,
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
      title: "Python Developer",
      company_name: "Ghana Communication Technology University - ESA",
      icon: gt,
      iconBg: "#383E56",
      date: "Jan 2023 - Present",
      points: [
        "ESA - Engineering Students Association.",
        "As part of a group of engineering students, I am learning software development with Python at GCTU.",
        "I have been developing my coding skills and contributing to group projects.",
        "This experience has allowed me to gain a deeper understanding of Python, as well as working collaboratively with other students to create high-quality web applications.",
      ],
    },
    {
      title: "Cyber Security",
      company_name: "Ghana Communication Technology University - ESA",
      icon: gt,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "As a member of a student community focused on cyber security, I am gaining valuable knowledge and hands-on experience in protecting computer systems from unauthorized access and cyber attacks.",
        "Within this community, I am engaging in comprehensive studies encompassing various aspects of cyber security, including network security, cryptography, and ethical hacking.",
        "By actively contributing to this student community, I am forging a solid foundation for a promising career in the field of cyber security.",
        // "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Front-End Development Course",
      company_name: "Meta",
      icon: meta,
      iconBg: "#383E56",
      date: "Oct 2022 - Present",
      points: [
        "Completed intensive Front-End Development course at Meta, focusing on building user-friendly and visually appealing web applications.",
        "Gained proficiency in HTML, CSS, and JavaScript, with hands-on experience in popular front-end frameworks like React and Vue.js. ",
        "Developed responsive layouts, implemented interactive features, and optimized website performance.",
        "Familiarity with web accessibility standards and cross-browser compatibility.",
        "Proficient in Git version control and experienced in Agile development",
        "Enhanced problem-solving skills and effective team communication.",
      ],
    },
    {
      title: "Technical Support Specialist",
      company_name: "Freelance",
      icon: itsurp,
      iconBg: "#E6DEDD",
      date: "Aug 2020 - Nov 2022",
      points: [
        "Worked as a freelance technical support specialist, providing assistance to clients with various technical issues and inquiries.",
        "Troubleshot hardware and software problems, diagnosing issues and providing effective solutions.",
        "Assisted clients with the installation, configuration, and maintenance of software applications and operating systems.",
        "Provided remote technical support via phone, email, or chat, guiding clients through troubleshooting steps and resolving issues remotely.",
        "Demonstrated strong communication and interpersonal skills, effectively explaining technical concepts to non-technical users.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but you proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like you.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After our website was optimized, our traffic increased by 50%. We can't thank you enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Chat App",
      description:
        "The Chat App is a real-time messaging platform designed for seamless communication between individuals or groups.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "Socket.io",
          color: "pink-text-gradient",
        },
      ],
      image: chatApp,
      source_code_link: "https://github.com/Ernest-Yoyowah/react-nodejs-chat",
    },
    {
      name: "Shoe Shop",
      description:
        "Online platform that provides customers with a convenient and user-friendly experience to browse, search, and order shoes of their choice.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: shoe,
      source_code_link: "https://github.com/Ernest-Yoyowah/Shoe-shop",
    },
    {
      name: "CamZa Flora Restaurant",
      description:
        "Online food ordering system for a local restaurant.The system will allow customers to search for menu items, place orders, and make payments online.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: camza,
      source_code_link: "https://github.com/Ernest-Yoyowah/Camza-Flora-Restaurant",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };