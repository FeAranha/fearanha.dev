'use client'

import { Mail } from 'lucide-react'
import * as Input from '@/components/Input'
import { Button } from '@/components/Button'

import React from 'react'

export function FormContacts() {
  async function send(event: React.FormEvent<HTMLFormElement>) {
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

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      })

      const result = await response.json()
      if (response.ok) {
        console.log('Email sent successfully:', result)
        // TODO toast
        alert('Email enviado!')
      } else {
        console.error('Error sending email:', result)
      }
    } catch (error) {
      console.error('Error sending email:', error)
      alert('Falha no envio!')
    }
  }

  return (
    <form id="sendEmail" onSubmit={send} method="post">
      <div className="w-max">
        <label htmlFor="name">Nome</label>
        <Input.Root>
          <Input.Control
            id="name"
            name="name"
            defaultValue="Como posso te chamar?"
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
