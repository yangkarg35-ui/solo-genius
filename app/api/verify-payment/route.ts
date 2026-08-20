import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // ပေးထားသော Bot Token နှင့် Chat ID ကို တိုက်ရိုက်အသုံးပြုခြင်း
    const BOT_TOKEN = '8729103974:AAE6T1gJb9mjFnMi3lDW-hW0MAWij0Oll4g';
    const CHAT_ID = '6868820956';

    const message = `
🚨 *NEW SOLO GENIUS APPLICATION* 🚨

📌 *Reference:* \`${data.appReference}\`
👤 *Full Name:* ${data.fullName}
🏷 *Preferred Name:* ${data.preferredName || '-'}
📧 *Email:* ${data.email}
📞 *Phone:* ${data.phone}
📍 *Location:* ${data.city}
🎂 *Age Range:* ${data.ageRange || '-'}

📊 *Experience Level:* ${data.experienceLevel || '-'}
🎯 *Current Focus:* ${data.currentFocus || '-'}
⚠️ *Biggest Challenge:* ${data.biggestChallenge || '-'}
💡 *Previous Attempts:* ${data.previousAttempts || '-'}

🚀 *Desired Areas:* ${data.desiredAreas?.join(', ') || '-'}
⚡ *Desired Capabilities:* ${data.desiredCapabilities || '-'}
🔥 *Transformation Why:* ${data.transformationWhy || '-'}
📈 *12-Month Vision:* ${data.twelveMonthVision || '-'}

🧠 *Learning Environments:* ${data.learningEnvironments?.join(', ') || '-'}
⏱ *Weekly Commitment:* ${data.weeklyCommitment || '-'}
🚧 *Progress Obstacles:* ${data.progressObstacles || '-'}

💎 *Valued Traits:* ${data.valuedTraits?.join(', ') || '-'}
🌟 *Exceptional Expectation:* ${data.exceptionalExperienceExpectation || '-'}
🏛 *Institution Expectations:* ${data.institutionExpectations || '-'}

🔍 *Discovery Source:* ${data.discoverySource || '-'}
🎓 *Program Interest:* ${data.programInterest || '-'}
📝 *Additional Notes:* ${data.additionalNotes || '-'}
    `;

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