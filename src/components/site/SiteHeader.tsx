import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/college-logo.png";
import { siteMenu } from "@/lib/site-menu";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="bg-primary text-primary-foreground text-xs">
        <div className="container-narrow flex flex-wrap items-center justify-between gap-2 py-2">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-gold" />
              <span>Umrongso, Dima Hasao, Assam — 788931</span>
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5 text-gold" />
              <span>+91 78969 83951</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5 text-gold" />
              <span>info@jbhagjerdegreecollege.in</span>
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-[11px] uppercase tracking-wider">
            <a href="https://assamadmission.samarth.ac.in/" target="_blank" rel="noreferrer" className="hover:text-gold">Samarth Portal</a>
            <span className="opacity-30">|</span>
            <a href="https://directorateofhighereducation.assam.gov.in/" target="_blank" rel="noreferrer" className="hover:text-gold">DHE Assam</a>
          </div>
        </div>
      </div>

      {/* Brand row */}
      <div className="bg-card border-b border-border">
        <div className="container-narrow flex items-center justify-between py-4 gap-4">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="J.B. Hagjer Degree College logo" className="h-14 w-14 object-contain" width={56} height={56} />
            <div className="leading-tight">
              <div className="font-serif text-xl md:text-2xl font-bold text-primary">J.B. Hagjer Degree College</div>
              <div className="text-[11px] md:text-xs text-muted-foreground uppercase tracking-wider">Estd. 1995 · Affiliated to Assam University, Silchar</div>
            </div>
          </Link>
          <a
            href="https://assamadmission.samarth.ac.in/"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-gold text-gold-foreground font-semibold px-4 py-2.5 text-sm rounded-sm hover:opacity-90 transition"
          >
            Apply for Admission 2026–27
          </a>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-primary" aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Desktop Nav with hover dropdowns */}
      <nav className="bg-primary text-primary-foreground border-t border-gold/30 hidden md:block">
        <div className="container-narrow flex items-center flex-wrap">
          {siteMenu.map((g) => {
            const hasChildren = !!g.children?.length;
            if (!hasChildren && g.to) {
              return (
                <Link
                  key={g.label}
                  to={g.to}
                  activeOptions={{ exact: g.to === "/" }}
                  activeProps={{ className: "bg-gold text-gold-foreground" }}
                  className="px-4 py-3 text-[13px] font-medium uppercase tracking-wider hover:bg-white/10 transition"
                >
                  {g.label}
                </Link>
              );
            }
            return (
              <div key={g.label} className="relative group">
                <button
                  type="button"
                  className="flex items-center gap-1 px-4 py-3 text-[13px] font-medium uppercase tracking-wider hover:bg-white/10 transition group-hover:bg-white/10"
                >
                  {g.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
                <div className="absolute left-0 top-full min-w-[260px] bg-card text-foreground border border-border shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                  <ul className="py-2">
                    {g.children!.map((c) => (
                      <li key={c.to}>
                        <Link
                          to={c.to}
                          activeProps={{ className: "bg-secondary text-primary font-semibold" }}
                          className="block px-4 py-2 text-sm hover:bg-secondary hover:text-primary transition border-l-2 border-transparent hover:border-gold"
                        >
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </nav>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden bg-primary text-primary-foreground border-t border-gold/30 max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col">
            {siteMenu.map((g) => {
              if (!g.children?.length && g.to) {
                return (
                  <Link
                    key={g.label}
                    to={g.to}
                    onClick={() => setOpen(false)}
                    className="px-5 py-3 text-sm font-medium uppercase tracking-wider border-b border-white/10"
                  >
                    {g.label}
                  </Link>
                );
              }
              const isOpen = openGroup === g.label;
              return (
                <div key={g.label} className="border-b border-white/10">
                  <button
                    onClick={() => setOpenGroup(isOpen ? null : g.label)}
                    className="w-full flex items-center justify-between px-5 py-3 text-sm font-medium uppercase tracking-wider"
                  >
                    {g.label}
                    <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="bg-primary/80">
                      {g.children!.map((c) => (
                        <Link
                          key={c.to}
                          to={c.to}
                          onClick={() => setOpen(false)}
                          className="block pl-8 pr-5 py-2.5 text-sm border-t border-white/5"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
