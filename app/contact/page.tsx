"use client";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <section className="max-w-6xl mx-auto px-6 pt-40 pb-16 border-b border-white/5">
        <p className="text-xs text-neutral-500 uppercase tracking-widest mb-4">Contact</p>
        <h1 className="text-5xl font-bold text-white leading-tight max-w-xl">
          Have a project in mind? Let&apos;s make it real.
        </h1>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 grid sm:grid-cols-2 gap-16">
        {/* Info */}
        <div className="space-y-8">
          <div>
            <p className="text-neutral-500 text-sm mb-1">Email</p>
            <a href="mailto:your@email.com" className="text-white hover:text-neutral-300 transition-colors">
              your@email.com
            </a>
          </div>
          <div>
            <p className="text-neutral-500 text-sm mb-1">Availability</p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white text-sm">Open to freelance &amp; full-time</span>
            </div>
          </div>
          <div>
            <p className="text-neutral-500 text-sm mb-3">Socials</p>
            <div className="flex gap-4 text-sm text-neutral-400">
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">GitHub</a>
            </div>
          </div>
        </div>

        {/* Form */}
        {sent ? (
          <div className="flex items-center justify-center bg-neutral-900 border border-white/5 rounded-2xl p-10 text-center">
            <div>
              <p className="text-white font-semibold text-lg">Message sent.</p>
              <p className="text-neutral-400 text-sm mt-2">I&apos;ll get back to you soon.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-xs text-neutral-500 uppercase tracking-widest">Name</label>
              <input
                id="name" name="name" type="text" required placeholder="Your name"
                className="bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 transition-colors text-sm"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs text-neutral-500 uppercase tracking-widest">Email</label>
              <input
                id="email" name="email" type="email" required placeholder="your@email.com"
                className="bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 transition-colors text-sm"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-xs text-neutral-500 uppercase tracking-widest">Message</label>
              <textarea
                id="message" name="message" required rows={5} placeholder="Tell me about your project..."
                className="bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 transition-colors resize-none text-sm"
              />
            </div>
            <button
              type="submit"
              className="mt-2 px-6 py-3 bg-white text-black text-sm font-semibold rounded-full hover:bg-neutral-200 transition-colors self-start"
            >
              Send message
            </button>
          </form>
        )}
      </section>

      <footer className="border-t border-white/5 max-w-6xl mx-auto px-6 py-10">
        <p className="text-sm text-neutral-500">© {new Date().getFullYear()} Chidera Anselm Nwogwu</p>
      </footer>
    </>
  );
}
