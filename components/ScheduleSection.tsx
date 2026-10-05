"use client";

interface ScheduleSectionProps {
  copyToClipboard: (text: string, label: string) => void;
  showToast: (text: string) => void;
}

export default function ScheduleSection({
  copyToClipboard,
  showToast,
}: ScheduleSectionProps) {
  return (
    <section id="events" className="py-20 px-4 sm:px-8 max-w-5xl mx-auto space-y-12">
      <div className="text-center space-y-3">
        <span className="text-xs uppercase tracking-[0.2em] font-bold text-brand-secondary">
          ITINERARY OF JOY
        </span>
        <h2 className="text-3xl sm:text-5xl font-serif text-brand-primary">
          Celebration Schedule
        </h2>
        <p className="text-xs sm:text-sm text-brand-on-surface-variant font-medium">
          Saturday, September 20, 2025 • Villa di Giardino, Verona
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Event 1 Card */}
        <div className="glass-card space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-brand-outline-variant/30 pb-4">
              <span className="px-3 py-1 rounded-full bg-brand-primary-container text-white text-[10px] font-bold uppercase tracking-widest">
                Part I
              </span>
              <span className="text-xs font-semibold text-brand-secondary">
                15:00 – 16:30 CEST
              </span>
            </div>
            <h3 className="text-2xl font-serif text-brand-primary">
              Holy Matrimony Blessing
            </h3>
            <p className="text-xs text-brand-on-surface-variant leading-relaxed">
              Exchange of vows and blessing ceremony in the Open Conservatory surrounded by olive trees, strings quintet, and white rose floral wreaths.
            </p>

            <div className="bg-brand-surface-container-low p-4 rounded-lg text-xs space-y-2 border border-brand-outline-variant/20">
              <div className="font-semibold text-brand-primary flex items-start gap-2">
                <span>📍</span>
                <span>The Glasshouse Chapel, Via delle Rose 14, 37129 Verona VR, Italy</span>
              </div>
              <div className="text-brand-on-surface-variant italic flex items-center gap-2">
                <span>👔</span>
                <span>Formal White • Soft Sage & Earth Tones Preferred</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-4 border-t border-brand-outline-variant/30">
            <button
              onClick={() =>
                copyToClipboard(
                  "Via delle Rose 14, 37129 Verona VR, Italy",
                  "Glasshouse Chapel Address"
                )
              }
              className="btn-secondary text-[11px] py-2 px-4 uppercase font-semibold flex-1 text-center"
            >
              🗺️ View Location
            </button>
            <button
              onClick={() => showToast("📅 Ceremony added to your schedule")}
              className="btn-primary text-[11px] py-2 px-4 uppercase font-semibold"
            >
              📅 Calendar
            </button>
          </div>
        </div>

        {/* Event 2 Card */}
        <div className="glass-card space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-brand-outline-variant/30 pb-4">
              <span className="px-3 py-1 rounded-full bg-brand-secondary-container text-brand-on-secondary-container text-[10px] font-bold uppercase tracking-widest">
                Part II
              </span>
              <span className="text-xs font-semibold text-brand-secondary">
                18:30 – Late
              </span>
            </div>
            <h3 className="text-2xl font-serif text-brand-primary">
              Grand Evening Soirée
            </h3>
            <p className="text-xs text-brand-on-surface-variant leading-relaxed">
              Curated four-course Northern Italian dinner, prosecco toasts, cutting of the cake, followed by live jazz and dancing beneath the starlight.
            </p>

            <div className="bg-brand-surface-container-low p-4 rounded-lg text-xs space-y-2 border border-brand-outline-variant/20">
              <div className="font-semibold text-brand-primary flex items-start gap-2">
                <span>📍</span>
                <span>The Grand Courtyard & Pavilion, Villa di Giardino, Verona</span>
              </div>
              <div className="text-brand-on-surface-variant italic flex items-center gap-2">
                <span>🍽️</span>
                <span>Plated Dinner with Wine Pairing Included</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-4 border-t border-brand-outline-variant/30">
            <button
              onClick={() =>
                copyToClipboard(
                  "Villa di Giardino, 37129 Verona VR, Italy",
                  "Pavilion Address"
                )
              }
              className="btn-secondary text-[11px] py-2 px-4 uppercase font-semibold flex-1 text-center"
            >
              🗺️ View Location
            </button>
            <button
              onClick={() => showToast("📅 Soirée added to your schedule")}
              className="btn-primary text-[11px] py-2 px-4 uppercase font-semibold"
            >
              📅 Calendar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
