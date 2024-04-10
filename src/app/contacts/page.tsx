import { Button } from '@/components/Button'
import * as Input from '@/components/Input'
import { Mail } from 'lucide-react'

export default function Contacts() {
  return (
    <div className="items-center flex justify-between flex-col">
      <div className="flex flex-col w-[760px]">
        <div className="space-y-5">
          <h1>contatos</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, netus gravida enim elit
            habitant ornare at aenean cras ullamcorper. Email, discord sit amet
            consectetur
          </p>
          <h2>Enviar um email:</h2>
          <form id="sendEmail">
            <label htmlFor="subject">Assunto</label>
            <Input.Root>
              <Input.Control id="subject" defaultValue="Sobre oque?" />
            </Input.Root>

            <label htmlFor="email">Email</label>
            <Input.Root>
              <Input.Prefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </Input.Prefix>
              <Input.Control
                id="email"
                type="email"
                defaultValue="exemplo@seuemail.com.br"
              />
            </Input.Root>

            <label htmlFor="subject">Mensagem</label>
            <div className="mt-5">
              <textarea className="resize rounded-md w-72 h-[150px] bg-tuna-900 border border-tuna-100 shadow-sm focus-within:border-violet-300 focus-within:ring-2 focus-within:ring-violet-100"></textarea>
            </div>
            <Button type="button" variant="primary" className="w-72">
              Enviar
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
