import { Resend } from 'resend'
import { EmailTemplate } from '@/components/emailTemplate'

export async function sendEmail(subject: string, message: string) {
  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['felipearanha.c@gmail.com'],
      subject,
      react: EmailTemplate({ msg: message }),
      text: message,
    })

    return data.data?.id
  } catch (error) {
    throw new Error('Erro ao enviar email:' + error)
  }
}