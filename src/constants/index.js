import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  java,
  mysql,
  git,
  keanIT,
  myfitplate,
  researchintern,
  nasa,
  ecoSegNet,
  projectPaemon,
  analogIT,
  linkedIn,
  github,
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  { id: navigationPaths.about, title: "About" },
  { id: navigationPaths.work, title: "Work" },
  { id: navigationPaths.contact, title: "Contact" },
];

const services = [
  { title: "Software Engineer", icon: web },
  { title: "AI & Machine Learning Researcher", icon: backend },
  { title: "Cybersecurity & IT Specialist", icon: creator },
  { title: "UX/UI Developer", icon: mobile },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Node JS", icon: nodejs },
  { name: "Java", icon: java },
  { name: "MySQL", icon: mysql },
  { name: "Git", icon: git },
];

const experiences = [
  {
    title: "Incoming Software Engineer Intern",
    company_name: "NASA - Marshall Space Flight Center",
    company_website: "https://www.nasa.gov/centers/marshall/home/index.html",
    icon: nasa,
    iconBg: "#E6DEDD",
    date: "Summer 2025",
    points: [
      "Sleeping...",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "MyFitPlate",
    company_website: "https://myfitplate.com/",
    icon: myfitplate,
    iconBg: "#E6DEDD",
    date: "Sep 2024 - Dec 2024",
    points: [
      "Led frontend development in Swift and Objective-C, enhancing app performance and user experience.",
      "Optimized UI rendering efficiency, reducing app crashes and improving responsiveness by 25%.",
      "Collaborated with backend engineers to streamline API calls, boosting processing speed by 15%.",
    ],
  },
  {
    title: "Lead IT Project Specialist",
    company_name: "Kean University IT",
    company_website: "https://www.kean.edu/",
    icon: keanIT,
    iconBg: "#E6DEDD",
    date: "Apr 2024 - Present",
    points: [
      "Redesigned Kean University's IT Service Portal, reducing user complaints by 30%.",
      "Led a team to implement an improved knowledge base and ticketing system for 10,000+ users.",
      "Managed IT infrastructure projects, troubleshooting authentication, device setup, and software integration.",
    ],
  },
  {
    title: "Undergraduate Researcher",
    company_name: "Scholar’s Academy - Kean University",
    company_website: "https://www.kean.edu/",
    icon: researchintern,
    iconBg: "#E6DEDD",
    date: "Jun 2024 - Present",
    points: [
      "Developed EcoSegNet, an AI-powered image segmentation model, achieving 86% accuracy in classifying urban landscapes.",
      "Won 1st place at GMiS 2024 for AI-driven environmental research.",
      "Led a research team integrating GIS and machine learning for urban planning applications.",
    ],
  },
];

const projects = [
  {
    name: "EcoSegNet",
    description: "An AI-powered image segmentation model analyzing urban landscapes to aid environmental research.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "DeepLabV3", color: "green-text-gradient" },
      { name: "GIS", color: "pink-text-gradient" },
    ],
    image: ecoSegNet,
  },
  {
    name: "Project Pæmon",
    description: "An AI-powered personality test that generates a unique digital companion based on user traits.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "Stable Diffusion", color: "green-text-gradient" },
      { name: "AI", color: "pink-text-gradient" },
    ],
    image: projectPaemon,
    hosted_link: "https://project-paemon-31jm.vercel.app/",
  },
  {
    name: "Analog.it",
    description: "A real-time AI-powered horror generator creating eerie, vintage-style distortions.",
    tags: [
      { name: "OpenCV", color: "blue-text-gradient" },
      { name: "Stable Diffusion", color: "green-text-gradient" },
      { name: "Gradio", color: "pink-text-gradient" },
    ],
    image: analogIT,
    hosted_link: "https://github.com/philingus/AnalogHorrorApp",
  },
];

const personalInfo = {
  name: "Phil",
  fullName: "Phil Combatir",
  email: "combatip@kean.edu",
  role: "Software Engineer & AI Researcher",
  about: "I go to Kean University, I am sophomore in cybersecurity, AI researcher, and artist. I build websites, optimize IT systems, and develop software that improves usability. I created EcoSegNet, an award-winning AI model for urban analysis, and have led frontend projects that boost engagement. Outside of tech, I play competitive chess and create digital art. Let’s connect if you're working in AI, software, or research.",
  projectsIntro: "Here are some of my projects, showcasing my skills and experience in AI, software engineering, and cybersecurity.",
};

const publicUrls = {
  resume: "https://drive.google.com/file/d/1A7bHxOPRaeqbSPTnIZcg6kJ5Gk1-G6eE/view?usp=sharing",
  socialProfiles: {
    linkedIn: { title: "LinkedIn", link: "https://linkedin.com/in/philhocombatir", icon: linkedIn },
    github: { title: "GitHub", link: "https://github.com/philingus", icon: github },
  },
};

export { services, technologies, experiences, projects, navigationPaths, personalInfo, publicUrls };
