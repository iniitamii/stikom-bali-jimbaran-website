"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, Trash2, Save } from "lucide-react";

type Category = { id: string; name: string };

type Step = { order: number; text: string };
type ContactInput = {
  name: string;
  position: string;
  unit: string;
  whatsapp: string;
  email: string;
  room: string;
};

type GuidelineInitial = {
  id?: string;
  title: string;
  summary: string;
  content: string;
  categoryId: string;
  isPublished: boolean;
  steps: Step[];
  contacts: ContactInput[];
};

export function GuidelineForm({
  categories,
  initial,
}: {
  categories: Category[];
  initial?: GuidelineInitial;
}) {
  const router = useRouter();
  const isEdit = Boolean(initial?.id);

  const [title, setTitle] = useState(initial?.title ?? "");
  const [summary, setSummary] = useState(initial?.summary ?? "");
  const [content, setContent] = useState(initial?.content ?? "");
  const [categoryId, setCategoryId] = useState(
    initial?.categoryId ?? categories[0]?.id ?? ""
  );
  const [isPublished, setIsPublished] = useState(initial?.isPublished ?? true);
  const [steps, setSteps] = useState<Step[]>(
    initial?.steps?.length ? initial.steps : [{ order: 1, text: "" }]
  );
  const [contacts, setContacts] = useState<ContactInput[]>(
    initial?.contacts?.length
      ? initial.contacts
      : [{ name: "", position: "", unit: "", whatsapp: "", email: "", room: "" }]
  );
  const [saving, setSaving] = useState(false);

  function updateStep(index: number, text: string) {
    setSteps((prev) =>
      prev.map((s, i) => (i === index ? { ...s, text } : s))
    );
  }
  function addStep() {
    setSteps((prev) => [...prev, { order: prev.length + 1, text: "" }]);
  }
  function removeStep(index: number) {
    setSteps((prev) =>
      prev.filter((_, i) => i !== index).map((s, i) => ({ ...s, order: i + 1 }))
    );
  }

  function updateContact(index: number, field: keyof ContactInput, value: string) {
    setContacts((prev) =>
      prev.map((c, i) => (i === index ? { ...c, [field]: value } : c))
    );
  }
  function addContact() {
    setContacts((prev) => [
      ...prev,
      { name: "", position: "", unit: "", whatsapp: "", email: "", room: "" },
    ]);
  }
  function removeContact(index: number) {
    setContacts((prev) => prev.filter((_, i) => i !== index));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);

    const payload = {
      title,
      summary,
      content,
      categoryId,
      isPublished,
      steps: steps.filter((s) => s.text.trim() !== ""),
      contacts: contacts.filter((c) => c.name.trim() !== ""),
    };

    const res = await fetch(
      isEdit ? `/api/admin/guideline/${initial!.id}` : "/api/admin/guideline",
      {
        method: isEdit ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    setSaving(false);

    if (res.ok) {
      router.push("/admin/panduan");
      router.refresh();
    } else {
      alert("Gagal menyimpan panduan.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Basic info */}
      <div className="space-y-4 rounded-xl border border-slate-200 p-5">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Informasi Dasar
        </h2>
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Judul Panduan
          </label>
          <input
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            placeholder="mis. Peminjaman Ruangan Kelas / Aula"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Kategori
          </label>
          <select
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          >
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Ringkasan Singkat
          </label>
          <textarea
            required
            rows={2}
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            placeholder="Ringkasan yang tampil di daftar panduan"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Konten Lengkap
          </label>
          <textarea
            required
            rows={6}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            placeholder="Penjelasan lengkap tentang panduan ini"
          />
        </div>
        <label className="flex items-center gap-2 text-sm text-slate-700">
          <input
            type="checkbox"
            checked={isPublished}
            onChange={(e) => setIsPublished(e.target.checked)}
          />
          Tampilkan di website (published)
        </label>
      </div>

      {/* Steps */}
      <div className="space-y-3 rounded-xl border border-slate-200 p-5">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Langkah-langkah
          </h2>
          <button
            type="button"
            onClick={addStep}
            className="flex items-center gap-1 text-sm font-medium text-blue-700 hover:underline"
          >
            <Plus size={14} /> Tambah Langkah
          </button>
        </div>
        {steps.map((step, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-700 text-xs font-semibold text-white">
              {i + 1}
            </span>
            <input
              value={step.text}
              onChange={(e) => updateStep(i, e.target.value)}
              className="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder={`Langkah ke-${i + 1}`}
            />
            {steps.length > 1 && (
              <button
                type="button"
                onClick={() => removeStep(i)}
                className="rounded-lg p-2 text-red-500 hover:bg-red-50"
              >
                <Trash2 size={16} />
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Contacts */}
      <div className="space-y-4 rounded-xl border border-slate-200 p-5">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Kontak PIC
          </h2>
          <button
            type="button"
            onClick={addContact}
            className="flex items-center gap-1 text-sm font-medium text-blue-700 hover:underline"
          >
            <Plus size={14} /> Tambah Kontak
          </button>
        </div>
        {contacts.map((c, i) => (
          <div key={i} className="grid gap-2 rounded-lg border border-slate-100 p-3 sm:grid-cols-2">
            <input
              value={c.name}
              onChange={(e) => updateContact(i, "name", e.target.value)}
              placeholder="Nama"
              className="rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
            />
            <input
              value={c.position}
              onChange={(e) => updateContact(i, "position", e.target.value)}
              placeholder="Jabatan"
              className="rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
            />
            <input
              value={c.unit}
              onChange={(e) => updateContact(i, "unit", e.target.value)}
              placeholder="Unit / Bagian"
              className="rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
            />
            <input
              value={c.room}
              onChange={(e) => updateContact(i, "room", e.target.value)}
              placeholder="Ruangan"
              className="rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
            />
            <input
              value={c.whatsapp}
              onChange={(e) => updateContact(i, "whatsapp", e.target.value)}
              placeholder="WhatsApp (62xxxx)"
              className="rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
            />
            <input
              value={c.email}
              onChange={(e) => updateContact(i, "email", e.target.value)}
              placeholder="Email"
              className="rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
            />
            {contacts.length > 1 && (
              <button
                type="button"
                onClick={() => removeContact(i)}
                className="col-span-2 flex items-center justify-center gap-1 rounded-lg py-1 text-xs text-red-500 hover:bg-red-50"
              >
                <Trash2 size={14} /> Hapus Kontak Ini
              </button>
            )}
          </div>
        ))}
      </div>

      <button
        type="submit"
        disabled={saving}
        className="flex items-center gap-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-800 disabled:opacity-60"
      >
        <Save size={16} />
        {saving ? "Menyimpan..." : "Simpan Panduan"}
      </button>
    </form>
  );
}
