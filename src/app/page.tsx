"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  // add helper to open app scheme with web fallback
  const openApp = (schemeUrl: string, webUrl: string) => {
    // attempt to open app; fallback to web after short delay
    const now = Date.now();
    // Try setting location to scheme
    window.location.href = schemeUrl;
    // If app not installed, after 900ms open webUrl
    setTimeout(() => {
      if (Date.now() - now < 1500) window.location.href = webUrl;
    }, 900);
  };

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-3xl bg-white/80 dark:bg-gray-800/60 backdrop-blur-md rounded-3xl shadow-2xl p-10 text-center">
          <div className="flex flex-col items-center">
            <div className="w-[140px] h-[140px]">
              <Image
                src="/profile.jpg"
                alt="Foto Profil"
                width={110}
                height={120}
                className="profile-img rounded-full border-4 border-white dark:border-gray-700"
              />
            </div>

            {/* Reduced heading size */}
            <h1 className="mt-6 text-2xl md:text-1x1 font-extrabold tracking-tight heading">
              Halo, Saya Fajar 👋
            </h1>

            {/* Slightly smaller paragraph */}
            <p className="mt-4 text-base md:text-lg hero-subtitle max-w-xl">
              Mahasiswa Informatika di Institut Teknologi Garut — fokus pada Web
              Development, UI/UX, dan Sistem Informasi.
            </p>

            <div className="mt-7 flex gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-600 text-white font-semibold shadow hover:scale-105 transition transform text-sm"
              >
                🚀 Lihat Proyek Saya
              </a>

              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 bg-white/60 hover:bg-white transition text-sm"
              >
                ✉️ Hubungi Saya
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 animate-fadeInUp delay-200">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          💡 Proyek Saya
        </h2>
        <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {/* Project Card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition overflow-hidden">
            <Image
              src="/projects/project1.jpg"
              alt="Website Berita"
              width={600}
              height={360}
              className="w-full h-44 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">Website Berita</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-3 text-sm">
                Aplikasi berita terkini dengan UI bersih dan update real-time.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition overflow-hidden">
            <Image
              src="/projects/project2.png"
              alt="Cafe FJR"
              width={600}
              height={360}
              className="w-full h-44 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">Cafe FJR</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-3 text-sm">
                Website cafe dengan menu interaktif dan form lamaran kerja.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition overflow-hidden">
            <Image
              src="/projects/project3.jpg"
              alt="Sistem Aplikasi Kos-kostan"
              width={600}
              height={360}
              className="w-full h-44 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">
                Aplikasi Sistem Informasi Kos-kostan
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-3 text-sm">
                Mengelola Sistem Informasi Kosan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-12 px-6 animate-fadeInUp delay-400">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-white/80 dark:bg-gray-800/60 backdrop-blur rounded-2xl p-8 shadow-md">
            <h3 className="text-2xl font-bold mb-3">Ingin bekerja sama?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Kirim pesan singkat atau cek halaman kontak untuk detail lebih
              lanjut.
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
            >
              Kontak
            </a>
          </div>
        </div>
      </section>

      {/* Footer with social app links */}
      <footer className="text-center py-8">
        <div className="flex items-center justify-center gap-4 mb-4">
          {/* Instagram */}
          <a
            href="https://instagram.com/fajarpuniman"
            onClick={(e) => {
              e.preventDefault();
              openApp(
                "instagram://user?username=fajar_puniman",
                "https://instagram.com/fajarpuniman"
              );
            }}
            aria-label="Instagram"
            className="text-gray-600 dark:text-gray-300 hover:text-pink-500 transition"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
            >
              <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5.75a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5zm6.5-.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM12 9.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z" />
            </svg>
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@fajarpuniman"
            onClick={(e) => {
              e.preventDefault();
              openApp(
                "snssdk1233://user/profile/username=fajarpuniman",
                "https://www.tiktok.com/@fajarpuniman"
              );
            }}
            aria-label="TikTok"
            className="text-gray-600 dark:text-gray-300 hover:text-black transition"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
            >
              <path d="M17.25 3v7.2a4.8 4.8 0 1 1-4.8-4.8V3a7.2 7.2 0 1 0 7.2 7.2V3h-2.4z" />
            </svg>
          </a>

          {/* X / Twitter */}
          <a
            href="https://x.com/fajarpuniman"
            onClick={(e) => {
              e.preventDefault();
              openApp(
                "twitter://user?screen_name=fajarpuniman",
                "https://x.com/fajarpuniman"
              );
            }}
            aria-label="X (Twitter)"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
            >
              <path d="M8 19c7.732 0 11.955-6.405 11.955-11.955 0-.182 0-.364-.013-.545A8.558 8.558 0 0 0 21 6.2a8.3 8.3 0 0 1-2.357.646A4.118 4.118 0 0 0 20.447 4a8.22 8.22 0 0 1-2.605.996A4.107 4.107 0 0 0 10.1 8.14 11.65 11.65 0 0 1 3.16 4.8a4.063 4.063 0 0 0-.555 2.064 4.107 4.107 0 0 0 1.826 3.421 4.07 4.07 0 0 1-1.86-.514v.052a4.108 4.108 0 0 0 3.294 4.025 4.096 4.096 0 0 1-1.853.07 4.11 4.11 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 17.54a11.616 11.616 0 0 0 6.29 1.84" />
            </svg>
          </a>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          © 2025 Fajar Puniman.
        </p>
      </footer>
    </div>
  );
}
