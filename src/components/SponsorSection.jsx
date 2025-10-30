import { useMemo, useState } from 'react';

const childrenSeed = [
  { id: 1, name: 'Ayu', age: 7, gender: 'Perempuan', region: 'Nias', img: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, name: 'Budi', age: 9, gender: 'Laki-laki', region: 'Papua', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, name: 'Sari', age: 8, gender: 'Perempuan', region: 'Kalimantan', img: 'https://images.unsplash.com/photo-1546500840-ae38253aba9b?q=80&w=1200&auto=format&fit=crop' },
  { id: 4, name: 'Rudi', age: 10, gender: 'Laki-laki', region: 'Sumba', img: 'https://images.unsplash.com/photo-1543165365-07232ed12a36?q=80&w=1200&auto=format&fit=crop' },
  { id: 5, name: 'Mila', age: 6, gender: 'Perempuan', region: 'Flores', img: 'https://images.unsplash.com/photo-1546539782-6fc531453083?q=80&w=1200&auto=format&fit=crop' },
  { id: 6, name: 'Andi', age: 7, gender: 'Laki-laki', region: 'Jawa', img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop' },
];

const filters = ['Semua', 'Laki-laki', 'Perempuan', 'Daerah'];

export default function SponsorSection() {
  const [active, setActive] = useState('Semua');

  const list = useMemo(() => {
    if (active === 'Semua') return childrenSeed;
    if (active === 'Daerah') return childrenSeed.sort((a, b) => a.region.localeCompare(b.region));
    return childrenSeed.filter((c) => c.gender === active);
  }, [active]);

  return (
    <section id="sponsor" className="py-14 md:py-20" style={{ backgroundColor: '#FDF7E7' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 md:mb-12 flex flex-col items-start md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold" style={{ color: '#231F20' }}>
              Sponsor Seorang Anak Hari Ini
            </h2>
            <p className="mt-2 text-sm md:text-base opacity-80" style={{ color: '#231F20' }}>
              Pilih anak untuk didukung dan ikut membangun masa depan mereka.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                  active === f ? 'shadow' : 'opacity-80'
                }`}
                style={{
                  backgroundColor: active === f ? '#6663FD' : '#FFFFFF',
                  color: active === f ? '#FFFFFF' : '#231F20',
                  border: '1px solid rgba(35,31,32,0.1)'
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.slice(0, 6).map((child) => (
            <div
              key={child.id}
              className="overflow-hidden rounded-2xl bg-white shadow transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="h-44 w-full overflow-hidden">
                <img src={child.img} alt={child.name} className="h-full w-full object-cover" />
              </div>
              <div className="space-y-2 p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold" style={{ color: '#231F20' }}>{child.name}</h3>
                  <span className="text-sm" style={{ color: '#231F20' }}>{child.age} th</span>
                </div>
                <p className="text-sm opacity-80" style={{ color: '#231F20' }}>
                  {child.gender} • {child.region}
                </p>
                <p className="text-sm" style={{ color: '#231F20' }}>
                  Suka belajar dan bercita-cita menjadi guru di desanya.
                </p>
                <a
                  href="#"
                  className="mt-3 inline-block rounded-full px-4 py-2 text-sm font-semibold"
                  style={{ backgroundColor: '#6663FD', color: '#FFFFFF' }}
                >
                  Sponsor Sekarang
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
