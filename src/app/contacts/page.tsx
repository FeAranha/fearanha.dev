import { Button } from '@/components/Button'
import * as Input from '@/components/Input'
import { EmailTemplate } from '@/components/emailTemplate'
import { Mail } from 'lucide-react'
import { Resend } from 'resend'

export default async function Contacts() {
  async function send() {
    'use server'

    const resend = new Resend(process.env.RESEND_API_KEY)

    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['felipearanha.c@gmail.com'],
      subject: 'Hello world',
      react: EmailTemplate({ firstName: 'John' }),
      text: 'test',
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
        <form id="sendEmail" action={send}>
          <div className="w-max">
            <label htmlFor="subject">Assunto</label>
            <Input.Root>
              <Input.Control
                id="subject"
                defaultValue="Em que posso te ajudar?"
              />
            </Input.Root>

            <label htmlFor="email">Email</label>
            <Input.Root>
              <Input.Prefix>
                <Mail className="h-5 w-5 text-tuna-100" />
              </Input.Prefix>
              <Input.Control
                id="email"
                type="email"
                defaultValue="exp@email.com"
              />
            </Input.Root>
          </div>
          <label htmlFor="subject">Mensagem</label>
          <div className="mt-5">
            <textarea
              id="msg"
              className="resize rounded-md w-[296px] sm:w-[380px] h-[150px] bg-tuna-900 border border-tuna-100 shadow-sm focus-within:border-violet-300 focus-within:ring-2 focus-within:ring-violet-100"
            ></textarea>
          </div>
          <Button
            type="submit"
            form="sendEmail"
            variant="primary"
            className="sm:w-[380px] w-[296px] mb-10"
          >
            Enviar
          </Button>
        </form>
      </div>
    </div>
  )
}
