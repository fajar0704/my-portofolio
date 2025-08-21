export default function ThanksPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 px-4">
      <div className="max-w-md w-full bg-white/85 dark:bg-gray-800/70 backdrop-blur-md rounded-3xl shadow-2xl p-10 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-700 mb-4">
          🎉 Terima Kasih!
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Pesan kamu sudah berhasil dikirim. Kami akan segera membalas melalui
          email yang kamu masukkan.
        </p>

        <a
          href="/"
          className="inline-block px-6 py-3 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
        >
          ⬅️ Kembali ke Beranda
        </a>
      </div>
    </main>
  );
}
