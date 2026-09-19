import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const body = await req.json();
  const { title, summary, content, categoryId, isPublished, steps, contacts } = body;

  // Replace contacts wholesale for simplicity (demo scope)
  await prisma.contact.deleteMany({ where: { guidelineId: id } });

  const guideline = await prisma.guideline.update({
    where: { id },
    data: {
      title,
      summary,
      content,
      categoryId,
      isPublished: Boolean(isPublished),
      steps,
      contacts: {
        create: (contacts ?? []).map((c: Record<string, string>) => ({
          name: c.name,
          position: c.position,
          unit: c.unit,
          whatsapp: c.whatsapp || null,
          email: c.email || null,
          room: c.room || null,
        })),
      },
    },
  });

  return NextResponse.json(guideline);
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  await prisma.guideline.delete({ where: { id } });

  return NextResponse.json({ success: true });
}
