import { Button } from '@/components/Button'
import * as Input from '@/components/Input'
import { Mail } from 'lucide-react'

export default function Contacts() {
  return (
    <div className="items-center flex justify-between flex-col">
      <div className="flex flex-col lg:w-[760px]">
        <div className="flex flex-col space-y-5">
          <h1 className="w-max text-3xl font-bold bg-gradient-to-r from-blueZodiac-900 via-blueZodiac-400 to-emerald-500 inline-block text-transparent bg-clip-text">
            Contatos
          </h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur, netus gravida enim elit
            habitant ornare at aenean cras ullamcorper. Email, discord sit amet
            consectetur
          </p>
          <h2>Enviar um email:</h2>
          <form id="sendEmail">
            <div className="w-max">
              <label htmlFor="subject">Assunto</label>
              <Input.Root>
                <Input.Control id="subject" defaultValue="Sobre oque?" />
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
                className="resize rounded-md w-[296px] lg:w-[380px] h-[150px] bg-tuna-900 border border-tuna-100 shadow-sm focus-within:border-violet-300 focus-within:ring-2 focus-within:ring-violet-100"
              ></textarea>
            </div>
            <Button
              type="submit"
              form="sendEmail"
              variant="primary"
              className="w-[296px] mb-10"
            >
              Enviar
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
