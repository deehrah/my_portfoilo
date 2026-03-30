"use client";
import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="max-w-6xl mx-auto px-6 pt-36 pb-16">
        <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">Contact</p>
        <h1 className="text-5xl font-bold leading-tight max-w-xl">Have a project in mind? Let&apos;s make it real.</h1>
      </section>

      <div className="border-t border-border" />

      <section className="max-w-6xl mx-auto px-6 py-16 grid sm:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div>
            <p className="text-muted-foreground text-sm mb-1">Email</p>
            <a href="mailto:nwogwuchideraanselm@gmail.com" className="text-foreground hover:text-accent transition-colors">nwogwuchideraanselm@gmail.com</a>
          </div>
          <div>
            <p className="text-muted-foreground text-sm mb-2">Availability</p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm">Open to freelance &amp; full-time</span>
            </div>
          </div>
          <div>
            <p className="text-muted-foreground text-sm mb-3">Socials</p>
            <div className="flex gap-5 text-sm text-muted-foreground">
              {["LinkedIn","Twitter","GitHub"].map((s) => <a key={s} href={s === "GitHub" ? "https://github.com/deehrah" : "#"} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">{s}</a>)}
            </div>
          </div>
        </div>

        {sent ? (
          <div className="flex items-center justify-center bg-card border border-border rounded-2xl p-10 text-center">
            <div>
              <p className="font-semibold text-lg">Message sent.</p>
              <p className="text-muted-foreground text-sm mt-2">I&apos;ll get back to you soon.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="flex flex-col gap-4">
            {[["name","Name","Your name","text"],["email","Email","your@email.com","email"]].map(([id,label,ph,type]) => (
              <div key={id} className="flex flex-col gap-1.5">
                <label htmlFor={id} className="text-xs text-muted-foreground uppercase tracking-widest">{label}</label>
                <input id={id} name={id} type={type} required placeholder={ph}
                  className="bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors text-sm" />
              </div>
            ))}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-xs text-muted-foreground uppercase tracking-widest">Message</label>
              <textarea id="message" name="message" required rows={5} placeholder="Tell me about your project..."
                className="bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none text-sm" />
            </div>
            <button type="submit" className="mt-2 px-6 py-3 bg-foreground text-background text-sm font-semibold rounded-full hover:opacity-80 transition-opacity self-start">
              Send message
            </button>
          </form>
        )}
      </section>

      <footer className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-8 flex justify-between text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Chidera Anselm Nwogwu</p>
          <Link href="/" className="hover:text-foreground transition-colors">← Home</Link>
        </div>
      </footer>
    </>
  );
}
