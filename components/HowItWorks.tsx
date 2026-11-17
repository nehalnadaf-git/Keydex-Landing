'use client';

import React from 'react';
import { ShieldCheck, Zap, Send } from 'lucide-react';

const STEPS = [
  {
    title: 'Save Once',
    desc: 'Store your ID numbers, bank details, photos, and frequently used contacts once in your private on-device vault.',
    icon: ShieldCheck,
  },
  {
    title: 'Type Your Keyword',
    desc: 'Whenever someone asks for details in WhatsApp, Instagram, or any app, simply type your assigned keyword.',
    icon: Zap,
  },
  {
    title: 'Tap to Send',
    desc: 'Tap the suggestion pill to paste text, insert photos, or drop live payment QRs immediately. Never switch apps again.',
    icon: Send,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-accent/10 text-accent text-[11px] font-semibold tracking-wider uppercase mb-3">
            <span>How It Works</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-title text-shark leading-tight">
            Effortless by Design.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-shark-muted tracking-body">
            Zero learning curve. Everything lives right where you type.
          </p>
        </div>

        {/* Minimalist 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-left">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="rounded-2xl p-7 sm:p-8 bg-[#F8FAFC] border border-slate-200/80 hover:border-slate-300 hover:bg-slate-50 transition-all flex flex-col justify-start space-y-4"
              >
                <div className="w-11 h-11 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex items-center justify-center text-shark">
                  <Icon size={20} className="stroke-[2.2]" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-shark">
                    {step.title}
                  </h3>
                  <p className="text-[14px] text-slate-500 leading-relaxed tracking-body">
                    {step.desc}
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
