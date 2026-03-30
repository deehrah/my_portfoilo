"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const path = usePathname();
  const link = (href: string, label: string) => (
    <Link href={href} className={`text-sm transition-colors ${path === href ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"}`}>
      {label}
    </Link>
  );
  return (
    <nav className="fixed top-0 inset-x-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-border">
            <Image src="/Chidera.png" alt="Chidera" width={32} height={32} className="object-cover" />
          </div>
          <div className="leading-tight hidden sm:block">
            <p className="text-sm font-semibold text-foreground">Chidera Anselm</p>
            <p className="text-xs text-muted-foreground">Lagos · WAT</p>
          </div>
        </Link>
        <div className="flex items-center gap-7">
          {link("/projects", "Projects")}
          {link("/about", "About")}
          {link("/contact", "Contact")}
        </div>
        <Link href="/contact" className="shrink-0 flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-foreground text-background hover:opacity-80 transition-opacity">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
          Let&apos;s talk
        </Link>
      </div>
    </nav>
  );
}
