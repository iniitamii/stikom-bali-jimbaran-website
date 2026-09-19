import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { title, summary, content, categoryId, isPublished, steps, contacts } = body;

  if (!title || !summary || !content || !categoryId) {
    return NextResponse.json({ error: "Data tidak lengkap" }, { status: 400 });
  }

  const baseSlug = slugify(title);
  let slug = baseSlug;
  let counter = 1;
  while (await prisma.guideline.findUnique({ where: { slug } })) {
    slug = `${baseSlug}-${counter++}`;
  }

  const guideline = await prisma.guideline.create({
    data: {
      title,
      slug,
      summary,
      content,
      categoryId,
      isPublished: Boolean(isPublished),
      steps,
      authorId: session.user.id as string,
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

  return NextResponse.json(guideline, { status: 201 });
}
