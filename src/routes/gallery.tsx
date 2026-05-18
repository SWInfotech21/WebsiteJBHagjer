import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { gallery } from "@/lib/gallery-data";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Photo Gallery — J.B. Hagjer Degree College" },
      { name: "description", content: "Glimpses of campus life, events, celebrations and academic activities at J.B. Hagjer Degree College, Umrongso." },
      { property: "og:title", content: "Photo Gallery — J.B. Hagjer Degree College" },
      { property: "og:description", content: "Glimpses of campus life, events and celebrations at JBHDC, Umrongso." },
      { property: "og:url", content: "https://digital-campus-forge.lovable.app/gallery" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://digital-campus-forge.lovable.app/gallery" },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <SiteLayout>
      <PageHeader title="Photo Gallery" subtitle="Moments from our campus, classrooms, events and celebrations." />
      <section className="container-narrow py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((g) => (
            <figure key={g.title} className="bg-card border border-border overflow-hidden group hover:border-gold hover:shadow-lg transition">
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src={g.src}
                  alt={g.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <figcaption className="px-4 py-3 border-t border-border">
                <div className="font-serif text-base font-semibold text-primary">{g.title}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
