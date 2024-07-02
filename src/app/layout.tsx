import type { Metadata } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import "./globals.css";

const schibstedGrotesk = Schibsted_Grotesk({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sujeet Gund’s personal website",
  description:
    "I am a dedicated Data Science student currently pursuing an Integrated MTech in Artificial Intelligence at VIT Bhopal University. With over 3 years of coding experience, I am skilled in Python, JavaScript, and C++, and proficient in technologies like Git, Docker, AWS, Azure, and MongoDB. My fascination with data drives my passion for leveraging it to uncover insights and drive innovation. I’m eager to connect with like-minded professionals and explore collaborative opportunities in AI and data science. Learn more about my work at my website. For inquiries or collaborations, reach out to me at sujeetgund@gmail.com",
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={schibstedGrotesk.className}>
        
          {children}
        
      </body>
    </html>
  );
}
