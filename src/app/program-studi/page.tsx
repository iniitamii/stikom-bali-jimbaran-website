import {
  CodeIcon,
  CpuIcon,
  SmartphoneIcon,
  BriefcaseIcon,
  GraduationCapIcon,
  UsersIcon,
  GlobeIcon,
} from "@/components/icons";

const sarjana = [
  {
    name: "Sistem Informasi",
    gelar: "S.Kom",
    icon: CodeIcon,
    desc: "Berfokus pada pengembangan software, website, hingga multimedia kreatif.",
  },
  {
    name: "Sistem Komputer",
    gelar: "S.Kom",
    icon: CpuIcon,
    desc: "Berfokus pada pengembangan networking, robotika, dan sistem terintegrasi.",
  },
  {
    name: "Teknologi Informasi",
    gelar: "S.Kom",
    icon: SmartphoneIcon,
    desc: "Berfokus pada sistem mobile dan pengembangan teknologi Internet of Things (IoT).",
  },
  {
    name: "Bisnis Digital",
    gelar: "S.Bis",
    icon: BriefcaseIcon,
    desc: "Berfokus pada pengembangan bisnis berbasis digital dan digital marketing.",
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
    icon: UsersIcon,
    desc: "Program reguler dengan pilihan kelas pagi-siang maupun sore-malam, untuk mahasiswa yang fokus kuliah seperti biasa.",
  },
  {
    name: "Kelas Bisnis Jimbaran",
    icon: BriefcaseIcon,
    desc: "Pilihan bagi para eksekutif untuk memudahkan kuliah sambil bekerja guna meningkatkan karier.",
  },
  {
    name: "Dual-Degree Internasional",
    icon: GlobeIcon,
    desc: "Program dua gelar (S.Kom - BIT) hasil kerja sama dengan HELP University Malaysia.",
  },
  {
    name: "Dual-Degree Nasional",
    icon: GraduationCapIcon,
    desc: "Program dua gelar (S.Kom - S.Ds) hasil kerja sama dengan STT Bandung.",
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
        {sarjana.map(({ name, gelar, icon: Icon, desc }) => (
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
            <GraduationCapIcon size={22} />
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