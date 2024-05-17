import { EmailForm } from '@/components/emailForm'
import { EmailTemplate } from '@/components/emailTemplate'
import { Resend } from 'resend'

export default function Contacts() {
  async function send(event: React.FormEvent<HTMLFormElement>) {
    'use server'

    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')

    if (
      typeof name !== 'string' ||
      typeof email !== 'string' ||
      typeof message !== 'string'
    ) {
      console.error('All fields are required.')
      return
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['felipearanha.c@gmail.com'],
      subject: `Novo contato de ${name}`,
      react: EmailTemplate({ name, email, message }),
      text: message,
    })

    console.log(data)
  }

  return (
    <div className="flex items-center flex-col">
      <div className="flex flex-col space-y-5 max-w-[760px]">
        <h1 className="flex w-max text-3xl font-bold bg-gradient-to-r from-red-400 via-moonRoker-400 to-blueZodiac-500 text-transparent bg-clip-text">
          Envie um email, me chame no discord
        </h1>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur, netus gravida enim elit
          habitant ornare at aenean cras ullamcorper. Email, discord sit amet
          consectetur
        </p>
        <h2>Enviar um email:</h2>
        <EmailForm onSubmit={send} />
      </div>
    </div>
  )
}
