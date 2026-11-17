'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Smartphone,
  Layers,
  ShoppingBag,
  Calculator,
  Compass,
  Clipboard,
  ShieldCheck,
  Sun,
  Moon,
  Sparkles,
  Check,
} from 'lucide-react';

interface ShowcaseSlide {
  id: string;
  title: string;
  tag: string;
  icon: React.ElementType;
  heading: string;
  desc: string;
  bulletPoints: string[];
  darkImg: string;
  lightImg: string;
}

const SHOWCASE_SLIDES: ShowcaseSlide[] = [
  {
    id: 'home',
    title: 'Vault',
    tag: 'Home Dashboard',
    icon: Layers,
    heading: '4 High-Speed Command Hubs',
    desc: 'Organize your shortcuts, contacts, and frequently used apps into simple action hubs—ready directly in your keyboard.',
    bulletPoints: [
      'Quick Contacts: Direct triggers for WhatsApp, Telegram, and Instagram',
      'App Launchers: Open Blinkit, YouTube, or Spotify directly from typing',
      'Speed Dial: 1-tap call shortcuts for your closest contacts',
    ],
    darkImg: '/screenshots/dark/Home Screen.png',
    lightImg: '/screenshots/light/Home Screen.png',
  },
  {
    id: 'keyboard',
    title: 'Keyboard',
    tag: 'Typing Surface',
    icon: Smartphone,
    heading: 'A Keyboard You Actually Enjoy Typing On',
    desc: 'Beautiful tactile keycaps, satisfying click sounds, and a permanent number row—designed so every keystroke feels exactly right.',
    bulletPoints: [
      'Dedicated Number Row (1 to 0) permanently above keys',
      'Instant Suggestion Bar showing real values and photo previews',
      'Spacebar Trackpad to glide your cursor precisely between letters',
    ],
    darkImg: '/screenshots/dark/Keyboard.png',
    lightImg: '/screenshots/light/keyboard.png',
  },
  {
    id: 'wheel',
    title: 'Quick Wheel',
    tag: 'Radial Gesture',
    icon: Compass,
    heading: 'The Spacebar Radial Dial',
    desc: 'Hold the spacebar to open a quick radial shortcut wheel. Slide your thumb to select and release to send instantly.',
    bulletPoints: [
      'Visual circular previews for photos and identity cards',
      'Slide-to-choose, release-to-send without lifting your thumb',
      'Dedicated center hub to cancel gestures anytime',
    ],
    darkImg: '/screenshots/demo/Quick wheel.png',
    lightImg: '/screenshots/demo/Quick wheel.png',
  },
  {
    id: 'products',
    title: 'Catalog',
    tag: 'In-Keyboard Commerce',
    icon: ShoppingBag,
    heading: 'Itemized Cart & Instant Invoicing',
    desc: 'Tap the catalog icon to open your product list. Pick items, view totals, and send custom payment QR codes in seconds.',
    bulletPoints: [
      'Clean product list with instant item counters',
      'One-tap bill and QR image generation',
      'Instant custom payment QRs with exact bill amounts included',
    ],
    darkImg: '/screenshots/dark/Product screen.png',
    lightImg: '/screenshots/light/Product.png',
  },
  {
    id: 'calc',
    title: 'Calculator',
    tag: 'Math & Splitting',
    icon: Calculator,
    heading: 'Zero App-Switching Arithmetic',
    desc: 'Solve math and split bills right above your keyboard. See live answers and tap once to insert them directly into chat.',
    bulletPoints: [
      'Live equation results without leaving your conversation',
      '1-Tap Insertion: Insert plain number, currency, or full equation',
      'Split group dinners and expenses in one touch',
    ],
    darkImg: '/screenshots/dark/Calculator.png',
    lightImg: '/screenshots/light/Calculator.png',
  },
  {
    id: 'clipboard',
    title: 'Clipboard',
    tag: 'Universal History',
    icon: Clipboard,
    heading: 'Recent & Pinned Vault Drawer',
    desc: 'Access your recent copied items, pin important notes, and tap smart chips to paste verification codes in one touch.',
    bulletPoints: [
      'Dedicated Recent and Pinned tabs for fast lookup',
      'One-tap pin to save critical addresses or links permanently',
      'Smart code recognition chips for instant OTP pasting',
    ],
    darkImg: '/screenshots/dark/Clipboard.png',
    lightImg: '/screenshots/light/Clipboard.png',
  },
  {
    id: 'settings',
    title: 'Security',
    tag: '100% Offline Vault',
    icon: ShieldCheck,
    heading: 'Private by Design, Zero Internet',
    desc: 'Keydex has zero internet access. Your personal details, photos, and saved cards never leave your phone.',
    bulletPoints: [
      'Fingerprint, Face ID, and Master PIN protection',
      'Satisfying typing vibrations and authentic mechanical sounds',
      'Automatically pauses in password fields for complete privacy',
    ],
    darkImg: '/screenshots/dark/Settings screen.png',
    lightImg: '/screenshots/light/Settings screen.png',
  },
];

export function ScreenShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const [themeMode, setThemeMode] = useState<'dark' | 'light'>('dark');

  const currentSlide = SHOWCASE_SLIDES[activeTab];
  const activeImage = themeMode === 'dark' ? currentSlide.darkImg : currentSlide.lightImg;

  return (
    <section id="showcase" className="py-20 sm:py-32 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-accent/10 text-accent text-[12px] font-semibold tracking-wider uppercase mb-3">
            <Sparkles size={13} />
            <span>Inside the App</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-title text-shark leading-tight">
            Crafted to Perfection.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-shark-muted tracking-body">
            Explore every screen, exactly as it looks on your phone.
          </p>

          {/* Interactive Light / Dark Theme Switcher */}
          <div className="mt-6 inline-flex items-center p-1 rounded-full bg-white border border-slate-200/90 shadow-xs">
            <button
              onClick={() => setThemeMode('dark')}
              className={`px-4 py-1.5 rounded-full text-[12px] font-semibold tracking-pill flex items-center gap-1.5 transition-all ${themeMode === 'dark'
                ? 'bg-shark text-white shadow-xs'
                : 'text-slate-500 hover:text-shark'
                }`}
            >
              <Moon size={13} />
              <span>Dark Theme</span>
            </button>
            <button
              onClick={() => setThemeMode('light')}
              className={`px-4 py-1.5 rounded-full text-[12px] font-semibold tracking-pill flex items-center gap-1.5 transition-all ${themeMode === 'light'
                ? 'bg-accent text-white shadow-xs'
                : 'text-slate-500 hover:text-shark'
                }`}
            >
              <Sun size={13} />
              <span>Light Theme</span>
            </button>
          </div>
        </div>

        {/* Single-Line Screen Category Bar */}
        <div className="flex justify-center mb-10">
          <div className="p-1.5 rounded-full bg-white border border-slate-200/90 shadow-2xs inline-flex items-center gap-1 max-w-full overflow-x-auto no-scrollbar">
            {SHOWCASE_SLIDES.map((slide, idx) => {
              const Icon = slide.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={slide.id}
                  onClick={() => setActiveTab(idx)}
                  className={`shrink-0 px-3.5 py-1.5 rounded-full text-[13px] font-semibold tracking-pill flex items-center gap-1.5 transition-all ${isActive
                    ? 'bg-shark text-white shadow-xs'
                    : 'text-slate-600 hover:text-shark hover:bg-slate-100/60'
                    }`}
                >
                  <Icon size={14} className={isActive ? 'text-white' : 'text-slate-500'} />
                  <span>{slide.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Feature Showcase Card */}
        <div className="rounded-[40px] p-6 sm:p-12 bg-white border border-slate-200/90 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Narrative & Highlights (7 cols) */}
          <div className="lg:col-span-7 text-left space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-accent/10 text-accent font-mono text-[11px] font-bold uppercase tracking-wider">
              <span>{currentSlide.tag}</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-bold tracking-title text-shark leading-tight">
              {currentSlide.heading}
            </h3>

            <p className="text-base sm:text-lg text-shark-muted tracking-body leading-relaxed">
              {currentSlide.desc}
            </p>

            {/* Bullet Points */}
            <div className="space-y-3 pt-2">
              {currentSlide.bulletPoints.map((point, pIdx) => (
                <div key={pIdx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                    <Check size={12} className="stroke-[3]" />
                  </div>
                  <span className="text-[14px] text-slate-700 font-medium leading-snug">{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-3 text-[12px] text-slate-500 font-medium">
              <span>100% On-Device</span>
              <span>·</span>
              <span>Zero Internet Access</span>
              <span>·</span>
              <span>Zero App Switching</span>
            </div>
          </div>

          {/* Right: Raw Titanium Screenshot */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[280px] sm:max-w-[310px] aspect-[9/16] filter drop-shadow-[0_25px_45px_rgba(0,0,0,0.18)] select-none">
              <Image
                src={activeImage}
                alt={currentSlide.title}
                fill
                priority
                sizes="(max-width: 1024px) 280px, 310px"
                className="object-contain pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
