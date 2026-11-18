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
    question: 'How secure is the personal data and document vault?',
    answer:
      'Your data is protected by complete on-device isolation. Keydex operates with zero network access, meaning your files and shortcuts are never transmitted, stored online, or analyzed. What stays on your phone, stays on your phone.',
    highlight: 'Offline Armored Vault',
  },
  {
    question: 'Do I have to switch back to Gboard or Apple Keyboard for regular typing?',
    answer:
      'No. Keydex is engineered to be your primary daily keyboard. It delivers responsive typing with tactile haptics, gesture swiping, and clean key spacing. Your saved shortcuts, photo cards, and tools stay discreetly out of the way until you type a keyword or summon them.',
    highlight: 'Designed as Your Full-Time Keyboard',
  },
  {
    question: 'Does Keydex work across all apps or only specific ones?',
    answer:
      'Everywhere you can type. Whether you are chatting in WhatsApp, replying to Instagram DMs, messaging on Telegram, composing in Gmail, or jotting notes, Keydex is right there. If a text field opens on your phone, Keydex works in it seamlessly.',
    highlight: 'Universal Compatibility',
  },
  {
    question: 'How does sending documents or photos without opening the gallery work?',
    answer:
      'Instead of interrupting your conversation, opening your photo library, and scrolling past thousands of personal photos, you link your critical cards or document slips once. From then on, you drop them straight into your active conversation with a single tap.',
    highlight: 'Zero Gallery Hunting',
  },
  {
    question: 'Can I really calculate totals and split bills without opening a calculator?',
    answer:
      'Yes. If you are discussing expenses, splitting dinner, or tallying items, you can calculate figures directly inside your message box. You get instant math totals and pre-filled payment requests on the fly without ever leaving your chat.',
    highlight: 'Live In-Chat Math & Split',
  },
  {
    question: 'Which mobile platforms are supported?',
    answer:
      'Keydex is built natively for both iOS and Android. Your typing speed, shortcuts, and privacy guarantees remain identical across iPhone and Android devices.',
    highlight: 'iOS & Android Native',
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
