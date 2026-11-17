'use client';

import React from 'react';
import Image from 'next/image';
import { Instagram } from 'lucide-react';

export function FounderNote() {
  return (
    <section id="founder" className="py-20 sm:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 text-center sm:text-left">
            {/* Founder Avatar with Porcelain Elevation */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-white shadow-lg shrink-0 ring-4 ring-slate-100">
              <Image
                src="/founder.webp"
                alt="Nehal Nadaf - Founder of Keydex"
                fill
                className="object-cover"
              />
            </div>

            {/* Founder Message */}
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent font-semibold text-[11px] uppercase tracking-wider">
                Founder Note
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-title text-shark">
                &ldquo;Why I Built Keydex.&rdquo;
              </h3>

              <div className="text-[14px] sm:text-[15px] text-shark-muted tracking-body leading-relaxed space-y-3">
                <p>
                  Every single day, I found myself leaving conversations just to find things that already belonged to me.
                  I would exit WhatsApp, hunt through notes for an address, scroll through hundreds of gallery screenshots for a UPI QR code, and open a separate calculator just to split a dinner bill.
                </p>
                <p>
                  Smartphones forced us into this exhausting loop of app switching. So I built Keydex with one uncompromising goal: <strong>Never switch apps again.</strong>
                </p>
                <p>
                  My personal promise: Keydex will always remain 100% offline, zero-tracking, and built purely for your speed.
                </p>
              </div>

              <div className="pt-3 flex flex-wrap items-center justify-center sm:justify-start gap-4">
                <div>
                  <div className="font-bold text-shark text-[15px] tracking-tight">Nehal Nadaf</div>
                  <div className="text-[12px] text-slate-500 font-medium">Founder, Keydex</div>
                </div>

                <div className="hidden sm:block h-7 w-px bg-slate-200" />

                <div className="flex items-center gap-2.5">
                  <a
                    href="https://x.com/nehalnadaf"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Nehal Nadaf on Twitter / X"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-medium text-slate-600 bg-white border border-slate-200/90 hover:border-slate-400 hover:text-black hover:bg-slate-50 transition-all shadow-xs"
                  >
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    <span>Twitter / X</span>
                  </a>

                  <a
                    href="https://instagram.com/nehalnadaf"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Nehal Nadaf on Instagram"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-medium text-slate-600 bg-white border border-slate-200/90 hover:border-slate-400 hover:text-[#E1306C] hover:bg-slate-50 transition-all shadow-xs"
                  >
                    <Instagram size={14} className="stroke-[2.2]" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

