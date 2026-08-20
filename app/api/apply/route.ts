import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const BOT_TOKEN = '8729103974:AAE6T1gJb9mjFnMi3lDW-hW0MAWij0Oll4g';
    const CHAT_ID = '6868820956';

    const message = `
🎯 NEW SOLO GENIUS APPLICATION

📋 REFERENCE: ${data.appReference || '-'}
👤 FULL NAME: ${data.fullName || '-'}
🏷️ PREFERRED NAME: ${data.preferredName || '-'}
📧 EMAIL: ${data.email || '-'}
📞 PHONE: ${data.phone || '-'}
📍 LOCATION: ${data.city || '-'}
🎂 AGE RANGE: ${data.ageRange || '-'}

--- WHERE YOU ARE ---
🔹 Experience Level: ${data.experienceLevel || '-'}
🔹 Current Focus: ${data.currentFocus || '-'}
🔹 Biggest Challenge: ${data.biggestChallenge || '-'}
🔹 Previous Attempts: ${data.previousAttempts || '-'}

--- WHERE YOU WANT TO GO ---
🔸 Desired Areas: ${data.desiredAreas?.join(', ') || '-'}
🔸 Desired Capabilities: ${data.desiredCapabilities || '-'}
🔸 Transformation Why: ${data.transformationWhy || '-'}
🔸 12-Month Vision: ${data.twelveMonthVision || '-'}

--- HOW YOU LEARN ---
⚙️ Learning Environments: ${data.learningEnvironments?.join(', ') || '-'}
⚙️ Weekly Commitment: ${data.weeklyCommitment || '-'}
⚙️ Progress Obstacles: ${data.progressObstacles || '-'}

--- EXPERIENCE & STANDARDS ---
⭐ Valued Traits: ${data.valuedTraits?.join(', ') || '-'}
⭐ Exceptional Expectation: ${data.exceptionalExperienceExpectation || '-'}
⭐ Institution Expectations: ${data.institutionExpectations || '-'}

--- FINAL DETAILS ---
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