'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  highlight?: string;
}

const FAQS: FAQItem[] = [
  {
    question: 'Can Keydex see my passwords, banking PINs, or private chats?',
    answer:
      'Never. Keydex has zero internet capability. Keystrokes, shortcuts, and photos never leave your device. When typing in password fields, suggestions pause automatically.',
    highlight: '100% Offline · Zero Internet Access',
  },
  {
    question: 'How does sending photos work without opening the gallery?',
    answer:
      'Keydex allows your keyboard to paste saved images directly into your conversation. Tapping a photo shortcut drops the image right into your active chat without you ever having to open your gallery or search through photos.',
    highlight: 'Direct In-Chat Pasting',
  },
  {
    question: 'Will this keyboard slow down my phone or cause typing lag?',
    answer:
      'No. Keydex is ultra-lightweight and tuned for speed. Typing, vibrations, and sounds respond instantly on your phone with zero lag.',
    highlight: 'Instant, Lag-Free Typing',
  },
  {
    question: 'Which operating systems and apps are supported?',
    answer:
      'Keydex is designed for both Android and iOS. It functions seamlessly across WhatsApp, Instagram, Telegram, Gmail, Slack, Notes, and every other app you type in.',
    highlight: 'Works in Every App',
  },
  {
    question: 'How does the early access rollout work?',
    answer:
      'We are rolling out Keydex in limited private batches. Tapping the App Store or Google Play button reserves your spot in Batch #1, with an invite delivered directly to your inbox.',
    highlight: 'Private Batch #1 Access',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-32 bg-[#F8FAFC] border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-accent/10 text-accent text-[12px] font-semibold tracking-wider uppercase mb-3">
            <HelpCircle size={13} />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-title text-shark leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base sm:text-lg text-shark-muted tracking-body">
            Everything you need to know about Keydex, speed, and privacy.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5 text-left">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl transition-all border ${
                  isOpen
                    ? 'bg-white border-accent/40 shadow-sm'
                    : 'bg-white/80 hover:bg-white border-slate-200/90 shadow-2xs'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className="text-[15px] sm:text-[17px] font-bold tracking-title text-shark">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-accent text-white rotate-180' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown size={16} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-600 text-[14px] sm:text-[15px] tracking-body leading-relaxed border-t border-slate-100">
                    <p>{faq.answer}</p>
                    {faq.highlight && (
                      <div className="mt-3.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-[11px] font-semibold font-mono">
                        <ShieldCheck size={13} />
                        <span>{faq.highlight}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
