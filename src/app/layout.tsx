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
    "I am a dedicated Data Science student pursuing an Integrated MTech in AI at VIT Bhopal with 3+ years of coding experience. Skilled in Python, JavaScript, and C++, and proficient in Git, Docker, AWS, and MongoDB. Passionate about leveraging data for insights and innovation.",
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
