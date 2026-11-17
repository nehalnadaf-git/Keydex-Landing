import { NextRequest, NextResponse } from 'next/server';
import { submitToGoogleSheets } from '@/lib/google-sheets';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, platform } = body;

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const userAgent = request.headers.get('user-agent') || 'Unknown';
    const referrer = request.headers.get('referer') || 'Direct';

    const result = await submitToGoogleSheets({
      email: email.trim().toLowerCase(),
      platform: platform === 'android' ? 'android' : 'ios',
      userAgent,
      referrer,
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error('Waitlist API error:', error);
    return NextResponse.json(
      { error: 'Unable to save to waitlist right now. Please try again.' },
      { status: 500 }
    );
  }
}
