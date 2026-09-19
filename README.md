# Website Profile Kampus — STIKOM Jimbaran

Website profile kampus dengan fitur utama **Panduan Mahasiswa** (guideline
SOP layanan kampus) yang bisa dikelola lewat admin panel.

## Status Proyek

Ini adalah **scaffold demo**: struktur lengkap (8 kategori panduan, semua
halaman publik, admin panel dengan autentikasi) sudah dibuat, namun baru
**1 panduan contoh yang full-functional**: *Peminjaman Ruangan Kelas / Aula*
(kategori Fasilitas Kampus). Panduan lain untuk 7 kategori sisanya bisa
ditambahkan lewat admin panel (`/admin/panduan/new`) mengikuti pola yang sama.

## Tech Stack

- **Next.js 14** (App Router, TypeScript)
- **Prisma ORM** + **MySQL**
- **NextAuth.js v5** (Credentials provider, role-based: SUPER_ADMIN, AKADEMIK, KESEKRETARIATAN, KEMAHASISWAAN)
- **Tailwind CSS** + **lucide-react** (icon)

## Struktur Halaman

**Publik:**
- `/` — Beranda
- `/tentang` — Profil kampus (visi, misi, akreditasi)
- `/program-studi` — Daftar program studi
- `/panduan` — Daftar panduan (filter kategori + pencarian)
- `/panduan/[slug]` — Detail panduan (langkah-langkah, kontak PIC, dokumen unduh)
- `/pengumuman` — Pengumuman kampus
- `/kontak` — Kontak & peta lokasi

**Admin (butuh login):**
- `/admin/login` — Login admin
- `/admin/dashboard` — Ringkasan statistik
- `/admin/panduan` — Kelola semua panduan (list, edit, hapus)
- `/admin/panduan/new` — Tambah panduan baru
- `/admin/panduan/[id]/edit` — Edit panduan

## Setup & Menjalankan

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Siapkan database MySQL** (bisa pakai Railway, Aiven Cloud, atau PlanetScale
   — sesuai pengalaman yang sudah pernah dipakai di project Smartify/EcoPantry)

3. **Copy environment variables**
   ```bash
   cp .env.example .env
   ```
   Isi `DATABASE_URL` dengan connection string MySQL, dan generate `AUTH_SECRET`:
   ```bash
   openssl rand -base64 32
   ```

4. **Push schema ke database**
   ```bash
   npm run db:push
   ```

5. **Seed data awal** (8 kategori + 1 admin user + 1 panduan contoh)
   ```bash
   npm run db:seed
   ```
   Login admin default: `admin@stikombali.ac.id` / `admin123`
   (ganti password ini sebelum deploy ke production)

6. **Jalankan development server**
   ```bash
   npm run dev
   ```
   Buka http://localhost:3000

## Menambah Panduan untuk Kategori Lain

1. Login ke `/admin/login`
2. Buka `/admin/panduan/new`
3. Isi judul, kategori, ringkasan, konten, langkah-langkah, dan kontak PIC
4. Simpan — panduan otomatis muncul di halaman publik `/panduan`

## Dikembangkan Lebih Lanjut (Rekomendasi)

- CRUD untuk **Kategori** dan **Pengumuman** dari admin panel (saat ini
  hanya bisa lewat `prisma/seed.ts` atau Prisma Studio: `npm run db:studio`)
- Manajemen **Document** (upload file PDF/DOCX sungguhan, saat ini masih
  placeholder di `public/documents/`)
- Fitur pencarian full-text yang lebih baik jika jumlah panduan sudah banyak
- Middleware Next.js untuk proteksi rute `/admin/*` di level edge (saat ini
  proteksi dilakukan per-halaman dengan `requireAdmin()`)
- Peta kampus interaktif untuk melengkapi panduan Fasilitas Kampus

## Deployment

Mengikuti pola yang sudah terbukti berhasil di project Smartify:
Docker + Nginx + Let's Encrypt SSL di DigitalOcean Droplet, dengan
`binaryTargets = ["native", "linux-musl-openssl-3.0.x"]` di `prisma/schema.prisma`
agar kompatibel dengan image Docker berbasis Alpine.
