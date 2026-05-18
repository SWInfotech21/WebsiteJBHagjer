import { useState, useMemo } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { gallery } from "@/lib/gallery-data";
import FsLightbox from "fslightbox-react";

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
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    sourceIndex: 0,
  });

  const sources = useMemo(() => gallery.map((g) => g.src), []);

  const openLightboxOnIndex = (index: number) => {
    setLightboxController((prev) => ({
      toggler: !prev.toggler,
      sourceIndex: index,
    }));
  };

  return (
    <SiteLayout>
      <PageHeader
        title="Photo Gallery"
        subtitle="Moments from our campus, classrooms, events and celebrations."
      />
      <section className="container-narrow py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((g, i) => (
            <figure
              key={`${g.title}-${i}`}
              className="bg-card border border-border overflow-hidden group hover:border-gold hover:shadow-lg transition cursor-pointer relative z-10"
              onClick={() => openLightboxOnIndex(i)}
            >
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
          ))}
        </div>
      </section>

      <FsLightbox
        toggler={lightboxController.toggler}
        sources={sources}
        sourceIndex={lightboxController.sourceIndex}
      />
    </SiteLayout>
  );
}
