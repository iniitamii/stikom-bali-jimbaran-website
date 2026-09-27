"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

type NavItem =
  | { label: string; href: string; children?: never }
  | { label: string; href?: never; children: { href: string; label: string }[] };

const navItems: NavItem[] = [
  { label: "Beranda", href: "/" },
  {
    label: "Kampus",
    children: [
      { href: "/tentang", label: "Tentang Kampus" },
      { href: "/program-studi", label: "Program Studi" },
      { href: "/mitra", label: "Mitra Industri" },
    ],
  },
  {
    label: "Mahasiswa",
    children: [
      { href: "/panduan", label: "Panduan Mahasiswa" },
      { href: "/portal", label: "Portal Akses Cepat" },
      { href: "/pengumuman", label: "Pengumuman" },
    ],
  },
  { label: "Kontak", href: "/kontak" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleEnter(label: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  }
  function handleLeave() {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 150);
  }

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

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && handleEnter(item.label)}
              onMouseLeave={() => item.children && handleLeave()}
            >
              {item.href ? (
                <Link
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-blue-700"
                >
                  {item.label}
                </Link>
              ) : (
                <>
                  <button
                    className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-blue-700"
                    onClick={() =>
                      setOpenDropdown(openDropdown === item.label ? null : item.label)
                    }
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`}
                    />
                  </button>

                  {openDropdown === item.label && (
                    <ul className="absolute left-0 top-full mt-1 w-56 rounded-lg border border-slate-200 bg-white py-2 shadow-lg">
                      {item.children!.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-700"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
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
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-3 md:hidden">
          {navItems.map((item) => (
            <div key={item.label} className="mb-1">
              {item.href ? (
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-md px-2 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  {item.label}
                </Link>
              ) : (
                <div>
                  <p className="px-2 py-1 text-xs font-semibold uppercase tracking-wide text-slate-400">
                    {item.label}
                  </p>
                  {item.children!.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-md px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/pendaftaran"
            onClick={() => setMobileOpen(false)}
            className="mt-2 block rounded-md bg-blue-700 px-2 py-2 text-center text-sm font-semibold text-white hover:bg-blue-800"
          >
            Daftar Sekarang
          </Link>
        </div>
      )}
    </header>
  );
}