import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nodejs,
  git,
  docker,
  improwised,
  carolinacabinetwarehouse,
  scrapy_mattermostbot,
  freecons,
  python,
  gcp,
  vue,
  golang,
  mysql,
  aws,
  GOI,
} from "../assets";

export const navLinks = [
  {
    id: "work",
    title: "Work",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "about",
    title: "About",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "LLM Engineer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Blogger",
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
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Vue",
    icon: vue,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Golang",
    icon: golang,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "GCP",
    icon: gcp,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "AWS",
    icon: aws,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Improwised Technologies Pvt. Ltd.",
    icon: improwised,
    iconBg: "#383E56",
    date: "Jan 2022 - Present",
    points: [
      "Developed full stack web applications using Vue.js, Golang, and SQL, delivering robust and scalable solutions for diverse client requirements.",
      "Customized ERPNext based on specific user needs, enhancing business processes and increasing operational efficiency.",
      "Led diverse projects such as Web Auditor Logs (SEO tool) and Dart Scoreboard (Dart game), showcasing versatility and innovation.",
      "Proficient in containerization using Docker, ensuring seamless deployment and scalability of applications.",
      "Scraped data from various websites using Python (Scrapy, BeautifulSoup, Selenium), providing valuable insights and data-driven solutions.",
      "Extended the functionality of ERPNext, enhancing business capabilities and adapting the ERP system to meet evolving needs.",
      "Developed robust data pipelines for transforming and syncing data across different domains, ensuring data integrity and consistency.",
      "Created essential microservices for E-commerce platforms, including payment services and ecom-service, streamlining operations and improving user experience.",
      "Gained extensive knowledge of E-commerce systems and ERPNext through hands-on experience, delivering customized solutions and optimizing performance."
    ],
  },
  {
    title: "Developer",
    company_name: "Personal Experience",
    icon: "https://avatars.githubusercontent.com/u/48467846",
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "Developed the plugin for Scrapy framework for alerting errors on Mattermost.",
      "Experienced in local RAG pipeline to improve user queries by getting relevant context.",
      "Gained experience in VectorDB (Qdrant) and practiced extensively in data cleaning, extraction, embedding, and libraries like NumPy, pandas, and Torch.",
      "Have hands-on experience in P2P network architecture to distribute loads between peers.",
      "Contributed to open source projects like Medusa, Frappe, Ollama, and many more."
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
    name: "Cabinet Warehouse",
    description:
      "That's the e-commerce website for Carolina Cabinet Warehouse. It's a local business in Charlotte, NC. I've built this website using Vuejs and PHP.",
    tags: [
      {
        name: "vuejs",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "e-commerce",
        color: "pink-text-gradient",
      },
    ],
    image: carolinacabinetwarehouse,
    source_code_link: "https://carolinacabinetwarehouse.com/",
  },
  {
    name: "Scrapy Mattermost Bot",
    description:
      "Scrapy bot that collects the data from scrapy like how many items scraped, how many items dropped, how many items scraped per second, etc. and send it to the mattermost.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "scrapy",
        color: "green-text-gradient",
      },
      {
        name: "bot",
        color: "pink-text-gradient",
      },
    ],
    image: scrapy_mattermostbot,
    source_code_link: "https://github.com/zeelrupapara/scrapy-mattermostbot",
  },
  {
    name: "Freecons",
    description:
      "Scrape the icons from other sites and autohost in client site so that can use you in any sites",
    tags: [
      {
        name: "vue",
        color: "blue-text-gradient",
      },
      {
        name: "golang",
        color: "green-text-gradient",
      },
      {
        name: "icons",
        color: "pink-text-gradient",
      },
    ],
    image: freecons,
    source_code_link: "https://github.com/zeelrupapara/freecons",
  },
];

export { services, technologies, experiences, testimonials, projects };
