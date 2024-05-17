'use client'

import { Button } from '@/components/Button'
import * as Input from '@/components/Input'
import { Mail } from 'lucide-react'

interface EmailFormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>
}

export function EmailForm({ onSubmit }: EmailFormProps) {
  return (
    <form id="sendEmail" onSubmit={onSubmit} method="post">
      <div className="w-max">
        <label htmlFor="name">Nome</label>
        <Input.Root>
          <Input.Control
            id="name"
            name="name"
            defaultValue="Qual é o seu nome?"
          />
        </Input.Root>

        <label htmlFor="email">Email</label>
        <Input.Root>
          <Input.Prefix>
            <Mail className="h-5 w-5 text-tuna-100" />
          </Input.Prefix>
          <Input.Control
            id="email"
            name="email"
            type="email"
            defaultValue="exp@email.com"
          />
        </Input.Root>
      </div>
      <label htmlFor="message">Mensagem</label>
      <div className="mt-5">
        <textarea
          id="message"
          name="message"
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
  )
}
