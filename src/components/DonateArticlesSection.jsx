import { BookOpen, HandHeart, LifeBuoy, Users, MapPin, Calendar } from 'lucide-react';
import { useEffect, useState } from 'react';

function Metric({ icon: Icon, value, suffix = '', label }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1200;
    const step = Math.max(16, Math.floor(duration / end));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow">
      <div className="rounded-lg p-2" style={{ backgroundColor: '#CFFF5E' }}>
        <Icon size={20} style={{ color: '#231F20' }} />
      </div>
      <div>
        <p className="text-xl font-extrabold" style={{ color: '#231F20' }}>{count}{suffix}</p>
        <p className="text-sm opacity-80" style={{ color: '#231F20' }}>{label}</p>
      </div>
    </div>
  );
}

export default function DonateArticlesSection() {
  return (
    <div>
      {/* Tentang Kami + Impact */}
      <section id="tentang" className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold" style={{ color: '#231F20' }}>Tentang Kami</h2>
              <p className="mt-3 text-base leading-relaxed" style={{ color: '#231F20' }}>
                PESAT berkomitmen pada pendidikan, perkembangan anak, dan pemberdayaan komunitas di Indonesia. Kami
                membangun masa depan anak melalui pendidikan holistik, pembinaan karakter, dan kolaborasi dengan
                masyarakat lokal.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Metric icon={Users} value={78} suffix=",00" label="Anak Terbantu" />
                <Metric icon={MapPin} value={53} label="Desa Dilayani" />
                <Metric icon={Calendar} value={25} label="Tahun Pelayanan" />
                <Metric icon={BookOpen} value={12} label="Program Aktif" />
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1800&auto=format&fit=crop"
                alt="Kegiatan belajar anak"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Testimonial */}
          <div className="mt-10 rounded-3xl bg-white p-6 shadow md:p-8">
            <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop"
                alt="Orang tua"
                className="h-20 w-20 rounded-full object-cover"
              />
              <div>
                <p className="text-lg italic" style={{ color: '#231F20' }}>
                  “Berkat dukungan sponsor, anak kami kini berani bermimpi dan terus semangat belajar.”
                </p>
                <p className="mt-2 text-sm opacity-70" style={{ color: '#231F20' }}>— Ibu Maria, NTT</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donasi */}
      <section id="donasi" className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold" style={{ color: '#231F20' }}>Dukungan Anda Membuat Perubahan Nyata</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                title: 'Donasi Pendidikan',
                desc: 'Dukung biaya sekolah, seragam, dan perlengkapan belajar.',
                icon: BookOpen,
              },
              {
                title: 'Donasi Komunitas',
                desc: 'Bantu program pemberdayaan keluarga dan desa.',
                icon: HandHeart,
              },
              {
                title: 'Donasi Darurat',
                desc: 'Respon cepat saat bencana dan kondisi darurat.',
                icon: LifeBuoy,
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-white p-6 shadow transition-transform duration-200 hover:-translate-y-1">
                <div className="mb-4 inline-flex rounded-xl p-3" style={{ backgroundColor: '#CFFF5E' }}>
                  <item.icon size={22} style={{ color: '#231F20' }} />
                </div>
                <h3 className="text-lg font-bold" style={{ color: '#231F20' }}>{item.title}</h3>
                <p className="mt-2 text-sm opacity-80" style={{ color: '#231F20' }}>{item.desc}</p>
                <a href="#" className="mt-4 inline-block rounded-full px-4 py-2 text-sm font-semibold" style={{ backgroundColor: '#6663FD', color: '#FFFFFF' }}>
                  Donasi Sekarang
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ayo Bergabung */}
      <section id="bergabung" className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(135deg, #FDF7E7 0%, #CFFF5E 100%)' }}>
          <div className="flex flex-col items-center justify-between gap-6 py-10 text-center md:flex-row md:text-left">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold" style={{ color: '#231F20' }}>Mari Terlibat — Jadilah Bagian dari Perubahan</h3>
              <p className="mt-2 text-sm md:text-base opacity-80" style={{ color: '#231F20' }}>Bergabung sebagai relawan atau mitra untuk berdampak lebih luas.</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a href="#" className="rounded-full px-5 py-3 text-sm font-bold" style={{ backgroundColor: '#6663FD', color: '#FFFFFF' }}>Jadi Relawan</a>
              <a href="#" className="rounded-full border px-5 py-3 text-sm font-bold" style={{ color: '#231F20', borderColor: '#231F20' }}>Gabung Sekarang</a>
            </div>
          </div>
        </div>
      </section>

      {/* Informasi & Artikel */}
      <section id="artikel" className="pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold" style={{ color: '#231F20' }}>Berita & Kisah Inspiratif</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                title: 'Kisah Ayu: Semangat Belajar di Pedalaman',
                date: '12 Okt 2024',
                img: 'https://images.unsplash.com/photo-1520975922533-04f13507b284?q=80&w=1600&auto=format&fit=crop',
              },
              {
                title: 'Program Literasi Meningkatkan Kepercayaan Diri',
                date: '1 Sep 2024',
                img: 'https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?q=80&w=1600&auto=format&fit=crop',
              },
              {
                title: 'Bersama Warga Membangun Taman Baca',
                date: '20 Agu 2024',
                img: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1600&auto=format&fit=crop',
              },
            ].map((a) => (
              <article key={a.title} className="overflow-hidden rounded-2xl bg-white shadow transition-transform duration-200 hover:-translate-y-1">
                <div className="h-44 w-full overflow-hidden">
                  <img src={a.img} alt={a.title} className="h-full w-full object-cover" />
                </div>
                <div className="p-5">
                  <p className="text-xs opacity-70" style={{ color: '#231F20' }}>{a.date}</p>
                  <h3 className="mt-1 text-lg font-bold" style={{ color: '#231F20' }}>{a.title}</h3>
                  <a href="#" className="mt-3 inline-block text-sm font-semibold underline" style={{ color: '#6663FD' }}>
                    Baca Selengkapnya
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
