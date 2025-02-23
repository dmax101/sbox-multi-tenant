import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();
    console.log('Webhook recebido:', payload);

    // Aqui você pode adicionar a lógica para processar os dados do webhook

    return NextResponse.json({ status: 'success', data: payload });
  } catch (error) {
    console.error('Erro ao processar o webhook:', error);
    return NextResponse.json({ status: 'error', message: 'Erro ao processar o webhook' }, { status: 500 });
  }
}
