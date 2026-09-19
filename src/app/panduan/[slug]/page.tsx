import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import {
  ChevronLeft,
  Download,
  FileText,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export const dynamic = "force-dynamic";

type Step = { order: number; text: string };

export default async function PanduanDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const guideline = await prisma.guideline.findUnique({
    where: { slug, isPublished: true },
    include: { category: true, contacts: true, documents: true },
  });

  if (!guideline) notFound();

  const steps = guideline.steps as unknown as Step[];

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 md:px-6">
      <Link
        href="/panduan"
        className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-blue-700"
      >
        <ChevronLeft size={16} /> Kembali ke Panduan Mahasiswa
      </Link>

      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-blue-700">
        {guideline.category.name}
      </p>
      <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">
        {guideline.title}
      </h1>
      <p className="mt-3 text-slate-600">{guideline.summary}</p>

      <div className="mt-8 grid gap-8 md:grid-cols-[1fr_280px]">
        {/* Main content */}
        <div>
          <div className="prose prose-slate max-w-none whitespace-pre-line text-slate-700">
            {guideline.content}
          </div>

          <h2 className="mb-4 mt-8 text-lg font-semibold text-slate-900">
            Langkah-langkah
          </h2>
          <ol className="space-y-3">
            {steps
              .sort((a, b) => a.order - b.order)
              .map((step) => (
                <li key={step.order} className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-700 text-xs font-semibold text-white">
                    {step.order}
                  </span>
                  <p className="pt-0.5 text-sm text-slate-700">{step.text}</p>
                </li>
              ))}
          </ol>
        </div>

        {/* Sidebar: contacts + documents */}
        <aside className="space-y-6">
          {guideline.contacts.length > 0 && (
            <div className="rounded-xl border border-slate-200 p-5">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
                Kontak PIC
              </h3>
              {guideline.contacts.map((c) => (
                <div key={c.id} className="space-y-2 text-sm">
                  <p className="font-semibold text-slate-900">{c.name}</p>
                  <p className="text-slate-600">
                    {c.position} — {c.unit}
                  </p>
                  {c.room && (
                    <p className="flex items-center gap-2 text-slate-600">
                      <MapPin size={14} /> {c.room}
                    </p>
                  )}
                  {c.whatsapp && (
                    <a
                      href={`https://wa.me/${c.whatsapp}`}
                      target="_blank"
                      className="flex items-center gap-2 text-blue-700 hover:underline"
                    >
                      <Phone size={14} /> {c.whatsapp}
                    </a>
                  )}
                  {c.email && (
                    <a
                      href={`mailto:${c.email}`}
                      className="flex items-center gap-2 text-blue-700 hover:underline"
                    >
                      <Mail size={14} /> {c.email}
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}

          {guideline.documents.length > 0 && (
            <div className="rounded-xl border border-slate-200 p-5">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
                Dokumen Terkait
              </h3>
              <ul className="space-y-2">
                {guideline.documents.map((doc) => (
                  <li key={doc.id}>
                    <a
                      href={doc.fileUrl}
                      download
                      className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:border-blue-300 hover:bg-blue-50"
                    >
                      <FileText size={16} className="shrink-0 text-blue-700" />
                      <span className="flex-1">{doc.title}</span>
                      <Download size={14} className="shrink-0 text-slate-400" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
