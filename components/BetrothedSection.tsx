"use client";

interface BetrothedSectionProps {
  showToast: (text: string) => void;
}

export default function BetrothedSection({ showToast }: BetrothedSectionProps) {
  return (
    <section id="couple" className="py-20 px-4 sm:px-8 max-w-5xl mx-auto space-y-12">
      <div className="text-center space-y-3">
        <span className="text-xs uppercase tracking-[0.2em] font-bold text-brand-secondary">
          THE BETROTHED
        </span>
        <h2 className="text-3xl sm:text-5xl font-serif text-brand-primary">
          Two Souls, One Path
        </h2>
        <p className="text-sm text-brand-on-surface-variant max-w-lg mx-auto font-light">
          With deep reverence and gratitude toward our families
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-stretch relative">
        {/* Groom Card */}
        <div className="glass-card text-center space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="relative w-36 h-36 mx-auto rounded-full overflow-hidden border-4 border-brand-secondary/30 shadow-md">
              <img
                src="/images/groom.jpg"
                alt="Romeo Montague"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary">
                THE GROOM
              </span>
              <h3 className="text-3xl font-serif text-brand-primary mt-1">
                Romeo Montague
              </h3>
              <p className="text-xs text-brand-on-surface-variant italic mt-1">
                Eldest son of Lord & Lady Montague
              </p>
            </div>
            <p className="text-xs text-brand-on-surface leading-relaxed max-w-xs mx-auto">
              Architect of poetic spaces & historic preservations. Admirer of classical poetry, stargazing, and timeless craftsmanship.
            </p>
          </div>
          <div className="pt-4 border-t border-brand-outline-variant/30">
            <a
              href="#groom-instagram"
              onClick={(e) => {
                e.preventDefault();
                showToast("📱 Opening @romeo.montague Instagram");
              }}
              className="text-xs font-semibold text-brand-secondary tracking-wider uppercase hover:underline inline-flex items-center gap-1"
            >
              📸 @romeo.montague
            </a>
          </div>
        </div>

        {/* Interlocking Rings Divider Icon */}
        <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-brand-surface-container-lowest border-2 border-brand-secondary items-center justify-center text-brand-secondary shadow-raised font-serif text-lg font-bold">
          &
        </div>

        {/* Bride Card */}
        <div className="glass-card text-center space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="relative w-36 h-36 mx-auto rounded-full overflow-hidden border-4 border-brand-secondary/30 shadow-md">
              <img
                src="/images/bride.jpg"
                alt="Juliet Capulet"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary">
                THE BRIDE
              </span>
              <h3 className="text-3xl font-serif text-brand-primary mt-1">
                Juliet Capulet
              </h3>
              <p className="text-xs text-brand-on-surface-variant italic mt-1">
                Beloved daughter of Signor & Signora Capulet
              </p>
            </div>
            <p className="text-xs text-brand-on-surface leading-relaxed max-w-xs mx-auto">
              Botanist, herbal perfumer & landscape curator. Dedicated to organic flora preservation and romantic courtyard designs.
            </p>
          </div>
          <div className="pt-4 border-t border-brand-outline-variant/30">
            <a
              href="#bride-instagram"
              onClick={(e) => {
                e.preventDefault();
                showToast("📱 Opening @juliet.capulet Instagram");
              }}
              className="text-xs font-semibold text-brand-secondary tracking-wider uppercase hover:underline inline-flex items-center gap-1"
            >
              📸 @juliet.capulet
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
