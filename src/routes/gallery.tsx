import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { gallery } from "@/lib/gallery-data";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";

export const Route = createFileRoute("/gallery")({
 head: () => ({
    meta: [
      { title: "Photo Gallery — J.B. Hagjer Degree College" },
      { name: "description", content: "Glimpses of campus life, events, celebrations and academic activities at J.B. Hagjer Degree College, Umrongso." },
      { property: "og:title", content: "Photo Gallery — J.B. Hagjer Degree College" },
      { property: "og:description", content: "Glimpses of campus life, events and celebrations at JBHDC, Umrongso." },
      { property: "og:url", content: "https://demo.jbhagjerdegreecollege.in/gallery" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://demo.jbhagjerdegreecollege.in/gallery" },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  useEffect(() => {
    const lightbox = GLightbox({
      selector: ".glightbox",
      touchNavigation: true,
      loop: true,
      autoplayVideos: true,
    });

    return () => {
      lightbox.destroy();
    };
  }, []);

  return (
    <SiteLayout>
      <PageHeader
        title="Photo Gallery"
        subtitle="Moments from our campus, classrooms, events and celebrations."
      />
      <section className="container-narrow py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((g, i) => (
            <a
              key={`${g.title}-${i}`}
              href={g.src}
              className="glightbox bg-card border border-border overflow-hidden group hover:border-gold hover:shadow-lg transition cursor-pointer relative z-10 block"
              data-glightbox={`title: ${g.title}; description: J.B. Hagjer Degree College`}
            >
              <figure className="m-0">
                <div className="aspect-[4/3] overflow-hidden bg-secondary relative">
                  <img
                    src={g.src}
                    alt={g.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="text-white text-sm font-semibold border-2 border-white px-5 py-2 rounded-md tracking-wider uppercase">
                      View
                    </span>
                  </div>
                </div>
                <figcaption className="px-4 py-3 border-t border-border bg-white relative z-20">
                  <div className="font-serif text-base font-semibold text-primary text-center">
                    {g.title}
                  </div>
                </figcaption>
              </figure>
            </a>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
