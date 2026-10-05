"use client";

interface HeroCoverProps {
  guestName: string;
  scrollToSection: (id: string) => void;
  onOpen: () => void;
}

export default function HeroCover({ guestName, scrollToSection, onOpen }: HeroCoverProps) {
  return (
    <section
      id="cover"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden"
    >
      {/* Background Dark Green Texture with Curved Framing */}
      <div className="absolute inset-0 bg-[#344436] text-white">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(197, 168, 128, 0.4) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute -top-32 -left-32 w-96 h-96 border border-brand-secondary/20 rounded-full" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 border border-brand-secondary/20 rounded-full" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-xl w-full text-center space-y-8 py-10 px-6 sm:px-10 rounded-2xl bg-brand-primary/40 backdrop-blur-md border border-brand-secondary/40 shadow-2xl">
        {/* Monogram Seal */}
        <div className="mx-auto w-20 h-20 rounded-full border-2 border-brand-secondary-container flex items-center justify-center bg-[#2d3a2e] shadow-lg">
          <span className="font-serif text-2xl text-brand-secondary-container tracking-widest font-bold">
            A&A
          </span>
        </div>

        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-secondary-container font-semibold">
            The Wedding Celebration
          </p>
          <h1 className="text-4xl sm:text-6xl font-serif text-white tracking-tight leading-tight">
            Assyifa Sayyidina Ali & Alfina Suci Cahya
          </h1>
          <p className="text-sm font-light italic text-emerald-100/80">
            Together with their families request the honor of your presence
          </p>
        </div>

        {/* Invitation Card box */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-white space-y-3 shadow-inner">
          <span className="text-[10px] uppercase tracking-widest text-brand-secondary-container font-bold block">
            Personal Invitation
          </span>
          <p className="text-xs text-emerald-100">Cordially Requesting the Presence Of</p>
          <h3 className="text-2xl font-serif font-medium text-amber-100 tracking-wide">
            {guestName}
          </h3>
        </div>

        <div className="pt-2">
          <button
            onClick={() => { onOpen(); scrollToSection('countdown'); }}
            className="inline-flex items-center gap-2 bg-brand-secondary hover:bg-brand-on-secondary-container text-white px-8 py-3.5 rounded-full text-sm font-semibold tracking-wider uppercase transition-all transform hover:scale-105 shadow-raised"
          >
            ✉ Open Invitation
          </button>
        </div>

        <p className="text-xs tracking-widest uppercase text-emerald-100/70 pt-4 border-t border-white/10">
          Saturday, September 20, 2028 • Kranggan, Indonesia
        </p>
      </div>
    </section>
  );
}
