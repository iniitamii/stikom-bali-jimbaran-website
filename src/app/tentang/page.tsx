import { GraduationCap, Target, Eye, Award, Globe2 } from "lucide-react";

const partners = [
  "HELP University", "AirAsia Ride", "Tokopedia", "Indodax", "Biznet",
  "EVOS", "The Apurva Kempinski Bali", "Cakap", "ESL", "HP",
  "AMD", "KB Bukopin", "Angkasa Pura Airports", "Telkomsel", "AWS",
];

export default function TentangPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 md:px-6">
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">
        Tentang Kampus
      </p>
      <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">
        Institut Teknologi &amp; Bisnis STIKOM Bali — Kampus Jimbaran
      </h1>
      <p className="mt-4 text-slate-600 leading-relaxed">
        STIKOM Jimbaran merupakan bagian dari Institut Teknologi &amp; Bisnis
        (ITB) STIKOM Bali yang berfokus pada pengembangan pendidikan tinggi di
        bidang teknologi informasi dan bisnis digital. Sebagai bagian dari
        program Kampus Merdeka, kampus ini berkomitmen mencetak lulusan yang
        siap berkontribusi di industri digital, baik secara nasional maupun
        internasional.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-200 p-6">
          <Eye className="mb-3 text-blue-700" size={28} />
          <h3 className="mb-2 font-semibold text-slate-900">Visi</h3>
          <p className="text-sm text-slate-600">
            Menjadi institusi pendidikan tinggi unggul di bidang teknologi dan
            bisnis yang berdaya saing global.
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 p-6">
          <Target className="mb-3 text-blue-700" size={28} />
          <h3 className="mb-2 font-semibold text-slate-900">Misi</h3>
          <p className="text-sm text-slate-600">
            Menyelenggarakan pendidikan, penelitian, dan pengabdian masyarakat
            berbasis teknologi yang relevan dengan kebutuhan industri.
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 p-6">
          <Globe2 className="mb-3 text-blue-700" size={28} />
          <h3 className="mb-2 font-semibold text-slate-900">
            Kerja Sama Internasional
          </h3>
          <p className="text-sm text-slate-600">
            Program dual-degree internasional (S.Kom - BIT) bersama HELP
            University Malaysia, dan dual-degree nasional (S.Kom - S.Ds)
            bersama STT Bandung.
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 p-6">
          <GraduationCap className="mb-3 text-blue-700" size={28} />
          <h3 className="mb-2 font-semibold text-slate-900">Fasilitas</h3>
          <p className="text-sm text-slate-600">
            Ruang kelas modern, laboratorium komputer & robotika,
            perpustakaan, dan ruang kegiatan mahasiswa yang mendukung
            kreativitas dan kolaborasi.
          </p>
        </div>
      </div>

      {/* Partner Industri */}
      <div className="mt-12">
        <div className="mb-4 flex items-center gap-2">
          <Award className="text-blue-700" size={22} />
          <h2 className="text-lg font-semibold text-slate-900">
            Mitra Industri &amp; Kolaborasi
          </h2>
        </div>
        <p className="mb-5 text-sm text-slate-600">
          Kampus Jimbaran menjalin kolaborasi dengan berbagai perusahaan dan
          institusi terkemuka untuk mendukung pengalaman belajar dan peluang
          karier mahasiswa.
        </p>
        <div className="flex flex-wrap gap-2">
          {partners.map((name) => (
            <span
              key={name}
              className="rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-sm text-slate-700"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}