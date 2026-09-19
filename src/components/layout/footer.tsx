import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3 md:px-6">
        <div>
          <h3 className="mb-3 text-lg font-semibold text-white">STIKOM Jimbaran</h3>
          <p className="text-sm leading-relaxed text-slate-400">
            Portal resmi kampus — informasi akademik, fasilitas, dan panduan
            layanan mahasiswa dalam satu tempat.
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-400">
            Tautan Cepat
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/panduan" className="hover:text-white">Panduan Mahasiswa</Link></li>
            <li><Link href="/program-studi" className="hover:text-white">Program Studi</Link></li>
            <li><Link href="/pengumuman" className="hover:text-white">Pengumuman</Link></li>
            <li><Link href="/admin/login" className="hover:text-white">Login Admin</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-400">
            Kontak
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              Jl. Raya Uluwatu, Jimbaran, Kuta Selatan, Badung, Bali
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> (0361) 000-000
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> info@stikombali.ac.id
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} STIKOM Jimbaran. Seluruh hak cipta dilindungi.
      </div>
    </footer>
  );
}
