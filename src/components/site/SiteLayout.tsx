import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="bg-primary text-primary-foreground border-b-4 border-gold">
      <div className="container-narrow py-12 md:py-16">
        <div className="text-xs uppercase tracking-[0.2em] text-gold mb-3">J.B. Hagjer Degree College</div>
        <h1 className="font-serif text-4xl md:text-5xl font-bold">{title}</h1>
        {subtitle && <p className="mt-3 max-w-2xl text-sm md:text-base opacity-80">{subtitle}</p>}
      </div>
    </div>
  );
}
