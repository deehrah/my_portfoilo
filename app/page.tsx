import Link from "next/link";
import Image from "next/image";
import Marquee from "@/components/Marquee";

const projects = [
  { title: "Ninety9", type: "Full-Stack · Web Platform", href: "https://ninety9.ng", img: "/projects/ninety9.png" },
  { title: "Stay9ja", type: "Full-Stack · Web App", href: "https://stay9ja.com", img: "/projects/Stay9ja.png" },
  { title: "Zystio", type: "Full-Stack · Modern Stack", href: "https://zystio-three.vercel.app/", img: "/projects/zystio.png" },
  { title: "Daba Merch", type: "UI/UX · E-commerce", href: "/projects", img: "/projects/daba merch.png" },
];

const steps = [
  { n: "01", title: "Discovery call", desc: "A 30-minute conversation about your project and goals. No commitments." },
  { n: "02", title: "Action plan", desc: "Detailed scope, timeline, and pricing within 48 hours. No guesswork." },
  { n: "03", title: "Start building", desc: "Once aligned, I get to work immediately. First results within a week." },
];

const testimonials = [
  { q: "Chidera completely transformed how our brand shows up online. Inbound leads doubled within a month.", name: "Sarah Chen", role: "Founder at Oliva" },
  { q: "Our site was a mess. Chidera redesigned the entire experience and task completion jumped significantly.", name: "Marcus Webb", role: "Head of Product at Kael" },
  { q: "Needed a brand and website in 5 weeks before our funding round. Delivered on time, on brief.", name: "Lina Torres", role: "CEO at Sona" },
  { q: "First project was a WordPress site. Two years later, Chidera is still my first call for anything web.", name: "David Park", role: "Creative Director" },
  { q: "Challenged our assumptions, simplified the flow, and shipped a site our team actually enjoys managing.", name: "Nina Alvarez", role: "Founder at Flux" },
  { q: "Detail-oriented, fast, communicates clearly. Understood our vision immediately.", name: "James Okafor", role: "Product Lead at Prism" },
];

const faqs = [
  { q: "What's your process?", a: "Discovery call → scope & timeline → iterative build with regular check-ins." },
  { q: "Do you work with WordPress?", a: "Yes — theme customization, plugins, performance, security, and maintenance." },
  { q: "Can you handle design and development?", a: "Yes. Figma mockups through to frontend and backend. One person, end-to-end." },
  { q: "Do you work with startups?", a: "Yes. I'm comfortable with limited resources and tight timelines." },
  { q: "What do I need before we start?", a: "Just a rough idea. I'll help shape the rest." },
  { q: "Can you work with my team?", a: "Yes. I adapt to your workflow and tools." },
];

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">{children}</p>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero — with radial glow */}
      <section className="relative max-w-4xl mx-auto px-6 pt-40 pb-20 text-center overflow-hidden">
        {/* Glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(124,106,247,0.15) 0%, transparent 70%)",
          }}
        />
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border text-sm text-muted-foreground mb-8 fade-up-1">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Web Developer &amp; Designer · Available for projects
        </div>
        <h1 className="text-5xl sm:text-7xl font-bold leading-[1.05] tracking-tight mb-6 fade-up-2">
          Web &amp; design that makes people{" "}
          <span className="text-muted-foreground">trust and buy</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed mb-10 fade-up-3">
          Helping businesses stand out through clean web development and thoughtful design — from WordPress to full-stack platforms.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 fade-up-4">
          <Link href="/projects" className="px-6 py-3 bg-foreground text-background text-sm font-semibold rounded-full hover:opacity-80 transition-opacity">
            View my work
          </Link>
          <Link href="/contact" className="px-6 py-3 border border-border text-foreground text-sm font-semibold rounded-full hover:bg-muted transition-colors">
            Let&apos;s talk
          </Link>
        </div>
      </section>

      <Marquee />

      {/* Projects — taller images */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <Label>Selected projects</Label>
        <h2 className="text-3xl font-bold mb-12">Projects built on strategy,<br />finished with craft.</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {projects.map((p) => (
            <a key={p.title} href={p.href}
              target={p.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group block bg-card border border-border rounded-2xl overflow-hidden hover:border-accent/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/5 transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <Image src={p.img} alt={p.title} fill sizes="(max-width:768px) 100vw,50vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
              </div>
              <div className="p-5 flex items-center justify-between">
                <div>
                  <p className="font-semibold">{p.title}</p>
                  <p className="text-muted-foreground text-sm mt-0.5">{p.type}</p>
                </div>
                <span className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all">→</span>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors">
            View all projects
          </Link>
        </div>
      </section>

      <div className="border-t border-border" />

      {/* About */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid sm:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
          <Image src="/Chidera.png" alt="Chidera" fill sizes="(max-width:768px)100vw,50vw" className="object-cover" />
        </div>
        <div>
          <Label>About</Label>
          <h2 className="text-3xl font-bold mb-5">Hi, I am Chidera Anselm Nwogwu</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Detail-oriented Web Administrator with 4+ years of experience managing WordPress websites, building full-stack platforms, and crafting visual identities.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Skilled in PHP customization, performance optimization, and visual design. I work independently and meet deadlines in fast-paced environments.
          </p>
          <div className="grid grid-cols-3 gap-6 mb-8">
            {[["4+","Years exp."],["20+","Projects"],["10+","Clients"]].map(([v,l]) => (
              <div key={l}>
                <p className="text-3xl font-bold text-accent">{v}</p>
                <p className="text-muted-foreground text-sm mt-1">{l}</p>
              </div>
            ))}
          </div>
          <Link href="/about" className="text-sm font-medium underline underline-offset-4 hover:text-accent transition-colors">
            More about me →
          </Link>
        </div>
      </section>

      <div className="border-t border-border" />

      {/* How it works */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <Label>How it works</Label>
        <h2 className="text-3xl font-bold mb-14">Three steps to your next big project.</h2>
        <div className="grid sm:grid-cols-3 gap-5">
          {steps.map(({ n, title, desc }) => (
            <div key={n} className="bg-card border border-border rounded-2xl p-7 hover:border-accent/40 hover:-translate-y-1 transition-all duration-300">
              <p className="text-5xl font-bold text-accent/20 mb-5 select-none">{n}</p>
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-border" />

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 mb-10">
          <Label>Kind words</Label>
          <h2 className="text-3xl font-bold">Words from people I&apos;ve worked with.</h2>
        </div>
        <div className="max-w-6xl mx-auto px-6 flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory" style={{ scrollbarWidth: "none" }}>
          {testimonials.map(({ q, name, role }) => (
            <div key={name} className="snap-start shrink-0 w-80 sm:w-96 bg-card border border-border rounded-2xl p-7 flex flex-col gap-5 hover:border-accent/30 transition-colors">
              <p className="text-foreground/80 text-sm leading-relaxed flex-1">&ldquo;{q}&rdquo;</p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-sm">{name}</p>
                <p className="text-muted-foreground text-xs mt-0.5">{role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-border" />

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <Label>FAQ</Label>
        <h2 className="text-3xl font-bold mb-10">Common questions.</h2>
        <div className="divide-y divide-border">
          {faqs.map(({ q, a }) => (
            <details key={q} className="group py-5 cursor-pointer">
              <summary className="flex items-center justify-between font-medium list-none">
                {q}
                <span className="text-muted-foreground group-open:rotate-45 transition-transform duration-200 text-xl leading-none shrink-0 ml-4">+</span>
              </summary>
              <p className="text-muted-foreground text-sm leading-relaxed mt-3">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <div className="border-t border-border" />

      {/* CTA */}
      <section className="relative max-w-4xl mx-auto px-6 py-24 text-center overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 50% 60% at 50% 100%, rgba(124,106,247,0.12) 0%, transparent 70%)" }}
        />
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border text-sm text-muted-foreground mb-6">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for freelance projects
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
          Have a project in mind?<br />Let&apos;s make it real.
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Helping businesses stand out through clean web development and thoughtful design.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/contact" className="px-6 py-3 bg-foreground text-background text-sm font-semibold rounded-full hover:opacity-80 transition-opacity">
            Get in touch
          </Link>
          <Link href="/projects" className="px-6 py-3 border border-border text-sm font-semibold rounded-full hover:bg-muted transition-colors">
            See my work
          </Link>
        </div>
      </section>

      {/* Footer — proper with social links */}
      <footer className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col sm:flex-row justify-between gap-10">
            {/* Brand */}
            <div className="space-y-3 max-w-xs">
              <p className="font-semibold text-foreground">Chidera Anselm Nwogwu</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Web Developer, WordPress Expert &amp; Graphic Designer based in Lagos, Nigeria.
              </p>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <span className="text-muted-foreground">Available for freelance &amp; full-time</span>
              </div>
            </div>

            {/* Nav */}
            <div className="flex gap-16 text-sm">
              <div className="space-y-3">
                <p className="text-xs font-semibold text-accent uppercase tracking-widest">Pages</p>
                {[["Home","/"],["Work","/projects"],["About","/about"],["Contact","/contact"]].map(([l,h]) => (
                  <div key={h}><Link href={h} className="text-muted-foreground hover:text-foreground transition-colors">{l}</Link></div>
                ))}
              </div>
              <div className="space-y-3">
                <p className="text-xs font-semibold text-accent uppercase tracking-widest">Socials</p>
                <div><a href="mailto:nwogwuchideraanselm@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">Email</a></div>
                <div><a href="https://github.com/deehrah" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">GitHub</a></div>
                <div><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a></div>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-10 pt-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} Chidera Anselm Nwogwu. All rights reserved.</p>
            <a href="mailto:nwogwuchideraanselm@gmail.com" className="hover:text-foreground transition-colors">
              nwogwuchideraanselm@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
