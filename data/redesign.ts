export const homeCopy = {
  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Certificates", href: "#certifications" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    badge: "👋 Welcome to my portfolio!",
    subtitle: "Full-Stack Web Developer & Industrial Engineering Enthusiast",
    tagline: "Driven by Innovation • Engineering Excellence • Continuous Learning",
    photoCaption: "Engineering ideas into practical digital experiences.",
  },
  about: {
    badge: "About Me",
    description: "I’m Khalil Etana, an Industrial Engineering student and web developer from Ethiopia. I bring systematic thinking and a passion for technology together to explore useful, practical digital solutions. I’m continually learning, building projects, and improving through hands-on practice.",
    highlights: [
      { title: "Industrial Engineering", detail: "Plan • Optimize • Improve" },
      { title: "Web Development", detail: "Build • Deploy • Innovate" },
      { title: "Problem Solver", detail: "Turn ideas into practical solutions" },
      { title: "Lifelong Learner", detail: "Always learning and growing" },
    ],
  },
  skills: {
    badge: "My Skills",
    description: "A growing toolkit shaped by engineering studies, web projects, and continuous practice.",
  },
  projects: { badge: "Selected work" },
  credentials: { badge: "Learning & credentials" },
  blog: { url: "https://khalilettanamoh.blogspot.com" },
  contact: { description: "Have a project, opportunity, or idea to discuss? Send me a message. I’d be glad to connect." },
  footer: { tagline: "Innovate • Engineer • Empower" },
} as const;
