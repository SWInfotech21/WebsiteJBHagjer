import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import campus from "@/assets/campus-hero.jpg";
import { Award, Target, Eye, Heart } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — J.B. Hagjer Degree College, Umrongso" },
      { name: "description", content: "Established 1995, J.B. Hagjer Degree College serves Dima Hasao with quality higher education affiliated to Assam University, Silchar." },
      { property: "og:title", content: "About — J.B. Hagjer Degree College, Umrongso" },
      { property: "og:description", content: "Established 1995, J.B. Hagjer Degree College serves Dima Hasao with quality higher education affiliated to Assam University, Silchar." },
      { property: "og:url", content: "https://demo.jbhagjerdegreecollege.in/about" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://demo.jbhagjerdegreecollege.in/about" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHeader title="About the College" subtitle="A legacy of higher education in the hills of Dima Hasao since 1995." />
      <section className="container-narrow py-14 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-3 space-y-5 text-foreground/85 leading-relaxed">
          <p>
            J.B. Hagjer Degree College was established in <strong>1995</strong> through the support of the
            North Cachar Hills Autonomous Council, Haflong, with a vision to bring higher education to the
            doorstep of the tribal youth of Umrongso and the surrounding hill areas.
          </p>
          <p>
            The college was permitted by <strong>Assam University, Silchar</strong> (established under the
            Central University Act III of 1989) and is at present temporarily affiliated to the same
            University. It remains the only educational institution in the region imparting higher
            education to students mostly belonging to tribal communities.
          </p>
          <p>
            Over three decades, the college has grown from a modest beginning into a multi-departmental
            institution offering programmes in Arts under the new Four-Year Undergraduate framework
            (FYUG) and the legacy three-year programme. The college lays equal emphasis on academic
            excellence, ethical grounding, and community responsibility.
          </p>
          <p>
            Our campus, set against the rolling hills of Haplai Raji, provides a calm and inspiring
            environment for learning. With a dedicated faculty, a steadily growing library, and
            opportunities for cultural and co-curricular engagement, the college nurtures students to
            become confident, contributing citizens.
          </p>
        </div>
        <aside className="lg:col-span-2 space-y-6">
          <img src={campus} alt="College campus" width={1920} height={1080} loading="lazy" className="rounded-sm shadow-lg w-full" />
          <div className="bg-secondary border-l-4 border-gold p-5">
            <div className="text-xs uppercase tracking-wider text-maroon font-bold">Affiliation</div>
            <div className="mt-1 font-serif text-lg text-primary">Assam University, Silchar</div>
            <div className="text-sm text-muted-foreground mt-1">Supported by N.C. Hills Autonomous Council, Haflong</div>
          </div>
        </aside>
      </section>

      <section className="bg-secondary py-14">
        <div className="container-narrow grid md:grid-cols-3 gap-6">
          {[
            { icon: Eye, title: "Our Vision", body: "To be a centre of inclusive higher learning that empowers the tribal and rural youth of Dima Hasao with knowledge, character and opportunity." },
            { icon: Target, title: "Our Mission", body: "Provide quality undergraduate education, foster intellectual curiosity, and connect classroom learning with the social realities of the hills." },
            { icon: Heart, title: "Our Values", body: "Integrity, inclusion, respect for cultural heritage, academic rigour, and unwavering service to the community we belong to." },
          ].map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.title} className="bg-card p-7 border-t-4 border-gold">
                <Icon className="h-8 w-8 text-maroon" />
                <h3 className="mt-4 font-serif text-2xl font-bold text-primary">{c.title}</h3>
                <p className="mt-3 text-sm text-foreground/80 leading-relaxed">{c.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="container-narrow py-14">
        <h2 className="font-serif text-3xl font-bold text-primary gold-underline">Milestones</h2>
        <ol className="mt-10 relative border-l-2 border-gold/40 ml-3 space-y-8">
          {[
            ["1995", "Foundation", "College established with the support of NCH Autonomous Council, Haflong."],
            ["1998", "Affiliation", "Permitted by Assam University, Silchar to offer undergraduate programmes."],
            ["2010", "Expansion", "New academic block and library facilities added to support growing enrolment."],
            ["2023", "NEP 2020", "Four-Year Undergraduate Programme (FYUG) introduced under NEP 2020."],
            ["2026", "Today", "Serving over 1,500 students across eight Arts departments."],
          ].map(([year, title, body]) => (
            <li key={year} className="pl-6">
              <span className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full bg-gold border-2 border-card" />
              <div className="font-serif text-2xl font-bold text-maroon">{year}</div>
              <div className="font-semibold text-primary">{title}</div>
              <p className="text-sm text-muted-foreground mt-1 max-w-2xl">{body}</p>
            </li>
          ))}
        </ol>
      </section>
    </SiteLayout>
  );
}
