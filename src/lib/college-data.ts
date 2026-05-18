import principalImg from "@/assets/img/principal.jpg";
import eusufImg from "@/assets/img/Eusuf.png";
import proponaImg from "@/assets/img/Propona.png";
import lalnunsiamiImg from "@/assets/img/Lalnunsiami.png";
import joysingImg from "@/assets/img/Joysing.png";
import kavitaImg from "@/assets/img/Kavita.png";
import kimlataImg from "@/assets/img/Kimlata Sengyung.png";
import muaniImg from "@/assets/img/Lalmuanpuii Nampui.png";
import soniaImg from "@/assets/img/sonia.png";
import leslyImg from "@/assets/img/Lesly.png";
import luciaImg from "@/assets/img/Lucia.png";
import rajbiniImg from "@/assets/img/Rajbini.png";
import hituishImg from "@/assets/img/Hituish.png";

export const notices = [
  { date: "6 May 2026", tag: "Admission", title: "Free Registration in Samarth Portal now open", isNew: true },
  { date: "6 May 2026", tag: "Admission", title: "Regarding the opening of Registration in Samarth Portal", isNew: true },
  { date: "28 Apr 2026", tag: "Examination", title: "FYUG 2nd Semester Examination Routine published" },
  { date: "20 Apr 2026", tag: "Academic", title: "Academic Calendar 2026–27 released" },
  { date: "12 Apr 2026", tag: "Notice", title: "College reopens after summer recess on 1st June 2026" },
  { date: "5 Apr 2026", tag: "Scholarship", title: "Apply for National Scholarship Portal — last date 30 June" },
];

export const faculties = [
  { name: "K Meraton Singha", role: "Principal (i/c)", dept: "Department of Philosophy", quals: "MA, B.Ed, NET", phone: "+91 78969 83951", email: "kmton11@gmail.com", img: principalImg },
  { name: "Eusuf Bhuyan", role: "Head of Department", dept: "Department of Education", quals: "MA", phone: "+91 94016 90508", email: "beusuf@gmail.com", img: eusufImg },
  { name: "Propona Naiding", role: "Head of Department", dept: "Department of History", quals: "MA, NET", phone: "+91 88118 59986", email: "proponanaiding@gmail.com", img: proponaImg },
  { name: "Lalnunsiami Ngamlai", role: "Head of Department", dept: "Department of Political Science", quals: "MA", phone: "+91 60002 80736", email: "lalnunsiamin6@gmail.com", img: lalnunsiamiImg },
  { name: "Lalmuanpuii Nampui", role: "Assistant Professor", dept: "Department of Education", quals: "MA", phone: "—", email: "—", img: muaniImg },
  { name: "Joysing Teron", role: "Assistant Professor", dept: "Department of Economics", quals: "MA", phone: "—", email: "—", img: joysingImg },
  { name: "Kavita Phangchopi", role: "Assistant Professor", dept: "Department of Assamese", quals: "MA", phone: "—", email: "—", img: kavitaImg },
  { name: "Kimlata Sengyung", role: "Assistant Professor", dept: "Department of English", quals: "MA", phone: "—", email: "—", img: kimlataImg },
  { name: "Sonia Jidung", role: "Assistant Professor", dept: "Department of Political Science", quals: "MA", phone: "—", email: "—", img: soniaImg },
  { name: "Lesly Jidung", role: "Assistant Professor", dept: "Department of Political Science", quals: "MA", phone: "—", email: "—", img: leslyImg },
  { name: "Lucia Thiek", role: "Assistant Professor", dept: "Department of Political Science", quals: "MA", phone: "—", email: "—", img: luciaImg },
  { name: "Rajbini Hansepi", role: "Assistant Professor", dept: "Department of History", quals: "MA", phone: "—", email: "—", img: rajbiniImg },
  { name: "Hituish Kemprai", role: "Assistant Professor", dept: "Department of History", quals: "MA", phone: "—", email: "—", img: hituishImg },
];

export const departments = [
  "Philosophy", "Education", "History", "Political Science",
  "Assamese", "English", "Economics", "Sociology",
];

export const programs = [
  { code: "BA (FYUG)", title: "Bachelor of Arts (Four-Year Undergraduate)", duration: "4 Years", desc: "Major + Minor structure under NEP 2020 across Arts disciplines." },
  { code: "BA (TYUG)", title: "Bachelor of Arts (Three-Year Undergraduate)", duration: "3 Years", desc: "Continuing batches under the earlier semester system." },
  { code: "Add-on", title: "Certificate & Skill Courses", duration: "6 Months", desc: "Spoken English, Computer Applications, and Tribal Studies." },
];
