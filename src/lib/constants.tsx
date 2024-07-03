import { Link } from "./types";

import {
  XSVG,
  ThreadsSVG,
  InstagramSVG,
  ChatgptSVG,
  EmailSVG,
  GithubSVG,
  GoogleSVG,
  LinkedinSVG,
} from "@/components/icons";

export const LINKS: Link[] = [
  {
    title: "X: Sujeet_Gund",
    href: "https://x.com/Sujeet_Gund",
    icon: <XSVG />,
    text: "Sujeet_Gund",
    rel: "noopener noreferrer external",
  },
  {
    title: "Threads: sujeet.gund",
    href: "https://www.threads.net/@sujeet.gund",
    icon: <ThreadsSVG />,
    text: "sujeet.gund",
    rel: "me",
  },
  {
    title: "Instagram: sujeet.gund",
    href: "https://instagram.com/sujeet.gund",
    icon: <InstagramSVG />,
    text: "sujeet.gund",
    rel: "noopener noreferrer external",
  },
  {
    title: "LinkedIn: sujeetgund",
    href: "https://linkedin.com/in/sujeetgund",
    icon: <LinkedinSVG />,
    text: "sujeetgund",
    rel: "noopener noreferrer external",
  },
  {
    title: "GitHub: sujeetgund",
    href: "https://github.com/sujeetgund",
    icon: <GithubSVG />,
    text: "sujeetgund",
    rel: "noopener noreferrer external",
  },
  {
    title: "Google",
    href: "https://www.google.com/search?q=Sujeet+Gund",
    icon: <GoogleSVG />,
    text: "Google Search",
    rel: "noopener noreferrer external",
  },
  {
    title: "ChatGPT",
    href: "https://chatgpt.com/?q=Sujeet%20Gund",
    icon: <ChatgptSVG />,
    text: "ChatGPT",
    rel: "noopener noreferrer external",
  },
  {
    title: "Email",
    href: "mailto:sujeetgund@gmail.com",
    icon: <EmailSVG />,
    text: "Email",
    rel: "noopener noreferrer external",
  },
];

export const KEYWORDS = [
  "Sujeet Gund",
  "Student",
  "Data Science Student",
  "AI Enthusiast",
  "Artificial Intelligence",
  "Web Development",
  "Frontend Development",
  "Backend Development",
  "Full-Stack Development",
  "GitHub Projects",
  "Programming",
  "JavaScript",
  "Python",
  "Open Source Contributor",
  "Tech Projects",
  "Tech Trends",
  "Latest Technologies",
  "Machine Learning",
  "Deep Learning",
  "Web Applications",
  "Software Development",
  "Coding",
  "Technology Enthusiast",
  "Software Engineering",
  "Resume",
  "Professional Experience",
  "Tech Skills",
  "Project Showcase",
  "Personal Portfolio",
  "Professional Portfolio",
  "Tech Opportunities",
  "Career Opportunities",
  "Student Projects",
  "Academic Projects",
  "Coding Projects",
  "API Development",
  "Innovative Technologies",
  "Tech Blogs",
  "Digital Transformation",
  "Problem Solving",
  "Programming Languages",
  "Tech Industry",
  "Team Collaboration",
  "Agile Development",
  "Software Solutions",
  "Personal Website",
  "Learning New Technologies",
  "Technology Updates",
  "Career Growth",
  "Tech Community",
];

export const DESCRIPTION =
  "I am a dedicated Data Science student pursuing an Integrated MTech in AI at VIT Bhopal with 3+ years of coding experience. Skilled in Python, JavaScript, and C++, and proficient in Git, Docker, AWS, and MongoDB. Passionate about leveraging data for insights and innovation.";

export const TITLE = "Sujeet Gund’s personal website";
export const BLOG_PAGE_TITLE = "Sujeet Gund’s personal blog";


export const GET_ALL_BLOGS_QUERY = `query Publication {
      publication(host: "sujeetgund.hashnode.dev") {
        isTeam
        title
        posts(first: 10) {
          edges {
            node {
              title
              publishedAt
              brief
              url
            }
          }
        }
      }
    }`;
