'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  FileText,
  Image as ImageIcon,
  MessageCircle,
  QrCode,
  Calculator,
  Compass,
  ShoppingBag,
  Sparkles,
} from 'lucide-react';

const SHORTCUT_DEMOS = [
  {
    id: 'text',
    label: 'Text & IDs',
    trigger: 'Adhar',
    icon: FileText,
    title: 'Aadhaar, Bank & Addresses',
    desc: 'Paste 12-digit Aadhaar, bank IFSC, or full addresses with one tap. Never leave your conversation.',
    pillPreview: '986351651043',
    chatSnippet: 'Sharib: "Send your Govt ID number ASAP" → Types "Adhar" → Taps "986351651043" → Sent in 1.2s',
    screenshot: '/screenshots/demo/Adhar number V2.png',
  },
  {
    id: 'image',
    label: 'Photos',
    trigger: 'Panim',
    icon: ImageIcon,
    title: 'Zero-Gallery Photo Insertion',
    desc: 'Send PAN cards, driving licenses, or certificates directly into your active chat. Zero gallery hunting.',
    pillPreview: 'PAN Card Photo',
    chatSnippet: 'Sharib: "Send PAN Card photo too" → Types "Panim" → Photo pill → Drops photo into chat',
    screenshot: '/screenshots/demo/Pan Card photo V2.png',
  },
  {
    id: 'contact',
    label: 'Teleport',
    trigger: 'Nehal',
    icon: MessageCircle,
    title: 'Cross-App Chat Jumping',
    desc: 'Teleport directly to Instagram DMs from WhatsApp with one tap. Zero home screen navigation.',
    pillPreview: 'Nehal (Instagram)',
    chatSnippet: 'Sharib: "Did Nehal confirm on insta?" → Types "Nehal" → 1 tap teleports straight to Instagram DM',
    screenshot: '/screenshots/demo/Nehal Contact(insta) V2.png',
  },
  {
    id: 'billing',
    label: 'UPI QR',
    trigger: 'bill 1500',
    icon: QrCode,
    title: 'On-The-Fly QR Billing',
    desc: 'Generate a payment QR code with the exact amount ready. Scan to pay instantly with GPay or PhonePe.',
    pillPreview: 'BILL ₹1500 + UPI',
    chatSnippet: 'Sharib: "Send payment QR" → Types "bill 1500" → Drops payment QR image in chat',
    screenshot: '/screenshots/demo/so fast.png',
  },
  {
    id: 'calculator',
    label: 'Calculator',
    trigger: '4800+1200/4',
    icon: Calculator,
    title: 'In-Chat Expense Splitting',
    desc: 'Calculate totals and splits directly inside the keyboard dock. Insert live results into chat with one tap.',
    pillPreview: 'Insert ₹5,100',
    chatSnippet: 'Sharib: "What’s each person’s split?" → Opens in-keyboard calculator → Live "= 5,100" → Taps insert',
    screenshot: '/screenshots/demo/Calculator.png',
  },
  {
    id: 'wheel',
    label: 'Quick Wheel',
    trigger: 'Hold Space',
    icon: Compass,
    title: 'Radial Action Dial',
    desc: 'Hold spacebar for 200ms to open a 5-slot radial dial. Slide your thumb across tools and release to launch.',
    pillPreview: 'Radial Action Dial',
    chatSnippet: 'Holds spacebar → Radial arc fans across keyboard → Slide to select → Release to launch',
    screenshot: '/screenshots/demo/Quick wheel.png',
  },
  {
    id: 'catalog',
    label: 'Catalog',
    trigger: 'Catalog Dock',
    icon: ShoppingBag,
    title: 'In-Keyboard Cart & Invoicing',
    desc: 'Open a 3-column product grid inside your keyboard. Build orders and generate dynamic payment QRs in seconds.',
    pillPreview: '4 items | Total: ₹8,900',
    chatSnippet: 'Sharib: "Give me the total price" → Taps bag → Adds items → Total: ₹8,900 → 1-tap "QR Image"',
    screenshot: '/screenshots/demo/products.png',
  },
];

export function InteractiveDemo() {
  const [activeTab, setActiveTab] = useState(0);
  const currentDemo = SHORTCUT_DEMOS[activeTab];

  return (
    <section id="demo" className="py-20 sm:py-32 bg-white border-y border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-[12px] font-semibold tracking-wider uppercase mb-3">
            <Sparkles size={13} />
            <span>Interactive Simulator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-title text-shark leading-tight">
            Try It in Action.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-shark-muted tracking-body">
            Select a feature to see how Keydex eliminates app switching.
          </p>
        </div>

        {/* Single-Line Apple Segmented Control */}
        <div className="mt-8 sm:mt-10 flex justify-center">
          <div className="p-1.5 rounded-full bg-slate-100/90 border border-slate-200/80 inline-flex items-center gap-1 max-w-full overflow-x-auto no-scrollbar">
            {SHORTCUT_DEMOS.map((demo, idx) => {
              const Icon = demo.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={demo.id}
                  onClick={() => setActiveTab(idx)}
                  className={`shrink-0 px-3.5 py-1.5 rounded-full text-[13px] font-semibold tracking-pill flex items-center gap-1.5 transition-all ${isActive
                    ? 'bg-shark text-white shadow-xs'
                    : 'text-slate-600 hover:text-shark hover:bg-white/60'
                    }`}
                >
                  <Icon size={14} className={isActive ? 'text-white' : 'text-slate-500'} />
                  <span>{demo.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Viewport Box (Apple Standard Clean Two Columns) */}
        <div className="mt-10 max-w-4xl mx-auto rounded-[36px] p-6 sm:p-10 bg-slate-50/80 border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left: Brief Apple-standard narrative (7 cols) */}
          <div className="md:col-span-7 text-left space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-[12px] font-semibold text-shark shadow-2xs">
              <span className="text-slate-400 font-normal">Shortcut:</span>
              <code className="text-accent font-mono font-bold">&quot;{currentDemo.trigger}&quot;</code>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold tracking-title text-shark">{currentDemo.title}</h3>
            <p className="text-[14px] sm:text-[15px] text-shark-muted tracking-body leading-relaxed">{currentDemo.desc}</p>

            {/* Candidate Pill State */}
            <div className="space-y-1.5 pt-1">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Keyboard Pill:</div>
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-slate-200 shadow-2xs text-[13px] text-shark font-semibold">
                <span className="text-[11px] font-mono text-slate-400">&quot;{currentDemo.trigger}&quot;</span>
                <span className="text-slate-300">→</span>
                <span className="px-3 py-1 rounded-full bg-[#2C2C2E] text-white font-mono text-[12px] border border-slate-700 flex items-center">
                  <span>{currentDemo.pillPreview}</span>
                </span>
              </div>
            </div>

            {/* Live Chat Snippet */}
            <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-1">
              <div className="text-[10px] font-bold text-accent uppercase tracking-wider font-mono">Real Interaction:</div>
              <div className="text-[12px] sm:text-[13px] text-slate-700 font-medium leading-snug">
                {currentDemo.chatSnippet}
              </div>
            </div>
          </div>

          {/* Right: Real Uncropped 1080x1920 Screenshot (5 cols) */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[270px] sm:max-w-[290px] aspect-[9/16] filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.18)] select-none">
              <Image
                src={currentDemo.screenshot}
                alt={currentDemo.title}
                fill
                priority
                sizes="(max-width: 768px) 270px, 290px"
                className="object-contain pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
