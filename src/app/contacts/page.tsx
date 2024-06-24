import { FormContacts } from './Form'

export default function Contacts() {
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
        <FormContacts />
      </div>
    </div>
  )
}
