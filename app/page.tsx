// SERVER COMPONENTS = sem interatividade
// A HOME PAGE

import Header from "./_components/header" //sem chaves ({}) aqui (import components)
import Image from "next/image"
import { Input } from "./_components/ui/input"
import { Button } from "./_components/ui/button"
import { SearchIcon } from "lucide-react"

const Home = () => {
  return (
    <div>
      {/* HEADER */}
      <Header />

      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Davi!</h2>
        <p>Terça-feira, 02 de setembro.</p>

        <div className="mt-3 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button className="bg-indigo-500">
            <SearchIcon />
          </Button>
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende nos melhores com FSW barber"
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
