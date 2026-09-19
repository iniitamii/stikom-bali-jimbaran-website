"use client";

import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";

export function DeleteGuidelineButton({ id }: { id: string }) {
  const router = useRouter();

  async function handleDelete() {
    if (!confirm("Yakin ingin menghapus panduan ini?")) return;
    const res = await fetch(`/api/admin/guideline/${id}`, { method: "DELETE" });
    if (res.ok) {
      router.refresh();
    } else {
      alert("Gagal menghapus panduan.");
    }
  }

  return (
    <button
      onClick={handleDelete}
      className="rounded-lg p-2 text-red-500 hover:bg-red-50"
      title="Hapus"
    >
      <Trash2 size={16} />
    </button>
  );
}
