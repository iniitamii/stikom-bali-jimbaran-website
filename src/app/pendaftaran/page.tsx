import Link from "next/link";
import { Calendar, Globe, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";

const gelombang = [
  { nama: "Khusus", periode: "10 Nov 2024 – 4 Jan 2025" },
  { nama: "1A", periode: "5 Jan 2025 – 15 Feb 2025" },
  { nama: "1B", periode: "16 Feb 2025 – 1 Mar 2025" },
  { nama: "1C", periode: "2 Mar 2025 – 15 Mar 2025" },
  { nama: "2A", periode: "17 Mar 2025 – 12 Apr 2025" },
  { nama: "2B", periode: "13 Apr 2025 – 10 Mei 2025" },
  { nama: "2C", periode: "11 Mei 2025 – 24 Mei 2025" },
  { nama: "3A", periode: "25 Mei 2025 – 7 Jun 2025" },
  { nama: "3B", periode: "8 Jun 2025 – 21 Jun 2025" },
  { nama: "3C", periode: "22 Jun 2025 – 5 Jul 2025" },
  { nama: "4A", periode: "6 Jul 2025 – 19 Jul 2025" },
  { nama: "4B", periode: "20 Jul 2025 – 2 Agu 2025" },
  { nama: "4C", periode: "3 Agu 2025 – 15 Agu 2025" },
  { nama: "Sisipan", periode: "16 Agu 2025 – 30 Agu 2025" },
];

const alurOnline = [
  "Daftar di website ITB STIKOM Bali dan lakukan pembayaran biaya pendaftaran sesuai gelombang yang diikuti.",
  "Setelah upload bukti pembayaran, tunggu dihubungi via WhatsApp untuk mengikuti tes online dan tes wawancara.",
  "Setelah mengikuti kedua tes, tunggu pengumuman kelulusan dan rincian biaya registrasi akhir.",
  "Setelah membayar registrasi akhir, kamu akan mendapat NIM (Nomor Induk Mahasiswa) dan resmi menjadi mahasiswa baru.",
];

const alurOffline = [
  "Datang langsung ke Kampus Jimbaran, isi formulir pendaftaran, dan lakukan pembayaran di loket keuangan.",
  "Tunggu dihubungi via WhatsApp untuk mengikuti tes online dan tes wawancara.",
  "Setelah mengikuti kedua tes, tunggu pengumuman kelulusan dan rincian biaya registrasi akhir.",
  "Setelah membayar registrasi akhir, kamu akan mendapat NIM dan resmi menjadi mahasiswa baru.",
];

const biayaSarjana = [
  {
    prodi: "Sistem Komputer",
    items: [
      ["Pendaftaran", "Rp 400.000"],
      ["Dana Pendidikan Pokok (DPP)", "Rp 11.000.000"],
      ["Jas Almamater & Topi", "Rp 750.000"],
      ["Kaos, Tas, GMTI", "Rp 750.000"],
      ["Per Semester (Pagi-Siang)", "Rp 5.500.000"],
      ["Per Semester (Sore)", "Rp 6.000.000"],
    ],
  },
  {
    prodi: "Sistem Informasi",
    items: [
      ["Pendaftaran", "Rp 400.000"],
      ["Dana Pendidikan Pokok (DPP)", "Rp 13.000.000"],
      ["Jas Almamater & Topi", "Rp 750.000"],
      ["Kaos, Tas, GMTI", "Rp 750.000"],
      ["Per Semester (Pagi-Siang)", "Rp 6.000.000"],
      ["Per Semester (Sore)", "Rp 6.500.000"],
    ],
  },
  {
    prodi: "Teknologi Informasi",
    items: [
      ["Pendaftaran", "Rp 400.000"],
      ["Dana Pendidikan Pokok (DPP)", "Rp 11.000.000"],
      ["Jas Almamater & Topi", "Rp 750.000"],
      ["Kaos, Tas, GMTI", "Rp 750.000"],
      ["Per Semester (Pagi-Siang)", "Rp 5.000.000"],
      ["Per Semester (Sore)", "Rp 5.500.000"],
    ],
  },
  {
    prodi: "Bisnis Digital",
    items: [
      ["Pendaftaran", "Rp 400.000"],
      ["Dana Pendidikan Pokok (DPP)", "Rp 11.000.000"],
      ["Jas Almamater & Topi", "Rp 750.000"],
      ["Kaos, Tas, GMTI", "Rp 750.000"],
      ["Per Semester (Pagi-Siang)", "Rp 5.000.000"],
      ["Per Semester (Sore)", "Rp 5.500.000"],
    ],
  },
];

const biayaDualDegree = [
  {
    nama: "Dual-Degree Internasional (S.Kom - BIT)",
    ket: "Kerja sama dengan HELP University Malaysia",
    items: [
      ["Pendaftaran", "Rp 3.000.000"],
      ["Dana Pendidikan Pokok (DPP)", "Rp 16.000.000"],
      ["Biaya Pendidikan & Ujian/Subject", "Rp 2.500.000"],
      ["NIIT", "Rp 5.000.000"],
    ],
  },
  {
    nama: "Dual-Degree Nasional (S.Kom - S.Ds)",
    ket: "Kerja sama dengan STT Bandung",
    items: [
      ["Pendaftaran", "Rp 400.000"],
      ["Dana Pendidikan Pokok (DPP)", "Rp 14.000.000"],
      ["Jas Almamater & Topi", "Rp 750.000"],
      ["Kaos, Topi, GMTI", "Rp 750.000"],
      ["Per Semester", "Rp 7.500.000"],
    ],
  },
];

export default function PendaftaranPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 md:px-6">
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">
        Penerimaan Mahasiswa Baru
      </p>
      <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">
        Info Pendaftaran
      </h1>
      <p className="mt-3 max-w-2xl text-slate-600">
        Semua yang perlu kamu tahu untuk bergabung dengan STIKOM Jimbaran —
        kalender gelombang, metode pendaftaran, alur, hingga rincian biaya.
      </p>

      {/* Kalender Pendaftaran */}
      <section className="mt-10">
        <div className="mb-4 flex items-center gap-2">
          <Calendar className="text-blue-700" size={22} />
          <h2 className="text-lg font-semibold text-slate-900">
            Kalender Pendaftaran 2024/2025
          </h2>
        </div>
        <div className="overflow-hidden rounded-xl border border-slate-200">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3">Gelombang</th>
                <th className="px-4 py-3">Periode Pendaftaran</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {gelombang.map((g) => (
                <tr key={g.nama}>
                  <td className="px-4 py-2.5 font-medium text-slate-900">{g.nama}</td>
                  <td className="px-4 py-2.5 text-slate-600">{g.periode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Metode Pendaftaran */}
      <section className="mt-12">
        <div className="mb-4 flex items-center gap-2">
          <Globe className="text-blue-700" size={22} />
          <h2 className="text-lg font-semibold text-slate-900">
            Metode Pendaftaran
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-200 p-5">
            <p className="mb-1 text-xs font-semibold uppercase text-blue-700">Online — Sarjana</p>
            <a href="https://siap.stikom-bali.ac.id" target="_blank" className="text-sm font-medium text-slate-900 hover:underline">
              siap.stikom-bali.ac.id
            </a>
          </div>
          <div className="rounded-xl border border-slate-200 p-5">
            <p className="mb-1 text-xs font-semibold uppercase text-blue-700">Online — Magister</p>
            <a href="https://pasca.stikom-bali.ac.id" target="_blank" className="text-sm font-medium text-slate-900 hover:underline">
              pasca.stikom-bali.ac.id
            </a>
          </div>
          <div className="rounded-xl border border-slate-200 p-5">
            <p className="mb-1 text-xs font-semibold uppercase text-blue-700">Offline</p>
            <p className="text-sm font-medium text-slate-900">Datang langsung ke Kampus Jimbaran</p>
          </div>
        </div>
      </section>

      {/* Alur Pendaftaran */}
      <section className="mt-12 grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="mb-4 font-semibold text-slate-900">Alur Pendaftaran Online</h3>
          <ol className="space-y-3">
            {alurOnline.map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-700 text-xs font-semibold text-white">
                  {i + 1}
                </span>
                <p className="text-sm text-slate-600">{step}</p>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <h3 className="mb-4 font-semibold text-slate-900">Alur Pendaftaran Offline</h3>
          <ol className="space-y-3">
            {alurOffline.map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-700 text-xs font-semibold text-white">
                  {i + 1}
                </span>
                <p className="text-sm text-slate-600">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Rincian Biaya Sarjana */}
      <section className="mt-12">
        <div className="mb-4 flex items-center gap-2">
          <CheckCircle2 className="text-blue-700" size={22} />
          <h2 className="text-lg font-semibold text-slate-900">
            Rincian Biaya — Program Sarjana
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {biayaSarjana.map((prodi) => (
            <div key={prodi.prodi} className="rounded-xl border border-slate-200 p-5">
              <h3 className="mb-3 font-semibold text-slate-900">{prodi.prodi}</h3>
              <table className="w-full text-sm">
                <tbody className="divide-y divide-slate-100">
                  {prodi.items.map(([label, val]) => (
                    <tr key={label}>
                      <td className="py-1.5 text-slate-600">{label}</td>
                      <td className="py-1.5 text-right font-medium text-slate-900">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </section>

      {/* Rincian Biaya Dual-Degree */}
      <section className="mt-12">
        <h2 className="mb-4 text-lg font-semibold text-slate-900">
          Rincian Biaya — Program Dual-Degree
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {biayaDualDegree.map((prog) => (
            <div key={prog.nama} className="rounded-xl border border-slate-200 p-5">
              <h3 className="font-semibold text-slate-900">{prog.nama}</h3>
              <p className="mb-3 text-xs text-slate-500">{prog.ket}</p>
              <table className="w-full text-sm">
                <tbody className="divide-y divide-slate-100">
                  {prog.items.map(([label, val]) => (
                    <tr key={label}>
                      <td className="py-1.5 text-slate-600">{label}</td>
                      <td className="py-1.5 text-right font-medium text-slate-900">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-14 flex flex-col items-center gap-3 rounded-2xl bg-blue-800 px-6 py-10 text-center text-white">
        <MapPin size={24} />
        <h2 className="text-xl font-bold">Punya Pertanyaan Seputar Pendaftaran?</h2>
        <p className="max-w-md text-blue-100">
          Hubungi tim admisi kami langsung lewat WhatsApp untuk info lebih lanjut.
        </p>
        <a
          href="https://wa.me/6281138812288"
          target="_blank"
          className="mt-2 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-800 hover:bg-blue-50"
        >
          Hubungi via WhatsApp <ArrowRight size={16} />
        </a>
      </section>
    </div>
  );
}