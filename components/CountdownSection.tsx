"use client";

import { useEffect, useState } from "react";

interface CountdownSectionProps {
  showToast: (text: string) => void;
}

export default function CountdownSection({ showToast }: CountdownSectionProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 248,
    hours: 14,
    minutes: 36,
    seconds: 42,
  });

  useEffect(() => {
    const targetDate = new Date("2025-09-20T15:00:00+02:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="countdown" className="py-20 px-4 sm:px-8 max-w-4xl mx-auto text-center space-y-10">
      <div className="space-y-3">
        <span className="inline-block px-4 py-1 rounded-full bg-brand-secondary-container text-brand-on-secondary-container text-xs font-bold uppercase tracking-widest">
          SAVE OUR SACRED DATE
        </span>
        <h2 className="text-3xl sm:text-5xl font-serif text-brand-primary">
          Countdown to Forever
        </h2>
        <p className="text-sm sm:text-base text-brand-on-surface-variant max-w-xl mx-auto font-light leading-relaxed">
          Under the golden Italian sky, we vow our lives to each other. We are overjoyed to share this sacred milestone with our dearest companions.
        </p>
      </div>

      {/* Live Countdown Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
        {[
          { label: "DAYS", value: timeLeft.days },
          { label: "HOURS", value: timeLeft.hours },
          { label: "MINUTES", value: timeLeft.minutes },
          { label: "SECONDS", value: timeLeft.seconds },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-brand-surface-container-lowest p-6 rounded-xl border border-brand-outline-variant/30 shadow-paper flex flex-col items-center justify-center space-y-1"
          >
            <span className="font-serif text-4xl sm:text-5xl font-semibold text-brand-primary">
              {String(item.value).padStart(2, "0")}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-brand-secondary font-bold">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Add to Calendar buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
        <button
          onClick={() => showToast("📅 Calendar event added!")}
          className="btn-secondary text-xs uppercase tracking-wider font-semibold flex items-center gap-2"
        >
          📅 Add to Google Calendar
        </button>
        <button
          onClick={() => showToast("📅 iCal file downloaded!")}
          className="btn-secondary text-xs uppercase tracking-wider font-semibold flex items-center gap-2"
        >
          📅 Add to Apple / iCal
        </button>
      </div>
    </section>
  );
}
