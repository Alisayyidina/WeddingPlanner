"use client";

import { useState } from "react";

interface GiftSectionProps {
  showToast: (text: string) => void;
}

const giftRegistry = [
  { platform: "Amazon", link: "#amazon", logo: "🛒" },
  { platform: "Registry.com", link: "#registry", logo: "🎁" },
  { platform: "Cash Fund", link: "#cash", logo: "✈️" },
];

export default function GiftSection({ showToast }: GiftSectionProps) {
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");

  const handleGiftSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount) {
      showToast("⚠️ Please enter amount");
      return;
    }
    showToast("💰 Gift contribution recorded! Thank you.");
  };

  return (
    <section id="gift" className="py-20 px-4 sm:px-8 max-w-5xl mx-auto space-y-12">
      <div className="text-center space-y-3">
        <span className="text-xs uppercase tracking-[0.2em] font-bold text-brand-secondary">
          GIFT REGISTRY
        </span>
        <h2 className="text-3xl sm:text-5xl font-serif text-brand-primary">
          Your Presence Is Enough
        </h2>
        <p className="text-xs sm:text-sm text-brand-on-surface-variant font-light max-w-lg mx-auto">
          If you wish to contribute to our future home, any gift is deeply appreciated
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="glass-card space-y-4 p-6">
          <div className="text-center space-y-2">
            <span className="text-5xl">🧧</span>
            <p className="text-sm text-brand-on-surface-variant italic">
              Cash gifts may be placed in the ornate box at the reception
            </p>
          </div>

          <form onSubmit={handleGiftSubmit} className="space-y-4 pt-4">
            <div>
              <label className="block text-xs uppercase font-bold tracking-wider text-brand-primary mb-1">
                Contribution Amount (USD)
              </label>
              <input
                type="number"
                min="1"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="e.g. 250"
                className="w-full px-4 py-2.5 rounded-lg bg-brand-surface-container-low border border-brand-outline-variant/50 text-sm focus:outline-none focus:border-brand-primary"
              />
            </div>
            <div>
              <label className="block text-xs uppercase font-bold tracking-wider text-brand-primary mb-1">
                Personal Note (Optional)
              </label>
              <textarea
                rows={2}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Write your warm wishes..."
                className="w-full px-4 py-2.5 rounded-lg bg-brand-surface-container-low border border-brand-outline-variant/50 text-sm focus:outline-none focus:border-brand-primary resize-none"
              />
            </div>
            <button type="submit" className="btn-primary w-full py-2 text-xs uppercase tracking-wider">
              Submit Contribution
            </button>
          </form>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-serif text-brand-primary border-b border-brand-outline-variant/30 pb-2">
            Preferred registries
          </h3>
          <div className="space-y-3">
            {giftRegistry.map((item) => (
              <a
                key={item.platform}
                href={item.link}
                onClick={(e) => {
                  e.preventDefault();
                  showToast(`📦 Opening ${item.platform} registry...`);
                }}
                className="flex items-center gap-4 p-4 rounded-xl bg-brand-surface-container-lowest border border-brand-outline-variant/30 hover:border-brand-secondary/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-brand-secondary-container text-brand-on-secondary-container flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                  {item.logo}
                </div>
                <span className="text-sm font-semibold text-brand-primary">{item.platform}</span>
                <span className="ml-auto text-xs text-brand-secondary font-bold uppercase tracking-wider">Visit →</span>
              </a>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-brand-primary text-white text-center space-y-2">
            <p className="text-xs font-semibold uppercase tracking-widest">Bank Transfer</p>
            <p className="text-sm italic">Account: Romeo & Juliet Wedding Fund</p>
            <p className="text-xs font-mono mt-2">•••• •••• •••• 8899</p>
            <button
              onClick={() => showToast("📋 IBAN copied to clipboard")}
              className="mt-2 text-[10px] uppercase tracking-wider underline hover:opacity-80"
            >
              Copy IBAN details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}