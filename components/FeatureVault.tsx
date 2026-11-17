'use client';

import React from 'react';
import {
  FileText,
  Image as ImageIcon,
  MessageCircle,
  QrCode,
  Compass,
  Calculator,
} from 'lucide-react';

const PILLARS = [
  {
    title: 'Text & Number Shortcuts',
    desc: 'Store Aadhaar numbers, PAN IDs, bank IFSC, and addresses. Type your keyword to paste in one tap.',
    icon: FileText,
  },
  {
    title: 'Zero-Gallery Photo Drop',
    desc: 'Insert ID cards, driving licenses, and documents directly into chat in one tap. No gallery hunting.',
    icon: ImageIcon,
  },
  {
    title: 'Cross-App Teleporting',
    desc: 'Jump directly to Instagram or Telegram chats, and launch apps like Blinkit right from the typing bar.',
    icon: MessageCircle,
  },
  {
    title: 'Dynamic QR Code Builder',
    desc: 'Type "bill 1500" to generate a live UPI payment QR image. Build itemized orders with the in-keyboard cart.',
    icon: QrCode,
  },
  {
    title: 'Spacebar Quick Wheel',
    desc: 'Hold spacebar for 200ms to open a radial dial overlay. Slide across tools and release to launch.',
    icon: Compass,
  },
  {
    title: 'In-Keyboard Calculator',
    desc: 'Compute totals and split group expenses inside your chat. Insert live results without leaving WhatsApp.',
    icon: Calculator,
  },
];

export function FeatureVault() {
  return (
    <section id="features" className="py-20 sm:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-accent/10 text-accent text-[11px] font-semibold tracking-wider uppercase mb-3">
            <span>Features</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-title text-shark leading-tight">
            Built for Pure Speed.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-shark-muted tracking-body">
            Essential tools engineered directly into your typing surface.
          </p>
        </div>

        {/* Feature Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="rounded-2xl p-7 sm:p-8 bg-[#F8FAFC] border border-slate-200/80 hover:border-slate-300 hover:bg-slate-50 transition-all flex flex-col justify-start space-y-4"
              >
                <div className="w-11 h-11 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex items-center justify-center text-shark">
                  <Icon size={20} className="stroke-[2.2]" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-shark">
                    {pillar.title}
                  </h3>
                  <p className="text-[14px] text-slate-500 leading-relaxed tracking-body">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
