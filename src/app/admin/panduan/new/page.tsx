import { requireAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { GuidelineForm } from "../guideline-form";

export const dynamic = "force-dynamic";

export default async function NewGuidelinePage() {
  await requireAdmin();
  const categories = await prisma.category.findMany({ orderBy: { order: "asc" } });

  return (
    <div>
      <h1 className="mb-6 text-xl font-bold text-slate-900">
        Tambah Panduan Baru
      </h1>
      <GuidelineForm categories={categories} />
    </div>
  );
}
