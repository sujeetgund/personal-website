import BagSVG from "@/components/svg/BagSVG";
import ChatgptSVG from "@/components/svg/ChatgptSVG";
import EmailSVG from "@/components/svg/EmailSVG";
import GithubSVG from "@/components/svg/GithubSVG";
import GoogleSVG from "@/components/svg/GoogleSVG";
import InstagramSVG from "@/components/svg/InstagramSVG";
import LinkedinSVG from "@/components/svg/LinkedinSVG";
import LocationSVG from "@/components/svg/LocationSVG";
import ThreadsSVG from "@/components/svg/ThreadsSVG";
import XSVG from "@/components/svg/XSVG";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-xl mx-auto min-h-screen flex justify-center items-center">
      <div className="flex grow flex-col items-center justify-center">
        <section className="rounded-2xl p-4">
          <figure className="flex flex-col-reverse justify-between gap-3 sm:flex-row">
            <figcaption className="font-medium">
              <p className="text-lg" lang="en">
                Sujeet Gund
              </p>
              <p className="text-lg" lang="hi">
                सुजीत गुंड
              </p>
            </figcaption>
            <img
              alt="🙋‍♂️"
              fetchPriority="high"
              width="200"
              height="200"
              decoding="async"
              data-nimg="1"
              className="size-[75px] flex-shrink-0 select-none rounded-[2em] text-transparent bg-contain mix-blend-luminosity hover:mix-blend-normal transition-all duration-300 ease-in-out"
              draggable="false"
              src="/sujeet.jpg"
            />
          </figure>
          <div className="mlb-3 sm:mbs-0 space-y-0.5 text-gray-700">
            <p className="flex items-center gap-1 text-sm">
              <LocationSVG />
              <span>
                Barshi, India
                <span className="text-gray-500"> · 1,000 km away</span>
              </span>
            </p>
            <p className="flex items-center gap-1 text-sm tabular-nums">
              <BagSVG />
              <span>Engineer × Data Science Student</span>
            </p>
          </div>
          <ul className="max-is-[22.8rem] flex flex-wrap gap-1.5">
            {/* X */}
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer external"
                title="X: Sujeet_Gund"
                className="plb-1 pli-2 inline-flex items-center justify-center gap-1 rounded-full border border-gray-400"
                href="https://x.com/Sujeet_Gund"
              >
                <figure className="flex size-4 items-center justify-center">
                  <XSVG />
                </figure>
                <span className="select-none text-sm text-gray-700">
                  Sujeet_Gund
                </span>
              </a>
            </li>

            {/* Threads */}
            <li>
              <a
                target="_blank"
                rel="me"
                title="Threads: sujeet.gund"
                className="plb-1 pli-2 inline-flex items-center justify-center gap-1 rounded-full border border-gray-400"
                href="https://www.threads.net/@sujeet.gund"
              >
                <figure className="flex size-4 items-center justify-center">
                  <ThreadsSVG />
                </figure>
                <span className="select-none text-sm text-gray-700">
                  sujeet.gund
                </span>
              </a>
            </li>

            {/* Instagram */}
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer external"
                title="Instagram: sujeet.gund"
                className="plb-1 pli-2 inline-flex items-center justify-center gap-1 rounded-full border border-gray-400"
                href="https://instagram.com/sujeet.gund"
              >
                <figure className="flex size-4 items-center justify-center">
                  <InstagramSVG />
                </figure>
                <span className="select-none text-sm text-gray-700">
                  sujeet.gund
                </span>
              </a>
            </li>

            {/* LinkedIn */}
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer external"
                title="LinkedIn: sujeetgund"
                className="plb-1 pli-2 inline-flex items-center justify-center gap-1 rounded-full border border-gray-400"
                href="https://linkedin.com/in/sujeetgund"
              >
                <figure className="flex size-4 items-center justify-center">
                  <LinkedinSVG />
                </figure>
                <span className="select-none text-sm text-gray-700">
                  sujeetgund
                </span>
              </a>
            </li>

            {/* GitHub */}
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer external"
                title="GitHub: sujeetgund"
                className="plb-1 pli-2 inline-flex items-center justify-center gap-1 rounded-full border border-gray-400"
                href="https://github.com/sujeetgund"
              >
                <figure className="flex size-4 items-center justify-center">
                  <GithubSVG />
                </figure>
                <span className="select-none text-sm text-gray-700">
                  sujeetgund
                </span>
              </a>
            </li>

            {/* Google Search */}
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer external"
                title="Google"
                className="inline-flex items-center justify-center gap-1 rounded-full border px-2 py-1 border-gray-400"
                href="https://www.google.com/search?q=Sujeet+Gund"
              >
                <figure className="flex size-4 items-center justify-center">
                  <GoogleSVG />
                </figure>
                <span className="select-none text-sm text-gray-700">
                  Google Search
                </span>
              </a>
            </li>

            {/* ChatGPT */}
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer external"
                title="ChatGPT"
                className="plb-1 pli-2 inline-flex items-center justify-center gap-1 rounded-full border border-gray-400"
                href="https://chatgpt.com/?q=Sujeet%20Gund"
              >
                <figure className="flex size-4 items-center justify-center">
                  <ChatgptSVG />
                </figure>
                <span className="select-none text-sm text-gray-700">
                  ChatGPT
                </span>
              </a>
            </li>

            {/* Email */}
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer external"
                title="Email"
                className="plb-1 pli-2 inline-flex items-center justify-center gap-1 rounded-full border border-gray-400"
                href="mailto:sujeetgund@gmail.com"
              >
                <figure className="flex size-4 items-center justify-center">
                  <EmailSVG />
                </figure>
                <span className="select-none text-sm text-gray-700">Email</span>
              </a>
            </li>
          </ul>

          <p className="mbs-4">
            I also have a {""}
            <Link className="underline" href="/blog">
              blog
            </Link>
            {""} here
          </p>
        </section>
      </div>
    </main>
  );
}
