import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { EmailTemplate } from '@/components/emailTemplate'

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json()

  if (!name || !email || !message) {
    return NextResponse.json(
      { message: 'All fields are required' },
      { status: 400 },
    )
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['felipearanha.c@gmail.com'],
      subject: `Novo contato de ${name}`,
      react: EmailTemplate({ name, email, message }),
      text: message,
    })

    return NextResponse.json(
      { message: 'Email sent successfully', data },
      { status: 200 },
    )
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to send email', error },
      { status: 500 },
    )
  }
}
