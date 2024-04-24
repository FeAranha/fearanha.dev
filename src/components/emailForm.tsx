'use client'

import { Button } from '@/components/Button'
import * as Input from '@/components/Input'
import { Mail } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { sendEmail } from './sendEmail'

export function EmailForm() {
  const [subject, setSubject] = useState('Em que posso te ajudar?')
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('exp@email.com') // Adicionando o estado para o email

  async function send(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault() // Evita o comportamento padrão do formulário

    try {
      const id = await sendEmail(subject, message, email) // Adicionando o email na chamada da função
      toast.success(`Email enviado, ID: ${id}`)
    } catch (error) {
      console.error('Erro ao enviar email:', error)
    }
  }

  return (
    <form id="sendEmail" onSubmit={send}>
      <div className="w-max">
        <label htmlFor="subject">Assunto</label>
        <Input.Root>
          <Input.Control
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
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
            value={email} // Alterando para usar o estado do email
            onChange={(e) => setEmail(e.target.value)} // Atualizando o estado do email
          />
        </Input.Root>
      </div>
      <label htmlFor="subject">Mensagem</label>
      <div className="mt-5">
        <textarea
          id="msg"
          className="resize rounded-md w-[296px] sm:w-[380px] h-[150px] bg-tuna-900 border border-tuna-100 shadow-sm focus-within:border-violet-300 focus-within:ring-2 focus-within:ring-violet-100"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
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
