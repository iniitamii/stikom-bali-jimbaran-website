"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/tentang", label: "Tentang" },
  { href: "/program-studi", label: "Program Studi" },
  { href: "/panduan", label: "Panduan Mahasiswa" },
  { href: "/pengumuman", label: "Pengumuman" },
  { href: "/kontak", label: "Kontak" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold text-slate-900">
          <Image
            src="/images/logo-stikom.png"
            alt="Logo STIKOM Jimbaran"
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
          />
          <span className="leading-tight">
            STIKOM Jimbaran
            <span className="block text-xs font-normal text-slate-500">Portal Kampus</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-slate-600 transition hover:text-blue-700"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="/pendaftaran"
            className="hidden rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-800 sm:inline-block"
          >
            Daftar Sekarang
          </Link>

          <button
            className="md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-slate-200 bg-white px-4 py-3 md:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-2 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/pendaftaran"
              onClick={() => setOpen(false)}
              className="mt-1 block rounded-md bg-blue-700 px-2 py-2 text-center text-sm font-semibold text-white hover:bg-blue-800"
            >
              Daftar Sekarang
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}