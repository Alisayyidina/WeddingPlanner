"use client";

import { useState } from "react";

interface GuestMessage {
  id: string;
  name: string;
  status: "ATTENDING" | "REGRET" | "UNCERTAIN";
  time: string;
  message: string;
}

interface RsvpSectionProps {
  showToast: (text: string) => void;
}

const INITIAL_MESSAGES: GuestMessage[] = [
  {
    id: "1",
    name: "Mercutio",
    status: "ATTENDING",
    time: "2 hours ago",
    message: "Wouldn't miss this union for all gold in Verona!",
  },
  {
    id: "2",
    name: "Friar Laurence",
    status: "ATTENDING",
    time: "Yesterday",
    message: "May this alliance bring peace to both houses.",
  },
];

export default function RsvpSection({ showToast }: RsvpSectionProps) {
  const [rsvpName, setRsvpName] = useState("");
  const [attendance, setAttendance] = useState<"ATTENDING" | "REGRET" | "UNCERTAIN">("ATTENDING");
  const [guestCount, setGuestCount] = useState("1 Guest");
  const [message, setMessage] = useState("");
  const [guestMessages, setGuestMessages] = useState<GuestMessage[]>(INITIAL_MESSAGES);

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rsvpName.trim()) {
      showToast("⚠️ Please enter your name");
      return;
    }

    const newMessage: GuestMessage = {
      id: Date.now().toString(),
      name: rsvpName,
      status: attendance,
      time: "Just now",
      message: message.trim() || "Sending love and best wishes!",
    };

    setGuestMessages([newMessage, ...guestMessages]);
    showToast("💌 RSVP sent!");
    setRsvpName("");
    setMessage("");
  };

  return (
    <section id="rsvp" className="py-20 px-4 sm:px-8 max-w-5xl mx-auto space-y-12">
      <div className="text-center space-y-3">
        <span className="text-xs uppercase tracking-[0.2em] font-bold text-brand-secondary">
          RSVP & GUESTBOOK
        </span>
        <h2 className="text-3xl sm:text-5xl font-serif text-brand-primary">Confirm Presence</h2>
        <p className="text-xs sm:text-sm text-brand-on-surface-variant font-light max-w-md mx-auto">
          Please respond by August 1, 2025 to assist us in finalizing our arrangements
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <form onSubmit={handleRsvpSubmit} className="glass-card space-y-4 p-6">
          <div>
            <label className="block text-xs uppercase font-bold tracking-wider text-brand-primary mb-1">Your Name *</label>
            <input
              type="text"
              required
              value={rsvpName}
              onChange={(e) => setRsvpName(e.target.value)}
              placeholder="e.g. Benvolio"
              className="w-full px-4 py-2.5 rounded-lg bg-brand-surface-container-low border border-brand-outline-variant/50 text-sm focus:outline-none focus:border-brand-primary"
            />
          </div>
          <div>
            <label className="block text-xs uppercase font-bold tracking-wider text-brand-primary mb-1">Status</label>
            <select
              value={attendance}
              onChange={(e) => setAttendance(e.target.value as any)}
              className="w-full px-4 py-2.5 rounded-lg bg-brand-surface-container-low border border-brand-outline-variant/50 text-sm focus:outline-none focus:border-brand-primary"
            >
              <option value="ATTENDING">Attending</option>
              <option value="REGRET">Regret</option>
            </select>
          </div>
          <div>
            <label className="block text-xs uppercase font-bold tracking-wider text-brand-primary mb-1">Guests</label>
            <select
              value={guestCount}
              onChange={(e) => setGuestCount(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg bg-brand-surface-container-low border border-brand-outline-variant/50 text-sm focus:outline-none focus:border-brand-primary"
            >
              <option value="1">1 Person</option>
              <option value="2">2 Guests</option>
            </select>
          </div>
          <div>
            <label className="block text-xs uppercase font-bold tracking-wider text-brand-primary mb-1">Message</label>
            <textarea
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Well wishes..."
              className="w-full px-4 py-2.5 rounded-lg bg-brand-surface-container-low border border-brand-outline-variant/50 text-sm focus:outline-none focus:border-brand-primary resize-none"
            />
          </div>
          <button type="submit" className="btn-primary w-full py-2 text-xs uppercase tracking-wider">Send RSVP</button>
        </form>

        <div className="space-y-3 max-h-[420px] overflow-y-auto pr-1">
          <h3 className="text-lg font-serif text-brand-primary border-b border-brand-outline-variant/30 pb-2">Guestbook</h3>
          {guestMessages.map((msg) => (
            <div key={msg.id} className="p-3 rounded-lg bg-brand-surface-container-lowest border border-brand-outline-variant/20">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-brand-primary">{msg.name}</span>
                <span className="text-[10px] text-brand-on-surface-variant">{msg.time}</span>
              </div>
              <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 inline-block mt-1">{msg.status}</span>
              <p className="text-xs text-brand-on-surface italic mt-2">"{msg.message}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


