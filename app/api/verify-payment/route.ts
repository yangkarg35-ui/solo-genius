import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.formData();
    const file = data.get('screenshot') as File;

    if (!file) {
      return NextResponse.json({ success: false, message: 'No screenshot provided' }, { status: 400 });
    }

    const TELEGRAM_BOT_TOKEN = '8729103974:AAE6T1gJb9mjFnMi3lDW-hW0MAWij0Oll4g';
    const TELEGRAM_CHAT_ID = '6868820956';

    const telegramFormData = new FormData();
    telegramFormData.append('chat_id', TELEGRAM_CHAT_ID);
    telegramFormData.append('photo', file);
    telegramFormData.append('caption', '🚨 New Private Access Payment Received! Please verify the screenshot.');

    const telegramResponse = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendPhoto`, {
      method: 'POST',
      body: telegramFormData,
    });

    if (!telegramResponse.ok) {
      throw new Error('Failed to send notification to Telegram');
    }

    return NextResponse.json({ success: true, message: 'Payment submitted and sent to Telegram successfully.' });
  } catch (error) {
    console.error('Error processing payment:', error);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}