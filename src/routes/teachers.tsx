import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/site/InfoPage";
import { pageContent } from "@/lib/page-content";

const data = pageContent["teachers"];

export const Route = createFileRoute("/teachers")({
  head: () => ({
    meta: [
      { title: `${data.title} — J.B. Hagjer Degree College` },
      { name: "description", content: data.lead.slice(0, 158) },
      { property: "og:title", content: `${data.title} — J.B. Hagjer Degree College` },
      { property: "og:description", content: data.lead.slice(0, 158) },
      { property: "og:url", content: "https://digital-campus-forge.lovable.app/teachers" },
      { property: "og:type", content: "article" },
    ],
    links: [
      { rel: "canonical", href: "https://digital-campus-forge.lovable.app/teachers" },
    ],
  }),
  component: () => <InfoPage slug="teachers" />,
});
