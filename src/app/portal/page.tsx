import {
  ClipboardList,
  BookOpenCheck,
  GraduationCap,
  FlaskConical,
  Library,
  LayoutDashboard,
  ExternalLink,
} from "lucide-react";

const systems = [
  {
    name: "E-KRS",
    desc: "Pengisian dan pengelolaan Kartu Rencana Studi (KRS) setiap semester.",
    url: "https://sia.stikom-bali.ac.id",
    icon: ClipboardList,
  },
  {
    name: "E-Learning",
    desc: "Akses materi kuliah, tugas, dan kelas daring (LMS).",
    url: "https://elearning.stikom-bali.ac.id",
    icon: BookOpenCheck,
  },
  {
    name: "SION",
    desc: "Sistem Informasi Akademik Online — cek nilai, jadwal, dan data akademik.",
    url: "https://sion.stikom-bali.ac.id",
    icon: LayoutDashboard,
  },
  {
    name: "Sistem Yudisium",
    desc: "Pengajuan dan pemantauan proses yudisium kelulusan.",
    url: "https://yudisium.stikom-bali.ac.id",
    icon: GraduationCap,
  },
  {
    name: "E-Research",
    desc: "Pengelolaan dan publikasi penelitian, jurnal, dan tugas akhir.",
    url: "https://research.stikom-bali.ac.id",
    icon: FlaskConical,
  },
  {
    name: "Digital Library",
    desc: "Akses koleksi buku, jurnal, dan referensi digital perpustakaan kampus.",
    url: "https://library.stikom-bali.ac.id",
    icon: Library,
  },
];

export default function PortalPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 md:px-6">
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">
        Satu Pintu Akses
      </p>
      <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">
        Portal Akses Cepat
      </h1>
      <p className="mt-3 max-w-2xl text-slate-600">
        Kumpulan tautan langsung ke sistem-sistem informasi kampus yang sering
        digunakan mahasiswa — tidak perlu hafal banyak alamat website lagi.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
        {systems.map(({ name, desc, url, icon: Icon }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-3 rounded-xl border border-slate-200 p-5 transition hover:border-blue-300 hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                <Icon size={22} />
              </span>
              <ExternalLink size={16} className="text-slate-300 group-hover:text-blue-600" />
            </div>
            <h3 className="font-semibold text-slate-900">{name}</h3>
            <p className="text-sm text-slate-600">{desc}</p>
          </a>
        ))}
      </div>

      <p className="mt-8 text-xs italic text-slate-400">
        *Tautan di atas menuju sistem informasi resmi kampus. Jika mengalami
        kendala akses, hubungi bagian IT Support (WA: 081 999 016 105).
      </p>
    </div>
  );
}