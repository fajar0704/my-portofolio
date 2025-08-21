// src/app/thanks/page.tsx
import Link from "next/link";

export default function ThanksPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6">
      <div className="bg-white shadow-lg rounded-2xl p-10 text-center">
        <h1 className="text-3xl font-bold text-green-600">✅ Pesan berhasil terkirim!</h1>
        <p className="mt-4 text-gray-600">
          Terima kasih sudah menghubungi saya. Saya akan segera membalas pesan Anda.
        </p>

        <Link
          href="/"
          className="mt-6 inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          Kembali ke Home
        </Link>
      </div>
    </div>
  );
}
