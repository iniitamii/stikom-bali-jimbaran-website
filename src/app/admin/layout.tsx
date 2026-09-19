import Link from "next/link";
import { auth } from "@/lib/auth";
import { Providers } from "./providers";
import { LayoutDashboard, BookOpen, GraduationCap } from "lucide-react";
import { SignOutButton } from "./sign-out-button";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  // Halaman login tidak butuh proteksi — cek di sini via header pathname
  // Next.js App Router: middleware lebih ideal, tapi untuk kesederhanaan demo
  // proteksi dilakukan per-halaman yang butuh (dashboard, panduan, dst).

  return (
    <Providers>
      <div className="mx-auto flex min-h-screen max-w-7xl">
        {session?.user && (
          <aside className="hidden w-64 shrink-0 border-r border-slate-200 px-4 py-6 md:block">
            <div className="mb-8 flex items-center gap-2 px-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-700 text-white">
                <GraduationCap size={18} />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-slate-900">
                  Admin Panel
                </p>
                <p className="text-xs text-slate-500">{session.user.name}</p>
              </div>
            </div>

            <nav className="space-y-1">
              <Link
                href="/admin/dashboard"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
              >
                <LayoutDashboard size={16} /> Dashboard
              </Link>
              <Link
                href="/admin/panduan"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
              >
                <BookOpen size={16} /> Kelola Panduan
              </Link>
              <SignOutButton />
            </nav>
          </aside>
        )}
        <div className="flex-1 px-4 py-6 md:px-8">{children}</div>
      </div>
    </Providers>
  );
}
