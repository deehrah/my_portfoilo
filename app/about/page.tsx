import Image from "next/image";
import Link from "next/link";

const tools = [
  { name: "WordPress", icon: "https://cdn.simpleicons.org/wordpress/21759B" },
  { name: "PHP", icon: "https://cdn.simpleicons.org/php/777BB4" },
  { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
  { name: "Webflow", icon: "https://cdn.simpleicons.org/webflow/146EF5" },
  { name: "GoHighLevel", icon: "https://cdn.simpleicons.org/gohighlevel/F97316" },
  { name: "HTML/CSS", icon: "https://cdn.simpleicons.org/html5/E34F26" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "cPanel", icon: "https://cdn.simpleicons.org/cpanel/FF6C2C" },
  { name: "SEO Tools", icon: "https://cdn.simpleicons.org/googlesearchconsole/458CF5" },
  { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/000000" },
];
const values = ["Understanding your business first","Aligning on strategy and goals","Concepts to pixel-perfect execution","Final assets, ready to launch"];
const principles = [
  { title: "Clarity over complexity", desc: "Clean, simple solutions that work." },
  { title: "Strategy over trends", desc: "What solves the problem, not what's popular." },
  { title: "Partnerships over one-off", desc: "Long-term relationships, not transactions." },
];

export default function About() {
  return (
    <>
      <section className="max-w-4xl mx-auto px-6 pt-36 pb-16 text-center">
        <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">About me</p>
        <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6">The developer behind the work.</h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Years of turning complex requirements into websites people actually use. Based in Lagos, working globally.
        </p>
      </section>

      <div className="border-t border-border" />

      {/* Bento */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Portrait */}
          <div className="sm:row-span-2 relative min-h-[420px] rounded-2xl overflow-hidden border border-border">
            <Image src="/Chidera.png" alt="Chidera" fill sizes="(max-width:768px)100vw,33vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="font-bold text-xl">Chidera Anselm</p>
              <p className="text-muted-foreground text-sm">Lagos, Nigeria · WAT</p>
            </div>
          </div>

          {/* Bio */}
          <div className="sm:col-span-2 bg-card border border-border rounded-2xl p-7">
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">Bio</p>
            <p className="leading-relaxed mb-3">Detail-oriented Web Administrator and developer who turns complex requirements into websites people trust. Skilled in WordPress, PHP, performance optimization, and visual design.</p>
            <p className="text-muted-foreground text-sm leading-relaxed">Proven ability to manage multiple websites, ensure uptime, and deliver user-friendly responsive experiences — from domain setup to full-stack platforms.</p>
          </div>

          {/* Stats */}
          <div className="bg-accent/10 border border-accent/20 rounded-2xl p-7">
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-6">Numbers</p>
            <div className="space-y-5">
              {[["4+","Years experience"],["20+","Projects delivered"],["10+","Happy clients"]].map(([v,l]) => (
                <div key={l}><p className="text-4xl font-bold text-accent">{v}</p><p className="text-muted-foreground text-sm mt-0.5">{l}</p></div>
              ))}
            </div>
          </div>

          {/* How I work */}
          <div className="bg-card border border-border rounded-2xl p-7">
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">How I work</p>
            <ul className="space-y-3">
              {values.map((v) => (
                <li key={v} className="flex items-start gap-3 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />{v}
                </li>
              ))}
            </ul>
          </div>

          {/* Availability */}
          <div className="bg-foreground text-background rounded-2xl p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-medium">Available now</span>
              </div>
              <p className="text-2xl font-bold leading-snug">Open to freelance &amp; full-time roles</p>
            </div>
            <Link href="/contact" className="mt-6 text-sm font-semibold underline underline-offset-4 hover:opacity-70 transition-opacity">Get in touch →</Link>
          </div>
        </div>
      </section>

      <div className="border-t border-border" />

      {/* Tools */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">Tools I use daily</p>
        <h2 className="text-3xl font-bold mb-10">The tools I use to bring your ideas to life.</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3">
          {tools.map((t) => (
            <div key={t.name} className="bg-card border border-border rounded-2xl p-5 flex flex-col items-center gap-3 hover:border-accent/40 hover:-translate-y-1 transition-all duration-300">
              <Image src={t.icon} alt={t.name} width={32} height={32} className="object-contain" unoptimized />
              <p className="font-semibold text-sm">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-border" />

      {/* Principles */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">What I stand for</p>
        <h2 className="text-3xl font-bold mb-12">Great work solves problems first,<br />looks beautiful second.</h2>
        <div className="grid sm:grid-cols-3 gap-5">
          {principles.map(({ title, desc }) => (
            <div key={title} className="bg-card border border-border rounded-2xl p-7 hover:border-accent/40 hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Full-width image */}
      <div className="relative w-full h-80 overflow-hidden">
        <Image src="/Chidera.png" alt="Chidera" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-background/30" />
      </div>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-bold mb-4">Want to work together?</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">I&apos;m always open to new projects and collaborations.</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/contact" className="px-6 py-3 bg-foreground text-background text-sm font-semibold rounded-full hover:opacity-80 transition-opacity">Get in touch</Link>
          <Link href="/projects" className="px-6 py-3 border border-border text-sm font-semibold rounded-full hover:bg-muted transition-colors">See my work</Link>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-8 flex justify-between text-sm text-muted-foreground">
          <p>Lagos, Nigeria · <a href="mailto:your@email.com" className="hover:text-foreground transition-colors">your@email.com</a></p>
          <p>© {new Date().getFullYear()} Chidera Anselm Nwogwu</p>
        </div>
      </footer>
    </>
  );
}
