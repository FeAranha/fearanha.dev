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
        <div className="flex flex-col sm:items-center">
          <p className="mb-5 text-justify">
            Iniciei minha carreira como Suporte de TI, avançando rapidamente
            para Analista de TI, onde atuei no Service Desk e como intermediário
            entre ERP e Negócio. Durante seis anos, gerenciei todo o parque de
            TI, incluindo a implantação e monitoramento de um sistema de service
            desk GLPI em ambiente Linux.
          </p>
          <p className="mb-5 text-justify">
            Minhas responsabilidades incluíram a gestão de técnicos de suporte,
            adequação da infraestrutura de TI com foco em licenciamentos de
            software e conformidade com GAP Microsoft, além de implementar
            medidas de segurança da informação, como a conscientização de
            colaboradores, adoção de firewalls e antivírus corporativos.
          </p>
          <p className="mb-5 text-justify">
            Possuo ampla experiência com Hyper-v, CentOS, Windows Server, Active
            Directory e SQLServer, o que me permitiu garantir a eficiência e
            segurança das operações de TI.
          </p>
          <p className="mb-5 text-justify">
            Atualmente, estou focado no desenvolvimento de sistemas web e
            aplicativos móveis. Tenho me aprofundado em JavaScript e TypeScript,
            com expertise em ReactJS e NextJS para frontend, e NodeJS para
            backend. No desenvolvimento mobile, utilizo React Native e Expo,
            aproveitando todo o conhecimento adquirido com ReactJS para criar
            soluções robustas e eficientes.
          </p>
        </div>
        <div className="flex justify-center sm:justify-start sm:w-auto sm:flex-shrink-0">
          <Image
            className="w-[200px] h-[250px] sm:w-[320px] sm:h-[420px] mb-5 ml-5"
            src={ProfileImg}
            alt="foto de perfil"
          />
        </div>
      </div>

      <Carrer />
    </div>
  )
}
