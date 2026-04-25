export const prerender = false;

import type { APIContext } from 'astro';

function notificationTemplate(f: Record<string, string>): string {
  return `
<!DOCTYPE html>
<html lang="cs">
<head><meta charset="UTF-8"><style>
body{font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#0a1628}
h1{background:#0a1628;color:white;padding:20px;margin:0;font-size:20px}
.content{padding:20px}.field{margin:10px 0;padding:10px;background:#f0f2f5;border-radius:6px}
.label{font-size:12px;color:#9aa3b0;font-weight:bold;text-transform:uppercase}
.value{font-size:15px;color:#0a1628;margin-top:3px}
.cta{background:#f97316;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;display:inline-block;margin-top:16px}
</style></head>
<body>
<h1>📨 Nová poptávka — TV-DOPRAVA Busy Višňák</h1>
<div class="content">
<div class="field"><div class="label">Zákazník</div><div class="value">${f.name}</div></div>
<div class="field"><div class="label">Telefon</div><div class="value"><a href="tel:${f.phone}">${f.phone}</a></div></div>
<div class="field"><div class="label">E-mail</div><div class="value"><a href="mailto:${f.email}">${f.email}</a></div></div>
<div class="field"><div class="label">Odkud → Kam</div><div class="value">${f.from} → ${f.to}</div></div>
<div class="field"><div class="label">Datum</div><div class="value">${f.date}${f.returnDate ? ` → ${f.returnDate}` : ''}</div></div>
<div class="field"><div class="label">Počet osob</div><div class="value">${f.passengers}</div></div>
<div class="field"><div class="label">Typ akce</div><div class="value">${f.eventType}</div></div>
${f.message ? `<div class="field"><div class="label">Zpráva</div><div class="value">${f.message}</div></div>` : ''}
</div>
</body></html>`;
}

function autoReplyTemplate(f: Record<string, string>): string {
  return `
<!DOCTYPE html>
<html lang="cs">
<head><meta charset="UTF-8"><style>
body{font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#0a1628}
h1{background:#0a1628;color:white;padding:20px;margin:0;font-size:20px}
.content{padding:20px;line-height:1.7}
.highlight{background:#fff7ed;border-left:4px solid #f97316;padding:12px 16px;margin:16px 0;border-radius:0 8px 8px 0}
.footer{padding:20px;background:#f0f2f5;font-size:13px;color:#9aa3b0}
a{color:#f97316}
</style></head>
<body>
<h1>✅ Přijali jsme vaši poptávku</h1>
<div class="content">
<p>Dobrý den, <strong>${f.name}</strong>,</p>
<p>děkujeme za váš zájem o naše služby. Přijali jsme vaši poptávku na přepravu:</p>
<div class="highlight">
<strong>${f.from} → ${f.to}</strong><br/>
Datum: ${f.date}${f.returnDate ? ` → ${f.returnDate}` : ''}<br/>
Počet osob: ${f.passengers}<br/>
Typ akce: ${f.eventType}
</div>
<p>Ozveme se vám do <strong>24 hodin</strong> s cenovou nabídkou.</p>
<p>Pokud máte dotazy, kontaktujte nás přímo:<br/>
📞 <a href="tel:+420475123456">+420 475 123 456</a><br/>
✉️ <a href="mailto:info@tv-doprava.cz">info@tv-doprava.cz</a>
</p>
<p>S pozdravem,<br/><strong>Tým TV-DOPRAVA / Busy Višňák</strong></p>
</div>
<div class="footer">TV-DOPRAVA s.r.o. · Příkladná 123, 400 01 Ústí nad Labem · <a href="https://www.tv-doprava.cz">www.tv-doprava.cz</a></div>
</body></html>`;
}

export async function POST({ request }: APIContext): Promise<Response> {
  const json = (data: object, status = 200) =>
    new Response(JSON.stringify(data), {
      status,
      headers: { 'Content-Type': 'application/json' },
    });

  let data: FormData;
  try {
    data = await request.formData();
  } catch {
    return json({ success: false, error: 'Invalid request' }, 400);
  }

  // Honeypot check
  if (data.get('website')) {
    return json({ success: true });
  }

  const fields: Record<string, string> = {};
  for (const key of ['from', 'to', 'date', 'passengers', 'eventType', 'name', 'phone', 'email', 'message', 'returnDate']) {
    fields[key] = (data.get(key) as string | null) ?? '';
  }

  const required = ['from', 'to', 'date', 'passengers', 'eventType', 'name', 'phone', 'email'];
  const missing = required.filter(k => !fields[k]?.trim());
  if (missing.length > 0) {
    return json({ success: false, error: 'Missing required fields', missing }, 400);
  }

  const RESEND_API_KEY = import.meta.env.RESEND_API_KEY;
  if (!RESEND_API_KEY) {
    console.error('RESEND_API_KEY not set');
    return json({ success: false, error: 'Server configuration error' }, 500);
  }

  const companyEmail = 'poptavka@tv-doprava.cz';
  const senderDomain = 'tv-doprava.cz';

  try {
    await Promise.all([
      // Notification to company
      fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: `Web <web@${senderDomain}>`,
          to: [companyEmail],
          subject: `Nová poptávka od ${fields.name} — ${fields.eventType} (${fields.from} → ${fields.to})`,
          html: notificationTemplate(fields),
        }),
      }),
      // Auto-reply to customer
      fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: `TV-DOPRAVA Busy Višňák <info@${senderDomain}>`,
          to: [fields.email],
          subject: 'Přijali jsme vaši poptávku — TV-DOPRAVA Busy Višňák',
          html: autoReplyTemplate(fields),
        }),
      }),
    ]);

    return json({ success: true });
  } catch (err) {
    console.error('Resend error:', err);
    return json({ success: false, error: 'Email send failed' }, 500);
  }
}
