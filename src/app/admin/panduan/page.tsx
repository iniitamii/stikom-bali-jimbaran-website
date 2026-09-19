import Link from "next/link";
import { requireAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Plus, Pencil, Eye } from "lucide-react";
import { DeleteGuidelineButton } from "./delete-button";

export const dynamic = "force-dynamic";

export default async function AdminPanduanListPage() {
  await requireAdmin();

  const guidelines = await prisma.guideline.findMany({
    include: { category: true },
    orderBy: { updatedAt: "desc" },
  });

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-slate-900">Kelola Panduan</h1>
          <p className="mt-1 text-sm text-slate-500">
            {guidelines.length} panduan tersimpan
          </p>
        </div>
        <Link
          href="/admin/panduan/new"
          className="flex items-center gap-2 rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800"
        >
          <Plus size={16} /> Panduan Baru
        </Link>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3">Judul</th>
              <th className="px-4 py-3">Kategori</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {guidelines.map((g) => (
              <tr key={g.id}>
                <td className="px-4 py-3 font-medium text-slate-900">
                  {g.title}
                </td>
                <td className="px-4 py-3 text-slate-600">{g.category.name}</td>
                <td className="px-4 py-3">
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                      g.isPublished
                        ? "bg-green-50 text-green-700"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {g.isPublished ? "Published" : "Draft"}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center justify-end gap-2">
                    <Link
                      href={`/panduan/${g.slug}`}
                      target="_blank"
                      className="rounded-lg p-2 text-slate-500 hover:bg-slate-50"
                      title="Lihat"
                    >
                      <Eye size={16} />
                    </Link>
                    <Link
                      href={`/admin/panduan/${g.id}/edit`}
                      className="rounded-lg p-2 text-slate-500 hover:bg-slate-50"
                      title="Edit"
                    >
                      <Pencil size={16} />
                    </Link>
                    <DeleteGuidelineButton id={g.id} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
