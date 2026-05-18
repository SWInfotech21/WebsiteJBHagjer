import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { notices } from "@/lib/college-data";
import { FileText } from "lucide-react";

export const Route = createFileRoute("/notices")({
  head: () => ({
    meta: [
      { title: "Notice Board — J.B. Hagjer Degree College" },
      { name: "description", content: "Latest notices, circulars and announcements from J.B. Hagjer Degree College, Umrongso." },
      { property: "og:title", content: "Notice Board — J.B. Hagjer Degree College" },
      { property: "og:description", content: "Latest notices, circulars and announcements from J.B. Hagjer Degree College, Umrongso." },
      { property: "og:url", content: "https://demo.jbhagjerdegreecollege.in/notices" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://demo.jbhagjerdegreecollege.in/notices" },
    ],
  }),
  component: NoticesPage,
});

function NoticesPage() {
  return (
    <SiteLayout>
      <PageHeader title="Notice Board" subtitle="Official notices, circulars and announcements." />
      <section className="container-narrow py-14">
        <ul className="divide-y divide-border border border-border bg-card">
          {notices.map((n, idx) => (
            <li key={idx} className="px-6 py-5 flex items-start gap-5 hover:bg-accent transition">
              <FileText className="h-6 w-6 text-maroon shrink-0 mt-1" />
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-maroon bg-maroon/10 px-2 py-0.5 rounded-sm">{n.tag}</span>
                  {n.isNew && <span className="text-[10px] font-bold uppercase tracking-wider bg-gold text-gold-foreground px-2 py-0.5 rounded-sm">New</span>}
                </div>
                <div className="font-medium text-primary">{n.title}</div>
                <div className="text-xs text-muted-foreground mt-1">{n.date}</div>
              </div>
              <a href="#" className="text-sm text-maroon font-semibold hover:underline shrink-0">View →</a>
            </li>
          ))}
        </ul>
      </section>
    </SiteLayout>
  );
}
