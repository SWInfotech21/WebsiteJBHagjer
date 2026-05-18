import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/site/InfoPage";
import { pageContent } from "@/lib/page-content";

const data = pageContent["code-of-conduct"];

export const Route = createFileRoute("/code-of-conduct")({
  head: () => ({
    meta: [
      { title: `${data.title} — J.B. Hagjer Degree College` },
      { name: "description", content: data.lead.slice(0, 158) },
      { property: "og:title", content: `${data.title} — J.B. Hagjer Degree College` },
      { property: "og:description", content: data.lead.slice(0, 158) },
      { property: "og:url", content: "https://demo.jbhagjerdegreecollege.in/code-of-conduct" },
      { property: "og:type", content: "article" },
    ],
    links: [
      { rel: "canonical", href: "https://demo.jbhagjerdegreecollege.in/code-of-conduct" },
    ],
  }),
  component: () => <InfoPage slug="code-of-conduct" />,
});
