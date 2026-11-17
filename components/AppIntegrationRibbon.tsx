'use client';

import React from 'react';
import {
  MessageSquare,
  Instagram,
  Send,
  Mail,
  Slack,
  FileText,
  Globe,
  Twitter,
} from 'lucide-react';

const INTEGRATIONS = [
  { name: 'WhatsApp', icon: MessageSquare, color: 'hover:text-[#25D366]' },
  { name: 'Instagram', icon: Instagram, color: 'hover:text-[#E1306C]' },
  { name: 'Telegram', icon: Send, color: 'hover:text-[#2AABEE]' },
  { name: 'Gmail', icon: Mail, color: 'hover:text-[#EA4335]' },
  { name: 'Slack', icon: Slack, color: 'hover:text-[#4A154B]' },
  { name: 'Notes', icon: FileText, color: 'hover:text-[#F59E0B]' },
  { name: 'Chrome', icon: Globe, color: 'hover:text-[#4285F4]' },
  { name: 'X', icon: Twitter, color: 'hover:text-black' },
];

export function AppIntegrationRibbon() {
  return (
    <section className="py-8 sm:py-10 border-y border-slate-200/80 bg-white/70 backdrop-blur-xs overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-[11px] sm:text-[12px] font-semibold text-slate-400 uppercase tracking-wider mb-5 sm:mb-6">
          Works seamlessly across every app
        </p>

        {/* Single-Line Horizontal Logo Strip (Strictly One Line) */}
        <div className="flex flex-nowrap items-center justify-start md:justify-center gap-5 sm:gap-7 md:gap-9 overflow-x-auto no-scrollbar py-1">
          {INTEGRATIONS.map((app) => {
            const Icon = app.icon;
            return (
              <div
                key={app.name}
                className={`shrink-0 flex items-center gap-2 text-slate-500 transition-colors cursor-default group ${app.color}`}
              >
                <div className="w-8 h-8 rounded-xl bg-slate-100 group-hover:bg-slate-200/80 flex items-center justify-center transition-colors">
                  <Icon size={16} className="transition-transform group-hover:scale-110" />
                </div>
                <span className="text-[13px] sm:text-[14px] font-semibold tracking-pill text-shark-muted group-hover:text-shark transition-colors">
                  {app.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
