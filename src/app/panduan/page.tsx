import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { BookOpen, ChevronRight } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function PanduanListPage({
  searchParams,
}: {
  searchParams: Promise<{ kategori?: string; q?: string }>;
}) {
  const { kategori, q } = await searchParams;

  const categories = await prisma.category.findMany({
    orderBy: { order: "asc" },
    include: { _count: { select: { guidelines: true } } },
  });

  const guidelines = await prisma.guideline.findMany({
    where: {
      isPublished: true,
      ...(kategori ? { category: { slug: kategori } } : {}),
      ...(q
        ? {
            OR: [
              { title: { contains: q } },
              { summary: { contains: q } },
            ],
          }
        : {}),
    },
    include: { category: true },
    orderBy: { updatedAt: "desc" },
  });

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">
          Panduan Mahasiswa
        </h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          Kumpulan SOP dan panduan layanan kampus — dari peminjaman ruangan
          hingga pengurusan surat akademik. Pilih kategori untuk mempersempit
          pencarian.
        </p>
      </div>

      {/* Search */}
      <form className="mb-6" action="/panduan" method="get">
        {kategori && <input type="hidden" name="kategori" value={kategori} />}
        <input
          type="text"
          name="q"
          defaultValue={q}
          placeholder="Cari panduan, mis. 'peminjaman ruangan'..."
          className="w-full max-w-md rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      </form>

      <div className="grid gap-8 md:grid-cols-[240px_1fr]">
        {/* Category sidebar */}
        <aside>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
            Kategori
          </h2>
          <ul className="space-y-1">
            <li>
              <Link
                href="/panduan"
                className={`block rounded-lg px-3 py-2 text-sm font-medium ${
                  !kategori
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                Semua Panduan
              </Link>
            </li>
            {categories.map((cat) => (
              <li key={cat.id}>
                <Link
                  href={`/panduan?kategori=${cat.slug}`}
                  className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium ${
                    kategori === cat.slug
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <span>{cat.name}</span>
                  <span className="text-xs text-slate-400">
                    {cat._count.guidelines}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        {/* Guideline list */}
        <div>
          {guidelines.length === 0 ? (
            <div className="rounded-xl border border-dashed border-slate-300 p-10 text-center text-slate-500">
              <BookOpen className="mx-auto mb-3 text-slate-400" size={32} />
              Belum ada panduan untuk kategori ini.
            </div>
          ) : (
            <ul className="space-y-4">
              {guidelines.map((g) => (
                <li key={g.id}>
                  <Link
                    href={`/panduan/${g.slug}`}
                    className="group flex items-start justify-between gap-4 rounded-xl border border-slate-200 p-5 transition hover:border-blue-300 hover:shadow-sm"
                  >
                    <div>
                      <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
                        {g.category.name}
                      </p>
                      <h3 className="font-semibold text-slate-900 group-hover:text-blue-700">
                        {g.title}
                      </h3>
                      <p className="mt-1 line-clamp-2 text-sm text-slate-600">
                        {g.summary}
                      </p>
                    </div>
                    <ChevronRight
                      className="mt-1 shrink-0 text-slate-300 group-hover:text-blue-600"
                      size={20}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
