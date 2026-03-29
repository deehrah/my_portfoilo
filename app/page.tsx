import Link from "next/link";

const projects = [
  { title: "Ninety9", type: "Full-Stack · Web Platform", slug: "ninety9" },
  { title: "Stay9ja", type: "Full-Stack · Web App", slug: "stay9ja" },
  { title: "Zystio", type: "Full-Stack · Modern Web Stack", slug: "zystio" },
  { title: "Daba Merch Website", type: "UI/UX · E-commerce Design", slug: "daba-merch" },
];

const services = [
  "WordPress Development",
  "Full-Stack Web Dev",
  "UI/UX Design",
  "Graphic Design",
  "Funnel Building",
  "Web Administration",
  "Figma Mockups",
  "GoHighLevel",
];

const stats = [
  { value: "7+", label: "Years experience" },
  { value: "20+", label: "Projects delivered" },
  { value: "10+", label: "Happy clients" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-40 pb-24">
        <div className="flex items-center gap-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-neutral-400">Available for freelance projects</span>
        </div>

        <h1 className="text-5xl sm:text-7xl font-bold text-white leading-[1.05] tracking-tight max-w-4xl">
          Web & design that makes people{" "}
          <span className="text-neutral-500">trust and convert</span>
        </h1>

        <p className="mt-8 text-lg text-neutral-400 max-w-xl leading-relaxed">
          Helping businesses stand out through clean web development and
          thoughtful design — from WordPress builds to full-stack platforms.
        </p>

        <div className="flex flex-wrap gap-4 mt-10">
          <Link
            href="/projects"
            className="px-6 py-3 bg-white text-black text-sm font-semibold rounded-full hover:bg-neutral-200 transition-colors"
          >
            View my work
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border border-white/10 text-white text-sm font-semibold rounded-full hover:border-white/30 transition-colors"
          >
            Let&apos;s talk
          </Link>
        </div>
      </section>

      {/* Selected Projects */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-white/5">
        <p className="text-xs text-neutral-500 uppercase tracking-widest mb-10">Selected projects</p>
        <h2 className="text-3xl font-bold text-white mb-12">
          Projects built on strategy,<br />finished with craft.
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href="/projects"
              className="group relative bg-neutral-900 border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all"
            >
              {/* Cover placeholder */}
              <div className="h-56 bg-neutral-800 flex items-center justify-center">
                <span className="text-neutral-600 text-sm">Cover — {p.title}</span>
              </div>
              <div className="p-5 flex items-center justify-between">
                <div>
                  <p className="text-white font-semibold">{p.title}</p>
                  <p className="text-neutral-500 text-sm mt-0.5">{p.type}</p>
                </div>
                <span className="text-neutral-600 group-hover:text-white transition-colors text-lg">→</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/projects" className="text-sm text-neutral-400 hover:text-white transition-colors underline underline-offset-4">
            View all projects
          </Link>
        </div>
      </section>

      {/* About */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-white/5">
        <p className="text-xs text-neutral-500 uppercase tracking-widest mb-10">About</p>
        <div className="grid sm:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Hi, I am Chidera Anselm Nwogwu</h2>
            <p className="text-neutral-400 leading-relaxed">
              A web developer and designer with hands-on experience building platforms,
              managing WordPress sites, and crafting visual identities. I work across
              the full stack — from domain setup to UI design — and care deeply about
              performance, usability, and clean execution.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <p className="text-4xl font-bold text-white">{value}</p>
                <p className="text-neutral-500 text-sm mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-white/5">
        <p className="text-xs text-neutral-500 uppercase tracking-widest mb-10">What I do</p>
        <h2 className="text-3xl font-bold text-white mb-12">
          Everything your project needs<br />to show up right
        </h2>
        <div className="flex flex-wrap gap-3">
          {services.map((s) => (
            <span
              key={s}
              className="px-4 py-2 rounded-full border border-white/10 text-neutral-300 text-sm hover:border-white/30 hover:text-white transition-colors"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-white/5">
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-neutral-400">Available for freelance projects</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold text-white max-w-2xl leading-tight mb-8">
          Have a project in mind?<br />Let&apos;s make it real.
        </h2>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="px-6 py-3 bg-white text-black text-sm font-semibold rounded-full hover:bg-neutral-200 transition-colors"
          >
            Get in touch
          </Link>
          <Link
            href="/projects"
            className="px-6 py-3 border border-white/10 text-white text-sm font-semibold rounded-full hover:border-white/30 transition-colors"
          >
            See my work
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row justify-between gap-6 text-sm text-neutral-500">
          <div className="space-y-1">
            <p>Email: <a href="mailto:your@email.com" className="hover:text-white transition-colors">your@email.com</a></p>
            <p>Available for: Freelance &amp; Full-Time</p>
          </div>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/projects" className="hover:text-white transition-colors">Work</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
          <p>© {new Date().getFullYear()} Chidera Anselm Nwogwu</p>
        </div>
      </footer>
    </>
  );
}
