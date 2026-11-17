'use client';

import React from 'react';
import { FileText, MessageCircle, Instagram, FileSpreadsheet, QrCode } from 'lucide-react';

export function FloatingChips() {
  return (
    <>
      {/* ── PRIORITY 1: Text & Numbers (Top Left) ── */}
      <div className="absolute -top-6 -left-6 sm:-top-8 sm:-left-12 z-20 animate-float-slow hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white border border-slate-200/90 shadow-floating-chip">
        <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-accent">
          <FileText size={15} />
        </div>
        <div className="text-left">
          <div className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">Priority 1 · Text</div>
          <div className="text-[13px] font-semibold text-shark tracking-tight">Aadhaar: 4512 8963 1475</div>
        </div>
      </div>

      {/* ── PRIORITY 2: Universal Photos & IDs (Top Right) ── */}
      <div className="absolute top-12 -right-4 sm:-right-14 z-20 animate-float-reverse hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white border border-slate-200/90 shadow-floating-chip">
        <div className="w-8 h-8 rounded-lg overflow-hidden border border-slate-200 bg-slate-100 flex items-center justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-blue-200 flex items-center justify-center text-accent font-bold text-[10px]">
            ID
          </div>
        </div>
        <div className="text-left">
          <div className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">Priority 2 · Photo</div>
          <div className="text-[13px] font-semibold text-shark tracking-tight flex items-center gap-1.5">
            <span>Driving License.jpg</span>
            <span className="text-[9px] font-bold text-accent bg-accent/10 px-1 py-0.2 rounded">IMG</span>
          </div>
        </div>
      </div>

      {/* ── PRIORITY 3: Cross-App Contact Jumping (Middle Left) ── */}
      <div className="absolute top-1/2 -left-4 sm:-left-16 z-20 animate-float-reverse hidden sm:flex items-center gap-2 px-3 py-2 rounded-2xl bg-white border border-slate-200/90 shadow-floating-chip">
        <div className="flex -space-x-1.5 items-center">
          <div className="w-7 h-7 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 z-10 shadow-xs">
            <MessageCircle size={14} />
          </div>
          <div className="w-7 h-7 rounded-full bg-pink-50 border border-pink-200 flex items-center justify-center text-pink-500 shadow-xs">
            <Instagram size={14} />
          </div>
        </div>
        <div className="text-left">
          <div className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">Priority 3 · Chat Jump</div>
          <div className="text-[12px] font-semibold text-shark tracking-tight">WhatsApp ⇄ Instagram</div>
        </div>
      </div>

      {/* ── PRIORITY 4: PDF Documents & Files (Bottom Left) ── */}
      <div className="absolute -bottom-6 -left-2 sm:-left-8 z-20 animate-float-slow hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white border border-slate-200/90 shadow-floating-chip">
        <div className="w-7 h-7 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
          <FileSpreadsheet size={15} />
        </div>
        <div className="text-left">
          <div className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">Priority 4 · Document</div>
          <div className="text-[13px] font-semibold text-shark tracking-tight flex items-center gap-1.5">
            <span>Price List & Menu</span>
            <span className="text-[9px] font-bold text-emerald-700 bg-emerald-100 px-1 py-0.2 rounded">PDF</span>
          </div>
        </div>
      </div>

      {/* ── PRIORITY 5: Dynamic UPI QR Code & Billing (Bottom Right) ── */}
      <div className="absolute -bottom-8 -right-2 sm:-right-10 z-20 animate-float-slow hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white border border-slate-200/90 shadow-floating-chip">
        <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
          <QrCode size={18} />
        </div>
        <div className="text-left">
          <div className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">Priority 5 · UPI QR</div>
          <div className="text-[13px] font-bold text-shark tracking-tight tabular-nums flex items-center gap-1">
            <span>₹1,500</span>
            <span className="text-[11px] font-normal text-slate-500">· Pay in 1 Tap</span>
          </div>
        </div>
      </div>
    </>
  );
}
