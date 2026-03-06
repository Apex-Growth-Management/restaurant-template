import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://restaurant-template-plum-sigma.vercel.app/sitemap.xml",
  };
}
