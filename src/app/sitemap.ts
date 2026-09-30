import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: "https://ecsilva.com",
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: {
        languages: {
          "pt-BR": "https://ecsilva.com",
          en: "https://ecsilva.com/en",
          "x-default": "https://ecsilva.com",
        },
      },
    },
    {
      url: "https://ecsilva.com/en",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          "pt-BR": "https://ecsilva.com",
          en: "https://ecsilva.com/en",
          "x-default": "https://ecsilva.com",
        },
      },
    },
  ];
}
