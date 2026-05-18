import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/site/InfoPage";
import { pageContent } from "@/lib/page-content";

const data = pageContent["courses"];

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: `${data.title} — J.B. Hagjer Degree College` },
      { name: "description", content: data.lead.slice(0, 158) },
      { property: "og:title", content: `${data.title} — J.B. Hagjer Degree College` },
      { property: "og:description", content: data.lead.slice(0, 158) },
      { property: "og:url", content: "https://digital-campus-forge.lovable.app/courses" },
      { property: "og:type", content: "article" },
    ],
    links: [
      { rel: "canonical", href: "https://digital-campus-forge.lovable.app/courses" },
    ],
  }),
  component: () => <InfoPage slug="courses" />,
});
