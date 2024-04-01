import { Carrer } from '@/components/career'
import Image from 'next/image'
import ProfileImg from '../../../public/static/images/profile.png'
export default function About() {
  return (
    <div className="flex items-center flex-col">
      <h1 className="pb-10 text-3xl font-bold bg-gradient-to-r from-blueZodiac-900 via-blueZodiac-400 to-emerald-500 inline-block text-transparent bg-clip-text">
        Descobrir, definir, desenvolver, entregar ♻
      </h1>
      <div className="flex flex-col-reverse max-w-[760px] justify-center items-center sm:flex-row">
        <div className="flex flex-col">
          <p className="mb-5">
            Iniciei como Suporte de TI e depois como Administrador de Redes,
            Service Desk e intermediário entre ERP e Negócio. Atuei por 6 anos
            como Analista de TI gerenciando todo o parque de TI.
          </p>
          <p className="mb-5">
            Implantei e monitorei um sistema de service desk GLPI em ambiente
            Linux, gerenciei técnicos de suporte, adequei toda a infraestrutura
            com relação a licenciamentos de softwares e GAP Microsoft e
            segurança da informação conscientizando colaboradores e adoção de
            firewall, antivírus corporativo entre outras medidas.
          </p>
          <p className="mb-5">
            Atualmente Desenvolvo sistemas Web e aplicativos, venho me
            aprofundando em JavaScript e TypeScript, especificamente na
            biblioteca ReactJS e framework NextJS, no Backend com NodeJS e
            NestJS e no desenvolvimento Mobile com ReactNative e expo
            aproveitando os conhecimentos de ReactJS.
          </p>
        </div>
        <Image
          className="self-stretch w-[200px] h-[250px] sm:w-[300px] sm:h-[400px] mb-5"
          src={ProfileImg}
          alt=""
        />
      </div>

      <Carrer />
    </div>
  )
}
