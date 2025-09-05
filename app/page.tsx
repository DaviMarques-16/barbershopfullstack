// SERVER COMPONENTS = sem interatividade (pode ser async)
// A HOME PAGE

{/*BUSCA*/}
import Header from "./_components/header"
import Image from "next/image"
import { Input } from "./_components/ui/input"
import { Button } from "./_components/ui/button"
import { SearchIcon } from "lucide-react"
import { Card, CardContent } from "./_components/ui/card"
import { db } from "./_lib/prisma"
import BarbershopItem from "./_components/barbershop-item"
import { quickSearchOptions } from "./_constants/search"
import BookingItem from "./_components/booking-item"

const Home = async () => {
  //Next e a facilidade com bdd
  //Chamar meu banco de dados
  const barbershops = await db.barbershop.findMany({}) 
  console.log({ barbershops })

  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: 'desc'
    }
  })

  return (
    <div>
      {/* HEADER */}
      <Header />

      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Davi!</h2>
        <p>Quarta-feira, 03 de setembro.</p>

{/*BUSCA*/}
        <div className="mt-3 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button className="bg-indigo-500 rounded-xl">
            <SearchIcon />
          </Button>
        </div>

{/*BUSCA RÁPIDA*/}
      <div className="flex gap-3 mt-6 overflow-x-scroll scrollbar-hide">
        {quickSearchOptions.map((option) => (
          <Button className="gap-2" variant="secondary" key={option.title}>
            <Image 
              src={option.imageUrl} 
              width={16} 
              height={16} 
              alt={option.title}
          />
            {option.title}
          </Button>
        ))}
        </div>
        

       
{/*
         <Button className="gap-2" variant="secondary">
            <Image src="./barba.svg" 
            width={16} 
            height={16} 
            alt="Barba"/>
            Barba
          </Button>
        
       
          <Button className="gap-2" variant="secondary">
            <Image 
            src="./acabamento.svg" 
            width={16} 
            height={16} 
            alt="Acabamento"/>
            Acabamento
          </Button>
     
          <Button className="gap-2" variant="secondary">
            <Image 
            src="./massagem.svg" 
            width={16} 
            height={16} 
            alt="Massagem"/>
            Massagem
          </Button>
        

       
          <Button className="gap-2" variant="secondary">
            <Image 
            src="./sobrancelha.svg" 
            width={16} 
            height={16} 
            alt="Sobrancelha"/>
            Sobrancelha
          </Button>

           <Button className="gap-2" variant="secondary">
            <Image 
            src="./hidratacao.svg" 
            width={16} 
            height={16} 
            alt="Hidratação"/>
            Hidratação
          </Button>
*/}
      

    
        

{/*IMAGEM*/}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende nos melhores com FSW barber"
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>
{/*AGENDAMENTO*/}
        <BookingItem />

         <h2 className="uppercase font-bold text-gray-400 text-xs mt-6 mb-3">Recomendados</h2>

         {/* Passando prop para BarbershopItem */}
         <div className="flex gap-4 overflow-auto scrollbar-hide">
           {barbershops.map(barbershop => (
           <BarbershopItem key={barbershop.id} barbershop={barbershop}/>
           ))}
         </div>


         <h2 className="uppercase font-bold text-gray-400 text-xs mt-6 mb-3">
          Populares
         </h2>

         {/* Passando prop para BarbershopItem */}
         <div className="flex gap-4 overflow-auto scrollbar-hide">
           {popularBarbershops.map(barbershop => (
           <BarbershopItem key={barbershop.id} barbershop={barbershop}/>
           ))}
         </div>

      </div>

      <footer>
        <Card>
          <CardContent className="px-5 py-6">
            <p className="text-sm text-gray-400">© 2025 Copyright
              <span className="font-bold"> FSW Barber</span>
            </p>
          </CardContent>
        </Card>
      </footer>

    </div>

  )
}

export default Home
