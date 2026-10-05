"use client";

import { useState, useEffect } from "react";
import HeaderNav from "@/components/HeaderNav";
import HeroCover from "@/components/HeroCover";
import CountdownSection from "@/components/CountdownSection";
import BetrothedSection from "@/components/BetrothedSection";
import ScheduleSection from "@/components/ScheduleSection";
import GallerySection from "@/components/GallerySection";
import RsvpSection from "@/components/RsvpSection";
import GiftSection from "@/components/GiftSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [showToastUI, setShowToastUI] = useState(false);

  const showToast = (text: string) => {
    setToastMessage(text);
    setShowToastUI(true);
    setTimeout(() => setShowToastUI(false), 3000);
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    showToast(`📋 ${label} copied to clipboard`);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Cover when closed */}
      {!isOpen && (
        <HeroCover guestName="Distinguished Guest" scrollToSection={scrollToSection} onOpen={() => setIsOpen(true)} />
      )}

      {/* Full invitation when opened */}
      {isOpen && (
        <>
          <HeaderNav isPlaying={isPlaying} setIsPlaying={setIsPlaying} scrollToSection={scrollToSection} />
          <main className="relative">
            <HeroCover guestName="Distinguished Guest" scrollToSection={scrollToSection} onOpen={() => setIsOpen(true)} />
            <CountdownSection showToast={showToast} />
            <BetrothedSection showToast={showToast} />
            <ScheduleSection copyToClipboard={copyToClipboard} showToast={showToast} />
            <GallerySection showToast={showToast} />
            <RsvpSection showToast={showToast} />
            <GiftSection showToast={showToast} />
          </main>
          <Footer copyToClipboard={copyToClipboard} showToast={showToast} />
        </>
      )}

      {/* Toast Notification */}
      {showToastUI && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-brand-primary text-white px-6 py-3 rounded-full shadow-raised text-sm font-medium animate-pulse">
          {toastMessage}
        </div>
      )}
    </>
  );
}
