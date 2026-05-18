import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Facebook } from "lucide-react";
import logo from "@/assets/college-logo.png";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="h-1 bg-gold" />
      <div className="container-narrow py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="" className="h-12 w-12 object-contain" width={48} height={48} loading="lazy" />
            <div>
              <div className="font-serif text-lg font-bold">J.B. Hagjer Degree College</div>
              <div className="text-xs opacity-70">Established 1995</div>
            </div>
          </div>
          <p className="text-sm opacity-80 leading-relaxed">
            A premier institution of higher learning in Dima Hasao, dedicated to nurturing tribal and rural youth through quality, inclusive education.
          </p>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-wider text-gold mb-4 font-semibold">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="opacity-80 hover:opacity-100 hover:text-gold">About the College</Link></li>
            <li><Link to="/principal" className="opacity-80 hover:opacity-100 hover:text-gold">Principal's Desk</Link></li>
            <li><Link to="/faculties" className="opacity-80 hover:opacity-100 hover:text-gold">Faculties</Link></li>
            <li><Link to="/admission" className="opacity-80 hover:opacity-100 hover:text-gold">Admission 2026–27</Link></li>
            <li><Link to="/notices" className="opacity-80 hover:opacity-100 hover:text-gold">Notice Board</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-wider text-gold mb-4 font-semibold">Useful Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a className="opacity-80 hover:text-gold" href="http://www.aus.ac.in/" target="_blank" rel="noreferrer">Assam University</a></li>
            <li><a className="opacity-80 hover:text-gold" href="https://ausexamination.ac.in/" target="_blank" rel="noreferrer">AUS Exam Portal</a></li>
            <li><a className="opacity-80 hover:text-gold" href="https://www.ugc.ac.in/" target="_blank" rel="noreferrer">UGC</a></li>
            <li><a className="opacity-80 hover:text-gold" href="http://www.naac.gov.in/" target="_blank" rel="noreferrer">NAAC</a></li>
            <li><a className="opacity-80 hover:text-gold" href="https://scholarships.gov.in/" target="_blank" rel="noreferrer">National Scholarship Portal</a></li>
            <li><a className="opacity-80 hover:text-gold" href="https://www.ndl.gov.in/" target="_blank" rel="noreferrer">National Digital Library</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-wider text-gold mb-4 font-semibold">Contact</h4>
          <ul className="space-y-3 text-sm opacity-90">
            <li className="flex gap-2"><MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" /><span>P.O. & P.S. Umrongso, Haplai Raji, Dima Hasao, Assam — 788931</span></li>
            <li className="flex gap-2"><Phone className="h-4 w-4 text-gold" /><span>+91 78969 83951</span></li>
            <li className="flex gap-2"><Mail className="h-4 w-4 text-gold" /><span>info@jbhagjerdegreecollege.in</span></li>
            <li className="flex gap-2 items-center"><Facebook className="h-4 w-4 text-gold" /><a href="https://www.facebook.com/JBHDC1995/" target="_blank" rel="noreferrer" className="hover:text-gold">Official Facebook</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-narrow py-4 text-xs flex flex-wrap justify-between gap-2 opacity-70">
          <span>© {new Date().getFullYear()} J.B. Hagjer Degree College, Umrongso. All rights reserved.</span>
          <span>Affiliated to Assam University, Silchar</span>
        </div>
      </div>
    </footer>
  );
}
