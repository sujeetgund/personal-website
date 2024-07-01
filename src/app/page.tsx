import BagSVG from "@/components/svg/BagSVG";
import ChatgptSVG from "@/components/svg/ChatgptSVG";
import EmailSVG from "@/components/svg/EmailSVG";
import GithubSVG from "@/components/svg/GithubSVG";
import GoogleSVG from "@/components/svg/GoogleSVG";
import LinkedinSVG from "@/components/svg/LinkedinSVG";
import LocationSVG from "@/components/svg/LocationSVG";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
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
              className="plb-1 pli-2 inline-flex items-center justify-center gap-1 rounded-full border hover:border-gray-400"
              href="https://x.com/Sujeet_Gund"
            >
              <figure className="flex size-4 items-center justify-center">
                <svg
                  className="bs-4 is-auto size-fit flex-shrink fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 300 300.251"
                >
                  <path d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66"></path>
                </svg>
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
              className="plb-1 pli-2 inline-flex items-center justify-center gap-1 rounded-full border hover:border-gray-400"
              href="https://www.threads.net/@sujeet.gund"
            >
              <figure className="flex size-4 items-center justify-center">
                <svg
                  className="bs-4 is-auto size-fit flex-shrink fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 192 192"
                >
                  <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"></path>
                </svg>
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
              className="plb-1 pli-2 inline-flex items-center justify-center gap-1 rounded-full border hover:border-gray-400"
              href="https://instagram.com/sujeet.gund"
            >
              <figure className="flex size-4 items-center justify-center">
                <svg
                  className="bs-4 is-auto size-fit flex-shrink fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.982c2.937 0 3.285.011 4.445.064a6.087 6.087 0 0 1 2.042.379 3.408 3.408 0 0 1 1.265.823 3.408 3.408 0 0 1 .823 1.265 6.087 6.087 0 0 1 .379 2.042c.053 1.16.064 1.508.064 4.445s-.011 3.285-.064 4.445a6.087 6.087 0 0 1-.379 2.042 3.643 3.643 0 0 1-2.088 2.088 6.087 6.087 0 0 1-2.042.379c-1.16.053-1.508.064-4.445.064s-3.285-.011-4.445-.064a6.087 6.087 0 0 1-2.043-.379 3.408 3.408 0 0 1-1.264-.823 3.408 3.408 0 0 1-.823-1.265 6.087 6.087 0 0 1-.379-2.042c-.053-1.16-.064-1.508-.064-4.445s.011-3.285.064-4.445a6.087 6.087 0 0 1 .379-2.042 3.408 3.408 0 0 1 .823-1.265 3.408 3.408 0 0 1 1.265-.823 6.087 6.087 0 0 1 2.042-.379c1.16-.053 1.508-.064 4.445-.064M12 1c-2.987 0-3.362.013-4.535.066a8.074 8.074 0 0 0-2.67.511 5.392 5.392 0 0 0-1.949 1.27 5.392 5.392 0 0 0-1.269 1.948 8.074 8.074 0 0 0-.51 2.67C1.012 8.638 1 9.013 1 12s.013 3.362.066 4.535a8.074 8.074 0 0 0 .511 2.67 5.392 5.392 0 0 0 1.27 1.949 5.392 5.392 0 0 0 1.948 1.269 8.074 8.074 0 0 0 2.67.51C8.638 22.988 9.013 23 12 23s3.362-.013 4.535-.066a8.074 8.074 0 0 0 2.67-.511 5.625 5.625 0 0 0 3.218-3.218 8.074 8.074 0 0 0 .51-2.67C22.988 15.362 23 14.987 23 12s-.013-3.362-.066-4.535a8.074 8.074 0 0 0-.511-2.67 5.392 5.392 0 0 0-1.27-1.949 5.392 5.392 0 0 0-1.948-1.269 8.074 8.074 0 0 0-2.67-.51C15.362 1.012 14.987 1 12 1Zm0 5.351A5.649 5.649 0 1 0 17.649 12 5.649 5.649 0 0 0 12 6.351Zm0 9.316A3.667 3.667 0 1 1 15.667 12 3.667 3.667 0 0 1 12 15.667Zm5.872-10.859a1.32 1.32 0 1 0 1.32 1.32 1.32 1.32 0 0 0-1.32-1.32Z"></path>
                </svg>
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
              className="inline-flex items-center justify-center gap-1 rounded-full border px-2 py-1 hover:border-gray-400"
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
              className="plb-1 pli-2 inline-flex items-center justify-center gap-1 rounded-full border hover:border-gray-400"
              href="https://chatgpt.com/?q=Sujeet%20Gund"
            >
              <figure className="flex size-4 items-center justify-center">
                <ChatgptSVG />
              </figure>
              <span className="select-none text-sm text-gray-700">ChatGPT</span>
            </a>
          </li>

          {/* Email */}
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer external"
              title="Email"
              className="plb-1 pli-2 inline-flex items-center justify-center gap-1 rounded-full border hover:border-gray-400"
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
  );
}
