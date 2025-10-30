export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="relative h-[68vh] w-full overflow-hidden rounded-b-3xl">
        <img
          src="https://images.unsplash.com/photo-1604152135912-04a022e23696?q=80&w=2000&auto=format&fit=crop"
          alt="Anak-anak Indonesia tersenyum"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute inset-0 flex items-end md:items-center">
          <div className="mx-auto w-full max-w-7xl px-4 pb-10 md:pb-0">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-white">
                Bersama Membangun Generasi Masa Depan
              </h1>
              <p className="mt-4 text-base md:text-lg text-white/90">
                Membantu anak-anak dan komunitas untuk tumbuh dengan nilai dan harapan.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#sponsor"
                  className="rounded-full px-6 py-3 text-sm font-bold shadow transition-transform duration-200 hover:-translate-y-0.5"
                  style={{ backgroundColor: '#6663FD', color: '#FFFFFF' }}
                >
                  Sponsor Anak
                </a>
                <a
                  href="#donasi"
                  className="rounded-full px-6 py-3 text-sm font-bold"
                  style={{ color: '#231F20', backgroundColor: '#FDF7E7' }}
                >
                  Donasi Sekarang
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
