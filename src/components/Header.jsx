import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Sponsor Anak', href: '#sponsor' },
  { label: 'Donasi', href: '#donasi' },
  { label: 'Ayo Bergabung', href: '#bergabung' },
  { label: 'Tentang Kami', href: '#tentang' },
  { label: 'Informasi & Artikel', href: '#artikel' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50" style={{ backgroundColor: '#FDF7E7' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#CFFF5E' }}>
              <span className="font-bold" style={{ color: '#231F20' }}>P</span>
            </div>
            <div>
              <p className="text-lg font-extrabold tracking-tight" style={{ color: '#231F20' }}>PESAT</p>
              <p className="text-xs opacity-80" style={{ color: '#231F20' }}>Yayasan Pendidikan dan Sosial Anak Terang</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-medium transition-colors" style={{ color: '#231F20' }}>
                {item.label}
              </a>
            ))}
            <a
              href="#donasi"
              className="rounded-full px-4 py-2 text-sm font-semibold shadow transition-transform duration-200 hover:-translate-y-0.5"
              style={{ backgroundColor: '#6663FD', color: '#FFFFFF' }}
              onClick={() => setOpen(false)}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#CFFF5E')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#6663FD')}
            >
              Donasi
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            style={{ color: '#231F20' }}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t" style={{ borderColor: 'rgba(35,31,32,0.1)' }}>
          <div className="space-y-1 px-4 py-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium"
                style={{ color: '#231F20' }}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#donasi"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-full px-4 py-2 text-center text-sm font-semibold shadow"
              style={{ backgroundColor: '#6663FD', color: '#FFFFFF' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#CFFF5E')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#6663FD')}
            >
              Donasi
            </a>
          </div>
        </div>
      )}

      {/* Sticky Donate Button on Mobile */}
      <div className="fixed inset-x-0 bottom-3 z-40 px-4 md:hidden">
        <a
          href="#donasi"
          className="mx-auto block w-full max-w-sm rounded-full px-6 py-3 text-center text-sm font-bold shadow-lg"
          style={{ backgroundColor: '#6663FD', color: '#FFFFFF' }}
        >
          Donasi Sekarang
        </a>
      </div>
    </header>
  );
}
