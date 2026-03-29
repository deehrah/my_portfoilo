const featuredProjects = [
  {
    title: "Ninety9",
    type: "Full-Stack · Web Platform",
    role: "Full-Stack Developer / Web Administrator",
    tools: ["WordPress", "PHP", "Vercel"],
    bullets: [
      "Built and managed a full web platform from development to deployment",
      "Configured hosting, domain, and deployment workflows",
      "Implemented responsive UI and optimized performance",
    ],
    link: "#",
  },
  {
    title: "Stay9ja",
    type: "Full-Stack · Web App",
    role: "Full-Stack Developer",
    tools: ["Web Technologies", "Backend Integration"],
    bullets: [
      "Developed core platform features and user interface",
      "Worked on backend logic and data handling",
      "Focused on usability and scalable structure",
    ],
    link: "#",
  },
  {
    title: "Zystio",
    type: "Full-Stack · Modern Web Stack",
    role: "Full-Stack Developer",
    tools: ["Modern Web Stack"],
    bullets: [
      "Built application architecture and frontend components",
      "Integrated backend services and APIs",
      "Ensured performance and responsiveness",
    ],
    link: "#",
  },
  {
    title: "Young Catholic Professionals App",
    type: "Web App · Database Systems",
    role: "Developer",
    tools: ["Web App", "Database Systems"],
    bullets: [
      "Developing a membership and management system",
      "Handles registration, attendance, and member tracking",
      "Designing secure database and structured workflows",
    ],
    link: "#",
  },
];

const webProjects = [
  { title: "PilotNovo", role: "Web Designer & Funnel Specialist", tools: ["WordPress", "GoHighLevel", "Figma"], bullets: ["Designed and built high-converting landing pages and funnels", "Optimized user journey for improved lead conversion"] },
  { title: "BookRight", role: "WordPress Developer", tools: ["WordPress", "PHP", "Plugins"], bullets: ["Developed and maintained a booking-based website", "Configured plugins and customized features for scheduling"] },
  { title: "ChurchGist", role: "WordPress Administrator", tools: ["WordPress", "cPanel", "SEO Tools"], bullets: ["Managed website content and backend operations", "Optimized site performance and page load speed"] },
  { title: "Mia's Nirvana", role: "Web Designer / Developer", tools: ["WordPress", "CSS", "Figma"], bullets: ["Designed and customized website UI for brand identity", "Implemented responsive design across devices"] },
  { title: "Digital Abundance", role: "Web Designer", tools: ["Webflow", "Figma"], bullets: ["Built a modern, responsive website using Webflow", "Focused on clean UI/UX and visual storytelling"] },
  { title: "True North Security Services", role: "WordPress Developer", tools: ["WordPress", "PHP", "Hosting"], bullets: ["Developed and deployed company website", "Configured hosting, domain, and DNS settings"] },
  { title: "Moonstory", role: "Web Developer", tools: ["WordPress", "CSS", "JavaScript"], bullets: ["Built and customized website components", "Enhanced UI responsiveness and interactivity"] },
];

const flyerClients = [
  "Frenchwink", "Ninety9", "Daba School", "Teen Bootcamp",
  "Unusual Praise", "Mr Speed Logistics", "Diamond Hairs",
  "Bebe Foodie", "Daba Studios",
];

const uiProjects = [
  { title: "Daba Merch Website", desc: "E-commerce UI with clean product layouts and brand-focused design." },
  { title: "CryptoLife Capital", desc: "Finance platform UI with data-driven dashboards and modern aesthetics." },
  { title: "CryptoHub", desc: "Crypto tracking app with real-time data visualization components." },
  { title: "Daba Mobile App", desc: "Mobile-first UI with intuitive navigation and consistent design system." },
];

function Tag({ label }: { label: string }) {
  return (
    <span className="text-xs border border-white/10 text-neutral-400 px-2.5 py-1 rounded-full">
      {label}
    </span>
  );
}

export default function Projects() {
  return (
    <>
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 pt-40 pb-16 border-b border-white/5">
        <p className="text-xs text-neutral-500 uppercase tracking-widest mb-4">Work</p>
        <h1 className="text-5xl font-bold text-white leading-tight max-w-2xl">
          Projects built on strategy, finished with craft.
        </h1>
      </section>

      {/* Featured Full-Stack */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-b border-white/5">
        <p className="text-xs text-neutral-500 uppercase tracking-widest mb-10">Full-Stack Projects</p>
        <div className="grid sm:grid-cols-2 gap-6">
          {featuredProjects.map((p) => (
            <div key={p.title} className="bg-neutral-900 border border-white/5 rounded-2xl overflow-hidden hover:border-white/15 transition-all group">
              {/* Cover placeholder — replace with real screenshot */}
              <div className="h-48 bg-neutral-800 flex items-center justify-center border-b border-white/5">
                <span className="text-neutral-600 text-sm">Screenshot — {p.title}</span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-white font-semibold text-lg">{p.title}</h3>
                    <p className="text-neutral-500 text-sm">{p.type}</p>
                  </div>
                  {p.link !== "#" && (
                    <a href={p.link} target="_blank" rel="noopener noreferrer"
                      className="text-neutral-600 group-hover:text-white transition-colors text-lg">→</a>
                  )}
                </div>
                <ul className="space-y-1 mb-4">
                  {p.bullets.map((b) => (
                    <li key={b} className="text-neutral-400 text-sm flex gap-2">
                      <span className="text-neutral-600 mt-0.5">–</span>{b}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {p.tools.map((t) => <Tag key={t} label={t} />)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Web Development */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-b border-white/5">
        <p className="text-xs text-neutral-500 uppercase tracking-widest mb-10">Web Development</p>
        <div className="divide-y divide-white/5">
          {webProjects.map((p) => (
            <div key={p.title} className="py-6 flex flex-col sm:flex-row sm:items-start gap-4 hover:bg-white/[0.02] -mx-4 px-4 rounded-xl transition-colors">
              <div className="sm:w-48 shrink-0">
                <h3 className="text-white font-semibold">{p.title}</h3>
                <p className="text-neutral-500 text-sm mt-0.5">{p.role}</p>
              </div>
              <div className="flex-1">
                <ul className="space-y-1">
                  {p.bullets.map((b) => (
                    <li key={b} className="text-neutral-400 text-sm flex gap-2">
                      <span className="text-neutral-600">–</span>{b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 sm:justify-end">
                {p.tools.map((t) => <Tag key={t} label={t} />)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Graphic Design — Flyers */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-b border-white/5">
        <p className="text-xs text-neutral-500 uppercase tracking-widest mb-4">Graphic Design</p>
        <h2 className="text-2xl font-bold text-white mb-2">Event & Marketing Flyers</h2>
        <p className="text-neutral-400 text-sm mb-10">
          High-quality promotional flyers and social media assets tailored to each brand.
        </p>

        {/* Client grid */}
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-10">
          {flyerClients.map((client) => (
            <div key={client}
              className="bg-neutral-900 border border-white/5 rounded-xl px-3 py-3 text-sm text-neutral-300 text-center hover:border-white/20 transition-colors">
              {client}
            </div>
          ))}
        </div>

        {/* Gallery placeholder grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="aspect-[3/4] bg-neutral-900 border border-dashed border-white/10 rounded-xl flex items-center justify-center">
              <span className="text-neutral-700 text-xs text-center px-4">
                Add flyer image to<br /><code>public/flyers/flyer-{i + 1}.jpg</code>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* UI/UX Design */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-xs text-neutral-500 uppercase tracking-widest mb-4">UI/UX Design</p>
        <h2 className="text-2xl font-bold text-white mb-2">Product Mockups</h2>
        <p className="text-neutral-400 text-sm mb-10">
          Modern interfaces built in Figma — wireframes, high-fidelity mockups, and prototypes.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {uiProjects.map(({ title, desc }) => (
            <div key={title} className="bg-neutral-900 border border-white/5 rounded-2xl overflow-hidden hover:border-white/15 transition-all">
              {/* Mockup screenshot placeholder */}
              <div className="h-48 bg-neutral-800 flex items-center justify-center border-b border-white/5">
                <span className="text-neutral-600 text-sm">Mockup — {title}</span>
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold mb-1">{title}</h3>
                <p className="text-neutral-400 text-sm mb-3">{desc}</p>
                <Tag label="Figma" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 max-w-6xl mx-auto px-6 py-10 mt-10">
        <div className="flex flex-col sm:flex-row justify-between gap-6 text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} Chidera Anselm Nwogwu</p>
          <a href="mailto:your@email.com" className="hover:text-white transition-colors">your@email.com</a>
        </div>
      </footer>
    </>
  );
}
