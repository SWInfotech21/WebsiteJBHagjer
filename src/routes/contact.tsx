import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { MapPin, Phone, Mail, Clock, Loader2 } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — J.B. Hagjer Degree College" },
      { name: "description", content: "Get in touch with J.B. Hagjer Degree College, Umrongso, Dima Hasao, Assam — 788931." },
      { property: "og:title", content: "Contact — J.B. Hagjer Degree College" },
      { property: "og:description", content: "Get in touch with J.B. Hagjer Degree College, Umrongso, Dima Hasao, Assam — 788931." },
      { property: "og:url", content: "https://demo.jbhagjerdegreecollege.in/contact" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://demo.jbhagjerdegreecollege.in/contact" }],
  }),
  component: ContactPage,
});

const RECIPIENT = "info@jbhagjerdegreecollege.in";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(100, "Max 100 characters"),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z
    .string()
    .trim()
    .max(20)
    .regex(/^[0-9+\-\s()]*$/, "Digits and + - ( ) only")
    .optional()
    .or(z.literal("")),
  subject: z.string().trim().max(150).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Please write at least 10 characters").max(2000, "Max 2000 characters"),
});

type FormState = z.infer<typeof contactSchema>;
type FieldErrors = Partial<Record<keyof FormState, string>>;

function ContactPage() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", phone: "", subject: "", message: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);

  const update = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      const fe: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0] as keyof FormState;
        if (!fe[k]) fe[k] = issue.message;
      }
      setErrors(fe);
      toast.error("Please fix the highlighted fields");
      return;
    }
    setSubmitting(true);
    const { name, email, phone, subject, message } = parsed.data;
    const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "-"}\n\n${message}`;
    const href = `mailto:${RECIPIENT}?subject=${encodeURIComponent(subject || `Website enquiry from ${name}`)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Opening your email app — please send the message to complete.");
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 400);
  };

  return (
    <SiteLayout>
      <Toaster richColors position="top-right" />
      <PageHeader title="Contact Us" subtitle="We'd love to hear from you. Reach out for admissions, academics or general queries." />

      <section className="container-narrow py-14 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 space-y-5">
          {[
            { icon: MapPin, title: "Address", body: "P.O. & P.S. Umrongso\nHaplai Raji, Dima Hasao\nAssam — 788931" },
            { icon: Phone, title: "Phone", body: "+91 78969 83951\n+91 86384 21685" },
            { icon: Mail, title: "Email", body: "info@jbhagjerdegreecollege.in\nkmton11@gmail.com" },
            { icon: Clock, title: "Office Hours", body: "Monday – Saturday\n10:00 AM – 4:00 PM" },
          ].map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.title} className="bg-card border-l-4 border-gold p-5 flex gap-4">
                <Icon className="h-6 w-6 text-maroon shrink-0 mt-1" />
                <div>
                  <div className="font-serif text-lg font-bold text-primary">{c.title}</div>
                  <div className="text-sm text-foreground/80 mt-1 whitespace-pre-line">{c.body}</div>
                </div>
              </div>
            );
          })}
        </div>

        <form
          className="lg:col-span-3 bg-card border border-border p-7 space-y-4"
          onSubmit={handleSubmit}
          noValidate
        >
          <h3 className="font-serif text-2xl font-bold text-primary gold-underline">Your Suggestions</h3>
          <p className="text-sm text-muted-foreground">
            Send us your feedback, queries or suggestions. We typically respond within 2 working days.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 pt-2">
            <Field id="name" label="Full Name" value={form.name} onChange={update("name")} error={errors.name} required maxLength={100} autoComplete="name" />
            <Field id="email" label="Email" type="email" value={form.email} onChange={update("email")} error={errors.email} required maxLength={255} autoComplete="email" />
            <Field id="phone" label="Phone" value={form.phone ?? ""} onChange={update("phone")} error={errors.phone} maxLength={20} autoComplete="tel" />
            <Field id="subject" label="Subject" value={form.subject ?? ""} onChange={update("subject")} error={errors.subject} maxLength={150} />
          </div>
          <div>
            <label htmlFor="message" className="text-xs uppercase tracking-wider text-primary font-semibold">
              Message <span className="text-maroon">*</span>
            </label>
            <textarea
              id="message"
              required
              rows={5}
              maxLength={2000}
              value={form.message}
              onChange={update("message")}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-err" : undefined}
              className="mt-1 w-full border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:border-gold"
            />
            {errors.message && (
              <p id="message-err" className="text-xs text-destructive mt-1">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center gap-2 bg-gold text-gold-foreground font-semibold px-6 py-3 text-sm rounded-sm hover:opacity-90 disabled:opacity-60"
          >
            {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
            {submitting ? "Opening email…" : "Send Message"}
          </button>
          <p className="text-xs text-muted-foreground">
            Submitting opens your email client addressed to <span className="font-semibold">{RECIPIENT}</span>.
          </p>
        </form>
      </section>

      <section className="container-narrow pb-16 grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 aspect-[16/10] w-full overflow-hidden rounded-sm border border-border">
          <iframe
            title="J.B. Hagjer Degree College on Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1246.1002832192291!2d92.93476693007885!3d25.79268268984635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37456528ccfadb61%3A0xa5a625aeba13664d!2sJ.%20B.%20Hagjer%20Degree%20College!5e0!3m2!1sen!2sin!4v1778992050574!5m2!1sen!2sin"
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="lg:col-span-2 bg-card border border-border rounded-sm overflow-hidden flex justify-center">
          <iframe
            title="JBHDC Facebook page"
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FJBHDC1995%2F&tabs=timeline&width=400&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width={400}
            height={500}
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder={0}
            allowFullScreen
            loading="lazy"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          />
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  required,
  maxLength,
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: string;
  required?: boolean;
  maxLength?: number;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-xs uppercase tracking-wider text-primary font-semibold">
        {label} {required && <span className="text-maroon">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        maxLength={maxLength}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-err` : undefined}
        className="mt-1 w-full border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:border-gold"
      />
      {error && (
        <p id={`${id}-err`} className="text-xs text-destructive mt-1">{error}</p>
      )}
    </div>
  );
}
