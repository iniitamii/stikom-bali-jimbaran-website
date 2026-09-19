import { requireAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { BookOpen, FolderKanban, Megaphone } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const session = await requireAdmin();

  const [guidelineCount, categoryCount, announcementCount] = await Promise.all([
    prisma.guideline.count(),
    prisma.category.count(),
    prisma.announcement.count(),
  ]);

  const stats = [
    { label: "Total Panduan", value: guidelineCount, icon: BookOpen, href: "/admin/panduan" },
    { label: "Kategori", value: categoryCount, icon: FolderKanban, href: "/admin/panduan" },
    { label: "Pengumuman", value: announcementCount, icon: Megaphone, href: "/pengumuman" },
  ];

  return (
    <div>
      <h1 className="text-xl font-bold text-slate-900">
        Selamat datang, {session.user?.name}
      </h1>
      <p className="mt-1 text-sm text-slate-500">
        Ringkasan pengelolaan konten Panduan Mahasiswa STIKOM Jimbaran.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {stats.map(({ label, value, icon: Icon, href }) => (
          <Link
            key={label}
            href={href}
            className="rounded-xl border border-slate-200 p-5 transition hover:border-blue-300 hover:shadow-sm"
          >
            <Icon className="mb-3 text-blue-700" size={22} />
            <p className="text-2xl font-bold text-slate-900">{value}</p>
            <p className="text-sm text-slate-500">{label}</p>
          </Link>
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-dashed border-slate-300 p-6 text-sm text-slate-500">
        Ini adalah versi demo admin panel. Fitur pengelolaan Kategori,
        Pengumuman, dan manajemen User (role Akademik / Kesekretariatan /
        Kemahasiswaan) bisa dikembangkan lebih lanjut mengikuti pola CRUD
        yang sama seperti pada modul Panduan.
      </div>
    </div>
  );
}
