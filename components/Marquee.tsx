const items = ["WordPress", "Full-Stack Dev", "UI/UX Design", "Graphic Design", "Figma", "GoHighLevel", "PHP", "Webflow", "SEO", "Vercel", "Funnel Building", "Web Admin"];
const doubled = [...items, ...items];

export default function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-border py-4 bg-muted/20">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
      <div className="flex gap-10 whitespace-nowrap marquee w-max">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-10 text-sm text-muted-foreground font-medium">
            {item} <span className="text-accent opacity-60">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
