'use client'

import { Button } from '@/components/Button'
import * as Input from '@/components/Input'
import { Mail } from 'lucide-react'
import { useEffect } from 'react'
import { sendEmail } from '@/actions'
import { useFormState } from 'react-dom'

export function EmailForm() {
  const [sendEmailState, sendEmailAction] = useFormState(sendEmail, {
    error: null,
    success: false,
  })

  useEffect(() => {
    if (sendEmailState.success) {
      alert('Email sent!')
    }
    if (sendEmailState.error) {
      alert('Error sending email!')
    }
  }, [sendEmailState])

  return (
    <form id="sendEmail" action={sendEmailAction}>
      <div className="w-max">
        <label htmlFor="subject">Nome:</label>
        <Input.Root>
          <Input.Control id="name" defaultValue="Como posso te chamar?" />
        </Input.Root>

        <label htmlFor="email">Email:</label>
        <Input.Root>
          <Input.Prefix>
            <Mail className="h-5 w-5 text-tuna-100" />
          </Input.Prefix>
          <Input.Control id="email" type="email" defaultValue="exp@email.com" />
        </Input.Root>
      </div>
      <label htmlFor="message">Mensagem:</label>
      <div className="mt-5">
        <textarea
          id="message"
          defaultValue=""
          className="resize rounded-md w-[296px] sm:w-[380px] h-[150px] bg-tuna-900 border border-tuna-100 shadow-sm focus-within:border-violet-300 focus-within:ring-2 focus-within:ring-violet-100"
        ></textarea>
      </div>
      <Button
        type="submit"
        variant="primary"
        className="sm:w-[380px] w-[296px] mb-10"
      >
        Enviar
      </Button>
    </form>
  )
}
