'use server'

import { Resend } from 'resend'
import EmailTemplate from '@/components/emailTemplate'
import { render } from '@react-email/render'

interface State {
  error: string | null
  success: boolean
}

export const sendEmail = async (prevState: State, formData: FormData) => {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['felipearanha.c@gmail.com'],
      subject: name,
      reply_to: email,
      html: render(EmailTemplate({ name, email, message })),
      text: message,
    })
    return {
      error: null,
      success: true,
    }
  } catch (error) {
    console.log(error)
    return {
      error: (error as Error).message,
      success: false,
    }
  }
}
