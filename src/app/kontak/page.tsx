import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon,
  InstagramIcon,
  YoutubeIcon,
} from "@/components/icons";

export default function KontakPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 md:px-6">
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-700">
        Hubungi Kami
      </p>
      <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">Kontak</h1>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="space-y-5">
          <div className="flex gap-3">
            <MapPinIcon size={20} className="mt-1 shrink-0 text-blue-700" />
            <div>
              <p className="font-medium text-slate-900">Alamat</p>
              <p className="text-sm text-slate-600">
                Jl. Raya Kampus Udayana No. 20, Jimbaran, Kabupaten Badung, Bali
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <PhoneIcon size={20} className="mt-1 shrink-0 text-blue-700" />
            <div>
              <p className="font-medium text-slate-900">WhatsApp</p>
              <a href="https://wa.me/6281138812288" target="_blank" className="text-sm text-blue-700 hover:underline">
                0811-3881-288
              </a>
            </div>
          </div>

          <div className="flex gap-3">
            <MailIcon size={20} className="mt-1 shrink-0 text-blue-700" />
            <div>
              <p className="font-medium text-slate-900">Website Pendaftaran</p>
              <p className="text-sm text-slate-600">
                Sarjana: <a href="https://siap.stikom-bali.ac.id" target="_blank" className="text-blue-700 hover:underline">siap.stikom-bali.ac.id</a>
              </p>
              <p className="text-sm text-slate-600">
                Magister: <a href="https://pasca.stikom-bali.ac.id" target="_blank" className="text-blue-700 hover:underline">pasca.stikom-bali.ac.id</a>
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <ClockIcon size={20} className="mt-1 shrink-0 text-blue-700" />
            <div>
              <p className="font-medium text-slate-900">Jam Operasional</p>
              <p className="text-sm text-slate-600">Senin – Jumat, 08.00 – 16.00 WITA</p>
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <a href="https://instagram.com/stikombalijimbaran" target="_blank" className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:border-blue-300 hover:bg-blue-50">
              <InstagramIcon size={16} /> @stikombalijimbaran
            </a>
            <a href="https://youtube.com/@itbstikombalikampusjimbaran" target="_blank" className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:border-blue-300 hover:bg-blue-50">
              <YoutubeIcon size={16} /> ITB STIKOM BALI Kampus Jimbaran
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200">
          <iframe
            title="Lokasi Kampus"
            className="h-64 w-full md:h-full"
            loading="lazy"
            src="https://www.google.com/maps?q=Jl.+Raya+Kampus+Udayana+No.20+Jimbaran&output=embed"
          />
        </div>
      </div>
    </div>
  );
}