"use client";

interface HeaderNavProps {
  isPlaying: boolean;
  setIsPlaying: (val: boolean) => void;
  scrollToSection: (id: string) => void;
}

export default function HeaderNav({
  isPlaying,
  setIsPlaying,
  scrollToSection,
}: HeaderNavProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-brand-surface/90 backdrop-blur-md border-b border-brand-outline-variant/30 py-3 px-4 md:px-8 transition-all">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-serif text-xl md:text-2xl font-bold tracking-tight text-brand-primary">
            Assyifa & Alfina
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-1 bg-brand-surface-container/60 p-1.5 rounded-full border border-brand-outline-variant/30 text-xs font-medium uppercase tracking-wider text-brand-on-surface-variant">
          {["cover", "couple", "events", "gallery", "rsvp", "gift"].map((sec) => (
            <button
              key={sec}
              onClick={() => scrollToSection(sec)}
              className="px-4 py-1.5 rounded-full hover:bg-brand-surface-container-lowest hover:text-brand-primary transition-all capitalize"
            >
              {sec}
            </button>
          ))}
        </nav>

        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="flex items-center gap-2 bg-brand-primary text-brand-on-primary px-4 py-1.5 rounded-full text-xs tracking-wider uppercase font-semibold hover:bg-brand-primary-container transition-all shadow-sm"
        >
          <span>{isPlaying ? "🔊 AUDIO ON" : "🎵 AUDIO"}</span>
        </button>
      </div>
    </header>
  );
}
