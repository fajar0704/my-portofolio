"use client";
import { Mail, User, MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100/60 via-white to-purple-100/60 dark:from-gray-900 dark:via-gray-950 dark:to-indigo-900 flex items-center justify-center px-4 py-16">
      <div className="max-w-3xl w-full">
        <div className="relative bg-white/70 dark:bg-gray-800/60 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/60 dark:border-gray-700/60 p-10 animate-fadeInUp transition-all duration-500 group overflow-hidden">
          {/* Decorative gradient blur */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-indigo-400/30 to-purple-400/20 rounded-full blur-2xl pointer-events-none group-hover:scale-110 transition" />
          <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-700 dark:text-indigo-300 mb-4 heading animate-popIn">
            📩 Kontak Kami
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6 animate-fadeIn">
            Kirim pesan atau pertanyaan — saya akan membalas sesegera mungkin.
          </p>

          <form
            action="https://formsubmit.co/el/hopumi
"
            method="POST"
            className="flex flex-col gap-5"
          >
            <div className="relative animate-fadeIn delay-100">
              <User
                className="absolute left-3 top-1/2 -translate-y-1/2 text-indigo-400 pointer-events-none"
                size={20}
              />
              <input
                type="text"
                name="name"
                placeholder="Nama"
                required
                className="pl-10 p-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white/70 dark:bg-gray-900/40 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 focus:outline-none transition-all duration-200 shadow-sm hover:shadow-md"
              />
            </div>

            <div className="relative animate-fadeIn delay-200">
              <Mail
                className="absolute left-3 top-1/2 -translate-y-1/2 text-indigo-400 pointer-events-none"
                size={20}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="pl-10 p-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white/70 dark:bg-gray-900/40 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 focus:outline-none transition-all duration-200 shadow-sm hover:shadow-md"
              />
            </div>

            <div className="relative animate-fadeIn delay-300">
              <MessageCircle
                className="absolute left-3 top-4 text-indigo-400 pointer-events-none"
                size={20}
              />
              <textarea
                name="message"
                placeholder="Tulis pesan kamu..."
                rows={6}
                required
                className="pl-10 p-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white/70 dark:bg-gray-900/40 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 focus:outline-none transition-all duration-200 shadow-sm hover:shadow-md"
              ></textarea>
            </div>

            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="/thanks" />

            <div className="mt-2 flex justify-end animate-fadeIn delay-400">
              <button
                type="submit"
                className="px-7 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              >
                Kirim Pesan
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
