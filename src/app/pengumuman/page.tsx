import { prisma } from "@/lib/prisma";
import { Pin, Megaphone } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function PengumumanPage() {
  const announcements = await prisma.announcement.findMany({
    orderBy: [{ isPinned: "desc" }, { publishedAt: "desc" }],
  });

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 md:px-6">
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">
        Informasi Kampus
      </p>
      <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">
        Pengumuman
      </h1>

      {announcements.length === 0 ? (
        <div className="mt-8 rounded-xl border border-dashed border-slate-300 p-10 text-center text-slate-500">
          <Megaphone className="mx-auto mb-3 text-slate-400" size={32} />
          Belum ada pengumuman saat ini.
        </div>
      ) : (
        <ul className="mt-8 space-y-4">
          {announcements.map((a) => (
            <li
              key={a.id}
              className="rounded-xl border border-slate-200 p-5"
            >
              <div className="mb-1 flex items-center gap-2">
                {a.isPinned && (
                  <Pin size={14} className="text-blue-700" />
                )}
                <span className="text-xs text-slate-400">
                  {new Intl.DateTimeFormat("id-ID", {
                    dateStyle: "long",
                  }).format(a.publishedAt)}
                </span>
              </div>
              <h3 className="font-semibold text-slate-900">{a.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{a.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
