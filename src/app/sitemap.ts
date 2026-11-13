import type { MetadataRoute } from "next";
import { clinic } from "@/data/clinic";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = clinic.siteUrl.replace(/\/$/, "");
  return ["", "/politica-de-privacidade", "/termos-de-uso"].map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
    priority: p === "" ? 1 : 0.3,
  }));
}
