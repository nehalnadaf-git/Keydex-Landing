'use client';

import React, { useState, useEffect } from 'react';
import { X, Check, AlertCircle, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlatform?: 'ios' | 'android';
}

export function WaitlistModal({
  isOpen,
  onClose,
  defaultPlatform = 'ios',
}: WaitlistModalProps) {
  const [email, setEmail] = useState('');
  const [platform, setPlatform] = useState<'ios' | 'android'>(defaultPlatform);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Update platform when prop changes
  useEffect(() => {
    if (defaultPlatform) {
      setPlatform(defaultPlatform);
    }
  }, [defaultPlatform]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), platform }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong.');
      }

      setSubmitted(true);
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 },
        });
      } catch {
        // Fallback if canvas is unavailable
      }
    } catch (err: any) {
      setError(err.message || 'Unable to join waitlist. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[380px] bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-100 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-shark hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X size={17} />
        </button>

        {!submitted ? (
          <div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-shark">
              Join the Waitlist.
            </h3>
            <p className="mt-1.5 text-[14px] text-slate-500 leading-relaxed">
              Be the first to experience Keydex. We’ll notify you when early access opens.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {/* Email Input Field */}
              <div>
                <label className="block text-[12px] font-medium text-slate-500 mb-1.5">
                  Email address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  required
                  autoFocus
                  className="w-full h-11 px-3.5 rounded-xl border border-slate-200/90 bg-white text-shark text-[14px] placeholder:text-slate-400 focus:outline-hidden focus:border-shark focus:ring-1 focus:ring-shark transition-all"
                />
              </div>

              {error && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-red-50 text-red-600 text-[12px] font-medium border border-red-100">
                  <AlertCircle size={14} className="shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={loading}
                className="w-full h-11 rounded-xl bg-shark hover:bg-black text-white font-semibold text-[14px] shadow-xs hover:shadow-sm transition-all transform active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>Joining...</span>
                  </>
                ) : (
                  <span>Get Early Access</span>
                )}
              </button>

              <p className="text-[12px] text-slate-400 text-center pt-0.5">
                No spam. Unsubscribe at any time.
              </p>
            </form>
          </div>
        ) : (
          /* Success Confirmation State */
          <div className="py-5 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-slate-100 text-shark mx-auto flex items-center justify-center">
              <Check size={22} className="stroke-[2.5]" />
            </div>

            <h3 className="text-xl font-bold tracking-tight text-shark">
              You’re on the list.
            </h3>

            <p className="text-[13.5px] text-slate-500 max-w-xs mx-auto leading-relaxed">
              We’ve reserved your spot for{' '}
              <span className="font-semibold text-shark">
                {platform === 'ios' ? 'iOS' : 'Android'}
              </span>
              . We’ll send your invitation to:
            </p>

            <div className="inline-block px-3.5 py-1.5 rounded-lg bg-slate-100 text-slate-800 text-[13px] font-medium font-mono">
              {email}
            </div>

            <div className="pt-2">
              <button
                onClick={onClose}
                className="w-full h-10 rounded-xl bg-shark text-white text-[13px] font-semibold hover:bg-black transition-all"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
