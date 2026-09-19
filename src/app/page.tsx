import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  Users,
  GraduationCap,
  Building2,
  Calendar,
  Code,
  Palette,
  Network,
  Megaphone,
} from "lucide-react";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

const stats = [
  { label: "Mahasiswa Aktif", value: "1.200+", icon: Users },
  { label: "Program Studi", value: "5", icon: GraduationCap },
  { label: "Mitra Industri", value: "15+", icon: Building2 },
  { label: "Kelas Dual-Degree", value: "2", icon: Calendar },
];

const programs = [
  { name: "S1 Sistem Informasi", icon: Code, desc: "Pengembangan software, website, dan multimedia kreatif." },
  { name: "S1 Sistem Komputer", icon: Palette, desc: "Networking, robotika, dan sistem terintegrasi." },
  { name: "S1 Teknologi Informasi", icon: Network, desc: "Sistem mobile dan pengembangan Internet of Things." },
];

export default async function HomePage() {
  const latestAnnouncements = await prisma.announcement.findMany({
    orderBy: [{ isPinned: "desc" }, { publishedAt: "desc" }],
    take: 3,
  });

  return (
    <div>
{/* Hero */}
<section className="relative overflow-hidden border-b border-slate-200 text-white">
  {/* Background image */}
  <Image
    src="/images/hero-campus.jpg"
    alt="Kampus STIKOM Jimbaran"
    fill
    priority
    className="object-cover"
  />
  {/* Dark overlay supaya teks tetap kebaca */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/75 to-blue-900/40" />

  <div className="relative mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-32">
    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-200">
      Institut Teknologi &amp; Bisnis STIKOM Bali — Kampus Jimbaran
    </p>
    <h1 className="max-w-2xl text-3xl font-bold leading-tight md:text-5xl">
      Membentuk Talenta Digital Masa Depan
    </h1>
    <p className="mt-4 max-w-xl text-blue-100 md:text-lg">
      Kampus pendidikan tinggi yang berfokus pada teknologi informasi,
      desain, dan inovasi digital — mencetak lulusan siap kerja dan
      berdaya saing global.
    </p>

    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <Link
        href="/pendaftaran"
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-800 transition hover:bg-blue-50"
      >
        Daftar Sekarang
        <ArrowRight size={18} />
      </Link>
      <Link
        href="/program-studi"
        className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
      >
        Lihat Program Studi
      </Link>
    </div>
  </div>
</section>

      {/* Stats strip */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4 md:px-6">
          {stats.map(({ label, value, icon: Icon }) => (
            <div key={label} className="text-center">
              <Icon className="mx-auto mb-2 text-blue-700" size={26} />
              <p className="text-2xl font-bold text-slate-900 md:text-3xl">
                {value}
              </p>
              <p className="text-sm text-slate-500">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tentang singkat */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="order-2 aspect-video rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 md:order-1" />
          <div className="order-1 md:order-2">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">
              Tentang Kampus
            </p>
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Pendidikan Tinggi Berbasis Teknologi di Jantung Jimbaran
            </h2>
            <p className="mt-4 text-slate-600">
              STIKOM Jimbaran merupakan bagian dari ITB STIKOM Bali yang
              berkomitmen mencetak lulusan unggul di bidang teknologi
              informasi dan komunikasi, didukung fasilitas modern dan tenaga
              pengajar berpengalaman di industri.
            </p>
            <Link
              href="/tentang"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline"
            >
              Selengkapnya tentang kampus <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Program Studi preview */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">
                Akademik
              </p>
              <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                Program Studi
              </h2>
            </div>
            <Link
              href="/program-studi"
              className="hidden items-center gap-1 text-sm font-semibold text-blue-700 hover:underline sm:flex"
            >
              Lihat semua <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {programs.map(({ name, icon: Icon, desc }) => (
              <div key={name} className="rounded-xl border border-slate-200 bg-white p-6">
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                  <Icon size={22} />
                </span>
                <h3 className="mb-2 font-semibold text-slate-900">{name}</h3>
                <p className="text-sm text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Panduan Mahasiswa highlight */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="rounded-2xl border border-blue-100 bg-blue-50 p-8 md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">
                Layanan Mahasiswa
              </p>
              <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                Bingung Harus Mengurus Sesuatu ke Mana?
              </h2>
              <p className="mt-3 text-slate-600">
                Panduan Mahasiswa berisi SOP lengkap — mulai dari peminjaman
                ruangan, pengurusan surat akademik, legalisir ijazah, hingga
                pengajuan beasiswa. Setiap panduan dilengkapi langkah jelas
                dan kontak person yang bisa langsung dihubungi.
              </p>
              <Link
                href="/panduan"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                <BookOpen size={16} />
                Buka Panduan Mahasiswa
              </Link>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-blue-700">
                Contoh Panduan
              </p>
              <h3 className="text-lg font-semibold text-slate-900">
                Peminjaman Ruangan Kelas / Aula
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Prosedur lengkap peminjaman ruangan untuk kegiatan mahasiswa,
                lengkap dengan formulir dan kontak PIC.
              </p>
              <Link
                href="/panduan/peminjaman-ruangan"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-700 hover:underline"
              >
                Baca panduan <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pengumuman terbaru */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">
                Info Terkini
              </p>
              <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                Pengumuman Terbaru
              </h2>
            </div>
            <Link
              href="/pengumuman"
              className="hidden items-center gap-1 text-sm font-semibold text-blue-700 hover:underline sm:flex"
            >
              Lihat semua <ArrowRight size={14} />
            </Link>
          </div>

          {latestAnnouncements.length === 0 ? (
            <div className="rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500">
              <Megaphone className="mx-auto mb-3 text-slate-400" size={28} />
              Belum ada pengumuman saat ini.
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-3">
              {latestAnnouncements.map((a) => (
                <div key={a.id} className="rounded-xl border border-slate-200 bg-white p-5">
                  <p className="mb-2 text-xs text-slate-400">
                    {new Intl.DateTimeFormat("id-ID", { dateStyle: "long" }).format(
                      a.publishedAt
                    )}
                  </p>
                  <h3 className="mb-1 font-semibold text-slate-900">{a.title}</h3>
                  <p className="line-clamp-2 text-sm text-slate-600">{a.body}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA PMB */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="flex flex-col items-center gap-4 rounded-2xl bg-blue-800 px-6 py-12 text-center text-white md:px-12">
          <h2 className="text-2xl font-bold md:text-3xl">
            Tertarik Bergabung dengan STIKOM Jimbaran?
          </h2>
          <p className="max-w-lg text-blue-100">
            Pendaftaran mahasiswa baru dibuka setiap tahun. Konsultasikan
            pilihan program studi sesuai minat dan kariermu.
          </p>
          <Link
            href="/pendaftaran"
            className="mt-2 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-800 transition hover:bg-blue-50"
          >
            Info Pendaftaran <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}