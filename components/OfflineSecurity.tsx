'use client';

import React from 'react';
import { Shield, Lock, WifiOff, Smartphone } from 'lucide-react';

export function OfflineSecurity() {
  return (
    <section id="security" className="py-20 sm:py-28 bg-[#F8FAFC] border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl p-8 sm:p-14 bg-white border border-slate-200 shadow-porcelain-card text-center max-w-4xl mx-auto relative overflow-hidden">
          {/* Subtle Ambient Shield Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-100/50 rounded-full blur-3xl -z-10" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 text-shark border border-slate-200 text-[11px] font-semibold uppercase tracking-wider mb-5">
            <Shield size={13} />
            <span>100% Private & Offline</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-title text-shark leading-tight">
            100% Offline. <br />
            Zero Data Leaves Your Phone.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-shark-muted tracking-body max-w-2xl mx-auto">
            Third-party keyboards often compromise your keystrokes. Keydex is built with one ironclad guarantee:
            we physically cannot see, collect, or store your data.
          </p>

          {/* 3 Core Security Pillars */}
          <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-shark shadow-2xs">
                <WifiOff size={18} />
              </div>
              <h4 className="font-bold text-shark text-[15px] tracking-tight">Zero Internet Access</h4>
              <p className="text-[13px] text-shark-muted tracking-body leading-relaxed">
                Keydex has zero internet capability. No trackers, no analytics, and no remote servers—ever.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-shark shadow-2xs">
                <Smartphone size={18} />
              </div>
              <h4 className="font-bold text-shark text-[15px] tracking-tight">On-Device Storage</h4>
              <p className="text-[13px] text-shark-muted tracking-body leading-relaxed">
                Your shortcuts, photos, cards, and notes stay safely on your phone. Nothing is ever sent to the cloud.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-shark shadow-2xs">
                <Lock size={18} />
              </div>
              <h4 className="font-bold text-shark text-[15px] tracking-tight">Biometric Shield</h4>
              <p className="text-[13px] text-shark-muted tracking-body leading-relaxed">
                Protect your private items, bank details, and identity documents with your fingerprint or Face ID.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
