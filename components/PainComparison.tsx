'use client';

import React from 'react';
import { XCircle, CheckCircle2, Check, X } from 'lucide-react';

export function PainComparison() {
  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-title text-shark leading-tight">
            Stop the Constant <br className="hidden sm:inline" />
            App Switching.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-shark-muted tracking-body">
            Stay in the flow of your conversation. Never lose context.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {/* Card 1: The Old Way */}
          <div className="rounded-2xl p-7 sm:p-8 bg-white border border-slate-200/90 shadow-xs text-left">
            <div className="flex items-center gap-2 text-red-500 font-bold text-[12px] uppercase tracking-wider mb-6">
              <XCircle size={15} />
              <span>Without Keydex</span>
            </div>

            <ul className="space-y-4 text-[14px] text-slate-500">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                  <X size={11} className="stroke-[3]" />
                </div>
                <span>Leave chat, open Notes, find the address or account number, copy, switch back, and paste.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                  <X size={11} className="stroke-[3]" />
                </div>
                <span>Scroll through thousands of photos in your gallery searching for an ID card or payment QR.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                  <X size={11} className="stroke-[3]" />
                </div>
                <span>Open a separate calculator app to divide an expense, memorize the number, and retype it.</span>
              </li>
            </ul>
          </div>

          {/* Card 2: The Keydex Way */}
          <div className="rounded-2xl p-7 sm:p-8 bg-white border border-slate-300 shadow-xs text-left">
            <div className="flex items-center gap-2 text-shark font-bold text-[12px] uppercase tracking-wider mb-6">
              <CheckCircle2 size={15} className="text-shark" />
              <span>With Keydex</span>
            </div>

            <ul className="space-y-4 text-[14px] text-shark font-medium">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-shark text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={11} className="stroke-[3]" />
                </div>
                <span>Type your custom keyword (like <code className="bg-slate-100 px-1 py-0.5 rounded text-[12px] text-shark font-mono">Adhar</code>) to paste numbers and text in one tap.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-shark text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={11} className="stroke-[3]" />
                </div>
                <span>Insert ID photos and payment QRs directly from the keyboard without opening your gallery.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-shark text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={11} className="stroke-[3]" />
                </div>
                <span>Solve math, split bills, and generate invoices right inside your active conversation.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
