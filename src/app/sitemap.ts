import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = "https://sa4s-serc.github.io/sustaind";

const routes = [
    "",
    "/about",
    "/people",
    "/publications",
    "/showcase",
    "/tools",
    "/videos",
    "/blogs",
    "/blogs/enhancing-sustainability",
    "/blogs/wait-how-much-does-ai-cost",
    "/blogs/tracking-mac-power-llm-inference",
    "/blogs/when-ml-systems-age-like-a-city",
    "/blogs/small-ai-models-cant-fix-your-code",
    "/blogs/teaching-systems-to-survive",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date("2026-04-12T00:00:00.000Z");

    return routes.map((route) => ({
        url: `${siteUrl}${route}`,
        lastModified: now,
        changeFrequency: route.startsWith("/blogs") ? "monthly" : "weekly",
        priority: route === "" ? 1 : route === "/blogs" ? 0.9 : 0.8,
    }));
}
