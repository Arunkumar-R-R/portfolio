import {
  AngularIcon,
  EmailIcon,
  FigmaIcon,
  GithubIcon,
  GitIcon,
  JavascriptIcon,
  LinkedinIcon,
  NextjsIcon,
  ReactIcon,
  SassIcon,
  TailwindcssIcon,
  TwitterIcon,
  TypescriptIcon,
  WebpackIcon,
} from "./SvgIcon.js";

export const Projects = [
  {
    projectTitle: "Tirukaani",
    shortDescription:
      "Web app to calculate the weights of material to make a silver Anklet screw. keep track of deals and manage the balance in format to ease running business",
    techStack: ["React", "Css", "Bootstrap", "Firebase"],
    demoLink: "https://tirukaani.netlify.app/",
    codeBaseLink: "https://github.com/Arunkumar-R-R/Tirukaani",
  },
  {
    projectTitle: "Comment Section Component",
    shortDescription:
      "Simple, Reusable , flexible component which can be integrated to Web application",
    techStack: ["React", "SCSS"],
    demoLink: "https://comment-component-demo.netlify.app/",
    codeBaseLink: "https://github.com/Arunkumar-R-R/react-comment-section",
  },
];

export const areaOfInterest = [
  "Component Development",
  "Design system",
  "Accessibility",
  "User Interface Design",
];

const javascriptFramework = [
  {
    tech: "React",
    icon: ReactIcon,
  },
  {
    tech: "Angular",
    icon: AngularIcon,
  },
];

const cssEcosystem = [
  {
    tech: "SASS",
    icon: SassIcon,
  },
];

const programmingLanguage = [
  {
    tech: "Javascript",
    icon: JavascriptIcon,
  },
  {
    tech: "Typescript",
    icon: TypescriptIcon,
  },
];

const tooling = [
  {
    tech: "Webpack",
    icon: WebpackIcon,
  },
  {
    tech: "Git",
    icon: GitIcon,
  },
];

const designSkills = [
  {
    tech: "Figma",
    icon: FigmaIcon,
  },
];

export const skills = [
  ...javascriptFramework,
  ...cssEcosystem,
  ...programmingLanguage,
  ...tooling,
  ...designSkills,
];

export const socialMediaLinks = [
  {
    icon: GithubIcon,
    label: "Github",
    source: "https://github.com/Arunkumar-R-R",
  },
  {
    icon: TwitterIcon,
    label: "Twitter",
    source: "https://twitter.com/_arunkmr",
  },
  {
    icon: LinkedinIcon,
    label: "Linkedin",
    source: "https://www.linkedin.com/in/arunkumar-r-r/",
  },
  {
    icon: EmailIcon,
    label: "Email",
    source: "mailto:rrarunkumardgct@gmail.com",
  },
];
