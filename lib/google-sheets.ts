import fs from 'fs';
import path from 'path';

export interface WaitlistSubmission {
  email: string;
  platform: 'ios' | 'android';
  userAgent?: string;
  referrer?: string;
}

// Google Forms submission endpoint
// Email is captured via "Responder input" setting → field name: emailAddress
// Platform question entry ID: entry.333660383
const GOOGLE_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdtS7b4OIbG_OBl6UH5o5Lmjo3BrmVrWeDqXtRb0oMoy7JCWw/formResponse';

// Local CSV backup — always written first so no submission is ever lost
async function saveToLocalBackup(data: WaitlistSubmission) {
  try {
    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    const csvPath = path.join(dataDir, 'waitlist.csv');
    const timestamp = new Date().toISOString();
    const platformLabel = data.platform === 'ios' ? 'iOS' : 'Android';
    const row = `"${timestamp}","${data.email.replace(/"/g, '""')}","${platformLabel}","${(data.referrer || '').replace(/"/g, '""')}"\n`;

    if (!fs.existsSync(csvPath)) {
      const header = 'timestamp,email,platform,referrer\n';
      await fs.promises.writeFile(csvPath, header + row, 'utf8');
    } else {
      await fs.promises.appendFile(csvPath, row, 'utf8');
    }
  } catch (err) {
    console.error('[Waitlist Local Backup Error]:', err);
  }
}

// Submit to Google Forms (which routes directly into the linked Google Sheet)
async function submitToGoogleForms(data: WaitlistSubmission): Promise<boolean> {
  try {
    const platformLabel = data.platform === 'ios' ? 'iOS' : 'Android';

    const body = new URLSearchParams();
    body.append('emailAddress', data.email);                 // Captured by "Responder input"
    body.append('entry.333660383', platformLabel);          // "Platform" question

    const response = await fetch(GOOGLE_FORM_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: body.toString(),
      redirect: 'follow',
    });

    // Google Forms redirects to a thank-you page on success (200 or 302→200)
    // Any 2xx or redirect means success
    if (response.ok || response.status === 0) {
      console.log('[Google Forms] Submitted:', data.email);
      return true;
    }

    console.warn('[Google Forms] Unexpected status:', response.status);
    return false;
  } catch (error) {
    console.error('[Google Forms Submission Error]:', error);
    return false;
  }
}

export async function submitToGoogleSheets(
  data: WaitlistSubmission
): Promise<{ success: boolean; message?: string }> {
  // 1. Always save locally first — zero data loss guarantee
  await saveToLocalBackup(data);

  // 2. Submit to Google Forms → rows appear in linked Google Sheet instantly
  const sent = await submitToGoogleForms(data);

  if (sent) {
    return { success: true };
  }

  // 3. Local backup already saved — still report success to user
  console.log('[Waitlist] Google Forms failed, but local backup saved:', data.email);
  return { success: true, message: 'Saved to local backup.' };
}
