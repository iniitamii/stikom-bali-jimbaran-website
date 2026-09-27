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

  const fasilitasKampus = await prisma.category.findUnique({ where: { slug: "fasilitas-kampus" } });
  const akademik = await prisma.category.findUnique({ where: { slug: "akademik" } });
  const kesekretariatan = await prisma.category.findUnique({ where: { slug: "kesekretariatan" } });

  // ─────────────────────────────────────────
  // 1. Peminjaman Ruangan (Fasilitas Kampus) — kontak asli: Sarana & Prasarana
  // ─────────────────────────────────────────
  console.log("Seeding: Peminjaman Ruangan...");
  await prisma.guideline.upsert({
    where: { slug: "peminjaman-ruangan" },
    update: {
      contacts: { deleteMany: {}, create: [{
        name: "I Gusti Ngurah Karmandita, S.E",
        position: "Koordinator Sarana dan Prasarana",
        unit: "Bagian Sarana & Prasarana",
        whatsapp: "6281238117553",
        email: null,
        room: "Gedung A, Lantai 1",
      }] },
    },
    create: {
      title: "Peminjaman Ruangan Kelas / Aula",
      slug: "peminjaman-ruangan",
      summary: "Panduan bagi mahasiswa atau organisasi kemahasiswaan yang ingin meminjam ruangan kelas (kapasitas 36 orang) maupun Main Hall/Aula (kapasitas hingga 200 orang).",
      content: `Peminjaman ruangan di lingkungan kampus STIKOM Jimbaran ditujukan bagi mahasiswa, himpunan mahasiswa, maupun unit kegiatan mahasiswa (UKM) yang membutuhkan ruang kelas atau aula untuk kegiatan resmi, seperti rapat organisasi, pelatihan, seminar kecil, atau kegiatan belajar tambahan di luar jadwal perkuliahan.

Setiap ruang kelas memiliki kapasitas 36 orang dan dilengkapi 2 AC. Main Hall (Aula) berkapasitas hingga 200 orang dengan nuansa panggung teater, cocok untuk acara berskala lebih besar.

Pengajuan dilakukan melalui bagian Sarana & Prasarana. Pastikan pengajuan dilakukan minimal 3 hari kerja sebelum tanggal penggunaan agar proses verifikasi dan penjadwalan tidak bentrok dengan agenda akademik lain.`,
      steps: [
        { order: 1, text: "Unduh dan isi Formulir Peminjaman Ruangan (tersedia di bagian dokumen terkait di bawah)." },
        { order: 2, text: "Lengkapi formulir dengan detail kegiatan: nama kegiatan, penanggung jawab, tanggal, jam, dan ruangan yang diminta." },
        { order: 3, text: "Serahkan formulir ke bagian Sarana & Prasarana (Gedung A, Lt. 1) minimal H-3 sebelum kegiatan." },
        { order: 4, text: "Tunggu konfirmasi persetujuan, maksimal 1x24 jam kerja." },
        { order: 5, text: "Setelah disetujui, ambil kunci ruangan di hari pelaksanaan kegiatan pada bagian Sarana & Prasarana." },
        { order: 6, text: "Setelah kegiatan selesai, pastikan ruangan dalam kondisi rapi dan kembalikan kunci." },
      ],
      isPublished: true,
      categoryId: fasilitasKampus!.id,
      authorId: admin.id,
      contacts: { create: [{
        name: "I Gusti Ngurah Karmandita, S.E",
        position: "Koordinator Sarana dan Prasarana",
        unit: "Bagian Sarana & Prasarana",
        whatsapp: "6281238117553",
        room: "Gedung A, Lantai 1",
      }] },
      documents: { create: [{
        title: "Formulir Peminjaman Ruangan",
        fileUrl: "/documents/formulir-peminjaman-ruangan.pdf",
        fileType: "pdf",
      }] },
    },
  });

  // ─────────────────────────────────────────
  // 2. Surat Aktif Kuliah (Akademik) — kontak asli: Koordinator Akademik
  // ─────────────────────────────────────────
  console.log("Seeding: Surat Aktif Kuliah...");
  await prisma.guideline.upsert({
    where: { slug: "surat-aktif-kuliah" },
    update: {},
    create: {
      title: "Pengajuan Surat Aktif Kuliah",
      slug: "surat-aktif-kuliah",
      summary: "Panduan bagi mahasiswa yang membutuhkan surat keterangan aktif kuliah untuk keperluan beasiswa, magang, perbankan, atau administrasi lainnya.",
      content: `Surat aktif kuliah adalah dokumen resmi yang menyatakan status mahasiswa sedang terdaftar dan aktif menjalani perkuliahan di ITB STIKOM Bali Kampus Jimbaran. Dokumen ini sering dibutuhkan untuk keperluan pengajuan beasiswa, magang, pembukaan rekening pelajar, maupun keperluan administratif lain di luar kampus.

Pengajuan dilakukan melalui bagian Akademik, baik secara langsung maupun melalui hotline WhatsApp Akademik.`,
      steps: [
        { order: 1, text: "Hubungi hotline Akademik atau datang langsung ke bagian Akademik." },
        { order: 2, text: "Sampaikan keperluan surat (beasiswa, magang, perbankan, dll) agar format surat sesuai kebutuhan." },
        { order: 3, text: "Tunggu proses pembuatan surat, umumnya 1-2 hari kerja." },
        { order: 4, text: "Ambil surat yang sudah ditandatangani di bagian Akademik." },
      ],
      isPublished: true,
      categoryId: akademik!.id,
      authorId: admin.id,
      contacts: { create: [{
        name: "Rifky Lana Rahardian, S.Kom., M.T",
        position: "Koordinator Akademik",
        unit: "Bagian Akademik",
        whatsapp: "6289983100394",
        room: "Hotline Akademik: +62 899-9091-818",
      }] },
    },
  });

  // ─────────────────────────────────────────
  // 3. Legalisir Ijazah & Transkrip (Kesekretariatan)
  // ─────────────────────────────────────────
  console.log("Seeding: Legalisir Ijazah...");
  await prisma.guideline.upsert({
    where: { slug: "legalisir-ijazah" },
    update: {},
    create: {
      title: "Legalisir Ijazah & Transkrip Nilai",
      slug: "legalisir-ijazah",
      summary: "Panduan bagi alumni maupun mahasiswa yang membutuhkan legalisir dokumen ijazah atau transkrip nilai untuk keperluan melamar kerja atau melanjutkan studi.",
      content: `Legalisir dokumen (ijazah/transkrip nilai) dibutuhkan sebagai bukti keabsahan salinan dokumen resmi, biasanya untuk keperluan melamar pekerjaan atau mendaftar studi lanjut. Layanan ini ditangani oleh bagian Kesekretariatan dan SDM.`,
      steps: [
        { order: 1, text: "Siapkan fotokopi ijazah/transkrip yang akan dilegalisir (tanpa batas jumlah, sesuai kebutuhan)." },
        { order: 2, text: "Datang ke bagian Kesekretariatan dan SDM, Gedung A Lantai 1." },
        { order: 3, text: "Serahkan dokumen asli untuk verifikasi beserta fotokopinya." },
        { order: 4, text: "Tunggu proses legalisir dan cap basah, umumnya selesai di hari yang sama." },
      ],
      isPublished: true,
      categoryId: kesekretariatan!.id,
      authorId: admin.id,
      contacts: { create: [{
        name: "Ni Putu Rahayu Satyari, S.TP",
        position: "Koordinator Kesekretariatan dan SDM",
        unit: "Bagian Kesekretariatan & SDM",
        whatsapp: "6285936113882",
        room: "Gedung A, Lantai 1",
      }] },
    },
  });

  console.log("Seed selesai.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });