import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { programs } from "@/lib/college-data";
import { Download, ArrowUpRight, IdCard, UserPlus, FileUp, ListChecks, CreditCard, GraduationCap, Phone, ExternalLink, AlertCircle } from "lucide-react";

export const Route = createFileRoute("/admission")({
  head: () => ({
    meta: [
      { title: "Admission 2026–27 — J.B. Hagjer Degree College" },
      { name: "description", content: "Step-by-step guide to UG admission via DHE Unique ID and the Assam SAMARTH Portal for the 2026–27 session." },
      { property: "og:title", content: "Admission 2026–27 — J.B. Hagjer Degree College" },
      { property: "og:description", content: "Step-by-step guide to UG admission via DHE Unique ID and the Assam SAMARTH Portal for the 2026–27 session." },
      { property: "og:url", content: "https://digital-campus-forge.lovable.app/admission" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://digital-campus-forge.lovable.app/admission" },
    ],
  }),
  component: AdmissionPage,
});

const steps = [
  {
    icon: IdCard,
    title: "Generate DHE Unique ID",
    desc: "Visit the Directorate of Higher Education portal and create a mandatory Student Unique ID required for every state college admission.",
    link: { url: "https://directorateofhighereducation.assam.gov.in/", label: "DHE Assam Portal" },
  },
  {
    icon: UserPlus,
    title: "Register on SAMARTH",
    desc: "Sign up on the Assam SAMARTH portal using a valid mobile number and email. Fill in your personal details exactly as recorded in your Class 10 marksheet.",
    link: { url: "https://assamadmission.samarth.ac.in/", label: "Assam SAMARTH" },
  },
  {
    icon: FileUp,
    title: "Upload Documents",
    desc: "Upload scanned photo, signature, HSLC & HSSLC marksheets, bank passbook, caste certificate (if applicable) and your DHE Unique ID.",
  },
  {
    icon: ListChecks,
    title: "Choose Programmes",
    desc: "Select up to 10 programme preferences across colleges. Make sure to include J.B. Hagjer Degree College, Umrongso for your preferred BA (FYUG) major.",
  },
  {
    icon: CreditCard,
    title: "Pay & Submit",
    desc: "Pay the application fee online and submit the completed form. Save the acknowledgement PDF for your records.",
  },
  {
    icon: GraduationCap,
    title: "Allotment & Reporting",
    desc: "Watch the SAMARTH dashboard for allotment. Once allotted, accept the seat, pay college fees online and report to the college with original documents.",
  },
];

function AdmissionPage() {
  return (
    <SiteLayout>
      <PageHeader title="Admission 2026–27" subtitle="Online registrations open from 11 April 2026 — apply through DHE & SAMARTH." />

      {/* Hero CTA */}
      <section className="container-narrow pt-12">
        <div className="bg-gradient-to-br from-maroon to-primary text-primary-foreground p-8 rounded-sm">
          <div className="text-xs uppercase tracking-[0.2em] text-gold">Now Open</div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2">BA (FYUG) 1st Semester · 2026–27</h2>
          <p className="mt-3 opacity-90 max-w-3xl">
            All admissions to government and provincialised colleges in Assam (BA, BSc, BCom) are processed through the
            <strong> SAMARTH portal</strong> after generating a <strong>DHE Student Unique ID</strong>.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="https://assamadmission.samarth.ac.in/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-gold text-gold-foreground font-semibold px-5 py-3 text-sm rounded-sm hover:opacity-90">
              Apply on SAMARTH <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="https://directorateofhighereducation.assam.gov.in/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-white/40 text-primary-foreground font-semibold px-5 py-3 text-sm rounded-sm hover:bg-white/10">
              Generate DHE ID <ExternalLink className="h-4 w-4" />
            </a>
            <a href="#" className="inline-flex items-center gap-2 border border-white/40 text-primary-foreground font-semibold px-5 py-3 text-sm rounded-sm hover:bg-white/10">
              <Download className="h-4 w-4" /> Prospectus 2026–27
            </a>
          </div>
        </div>
      </section>

      {/* Visual Step Flow */}
      <section className="container-narrow py-14">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Admission Roadmap</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mt-2">How to apply, step by step</h2>
          <p className="mt-3 text-foreground/75">Follow the six-step flow below. The whole process is online — no offline application is accepted for 4-Year UG / 5-Year Integrated programmes.</p>
        </div>

        {/* Step graphic */}
        <div className="mt-12 relative">
          {/* connecting line on md+ */}
          <div aria-hidden className="hidden md:block absolute top-9 left-0 right-0 h-0.5 bg-gradient-to-r from-gold/20 via-gold to-gold/20" />
          <ol className="grid gap-6 md:grid-cols-3 lg:grid-cols-6 relative">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <li key={s.title} className="bg-card border border-border hover:border-gold transition rounded-sm p-5 relative shadow-sm">
                  <div className="flex justify-center">
                    <div className="relative z-10 h-[72px] w-[72px] rounded-full bg-primary text-primary-foreground flex items-center justify-center border-4 border-card">
                      <Icon className="h-7 w-7 text-gold" />
                    </div>
                  </div>
                  <div className="mt-3 text-center">
                    <div className="text-[11px] uppercase tracking-widest text-gold font-bold">Step {i + 1}</div>
                    <div className="font-serif text-base font-bold text-primary mt-1 leading-tight">{s.title}</div>
                    <p className="text-xs text-foreground/75 mt-2 leading-relaxed">{s.desc}</p>
                    {s.link && (
                      <a href={s.link.url} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-gold">
                        {s.link.label} <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Programmes + sidebar */}
      <section className="container-narrow pb-14 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h3 className="font-serif text-2xl font-bold text-primary gold-underline">Programmes Offered</h3>
            <div className="mt-6 space-y-4">
              {programs.map((p) => (
                <div key={p.code} className="bg-card border border-border p-6 flex flex-wrap gap-4 items-start hover:border-gold transition">
                  <div className="min-w-[120px]">
                    <div className="text-xs uppercase tracking-wider text-gold font-bold">{p.code}</div>
                    <div className="text-xs text-muted-foreground mt-1">{p.duration}</div>
                  </div>
                  <div className="flex-1 min-w-[260px]">
                    <div className="font-serif text-lg font-bold text-primary">{p.title}</div>
                    <p className="text-sm text-foreground/80 mt-1">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scholarships */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-primary gold-underline">Scholarships & Fee Waivers</h3>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {[
                { t: "Pragyan Bharti", d: "Full tuition fee waiver for eligible UG students of Assam.", url: "https://directorateofhighereducation.assam.gov.in/" },
                { t: "Combined Merit Scholarship", d: "State merit-based scholarship for top-performing students.", url: "https://directorateofhighereducation.assam.gov.in/" },
                { t: "Abhinandan Scheme", d: "Recognises and supports outstanding girl students.", url: "https://www.myscheme.gov.in/schemes/aaelss" },
                { t: "CM Scholarship 2025–26", d: "Apply via the DHE Operations portal.", url: "http://dhe-operations.assam.gov.in/cm-scholarship-2025-26/" },
              ].map((sch) => (
                <a key={sch.t} href={sch.url} target="_blank" rel="noreferrer" className="bg-secondary border-l-4 border-gold p-5 hover:bg-secondary/70 transition">
                  <div className="font-serif text-lg font-bold text-primary flex items-center gap-2">
                    {sch.t} <ExternalLink className="h-3.5 w-3.5 text-gold" />
                  </div>
                  <p className="text-sm mt-1 text-foreground/80">{sch.d}</p>
                </a>
              ))}
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="bg-secondary border-l-4 border-gold p-6">
            <h4 className="font-serif text-lg font-bold text-primary">Eligibility</h4>
            <p className="text-sm mt-2 text-foreground/80">Pass in HSSLC (10+2) or equivalent examination from a recognised Council/Board with the minimum marks prescribed by Assam University, Silchar.</p>
          </div>

          <div className="bg-card border border-border p-6">
            <h4 className="font-serif text-lg font-bold text-primary">Documents Required</h4>
            <ul className="mt-3 text-sm space-y-1.5 text-foreground/80 list-disc pl-5">
              <li>DHE Student Unique ID</li>
              <li>Photograph & signature (scanned)</li>
              <li>HSLC & HSSLC marksheets and certificates</li>
              <li>Bank passbook (first page)</li>
              <li>Caste / PwD certificate (if applicable)</li>
              <li>Aadhaar card & PRC</li>
              <li>Migration / Transfer Certificate</li>
            </ul>
          </div>

          <div className="bg-card border border-gold/40 p-6">
            <div className="flex items-start gap-2">
              <AlertCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif text-lg font-bold text-primary">Important</h4>
                <p className="text-sm mt-1 text-foreground/80">
                  Application is <strong>online only</strong> for 4-Year UG and 5-Year Integrated courses. Use the same name, date of birth and parents' details as in your Class 10 records.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-primary text-primary-foreground p-6">
            <h4 className="font-serif text-lg font-bold text-gold flex items-center gap-2"><Phone className="h-4 w-4" /> Helpdesk</h4>
            <div className="text-sm mt-3 space-y-1">
              <div>Toll free: <strong>1800-345-1100</strong></div>
              <div>Phone: <strong>0361-2724222</strong></div>
              <div>College: +91 78969 83951</div>
            </div>
            <p className="text-xs mt-3 opacity-80">Office hours: 10:00 AM – 4:00 PM, Monday to Saturday.</p>
          </div>
        </aside>
      </section>
    </SiteLayout>
  );
}
