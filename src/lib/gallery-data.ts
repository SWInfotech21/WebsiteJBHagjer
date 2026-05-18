import hero from "@/assets/campus-hero.jpg";
import library from "@/assets/campus-library.jpg";
import convocation from "@/assets/campus-convocation.jpg";
import cultural from "@/assets/campus-cultural.jpg";

export type GalleryItem = { src: string; title: string };

export const gallery: GalleryItem[] = [
  { src: hero, title: "College Main Campus" },
  { src: library, title: "Central Library Reading Hall" },
  { src: convocation, title: "Annual Convocation 2024" },
  { src: cultural, title: "Cultural Week Celebration" },
  { src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200&q=80", title: "Republic Day Observance" },
  { src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1200&q=80", title: "Science Exhibition" },
  { src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1200&q=80", title: "Inter-College Debate Competition" },
  { src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=1200&q=80", title: "NSS Camp at Haplai" },
  { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80", title: "Faculty Development Programme" },
  { src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80", title: "Classroom in Session" },
  { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=80", title: "Library Computer Lab" },
  { src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80", title: "Chemistry Practical" },
];

export type Achievement = { year: string; title: string; desc: string };

export const achievements: Achievement[] = [
  { year: "2025", title: "NAAC Accreditation Awarded", desc: "College successfully completed its first cycle of NAAC accreditation with a commendable grade." },
  { year: "2024", title: "State-Level Sports Champions", desc: "Our students bagged 5 medals at the Assam Inter-College Athletic Meet held in Guwahati." },
  { year: "2024", title: "Best NSS Unit — Dima Hasao", desc: "The college NSS unit was recognised as the most active unit in the district for community outreach." },
  { year: "2023", title: "100% Pass in BA Final Year", desc: "Department of Political Science recorded a perfect pass percentage with 4 first-class results." },
  { year: "2023", title: "Inter-College Debate Trophy", desc: "Team JBHDC won the AUS Zonal English Debate Championship at Silchar." },
  { year: "2022", title: "DST INSPIRE Grant", desc: "Two science students selected for the prestigious INSPIRE Internship by DST, Government of India." },
];
