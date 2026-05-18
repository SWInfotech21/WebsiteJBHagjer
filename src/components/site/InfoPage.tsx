import { SiteLayout } from "./SiteLayout";
import { pageContent } from "@/lib/page-content";

export function InfoPage({ slug }: { slug: string }) {
  const data = pageContent[slug];
  if (!data) {
    return (
      <SiteLayout>
        <section className="container-narrow py-20">
          <h1 className="font-serif text-3xl text-primary">Page coming soon</h1>
          <p className="mt-3 text-muted-foreground">Content for this section is being prepared.</p>
        </section>
      </SiteLayout>
    );
  }
  return (
    <SiteLayout>
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container-narrow">
          <p className="text-xs uppercase tracking-[0.2em] text-gold mb-2">J.B. Hagjer Degree College</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold">{data.title}</h1>
          <p className="mt-4 max-w-3xl text-primary-foreground/85">{data.lead}</p>
        </div>
      </section>
      <section className="container-narrow py-14 grid gap-10">
        {data.sections.map((s, i) => (
          <div key={i} className="border-l-4 border-gold pl-6">
            {s.heading ? (
              <h2 className="font-serif text-2xl text-primary mb-3">{s.heading}</h2>
            ) : null}
            {s.body.map((p, j) => (
              <p key={j} className="text-foreground/85 leading-relaxed mb-3">{p}</p>
            ))}
            {s.list ? (
              <ul className="mt-2 grid gap-2">
                {s.list.map((li, k) => (
                  <li key={k} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <span className="text-foreground/85">{li}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
      </section>
    </SiteLayout>
  );
}
