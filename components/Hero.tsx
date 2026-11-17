'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface HeroProps {
  onOpenWaitlist: (platform?: 'ios' | 'android') => void;
}

const HERO_SLIDES = [
  {
    id: 'text',
    title: 'Text & Number Expansion',
    screenshot: '/screenshots/demo/Adhar number V2.webp',
    alt: 'Keydex instant Aadhaar number expansion in WhatsApp',
    reactionText: 'Dispatched in 1.2s',
    reactionContext: 'Zero app switching',
  },
  {
    id: 'photo',
    title: 'Zero-Gallery Photo Drop',
    screenshot: '/screenshots/demo/Pan Card photo V2.webp',
    alt: 'Keydex micro-thumbnail PAN card photo drop into chat',
    reactionText: 'Zero-Gallery Photo Drop',
    reactionContext: '1-tap ID insertion',
  },
  {
    id: 'contact',
    title: 'Cross-App Chat Teleport',
    screenshot: '/screenshots/demo/Nehal Contact(insta) V2.webp',
    alt: 'Keydex 1-tap teleport from WhatsApp to Instagram DM',
    reactionText: '1-Tap Teleport',
    reactionContext: 'WhatsApp to Instagram',
  },
  {
    id: 'qr',
    title: 'Dynamic UPI QR Billing',
    screenshot: '/screenshots/demo/so fast.webp',
    alt: 'Keydex instant UPI QR code in WhatsApp chat',
    reactionText: '\u201cbro what are you using so fast?\u201d',
    reactionContext: 'Dynamic UPI QR',
  },
  {
    id: 'calc',
    title: 'In-Keyboard Math',
    screenshot: '/screenshots/demo/Calculator.webp',
    alt: 'Keydex in-keyboard calculator panel with live split calculation',
    reactionText: 'In-Keyboard Math',
    reactionContext: 'Live split calculation',
  },
  {
    id: 'wheel',
    title: 'Spacebar Quick Wheel',
    screenshot: '/screenshots/demo/Quick wheel.webp',
    alt: 'Keydex spacebar radial dial fanning across keyboard',
    reactionText: '200ms Spacebar Gesture',
    reactionContext: 'Radial tool dial',
  },
];

export function Hero({ onOpenWaitlist }: HeroProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 3600);
    return () => clearInterval(interval);
  }, [isPaused]);

  const currentSlide = HERO_SLIDES[activeSlide];

  return (
    <section className="relative pt-24 pb-16 sm:pt-40 sm:pb-28 overflow-hidden ambient-glow">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Top Product Eyebrow */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-xs border border-slate-200/80 shadow-2xs mb-5 sm:mb-8">
          <span className="text-[12px] sm:text-[13px] font-semibold text-shark tracking-pill">
            Keydex Keyboard
          </span>
        </div>

        {/* Hero Headline */}
        <h1 className="text-[34px] sm:text-6xl md:text-7xl font-bold tracking-hero text-shark leading-[1.1] max-w-4xl mx-auto">
          <span>Never Switch</span>
          <br />
          <span className="bg-gradient-to-r from-accent via-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Apps Again.
          </span>
        </h1>

        {/* Hero Subhead */}
        <p className="mt-4 sm:mt-6 text-base sm:text-2xl font-semibold tracking-title text-accent max-w-2xl mx-auto">
          Everything you need, right where you type.
        </p>

        {/* Dual Store Badges */}
        <div className="mt-6 sm:mt-10 flex flex-row items-center justify-center gap-2.5 sm:gap-4 w-full max-w-[340px] mx-auto">
          {/* Apple App Store */}
          <button
            onClick={() => onOpenWaitlist('ios')}
            className="flex-1 h-[46px] min-w-[140px] px-3 sm:px-4 rounded-xl bg-shark hover:bg-black text-white shadow-xs hover:shadow-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0 active:scale-95 flex items-center justify-center gap-2 group"
          >
            <svg
              className="w-5 h-5 fill-current shrink-0"
              viewBox="0 0 24 24"
              width={20}
              height={20}
              aria-hidden="true"
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.64 1.35-.56.64-.99 1.7-0.86 2.72.99.08 2-.48 2.58-1.22z" />
            </svg>
            <div className="text-left">
              <div className="text-[8.5px] sm:text-[9px] text-white/60 uppercase font-medium tracking-wider leading-none mb-0.5 whitespace-nowrap">Download on the</div>
              <div className="text-[12.5px] sm:text-[13.5px] font-semibold tracking-tight leading-tight whitespace-nowrap">App Store</div>
            </div>
          </button>

          {/* Google Play Store */}
          <button
            onClick={() => onOpenWaitlist('android')}
            className="flex-1 h-[46px] min-w-[140px] px-3 sm:px-4 rounded-xl bg-white hover:bg-slate-50 text-shark border border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0 active:scale-95 flex items-center justify-center gap-2 group"
          >
            <svg
              className="w-5 h-5 shrink-0"
              viewBox="0 0 24 24"
              width={20}
              height={20}
              aria-hidden="true"
            >
              <path
                fill="#4285F4"
                d="M3.609 1.814L13.792 12 3.61 22.186a2.054 2.054 0 0 1-.36-.936V2.75c0-.348.125-.668.359-.936z"
              />
              <path
                fill="#34A853"
                d="M17.16 8.632l-3.368 3.368L3.61 1.814A1.97 1.97 0 0 1 4.796 1.5c.629 0 1.222.25 1.664.695l10.7 6.437z"
              />
              <path
                fill="#EA4335"
                d="M17.16 15.368L6.46 21.805a2.015 2.015 0 0 1-1.664.695 1.97 1.97 0 0 1-1.186-.314l10.182-10.186 3.368 3.368z"
              />
              <path
                fill="#FBBC04"
                d="M21.285 10.771c.715.422.715 1.109 0 1.531l-4.125 2.477-3.368-3.368 3.368-3.368 4.125 2.728z"
              />
            </svg>
            <div className="text-left">
              <div className="text-[8.5px] sm:text-[9px] text-slate-400 uppercase font-medium tracking-wider leading-none mb-0.5 whitespace-nowrap">GET IT ON</div>
              <div className="text-[12.5px] sm:text-[13.5px] font-semibold tracking-tight leading-tight whitespace-nowrap">Google Play</div>
            </div>
          </button>
        </div>

        {/* ═══════════════════════════════════════════════════════════
            HERO VISUAL: 6-Step Smooth Showcase Slideshow
           ═══════════════════════════════════════════════════════════ */}
        <div
          className="mt-14 sm:mt-18 relative max-w-[310px] sm:max-w-[350px] md:max-w-[370px] mx-auto cursor-pointer"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Subtle Backlight Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 via-blue-500/15 to-indigo-500/20 blur-3xl rounded-full transform scale-110 -z-10" />

          {/* Stationary Phone Chassis with Smooth Cross-Fading Screenshots */}
          <div className="relative w-full aspect-[9/16] filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.20)] select-none">
            {HERO_SLIDES.map((slide, idx) => {
              const isCurrent = activeSlide === idx;
              return (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                    isCurrent ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  <Image
                    src={slide.screenshot}
                    alt={slide.alt}
                    fill
                    priority={idx <= 1}
                    sizes="(max-width: 640px) 310px, (max-width: 768px) 350px, 370px"
                    className="object-contain pointer-events-none"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* 6-Segment Apple-Style Progress Bars */}
        <div className="mt-7 flex items-center justify-center gap-1.5 max-w-[260px] mx-auto">
          {HERO_SLIDES.map((slide, idx) => {
            const isCurrent = activeSlide === idx;
            return (
              <button
                key={slide.id}
                onClick={() => setActiveSlide(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  isCurrent ? 'w-8 bg-shark' : 'w-3 bg-slate-200 hover:bg-slate-300'
                }`}
                aria-label={`Jump to ${slide.title}`}
              />
            );
          })}
        </div>

        {/* Live Synchronized Reaction Pill */}
        <div className="mt-4 flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-xs border border-slate-200/80 shadow-2xs whitespace-nowrap text-[13px] transition-all duration-300">
            <span className="font-semibold text-shark">
              {currentSlide.reactionText}
            </span>
            <span className="text-slate-300">·</span>
            <span className="text-slate-500 font-medium">
              {currentSlide.reactionContext}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
