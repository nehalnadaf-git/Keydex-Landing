'use client';

import React from 'react';
import Image from 'next/image';

interface FinalCTAProps {
  onOpenWaitlist: (platform?: 'ios' | 'android') => void;
}

export function FinalCTA({ onOpenWaitlist }: FinalCTAProps) {
  return (
    <footer className="pt-20 pb-12 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Call to Action Card */}
        <div className="rounded-3xl p-8 sm:p-14 bg-gradient-to-b from-slate-900 to-black text-white text-center shadow-xl relative overflow-hidden mb-16">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-hero text-white leading-tight">
              Never Switch <br /> Apps Again.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 tracking-body">
              Join the private beta waitlist for Day-1 priority access.
            </p>

            {/* Install Badges */}
            <div className="pt-4 flex flex-row items-center justify-center gap-2.5 sm:gap-3.5 w-full max-w-[340px] mx-auto">
              <button
                onClick={() => onOpenWaitlist('ios')}
                className="flex-1 h-[46px] min-w-[140px] px-3 sm:px-4 rounded-xl bg-white hover:bg-slate-100 text-shark font-semibold text-[12.5px] sm:text-[13.5px] shadow-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0 active:scale-95 flex items-center justify-center gap-2"
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
                <span className="whitespace-nowrap">App Store</span>
              </button>

              <button
                onClick={() => onOpenWaitlist('android')}
                className="flex-1 h-[46px] min-w-[140px] px-3 sm:px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold text-[12.5px] sm:text-[13.5px] shadow-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0 active:scale-95 flex items-center justify-center gap-2"
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
                <span>Google Play</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-slate-200/80 text-[13px] text-slate-500">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 relative flex items-center justify-center">
              <Image src="/logo-light.webp" alt="Keydex" fill className="object-contain" />
            </div>
            <span className="font-semibold text-shark">Keydex</span>
            <span>·</span>
            <span>© {new Date().getFullYear()} All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6 font-medium">
            <a href="#how-it-works" className="hover:text-shark transition-colors">
              How It Works
            </a>
            <a href="#features" className="hover:text-shark transition-colors">
              Features
            </a>
            <a href="#showcase" className="hover:text-shark transition-colors">
              Screens
            </a>
            <a href="#security" className="hover:text-shark transition-colors">
              Privacy
            </a>
            <a href="#faq" className="hover:text-shark transition-colors">
              FAQ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

