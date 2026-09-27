import { Code, Cpu, Smartphone, Briefcase, GraduationCap, Users, Globe } from "lucide-react";

const sarjana = [
  {
    name: "Sistem Informasi",
    gelar: "S.Kom",
    icon: Code,
    desc: "Fokus pengembangan software dan multimedia kreatif: Developing Website, Creating UI, Designing UX, Developing Game.",
    karir: "System Analyst, System Engineer, Animator, UI/UX Designer, Graphic Designer",
  },
  {
    name: "Sistem Komputer",
    gelar: "S.Kom",
    icon: Cpu,
    desc: "Fokus pengembangan Robotic dan Internet of Things (IoT): Cloud Computing, Algorithm, Struktur Data, Implementasi Mikrokontroler, Control System.",
    karir: "Hardware Engineer, Robotica, Smart System Developer, Data Scientist, System Integrator",
  },
  {
    name: "Teknologi Informasi",
    gelar: "S.Kom",
    icon: Smartphone,
    desc: "Fokus pengembangan Networking, Cyber Security dan Cyber Forensic: Operation System, Matematika Diskrit, Jaringan Komputer, Cryptography, Ethical Hacking.",
    karir: "Security Analyst, Network Engineer, Cyber Security",
  },
  {
    name: "Bisnis Digital",
    gelar: "S.Bis",
    icon: Briefcase,
    desc: "Fokus perancangan & pengembangan bisnis berbasis teknologi digital: Technopreneurship, E-Commerce, Ekonomi Digital, Digital Marketing.",
    karir: "Digital Marketing Consultant, Digital Business Data Analyst, Entrepreneur, Project Manager",
  },
];

const magister = {
  name: "Sistem Informasi",
  gelar: "M.Kom",
  desc: "Program magister dengan keahlian Intelligent & Secure System guna mendukung sektor ekonomi, pariwisata, dan pemerintahan.",
};

const kelas = [
  {
    name: "Kelas Reguler",
    icon: Users,
    desc: "Program reguler dengan pilihan kelas pagi-siang maupun sore-malam, untuk mahasiswa yang fokus kuliah seperti biasa.",
  },
  {
    name: "Kelas Bisnis Jimbaran",
    icon: Briefcase,
    desc: "Kuliah sambil bekerja dengan sistem perkuliahan fleksibel berbasis e-learning — solusi untuk eksekutif muda yang ingin meningkatkan jenjang karier.",
  },
  {
    name: "Dual-Degree Internasional — HELP University Malaysia",
    icon: Globe,
    desc: "Program studi Sistem Informasi dengan gelar S.Kom - BIT, dapatkan 2 gelar dalam satu waktu yang sama.",
  },
  {
    name: "Dual-Degree Internasional — Dalian Neusoft University (China)",
    icon: Globe,
    desc: "Program studi Bisnis Digital dengan gelar S.Bns - BM, dapatkan 2 gelar dalam sekali tempuh.",
  },
  {
    name: "Dual-Degree Nasional — Universitas Teknologi Bandung (UTB)",
    icon: GraduationCap,
    desc: "Gabungan program studi Sistem Informasi dan DKV dengan gelar S.Kom - S.Ds, hasil kerja sama dengan UTB.",
  },
];

export default function ProgramStudiPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 md:px-6">
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">
        Akademik
      </p>
      <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">
        Program Studi Kampus Jimbaran
      </h1>
      <p className="mt-3 max-w-2xl text-slate-600">
        Institut Teknologi &amp; Bisnis STIKOM Bali Kampus Jimbaran menawarkan
        program studi yang relevan dengan kebutuhan industri kreatif dan
        teknologi digital saat ini.
      </p>

      {/* Program Sarjana */}
      <h2 className="mb-6 mt-10 text-lg font-semibold text-slate-900">
        Program Sarjana (S1)
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {sarjana.map(({ name, gelar, icon: Icon, desc, karir }) => (
          <div key={name} className="rounded-xl border border-slate-200 p-6">
            <div className="mb-4 flex items-center justify-between">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                <Icon size={22} />
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                Gelar {gelar}
              </span>
            </div>
            <h3 className="mb-2 font-semibold text-slate-900">{name}</h3>
            <p className="text-sm text-slate-600">{desc}</p>
            <p className="mt-3 text-xs text-slate-500">
              <span className="font-medium text-slate-700">Peluang karier: </span>
              {karir}
            </p>
          </div>
        ))}
      </div>

      {/* Program Magister */}
      <h2 className="mb-6 mt-12 text-lg font-semibold text-slate-900">
        Program Magister (S2)
      </h2>
      <div className="rounded-xl border border-slate-200 p-6">
        <div className="mb-4 flex items-center justify-between">
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
            <GraduationCap size={22} />
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
            Gelar {magister.gelar}
          </span>
        </div>
        <h3 className="mb-2 font-semibold text-slate-900">{magister.name}</h3>
        <p className="text-sm text-slate-600">{magister.desc}</p>
      </div>

      {/* Pilihan Kelas */}
      <h2 className="mb-6 mt-12 text-lg font-semibold text-slate-900">
        Pilihan Kelas
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {kelas.map(({ name, icon: Icon, desc }) => (
          <div key={name} className="rounded-xl border border-slate-200 p-6">
            <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
              <Icon size={22} />
            </span>
            <h3 className="mb-2 font-semibold text-slate-900">{name}</h3>
            <p className="text-sm text-slate-600">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}