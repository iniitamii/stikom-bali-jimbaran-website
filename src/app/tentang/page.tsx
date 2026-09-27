import Image from "next/image";
import { GraduationCap, Target, Eye, Award, Globe2 } from "lucide-react";

const partners = [
  "HELP University Malaysia", "Dalian Neusoft University (China)", "Universitas Teknologi Bandung",
  "AirAsia Ride", "Tokopedia", "Indodax", "Biznet", "EVOS",
  "The Apurva Kempinski Bali", "Cakap", "ESL", "HP",
  "AMD", "Angkasa Pura Airports", "Telkomsel", "AWS",
];

const gallery = [
  { src: "/images/fasilitas/gedung-kampus.jpg", label: "Gedung Kampus" },
  { src: "/images/fasilitas/ruang-kelas.jpg", label: "Ruang Kelas" },
  { src: "/images/fasilitas/aula.jpg", label: "Main Hall (Aula)" },
  { src: "/images/fasilitas/lab-komputer.jpg", label: "Lab Komputer" },
  { src: "/images/fasilitas/perpustakaan.jpg", label: "Perpustakaan" },
  { src: "/images/fasilitas/front-office.jpg", label: "Front Office" },
  { src: "/images/fasilitas/cafe.jpg", label: "After Class Cafe" },
  { src: "/images/fasilitas/ruang-presenter.jpg", label: "Ruang Presenter" },
  { src: "/images/fasilitas/ruang-akademik.jpg", label: "Ruang Akademik" },
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
        Kampus IT pertama dan terbaik di Bali, berdiri pada tahun 2002 dan
        hadir dengan kampus kedua di kawasan pariwisata Jimbaran. Kampus
        Jimbaran merupakan gedung kampus International ITB STIKOM Bali yang
        dibuka pada tahun 2015.
      </p>
      <p className="mt-3 text-slate-600 leading-relaxed">
        Dengan <strong>dual degree program</strong> serta{" "}
        <strong>Kelas Bisnis Jimbaran</strong> sebagai keunggulannya, membuat
        ITB STIKOM Bali Kampus Jimbaran ini menjadi sebuah ekosistem belajar
        terbaik untuk masa depan para jagoan teknologi Indonesia.
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
            Dual-degree dengan HELP University Malaysia (Sistem Informasi,
            S.Kom-BIT), Dalian Neusoft University China (Bisnis Digital,
            S.Bns-BM), dan dual-degree nasional dengan Universitas Teknologi
            Bandung (Sistem Informasi &amp; DKV, S.Kom-S.Ds).
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 p-6">
          <GraduationCap className="mb-3 text-blue-700" size={28} />
          <h3 className="mb-2 font-semibold text-slate-900">Fasilitas</h3>
          <p className="text-sm text-slate-600">
            Ruang kelas ber-AC (36 orang/kelas), Main Hall berkapasitas 200
            orang, lab komputer, perpustakaan, lift, dan ruang kegiatan
            mahasiswa lainnya.
          </p>
        </div>
      </div>

      {/* Galeri Fasilitas */}
      <div className="mt-12">
        <h2 className="mb-5 text-lg font-semibold text-slate-900">
          Galeri Fasilitas Kampus
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {gallery.map(({ src, label }) => (
            <div key={src} className="group overflow-hidden rounded-xl border border-slate-200">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={src}
                  alt={label}
                  fill
                  className="object-cover transition group-hover:scale-105"
                />
              </div>
              <p className="border-t border-slate-100 px-3 py-2 text-center text-xs font-medium text-slate-700">
                {label}
              </p>
            </div>
          ))}
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