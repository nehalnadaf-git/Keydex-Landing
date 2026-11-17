'use client';

import React, { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { AppIntegrationRibbon } from '@/components/AppIntegrationRibbon';
import { HowItWorks } from '@/components/HowItWorks';
import { PainComparison } from '@/components/PainComparison';
import { InteractiveDemo } from '@/components/InteractiveDemo';
import { ScreenShowcase } from '@/components/ScreenShowcase';
import { FeatureVault } from '@/components/FeatureVault';
import { OfflineSecurity } from '@/components/OfflineSecurity';
import { FAQSection } from '@/components/FAQSection';
import { FounderNote } from '@/components/FounderNote';
import { FinalCTA } from '@/components/FinalCTA';
import { WaitlistModal } from '@/components/WaitlistModal';

export default function LandingPage() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState<'ios' | 'android'>('ios');

  const openWaitlist = (platform?: 'ios' | 'android') => {
    if (platform) {
      setSelectedPlatform(platform);
    }
    setIsWaitlistOpen(true);
  };
  const closeWaitlist = () => setIsWaitlistOpen(false);

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* 1. Sticky Navigation */}
      <Navigation onOpenWaitlist={openWaitlist} />

      {/* 2. Hero Section with Handheld Mockup & Floating Chips */}
      <Hero onOpenWaitlist={openWaitlist} />

      {/* 3. App Integration Ribbon (Works inside WhatsApp, Instagram, etc.) */}
      <AppIntegrationRibbon />

      {/* 4. Effortless 3-Step Mechanics (How It Works) */}
      <HowItWorks />

      {/* 5. Pain Point vs Solution Comparison (The Transformation) */}
      <PainComparison />

      {/* 6. Interactive Keyboard Simulator (Synced with Viral Video) */}
      <InteractiveDemo />

      {/* 7. Real Screenshot Showcase & Theme Switcher (Look Inside Keydex) */}
      <ScreenShowcase />

      {/* 8. The 6 Locked Feature Pillars */}
      <FeatureVault />

      {/* 9. 100% Offline & Armored Privacy Guarantee */}
      <OfflineSecurity />

      {/* 10. Frequently Asked Questions (Objection Busters) */}
      <FAQSection />

      {/* 11. Founder Note & Story */}
      <FounderNote />

      {/* 12. Final CTA & Footer */}
      <FinalCTA onOpenWaitlist={openWaitlist} />

      {/* 13. Exclusive Early Access Modal */}
      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={closeWaitlist}
        defaultPlatform={selectedPlatform}
      />
    </main>
  );
}
