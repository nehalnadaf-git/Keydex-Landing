'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  onOpenWaitlist: (platform?: 'ios' | 'android') => void;
}

export function Navigation({ onOpenWaitlist }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 bg-white/80 backdrop-blur-md border-b border-slate-200/80 shadow-xs ${
          scrolled ? 'py-3 bg-white/90 shadow-sm' : 'py-3.5 sm:py-4'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 relative flex items-center justify-center">
              <Image
                src="/logo-light.png"
                alt="Keydex Logo"
                width={32}
                height={32}
                className="object-contain"
                priority
              />
            </div>
            <span className="font-bold text-xl tracking-title text-shark">Keydex</span>
          </a>

          {/* Center Desktop Links */}
          <nav className="hidden md:flex items-center gap-7 text-[14px] font-medium tracking-body text-shark-muted">
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
          </nav>

          {/* Right CTA Button (Desktop Only) */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => onOpenWaitlist()}
              className="px-5 py-2 rounded-full bg-shark hover:bg-black text-white text-[13px] font-semibold tracking-pill shadow-xs transition-all transform active:scale-95"
            >
              Download
            </button>
          </div>

          {/* Minimalist Mobile Hamburger Toggle (No background, bare icon) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-shark hover:text-black transition-all active:scale-90"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X size={22} strokeWidth={2.2} /> : <Menu size={22} strokeWidth={2.2} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu & Backdrop */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 top-[57px] bg-black/20 backdrop-blur-xs z-30 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="fixed inset-x-0 top-[57px] z-40 bg-white/95 backdrop-blur-xl border-b border-slate-200/90 shadow-xl px-5 py-5 md:hidden animate-in fade-in slide-in-from-top-2 duration-150">
            <nav className="flex flex-col space-y-1">
              <a
                href="#how-it-works"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[15px] font-semibold text-shark/80 hover:text-shark hover:bg-slate-50 px-3 py-2.5 rounded-xl transition-colors"
              >
                How It Works
              </a>
              <a
                href="#features"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[15px] font-semibold text-shark/80 hover:text-shark hover:bg-slate-50 px-3 py-2.5 rounded-xl transition-colors"
              >
                Features
              </a>
              <a
                href="#showcase"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[15px] font-semibold text-shark/80 hover:text-shark hover:bg-slate-50 px-3 py-2.5 rounded-xl transition-colors"
              >
                Screens
              </a>
              <a
                href="#security"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[15px] font-semibold text-shark/80 hover:text-shark hover:bg-slate-50 px-3 py-2.5 rounded-xl transition-colors"
              >
                Privacy
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[15px] font-semibold text-shark/80 hover:text-shark hover:bg-slate-50 px-3 py-2.5 rounded-xl transition-colors"
              >
                FAQ
              </a>
            </nav>

            {/* Mobile Download CTA Inside Hamburger Menu */}
            <div className="pt-4 mt-3 border-t border-slate-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWaitlist();
                }}
                className="w-full py-3 rounded-xl bg-shark hover:bg-black text-white text-[14px] font-semibold tracking-pill shadow-xs transition-all transform active:scale-98 flex items-center justify-center gap-2"
              >
                <span>Download Keydex</span>
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

