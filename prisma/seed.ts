import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const categories = [
  { name: "Akademik", slug: "akademik", icon: "GraduationCap", order: 1,
    description: "Panduan seputar KRS, cuti akademik, surat aktif kuliah, dan bimbingan akademik." },
  { name: "Kesekretariatan", slug: "kesekretariatan", icon: "FileText", order: 2,
    description: "Panduan legalisir ijazah, surat keterangan, dan administrasi umum lainnya." },
  { name: "Fasilitas Kampus", slug: "fasilitas-kampus", icon: "Building2", order: 3,
    description: "Panduan peminjaman ruangan, alat, lab, dan perpustakaan." },
  { name: "Keuangan", slug: "keuangan", icon: "Wallet", order: 4,
    description: "Info pembayaran SPP/UKT, cicilan, dan kontak bagian keuangan." },
  { name: "Kemahasiswaan & Organisasi", slug: "kemahasiswaan", icon: "Users", order: 5,
    description: "Panduan proposal kegiatan, dana kegiatan, dan organisasi mahasiswa." },
  { name: "Beasiswa", slug: "beasiswa", icon: "Award", order: 6,
    description: "Jenis beasiswa, syarat, dan cara pengajuan." },
  { name: "Magang & Karir", slug: "magang-karir", icon: "Briefcase", order: 7,
    description: "Panduan pengajuan magang/PKL dan info karir." },
  { name: "Teknologi & Sistem Informasi", slug: "teknologi-si", icon: "Laptop", order: 8,
    description: "Panduan reset password, akses e-learning, dan kendala WiFi kampus." },
];

async function main() {
  console.log("Seeding admin user...");
  const passwordHash = await bcrypt.hash("admin123", 10);
  const admin = await prisma.user.upsert({
    where: { email: "admin@stikombali.ac.id" },
    update: {},
    create: {
      name: "Admin Kesekretariatan",
      email: "admin@stikombali.ac.id",
      passwordHash,
      role: "KESEKRETARIATAN",
    },
  });

  console.log("Seeding categories...");
  for (const cat of categories) {
    await prisma.category.upsert({
      where: { slug: cat.slug },
      update: {},
      create: cat,
    });
  }

  const fasilitasKampus = await prisma.category.findUnique({
    where: { slug: "fasilitas-kampus" },
  });

  console.log("Seeding demo guideline (Peminjaman Ruangan)...");
  const guideline = await prisma.guideline.upsert({
    where: { slug: "peminjaman-ruangan" },
    update: {},
    create: {
      title: "Peminjaman Ruangan Kelas / Aula",
      slug: "peminjaman-ruangan",
      summary:
        "Panduan bagi mahasiswa atau organisasi kemahasiswaan yang ingin meminjam ruangan kelas maupun aula untuk kegiatan akademik atau non-akademik.",
      content: `Peminjaman ruangan di lingkungan kampus STIKOM Jimbaran ditujukan bagi mahasiswa, himpunan mahasiswa, maupun unit kegiatan mahasiswa (UKM) yang membutuhkan ruang kelas atau aula untuk kegiatan resmi, seperti rapat organisasi, pelatihan, seminar kecil, atau kegiatan belajar tambahan di luar jadwal perkuliahan.

Pengajuan dilakukan melalui bagian Kesekretariatan dengan mengisi formulir peminjaman ruangan. Pastikan pengajuan dilakukan minimal 3 hari kerja sebelum tanggal penggunaan agar proses verifikasi dan penjadwalan tidak bentrok dengan agenda akademik lain.`,
      steps: [
        { order: 1, text: "Unduh dan isi Formulir Peminjaman Ruangan (tersedia di bagian dokumen terkait di bawah)." },
        { order: 2, text: "Lengkapi formulir dengan detail kegiatan: nama kegiatan, penanggung jawab, tanggal, jam, dan ruangan yang diminta." },
        { order: 3, text: "Serahkan formulir ke bagian Kesekretariatan (Gedung A, Lt. 1) minimal H-3 sebelum kegiatan." },
        { order: 4, text: "Tunggu konfirmasi persetujuan dari Kesekretariatan, maksimal 1x24 jam kerja." },
        { order: 5, text: "Setelah disetujui, ambil kunci ruangan di hari pelaksanaan kegiatan pada bagian Kesekretariatan." },
        { order: 6, text: "Setelah kegiatan selesai, pastikan ruangan dalam kondisi rapi dan kembalikan kunci ke Kesekretariatan." },
      ],
      isPublished: true,
      categoryId: fasilitasKampus!.id,
      authorId: admin.id,
      contacts: {
        create: [
          {
            name: "Ni Made Sari Wijayanti",
            position: "Staff Kesekretariatan",
            unit: "Bagian Kesekretariatan",
            whatsapp: "6281234567890",
            email: "kesekretariatan@stikombali.ac.id",
            room: "Gedung A, Lantai 1",
          },
        ],
      },
      documents: {
        create: [
          {
            title: "Formulir Peminjaman Ruangan",
            fileUrl: "/documents/formulir-peminjaman-ruangan.pdf",
            fileType: "pdf",
          },
        ],
      },
    },
  });

  console.log({ admin: admin.email, guideline: guideline.slug });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
