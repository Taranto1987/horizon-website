import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const secretKey = request.headers.get('x-webhook-secret')
    
    // Verificar chave secreta
    if (secretKey !== process.env.WEBHOOK_SECRET) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    
    // Log da interação para monitoramento
    console.log('WhatsApp webhook received:', {
      timestamp: new Date().toISOString(),
      from: body.from,
      message: body.message,
      type: body.type
    })
    
    // Aqui você pode processar a mensagem do WhatsApp
    // Por exemplo, salvar no banco de dados, enviar para analytics, etc.
    
    // Resposta automática simples (opcional)
    let response = null
    
    if (body.message?.toLowerCase().includes('horário') || 
        body.message?.toLowerCase().includes('funcionamento')) {
      response = {
        to: body.from,
        message: 'Funcionamos de segunda a sexta das 8h às 18h, e sábados das 8h às 14h.'
      }
    } else if (body.message?.toLowerCase().includes('endereço') || 
               body.message?.toLowerCase().includes('localização')) {
      response = {
        to: body.from,
        message: 'Estamos localizados em Cabo Frio - RJ. Em breve teremos o endereço completo disponível!'
      }
    } else if (body.message?.toLowerCase().includes('produto') || 
               body.message?.toLowerCase().includes('preço')) {
      response = {
        to: body.from,
        message: 'Ótimo! Nossos produtos são de alta qualidade. Em breve um atendente entrará em contato para mais informações.'
      }
    }
    
    // Se houver resposta automática, você pode enviá-la aqui
    if (response && process.env.WHATSAPP_API_URL && process.env.WHATSAPP_TOKEN) {
      try {
        await fetch(process.env.WHATSAPP_API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.WHATSAPP_TOKEN}`
          },
          body: JSON.stringify(response)
        })
      } catch (error) {
        console.error('Error sending WhatsApp response:', error)
      }
    }
    
    return NextResponse.json({ 
      success: true, 
      message: 'Webhook processed successfully',
      autoResponse: response ? true : false
    })
    
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Internal server error' }, 
      { status: 500 }
    )
  }
}

export async function GET() {
  // Verificação de webhook (para alguns provedores)
  return NextResponse.json({ 
    status: 'WhatsApp webhook endpoint active',
    timestamp: new Date().toISOString()
  })
}