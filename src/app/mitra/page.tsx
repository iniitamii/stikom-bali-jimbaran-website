import Image from "next/image";
import { Award } from "lucide-react";

const partners = [
  { name: "HELP University Malaysia", logo: "help-university", category: "Dual-Degree Internasional" },
  { name: "Dalian Neusoft University (China)", logo: "help-university", category: "Dual-Degree Internasional" },
  { name: "Universitas Teknologi Bandung", logo: "help-university", category: "Dual-Degree Nasional" },
  { name: "AirAsia Ride", logo: "airasia-ride", category: "Industri" },
  { name: "Tokopedia", logo: "tokopedia", category: "Industri" },
  { name: "Indodax", logo: "indodax", category: "Industri" },
  { name: "Biznet", logo: "biznet", category: "Industri" },
  { name: "EVOS", logo: "evos", category: "Industri" },
  { name: "Pemerintah Provinsi Bali", logo: "pemprov-bali", category: "Pemerintahan" },
  { name: "The Apurva Kempinski Bali", logo: "apurva-kempinski", category: "Industri" },
  { name: "Cakap", logo: "cakap", category: "Industri" },
  { name: "ESL E-Sports Life", logo: "esl", category: "Industri" },
  { name: "HP", logo: "hp", category: "Teknologi" },
  { name: "AMD", logo: "amd", category: "Teknologi" },
  { name: "Angkasa Pura Airports", logo: "angkasa-pura", category: "Industri" },
  { name: "Telkomsel", logo: "telkomsel", category: "Teknologi" },
  { name: "AWS", logo: "aws", category: "Teknologi" },
];

export default function MitraPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <div className="mb-4 flex items-center gap-2">
        <Award className="text-blue-700" size={22} />
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
          Kolaborasi
        </p>
      </div>
      <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">
        Mitra Industri &amp; Kolaborasi
      </h1>
      <p className="mt-3 max-w-2xl text-slate-600">
        Kami menghadirkan kolaborasi dengan berbagai industri, institusi
        pendidikan, dan pemerintahan di seluruh dunia untuk mendukung
        pengalaman belajar dan peluang karier mahasiswa STIKOM Jimbaran.
      </p>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {partners.map((p) => (
          <div
            key={p.name}
            className="group flex flex-col items-center justify-center gap-3 rounded-xl border border-slate-200 p-6 transition hover:border-blue-300 hover:shadow-md"
          >
            <div className="relative h-16 w-full">
              <Image
                src={`/images/mitra/${p.logo}.jpg`}
                alt={p.name}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-center text-xs font-medium text-slate-500">
              {p.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}