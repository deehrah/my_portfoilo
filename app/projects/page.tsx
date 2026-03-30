import Image from "next/image";
import Link from "next/link";

const featured = [
  { title: "Ninety9", type: "Full-Stack · Web Platform", role: "Full-Stack Developer / Web Admin", tools: ["Modern Web Stack","Typescript","Vercel"], bullets: ["Built and managed full web platform from dev to deployment","Configured hosting, domain, and deployment workflows","Implemented responsive UI and optimized performance"], link: "https://ninety9.ng" },
  { title: "Stay9ja", type: "Full-Stack · Web App", role: "Full-Stack Developer", tools: ["Web Technologies","Backend Integration"], bullets: ["Developed core platform features and user interface","Worked on backend logic and data handling","Focused on usability and scalable structure"], link: "https://stay9ja.com" },
  { title: "Zystio", type: "Full-Stack · Modern Stack", role: "Full-Stack Developer", tools: ["Modern Web Stack"], bullets: ["Built application architecture and frontend components","Integrated backend services and APIs","Ensured performance and responsiveness"], link: "https://zystio-three.vercel.app/" },
  { title: "YCP App", type: "Web App · Database Systems", role: "Developer", tools: ["Web App","Database Systems"], bullets: ["Developing a membership and management system","Handles registration, attendance, and member tracking","Designing secure database and structured workflows"], link: "" },
];

const web = [
  { title: "PilotNovo", role: "Web Designer & Funnel Specialist", tools: ["WordPress","GoHighLevel","Figma"], bullets: ["Designed high-converting landing pages and funnels","Optimized user journey for improved lead conversion"], link: "https://pilotnovo.com" },
  { title: "BookRight", role: "WordPress Developer", tools: ["WordPress","PHP","Plugins"], bullets: ["Developed and maintained a booking-based website","Configured plugins for scheduling"], link: "https://bookright.ng" },
  { title: "ChurchGist", role: "WordPress Administrator", tools: ["WordPress","cPanel","SEO"], bullets: ["Managed website content and backend operations","Optimized site performance and page load speed"], link: "https://churchgist.org" },
  { title: "Mia's Nirvana", role: "Web Designer / Developer", tools: ["WordPress","CSS","Figma"], bullets: ["Designed website UI for brand identity","Implemented responsive design across devices"], link: "https://miasnirvana.com/" },
  { title: "Digital Abundance", role: "Web Designer", tools: ["Webflow","Figma"], bullets: ["Built modern responsive website using Webflow","Focused on clean UI/UX and visual storytelling"], link: "https://digitalabundance.webflow.io/" },
  { title: "True North Security", role: "WordPress Developer", tools: ["WordPress","PHP","Hosting"], bullets: ["Developed and deployed company website","Configured hosting, domain, and DNS settings"], link: "https://truenorthsecurityservices.ca/" },
  { title: "Moonstory", role: "Web Developer", tools: ["WordPress","CSS","JavaScript"], bullets: ["Built and customized website components","Enhanced UI responsiveness and interactivity"], link: "https://moonstory.ca/" },
];

const flyerClients = ["Frenchwink","Ninety9","Daba School","Teen Bootcamp","Unusual Praise","Mr Speed Logistics","Diamond Hairs","Bebe Foodie","Daba Studios"];

const ui = [
  { title: "Daba Merch Website", desc: "E-commerce UI with clean product layouts." },
  { title: "CryptoLife Capital", desc: "Finance platform with data-driven dashboards." },
  { title: "CryptoHub", desc: "Crypto tracking app with visualization components." },
  { title: "Daba Mobile App", desc: "Mobile-first UI with intuitive navigation." },
];

function Tag({ label }: { label: string }) {
  return <span className="text-xs border border-border text-muted-foreground px-2.5 py-1 rounded-full">{label}</span>;
}

export default function Projects() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-6 pt-36 pb-12">
        <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">Work</p>
        <h1 className="text-5xl font-bold leading-tight max-w-2xl">Projects built on strategy, finished with craft.</h1>
      </section>

      <div className="border-t border-border" />

      {/* Featured */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-xs text-muted-foreground uppercase tracking-widest mb-8">Full-Stack Projects</p>
        <div className="grid sm:grid-cols-2 gap-5">
          {featured.map((p) => (
            <div key={p.title} className="bg-card border border-border rounded-2xl overflow-hidden group hover:border-accent/40 hover:-translate-y-1 transition-all duration-300">
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-lg">{p.title}</h3>
                    <p className="text-muted-foreground text-sm">{p.type}</p>
                  </div>
                  {p.link && <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-xs px-3 py-1.5 rounded-full border border-border hover:bg-foreground hover:text-background transition-colors">Live ↗</a>}
                </div>
                <ul className="space-y-1.5 mb-4">
                  {p.bullets.map((b) => <li key={b} className="text-muted-foreground text-sm flex gap-2"><span className="opacity-40 shrink-0">–</span>{b}</li>)}
                </ul>
                <div className="flex flex-wrap gap-2">{p.tools.map((t) => <Tag key={t} label={t} />)}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-border" />

      {/* Web */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-xs text-muted-foreground uppercase tracking-widest mb-8">Web Development</p>
        <div className="divide-y divide-border">
          {web.map((p) => (
            <div key={p.title} className="py-6 flex flex-col sm:flex-row sm:items-start gap-4 hover:bg-muted/20 -mx-4 px-4 rounded-xl transition-colors">
              <div className="sm:w-52 shrink-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold">{p.title}</h3>
                  {p.link && <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent text-xs transition-colors">↗</a>}
                </div>
                <p className="text-muted-foreground text-sm mt-0.5">{p.role}</p>
              </div>
              <div className="flex-1">
                {p.bullets.map((b) => <p key={b} className="text-muted-foreground text-sm flex gap-2"><span className="opacity-40">–</span>{b}</p>)}
              </div>
              <div className="flex flex-wrap gap-2 sm:justify-end shrink-0">{p.tools.map((t) => <Tag key={t} label={t} />)}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-border" />

      {/* Flyers */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">Graphic Design</p>
        <h2 className="text-2xl font-bold mb-2">Event &amp; Marketing Flyers</h2>
        <p className="text-muted-foreground text-sm mb-8">High-quality promotional flyers and social media assets tailored to each brand.</p>
        <div className="flex flex-wrap gap-3 mb-10">
          {flyerClients.map((c) => <span key={c} className="px-4 py-2 rounded-full border border-border text-sm text-foreground hover:border-accent/40 transition-colors">{c}</span>)}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="relative aspect-[3/4] rounded-xl overflow-hidden group">
              <Image src={`/flyers/Objects-${i}.png`} alt={`Flyer ${i}`} fill sizes="33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-border" />

      {/* UI/UX */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">UI/UX Design</p>
        <h2 className="text-2xl font-bold mb-2">Product Mockups</h2>
        <p className="text-muted-foreground text-sm mb-8">Modern interfaces built in Figma — wireframes, high-fidelity mockups, and prototypes.</p>
        <div className="grid sm:grid-cols-2 gap-5">
          {ui.map(({ title, desc }) => (
            <div key={title} className="bg-card border border-border rounded-2xl overflow-hidden group hover:border-accent/40 hover:-translate-y-1 transition-all duration-300">
              <div className="p-5">
                <h3 className="font-semibold mb-1">{title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{desc}</p>
                <Tag label="Figma" />
              </div>
            </div>
          ))}
        </div>
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
