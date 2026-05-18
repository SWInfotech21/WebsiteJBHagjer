import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import principalImg from "@/assets/img/principal.jpg";
import { Quote } from "lucide-react";

export const Route = createFileRoute("/principal")({
  head: () => ({
    meta: [
      { title: "Principal's Desk — J.B. Hagjer Degree College" },
      { name: "description", content: "Message from K Meraton Singha, Principal (i/c) of J.B. Hagjer Degree College, Umrongso." },
      { property: "og:title", content: "Principal's Desk — J.B. Hagjer Degree College" },
      { property: "og:description", content: "Message from K Meraton Singha, Principal (i/c) of J.B. Hagjer Degree College, Umrongso." },
      { property: "og:url", content: "https://demo.jbhagjerdegreecollege.in/principal" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://demo.jbhagjerdegreecollege.in/principal" },
    ],
  }),
  component: PrincipalPage,
});

function PrincipalPage() {
  return (
    <SiteLayout>
      <PageHeader title="Principal's Desk" subtitle="A message from the Principal-in-Charge of J.B. Hagjer Degree College." />
      <section className="container-narrow py-14 grid lg:grid-cols-3 gap-10">
        <aside className="lg:col-span-1">
          <div className="aspect-[4/5] bg-primary/10 border-4 border-gold relative overflow-hidden shadow-xl">
            <img src={principalImg} alt="K Meraton Singha, Principal (i/c)" className="w-full h-full object-cover" />
          </div>
          <div className="mt-5 bg-secondary p-5 border-l-4 border-gold">
            <div className="font-serif text-2xl font-bold text-primary">K Meraton Singha</div>
            <div className="text-sm text-maroon font-semibold uppercase tracking-wider mt-1">Principal (i/c)</div>
            <div className="text-sm text-muted-foreground mt-2">Department of Philosophy<br />MA · B.Ed · NET</div>
            <div className="mt-4 text-sm space-y-1">
              <div>📞 +91 78969 83951</div>
              <div>📞 +91 86384 21685</div>
              <div>✉️ kmton11@gmail.com</div>
            </div>
          </div>
        </aside>

        <article className="lg:col-span-2 space-y-5 text-foreground/85 leading-relaxed">
          <Quote className="h-10 w-10 text-gold" />
          <p className="text-xl font-serif italic text-primary">
            "At J.B. Hagjer Degree College we value every individual in our care, and it is our aim to
            provide the best possible environment in which every student can succeed."
          </p>
          <p>
            I am honoured and very proud to serve and lead the learning here at J.B. Hagjer Degree
            College, Umrongso. I am working hard to gain your trust and respect as the college's
            Principal-in-Charge, and to build on the strong foundation laid down by our founders and
            the generations of teachers and students who have walked these corridors before us.
          </p>
          <p>
            My responsibility is to ensure that every student continues to receive a high-quality
            education within a safe and supportive environment. We believe that education must do more
            than impart knowledge — it must shape character, broaden horizons, and prepare young men
            and women to take their place as confident, ethical, and contributing members of society.
          </p>
          <p>
            The hills of Dima Hasao are home to a rich tapestry of cultures, languages and traditions.
            Our college celebrates this diversity and weaves it into the academic life of the campus.
            We encourage our students to remain rooted in their identity even as they reach outwards
            to the wider world of ideas, opportunities and responsibilities.
          </p>
          <p>
            I warmly invite parents, alumni, well-wishers and prospective students to walk with us on
            this journey. Together, we will continue to make J.B. Hagjer Degree College a place where
            every learner is seen, supported, and empowered to succeed.
          </p>
          <p className="font-serif text-lg text-primary mt-6">— K Meraton Singha</p>
        </article>
      </section>
    </SiteLayout>
  );
}
