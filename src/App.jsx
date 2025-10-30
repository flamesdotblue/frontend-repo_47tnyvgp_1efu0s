import Header from './components/Header';
import Hero from './components/Hero';
import SponsorSection from './components/SponsorSection';
import DonateArticlesSection from './components/DonateArticlesSection';

export default function App() {
  return (
    <div style={{ backgroundColor: '#FDF7E7' }}>
      <Header />
      <main>
        <Hero />
        <SponsorSection />
        <DonateArticlesSection />
      </main>

      <footer className="border-t py-12" style={{ borderColor: 'rgba(35,31,32,0.12)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#CFFF5E' }}>
                  <span className="font-bold" style={{ color: '#231F20' }}>P</span>
                </div>
                <p className="text-lg font-extrabold" style={{ color: '#231F20' }}>PESAT</p>
              </div>
              <p className="text-sm opacity-80" style={{ color: '#231F20' }}>
                Yayasan Pendidikan dan Sosial Anak Terang. Membangun generasi masa depan melalui pendidikan dan harapan.
              </p>
            </div>

            <div>
              <p className="text-sm font-bold" style={{ color: '#231F20' }}>Tautan Cepat</p>
              <ul className="mt-3 space-y-2 text-sm" style={{ color: '#231F20' }}>
                <li><a href="#home">Home</a></li>
                <li><a href="#sponsor">Sponsor Anak</a></li>
                <li><a href="#donasi">Donasi</a></li>
                <li><a href="#bergabung">Ayo Bergabung</a></li>
                <li><a href="#tentang">Tentang Kami</a></li>
                <li><a href="#artikel">Informasi & Artikel</a></li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-bold" style={{ color: '#231F20' }}>Kontak</p>
              <ul className="mt-3 space-y-2 text-sm" style={{ color: '#231F20' }}>
                <li>Jl. Pelayanan No. 25, Jakarta</li>
                <li>+62 812-3456-7890</li>
                <li>info@pesat.or.id</li>
              </ul>
              <div className="mt-4 flex items-center gap-3">
                <a href="#" className="rounded-full p-2" style={{ backgroundColor: '#CFFF5E', color: '#231F20' }}>IG</a>
                <a href="#" className="rounded-full p-2" style={{ backgroundColor: '#CFFF5E', color: '#231F20' }}>FB</a>
                <a href="#" className="rounded-full p-2" style={{ backgroundColor: '#CFFF5E', color: '#231F20' }}>YT</a>
              </div>
            </div>

            <div>
              <p className="text-sm font-bold" style={{ color: '#231F20' }}>Newsletter</p>
              <form className="mt-3 flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Email Anda"
                  className="w-full rounded-xl border px-4 py-3 text-sm"
                  style={{ borderColor: 'rgba(35,31,32,0.2)', color: '#231F20', backgroundColor: '#FFFFFF' }}
                />
                <button
                  type="submit"
                  className="rounded-xl px-4 text-sm font-bold"
                  style={{ backgroundColor: '#6663FD', color: '#FFFFFF' }}
                >
                  Kirim
                </button>
              </form>
            </div>
          </div>

          <div className="mt-10 border-t pt-6 text-center text-xs opacity-70" style={{ color: '#231F20', borderColor: 'rgba(35,31,32,0.12)' }}>
            © {new Date().getFullYear()} PESAT — Semua hak cipta dilindungi.
          </div>
        </div>
      </footer>
    </div>
  );
}
