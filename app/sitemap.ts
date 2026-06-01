
import type { MetadataRoute } from "next";
import { getAllBlogPosts } from "@/src/lib/blogPosts";
import { getAllMealAgePages } from "@/src/lib/mealAgePages";
import { getAllSleepAgePages } from "@/src/lib/sleepAgePages";

const baseUrl = "https://bebecreste.ro";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();
  const blogPosts = getAllBlogPosts();
  const mealAgePages = getAllMealAgePages();
  const sleepAgePages = getAllSleepAgePages();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/calculator-somn`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/planner-mese`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ghid-somn-bebe`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/despre-noi`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/politica-confidentialitate`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/confidentialitate`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/termeni-si-conditii`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/termeni`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const sleepAgeRoutes: MetadataRoute.Sitemap = sleepAgePages.map((page) => ({
    url: `${baseUrl}/somn/${page.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const mealAgeRoutes: MetadataRoute.Sitemap = mealAgePages.map((page) => ({
    url: `${baseUrl}/mese/${page.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes, ...sleepAgeRoutes, ...mealAgeRoutes];
}
