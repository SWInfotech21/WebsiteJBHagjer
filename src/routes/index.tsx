import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, BookOpen, Bell, GraduationCap, Users, Award, Calendar, ChevronRight, ExternalLink } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { notices, faculties, programs } from "@/lib/college-data";
import { gallery, achievements } from "@/lib/gallery-data";
import hero from "@/assets/campus-hero.jpg";
import library from "@/assets/campus-library.jpg";
import convocation from "@/assets/campus-convocation.jpg";
import cultural from "@/assets/campus-cultural.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "J.B. Hagjer Degree College, Umrongso — Estd. 1995" },
      { name: "description", content: "Premier degree college in Umrongso, Dima Hasao, Assam — affiliated to Assam University Silchar. Admissions 2026–27 open via Samarth Portal." },
      { property: "og:title", content: "J.B. Hagjer Degree College, Umrongso" },
      { property: "og:description", content: "Higher education for the tribal communities of Dima Hasao since 1995." },
      { property: "og:url", content: "https://demo.jbhagjerdegreecollege.in/" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://demo.jbhagjerdegreecollege.in/" },
      { rel: "preload", as: "image", href: hero, fetchpriority: "high" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollegeOrUniversity",
          name: "J.B. Hagjer Degree College",
          alternateName: "JBHDC Umrongso",
          url: "https://demo.jbhagjerdegreecollege.in/",
          foundingDate: "1995",
          address: {
            "@type": "PostalAddress",
            streetAddress: "P.O. & P.S. Umrongso, Haplai Raji",
            addressLocality: "Umrongso",
            addressRegion: "Dima Hasao, Assam",
            postalCode: "788931",
            addressCountry: "IN",
          },
          parentOrganization: { "@type": "CollegeOrUniversity", name: "Assam University, Silchar" },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "J.B. Hagjer Degree College",
          url: "https://demo.jbhagjerdegreecollege.in/",
        }),
      },
    ],
  }),
  component: HomePage,
});

const slides = [
  { src: hero, title: "Knowledge for the hills", caption: "Empowering Dima Hasao through higher education since 1995" },
  { src: library, title: "A home for ideas", caption: "Library, classrooms and dedicated faculty under one roof" },
  { src: convocation, title: "Generations of graduates", caption: "Building leaders rooted in their communities" },
  { src: cultural, title: "Culture & community", caption: "Celebrating the rich tribal heritage of the North Cachar Hills" },
];

function HomePage() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <SiteLayout>
      {/* Hero slider */}
      <section className="relative">
        <div className="relative h-[480px] md:h-[560px] overflow-hidden">
          {slides.map((s, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ${idx === i ? "opacity-100" : "opacity-0"}`}
            >
              <img
                src={s.src}
                alt={s.title}
                className="w-full h-full object-cover"
                width={1920}
                height={1080}
                loading={idx === 0 ? "eager" : "lazy"}
                {...(idx === 0 ? { fetchPriority: "high" as const } : { fetchPriority: "low" as const })}
                decoding={idx === 0 ? "sync" : "async"}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/55 to-transparent" />
            </div>
          ))}
          <div className="relative z-10 container-narrow h-full flex items-center">
            <div className="max-w-2xl text-primary-foreground animate-fade-slide" key={i}>
              <div className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Estd. 1995 · Umrongso, Dima Hasao</div>
              <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight">{slides[i].title}</h1>
              <p className="mt-4 text-base md:text-lg opacity-90">{slides[i].caption}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/admission" className="inline-flex items-center gap-2 bg-gold text-gold-foreground px-6 py-3 text-sm font-semibold rounded-sm hover:opacity-90">
                  Admission 2026–27 <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/about" className="inline-flex items-center gap-2 border border-white/40 text-primary-foreground px-6 py-3 text-sm font-semibold rounded-sm hover:bg-white/10">
                  About the College
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute z-10 bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, idx) => (
              <button key={idx} aria-label={`Slide ${idx + 1}`} onClick={() => setI(idx)} className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-gold" : "w-3 bg-white/50"}`} />
            ))}
          </div>
        </div>

        {/* Notice ticker */}
        <div className="bg-maroon text-white">
          <div className="container-narrow flex items-center gap-4 py-2.5 overflow-hidden">
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider bg-gold text-gold-foreground px-3 py-1 rounded-sm shrink-0">
              <Bell className="h-3.5 w-3.5" /> Latest
            </span>
            <div className="flex-1 overflow-hidden">
              <div className="flex gap-12 whitespace-nowrap animate-ticker">
                {[...notices, ...notices].map((n, idx) => (
                  <span key={idx} className="text-sm">
                    <span className="text-gold font-semibold">[{n.tag}]</span> {n.title} <span className="opacity-60">— {n.date}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick action strip */}
      <section className="bg-secondary border-b border-border">
        <div className="container-narrow grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {[
            { icon: GraduationCap, label: "Apply Online", to: "https://assamadmission.samarth.ac.in/", external: true },
            { icon: BookOpen, label: "Prospectus 2026–27", to: "/admission" },
            { icon: Calendar, label: "Notice Board", to: "/notices" },
            { icon: Users, label: "Faculties", to: "/faculties" },
          ].map((a) => {
            const Icon = a.icon;
            const cls = "flex items-center gap-3 px-5 py-5 hover:bg-accent transition group";
            const inner = (
              <>
                <Icon className="h-6 w-6 text-maroon" />
                <span className="font-medium text-sm md:text-base text-primary">{a.label}</span>
                <ChevronRight className="ml-auto h-4 w-4 text-gold opacity-0 group-hover:opacity-100 transition" />
              </>
            );
            return a.external ? (
              <a key={a.label} href={a.to} target="_blank" rel="noreferrer" className={cls}>{inner}</a>
            ) : (
              <Link key={a.label} to={a.to} className={cls}>{inner}</Link>
            );
          })}
        </div>
      </section>

      {/* About + Notices */}
      <section className="container-narrow py-16 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <div className="text-xs uppercase tracking-[0.2em] text-maroon mb-2">Welcome</div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary gold-underline">About the College</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-8 items-start">
            <img src={library} alt="Campus library" width={1280} height={800} loading="lazy" className="rounded-sm shadow-lg w-full h-64 object-cover" />
            <div>
              <p className="text-foreground/85 leading-relaxed">
                J.B. Hagjer Degree College was established in 1995, permitted by Assam University, Silchar
                (established under the Central University Act III of 1989). The college is presently
                temporarily affiliated to Assam University, Silchar.
              </p>
              <p className="mt-4 text-foreground/85 leading-relaxed">
                Located at Umrongso — a remote corner of the Dima Hasao district — the college is the only
                institution imparting higher education to students belonging mostly to the tribal
                communities of this region.
              </p>
              <Link to="/about" className="mt-6 inline-flex items-center gap-2 text-maroon font-semibold hover:gap-3 transition-all">
                Read more <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border">
            {[
              { k: "30+", v: "Years of legacy" },
              { k: "8", v: "Departments" },
              { k: "1500+", v: "Students" },
              { k: "100%", v: "AUS affiliated" },
            ].map((s) => (
              <div key={s.v} className="bg-card p-6 text-center">
                <div className="font-serif text-3xl md:text-4xl font-bold text-maroon">{s.k}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Notice board */}
        <aside className="bg-card border border-border rounded-sm shadow-sm">
          <div className="bg-primary text-primary-foreground px-5 py-4 flex items-center justify-between">
            <h3 className="font-serif text-xl font-semibold flex items-center gap-2"><Bell className="h-5 w-5 text-gold" /> Notice Board</h3>
            <Link to="/notices" className="text-xs text-gold hover:underline">View all</Link>
          </div>
          <ul className="divide-y divide-border max-h-[460px] overflow-auto">
            {notices.map((n, idx) => (
              <li key={idx} className="px-5 py-4 hover:bg-accent transition">
                <div className="flex items-start gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-maroon bg-maroon/10 px-2 py-0.5 rounded-sm shrink-0 mt-0.5">{n.tag}</span>
                  {n.isNew && <span className="text-[10px] font-bold uppercase tracking-wider bg-gold text-gold-foreground px-2 py-0.5 rounded-sm">New</span>}
                </div>
                <div className="mt-2 text-sm text-foreground leading-snug">{n.title}</div>
                <div className="mt-1 text-xs text-muted-foreground">{n.date}</div>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      {/* Principal's message */}
      <section className="bg-secondary py-16">
        <div className="container-narrow grid md:grid-cols-3 gap-10 items-center">
          <div className="md:col-span-1">
            <div className="aspect-[4/5] bg-primary/10 border-4 border-gold relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center font-serif text-8xl text-primary/20">KM</div>
            </div>
            <div className="mt-4">
              <div className="font-serif text-xl font-bold text-primary">K Meraton Singha</div>
              <div className="text-sm text-muted-foreground">Principal (i/c)</div>
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="text-xs uppercase tracking-[0.2em] text-maroon mb-2">Message</div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary gold-underline">From the Principal's Chair</h2>
            <p className="mt-8 text-foreground/85 leading-relaxed text-lg italic">
              "At J.B. Hagjer Degree College we value every individual in our care. It is our aim to
              provide the best possible environment in which every student can succeed."
            </p>
            <p className="mt-4 text-foreground/80 leading-relaxed">
              I am honoured and proud to lead the learning at J.B. Hagjer Degree College, Umrongso. My
              responsibility is to ensure that every student receives a high-quality education within a
              safe and supportive environment.
            </p>
            <Link to="/principal" className="mt-6 inline-flex items-center gap-2 text-maroon font-semibold">
              Read full message <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="container-narrow py-16">
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-maroon mb-2">Academics</div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary gold-underline gold-underline-center inline-block">Programs Offered</h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {programs.map((p) => (
            <div key={p.code} className="bg-card border border-border p-7 hover:border-gold hover:shadow-lg transition group">
              <div className="text-xs uppercase tracking-wider text-gold font-bold">{p.code}</div>
              <h3 className="mt-2 font-serif text-xl font-bold text-primary">{p.title}</h3>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-muted-foreground"><Calendar className="h-3.5 w-3.5" /> {p.duration}</div>
              <p className="mt-4 text-sm text-foreground/80 leading-relaxed">{p.desc}</p>
              <Link to="/admission" className="mt-5 inline-flex items-center gap-2 text-maroon text-sm font-semibold group-hover:gap-3 transition-all">
                Admission details <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Faculty preview */}
      <section className="bg-primary text-primary-foreground py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${cultural})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="relative container-narrow">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-gold mb-2">Our People</div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold gold-underline">Faculty Members</h2>
            </div>
            <Link to="/faculties" className="text-gold hover:underline text-sm font-semibold inline-flex items-center gap-1">View all <ArrowRight className="h-4 w-4" /></Link>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {faculties.slice(0, 4).map((f) => (
              <div key={f.name} className="bg-card text-card-foreground p-6 border-t-4 border-gold">
                <div className="font-serif text-lg font-bold text-primary">{f.name}</div>
                <div className="text-xs uppercase tracking-wider text-maroon mt-1 font-semibold">{f.role}</div>
                <div className="text-sm text-muted-foreground mt-3">{f.dept}</div>
                <div className="text-xs text-muted-foreground mt-1">{f.quals}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="bg-secondary py-16">
        <div className="container-narrow">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-maroon mb-2">Glimpses</div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary gold-underline">Photo Gallery</h2>
            </div>
            <Link to="/gallery" className="text-maroon hover:text-primary text-sm font-semibold inline-flex items-center gap-1">
              View more <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {gallery.slice(0, 8).map((g) => (
              <figure key={g.title} className="bg-card border border-border overflow-hidden group hover:border-gold hover:shadow-lg transition">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={g.src} alt={g.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <figcaption className="px-3 py-2.5 border-t border-border text-sm font-semibold text-primary truncate">{g.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="container-narrow py-16">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-maroon mb-2">Pride of JBHDC</div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary gold-underline">Achievements & Recognitions</h2>
          </div>
          <Link to="/achievements" className="text-maroon hover:text-primary text-sm font-semibold inline-flex items-center gap-1">
            View more <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.slice(0, 6).map((a) => (
            <article key={a.title} className="bg-card border-t-4 border-gold border-x border-b border-border p-6 hover:shadow-lg transition">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold">
                <Award className="h-4 w-4" /> {a.year}
              </div>
              <h3 className="mt-2 font-serif text-lg font-bold text-primary leading-snug">{a.title}</h3>
              <p className="mt-3 text-sm text-foreground/80 leading-relaxed">{a.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Map + Facebook */}
      <section className="bg-secondary py-16">
        <div className="container-narrow grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <div className="text-xs uppercase tracking-[0.2em] text-maroon mb-2">Find Us</div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary gold-underline">Location on Google Maps</h2>
            <div className="mt-6 aspect-[16/10] w-full overflow-hidden rounded-sm border border-border bg-card">
              <iframe
                title="J.B. Hagjer Degree College location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1246.1002832192291!2d92.93476693007885!3d25.79268268984635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37456528ccfadb61%3A0xa5a625aeba13664d!2sJ.%20B.%20Hagjer%20Degree%20College!5e0!3m2!1sen!2sin!4v1778992050574!5m2!1sen!2sin"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="text-xs uppercase tracking-[0.2em] text-maroon mb-2">Stay Connected</div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary gold-underline">Facebook Updates</h2>
            <div className="mt-6 bg-card border border-border rounded-sm overflow-hidden flex justify-center">
              <iframe
                title="JBHDC Facebook page"
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FJBHDC1995%2F&tabs=timeline&width=400&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width={400}
                height={500}
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder={0}
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Useful links */}
      <section className="container-narrow py-16">
        <div className="text-xs uppercase tracking-[0.2em] text-maroon mb-2">Resources</div>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary gold-underline">Quick & Useful Links</h2>
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {[
            ["Assam University, Silchar", "http://www.aus.ac.in/"],
            ["AUS Examination Portal", "https://ausexamination.ac.in/"],
            ["Samarth Admission Portal", "https://assamadmission.samarth.ac.in/"],
            ["UGC", "https://www.ugc.ac.in/"],
            ["NAAC", "http://www.naac.gov.in/"],
            ["National Scholarship Portal", "https://scholarships.gov.in/"],
            ["Directorate of Higher Education, Assam", "https://directorateofhighereducation.assam.gov.in/"],
            ["Ministry of Education", "https://mhrd.gov.in/rusa"],
            ["National Digital Library of India", "https://www.ndl.gov.in/"],
          ].map(([label, href]) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" className="flex items-center justify-between gap-2 bg-card border border-border px-4 py-3 hover:border-gold hover:bg-accent transition">
              <span className="text-sm font-medium text-primary">{label}</span>
              <ExternalLink className="h-4 w-4 text-gold" />
            </a>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
