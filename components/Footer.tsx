"use client";

interface FooterProps {
  copyToClipboard: (text: string, label: string) => void;
  showToast: (text: string) => void;
}

export default function Footer({ copyToClipboard, showToast }: FooterProps) {
  return (
    <footer className="bg-brand-primary text-brand-on-primary py-16 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Couple Info */}
          <div className="space-y-2">
            <h3 className="font-serif text-xl font-semibold text-brand-secondary-container">
              Romeo & Juliet
            </h3>
            <p className="text-sm opacity-80">
              United in love and bound by sacred vows
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <p className="font-semibold text-sm uppercase tracking-widest text-brand-secondary-container">
              Quick Links
            </p>
            <div className="flex flex-col gap-1 text-sm opacity-80">
              <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:text-brand-secondary-container transition-colors">
                Top
              </button>
              <a href="#rsvp" className="hover:text-brand-secondary-container transition-colors">
                RSVP
              </a>
              <a href="#gift" className="hover:text-brand-secondary-container transition-colors">
                Gift Registry
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-2">
            <p className="font-semibold text-sm uppercase tracking-widest text-brand-secondary-container">
              Contact Us
            </p>
            <div className="text-sm opacity-80 space-y-1">
              <button
                onClick={() => copyToClipboard("hello@romeoandjuliet.com", "Email")}
                className="block hover:text-brand-secondary-container transition-colors"
              >
                📧 Email
              </button>
              <button
                onClick={() => showToast("📞 +39 045 555 1234 copied")}
                className="block hover:text-brand-secondary-container transition-colors"
              >
                📞 +39 045 555 1234
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-on-primary/20 pt-8 text-center text-sm opacity-70">
          <p>
            Verona, Italy • September 20, 2025
          </p>
          <p className="text-xs mt-2">
            "All the world's a stage, and all the men and women merely players" — William Shakespeare
          </p>
        </div>
      </div>
    </footer>
  );
}