import { notFound } from "next/navigation";
import { requireAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { GuidelineForm } from "../../guideline-form";

export const dynamic = "force-dynamic";

type Step = { order: number; text: string };

export default async function EditGuidelinePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await requireAdmin();
  const { id } = await params;

  const [categories, guideline] = await Promise.all([
    prisma.category.findMany({ orderBy: { order: "asc" } }),
    prisma.guideline.findUnique({
      where: { id },
      include: { contacts: true },
    }),
  ]);

  if (!guideline) notFound();

  return (
    <div>
      <h1 className="mb-6 text-xl font-bold text-slate-900">Edit Panduan</h1>
      <GuidelineForm
        categories={categories}
        initial={{
          id: guideline.id,
          title: guideline.title,
          summary: guideline.summary,
          content: guideline.content,
          categoryId: guideline.categoryId,
          isPublished: guideline.isPublished,
          steps: guideline.steps as unknown as Step[],
          contacts: guideline.contacts.map((c) => ({
            name: c.name,
            position: c.position,
            unit: c.unit,
            whatsapp: c.whatsapp ?? "",
            email: c.email ?? "",
            room: c.room ?? "",
          })),
        }}
      />
    </div>
  );
}
