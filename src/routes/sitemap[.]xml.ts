import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://demo.jbhagjerdegreecollege.in";

type Entry = { path: string; priority: string; changefreq: string };

const ROUTES: Entry[] = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/about", priority: "0.9", changefreq: "monthly" },
  { path: "/admission", priority: "0.9", changefreq: "weekly" },
  { path: "/notices", priority: "0.8", changefreq: "weekly" },
  { path: "/gallery", priority: "0.7", changefreq: "monthly" },
  { path: "/achievements", priority: "0.7", changefreq: "monthly" },
  { path: "/contact", priority: "0.6", changefreq: "yearly" },
  { path: "/principal", priority: "0.6", changefreq: "monthly" },
  { path: "/faculties", priority: "0.7", changefreq: "monthly" },
  { path: "/courses", priority: "0.7", changefreq: "monthly" },
  { path: "/departments", priority: "0.7", changefreq: "monthly" },
  { path: "/teachers", priority: "0.6", changefreq: "monthly" },
  { path: "/support-staff", priority: "0.5", changefreq: "monthly" },
  { path: "/leaders", priority: "0.5", changefreq: "monthly" },
  { path: "/legacy", priority: "0.5", changefreq: "yearly" },
  { path: "/mission-vision", priority: "0.5", changefreq: "yearly" },
  { path: "/motto", priority: "0.4", changefreq: "yearly" },
  { path: "/emblem", priority: "0.4", changefreq: "yearly" },
  { path: "/anthem", priority: "0.4", changefreq: "yearly" },
  { path: "/prospectus", priority: "0.6", changefreq: "yearly" },
  { path: "/scholarships", priority: "0.7", changefreq: "monthly" },
  { path: "/fees-waiver", priority: "0.6", changefreq: "monthly" },
  { path: "/routine", priority: "0.6", changefreq: "monthly" },
  { path: "/academic-calendar", priority: "0.6", changefreq: "monthly" },
  { path: "/academic-audit", priority: "0.5", changefreq: "yearly" },
  { path: "/environment-audit", priority: "0.5", changefreq: "yearly" },
  { path: "/annual-report", priority: "0.5", changefreq: "yearly" },
  { path: "/perspective-plan", priority: "0.5", changefreq: "yearly" },
  { path: "/idp", priority: "0.5", changefreq: "yearly" },
  { path: "/iqac", priority: "0.6", changefreq: "monthly" },
  { path: "/iqac-minutes", priority: "0.4", changefreq: "monthly" },
  { path: "/aqar", priority: "0.5", changefreq: "yearly" },
  { path: "/ssr", priority: "0.5", changefreq: "yearly" },
  { path: "/nirf", priority: "0.5", changefreq: "yearly" },
  { path: "/aishe", priority: "0.5", changefreq: "yearly" },
  { path: "/best-practices", priority: "0.4", changefreq: "yearly" },
  { path: "/code-of-conduct", priority: "0.4", changefreq: "yearly" },
  { path: "/statutory-body", priority: "0.4", changefreq: "yearly" },
  { path: "/library", priority: "0.6", changefreq: "monthly" },
  { path: "/computer-lab", priority: "0.5", changefreq: "monthly" },
  { path: "/ict-classrooms", priority: "0.5", changefreq: "monthly" },
  { path: "/museum", priority: "0.4", changefreq: "yearly" },
  { path: "/solar-plant", priority: "0.4", changefreq: "yearly" },
  { path: "/facilities-pwd", priority: "0.5", changefreq: "yearly" },
  { path: "/ncc", priority: "0.5", changefreq: "monthly" },
  { path: "/nss", priority: "0.5", changefreq: "monthly" },
  { path: "/scouts-guides", priority: "0.4", changefreq: "monthly" },
  { path: "/cells-clubs", priority: "0.5", changefreq: "monthly" },
  { path: "/students-body", priority: "0.5", changefreq: "monthly" },
  { path: "/mentor-mentee", priority: "0.4", changefreq: "monthly" },
  { path: "/career-guidance", priority: "0.6", changefreq: "monthly" },
  { path: "/college-magazine", priority: "0.4", changefreq: "yearly" },
  { path: "/alumni-registration", priority: "0.5", changefreq: "monthly" },
  { path: "/alumni-office-bearers", priority: "0.4", changefreq: "yearly" },
  { path: "/alumni-achievements", priority: "0.5", changefreq: "monthly" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...ROUTES.map(
            (e) =>
              `  <url><loc>${BASE_URL}${e.path}</loc><changefreq>${e.changefreq}</changefreq><priority>${e.priority}</priority></url>`,
          ),
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
