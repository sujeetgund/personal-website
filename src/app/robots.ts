import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASEURL || "https://sujeetgund.vercel.app";
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/blog"],
      disallow: [],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
