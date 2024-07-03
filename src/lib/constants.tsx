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
