import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    // Optional: Check Origin Header to prevent unauthorized cross-origin requests
    const origin = req.headers.get('origin');
    // Uncomment and adjust your domain if needed:
    // if (origin && !origin.includes('yourdomain.com') && process.env.NODE_ENV === 'production') {
    //   return NextResponse.json({ success: false, error: 'Unauthorized origin' }, { status: 403 });
    // }

    const data = await req.json();

    // Use Environment Variables for maximum security
    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!BOT_TOKEN || !CHAT_ID) {
      console.error('Missing Telegram credentials in environment variables.');
      return NextResponse.json({ success: false, error: 'Server configuration error' }, { status: 500 });
    }

    const message = `
🎯 *NEW SOLO GENIUS APPLICATION*

📋 *REFERENCE:* \`${data.appReference || '-'}\`
👤 *FULL NAME:* ${data.fullName || '-'}
🏷️ *PREFERRED NAME:* ${data.preferredName || '-'}
📧 *EMAIL:* ${data.email || '-'}
📞 *PHONE:* ${data.phone || '-'}
📍 *LOCATION:* ${data.city || '-'}
🎂 *AGE RANGE:* ${data.ageRange || '-'}

--- *WHERE YOU ARE* ---
🔹 Experience Level: ${data.experienceLevel || '-'}
🔹 Current Focus: ${data.currentFocus || '-'}
🔹 Biggest Challenge: ${data.biggestChallenge || '-'}
🔹 Previous Attempts: ${data.previousAttempts || '-'}

--- *WHERE YOU WANT TO GO* ---
🔸 Desired Areas: ${data.desiredAreas?.join(', ') || '-'}
🔸 Desired Capabilities: ${data.desiredCapabilities || '-'}
🔸 Transformation Why: ${data.transformationWhy || '-'}
🔸 12-Month Vision: ${data.twelveMonthVision || '-'}

--- *HOW YOU LEARN* ---
⚙️ Learning Environments: ${data.learningEnvironments?.join(', ') || '-'}
⚙️ Weekly Commitment: ${data.weeklyCommitment || '-'}
⚙️ Progress Obstacles: ${data.progressObstacles || '-'}

--- *EXPERIENCE & STANDARDS* ---
⭐ Valued Traits: ${data.valuedTraits?.join(', ') || '-'}
⭐ Exceptional Expectation: ${data.exceptionalExperienceExpectation || '-'}
⭐ Institution Expectations: ${data.institutionExpectations || '-'}

--- *FINAL DETAILS* ---
🚀 Discovery Source: ${data.discoverySource || '-'}
🚀 Program Interest: ${data.programInterest || '-'}
📝 Additional Notes: ${data.additionalNotes || '-'}
    `.trim();

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    const result = await response.json();

    if (!result.ok) {
      console.error('Telegram API Error:', result);
      return NextResponse.json({ success: false, error: result.description }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Transmission Exception:', error);
    return NextResponse.json({ success: false, error: 'Transmission failed' }, { status: 500 });
  }
}