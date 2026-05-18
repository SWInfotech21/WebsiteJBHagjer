import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { faculties, departments } from "@/lib/college-data";
import { Phone, Mail } from "lucide-react";

export const Route = createFileRoute("/faculties")({
  head: () => ({
    meta: [
      { title: "Faculties — J.B. Hagjer Degree College" },
      { name: "description", content: "Meet the faculty members and academic departments of J.B. Hagjer Degree College, Umrongso." },
      { property: "og:title", content: "Faculties — J.B. Hagjer Degree College" },
      { property: "og:description", content: "Meet the faculty members and academic departments of J.B. Hagjer Degree College, Umrongso." },
      { property: "og:url", content: "https://demo.jbhagjerdegreecollege.in/faculties" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://demo.jbhagjerdegreecollege.in/faculties" },
    ],
  }),
  component: FacultiesPage,
});

function FacultiesPage() {
  return (
    <SiteLayout>
      <PageHeader title="Our Faculties" subtitle="A dedicated team of educators across eight Arts departments." />

      <section className="container-narrow py-12">
        <h2 className="font-serif text-2xl font-bold text-primary gold-underline">Departments</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {departments.map((d) => (
            <span key={d} className="px-4 py-2 bg-secondary border border-border text-sm text-primary font-medium hover:border-gold transition">{d}</span>
          ))}
        </div>
      </section>

      <section className="container-narrow pb-16">
        <h2 className="font-serif text-2xl font-bold text-primary gold-underline">Faculty Members</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {faculties.map((f) => (
            <div key={f.name + f.dept} className="bg-card border border-border hover:border-gold hover:shadow-lg transition">
              <div className="bg-primary text-primary-foreground px-5 py-4">
                <div className="text-xs uppercase tracking-wider text-gold font-semibold">{f.role}</div>
                <div className="font-serif text-xl font-bold mt-1">{f.name}</div>
              </div>
              <div className="p-5 space-y-2 text-sm">
                <div className="text-primary font-semibold">{f.dept}</div>
                <div className="text-muted-foreground">{f.quals}</div>
                <div className="pt-3 border-t border-border space-y-1.5 text-foreground/80">
                  <div className="flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-maroon" /> {f.phone}</div>
                  <div className="flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-maroon" /> <span className="truncate">{f.email}</span></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
