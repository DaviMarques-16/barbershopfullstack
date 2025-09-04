// SERVER COMPONENTS = sem interatividade (pode ser async)
// A HOME PAGE

{/*BUSCA*/}
import Header from "./_components/header"
import Image from "next/image"
import { Input } from "./_components/ui/input"
import { Button } from "./_components/ui/button"
import { Badge } from "./_components/ui/badge"
import { SearchIcon } from "lucide-react"
import { Card, CardContent } from "./_components/ui/card"
import { Avatar, AvatarImage } from "./_components/ui/avatar"
import { db } from "./_lib/prisma"
import BarbershopItem from "./_components/barbershop-item"

interface QuickSearchOptions {
  imageUrl: string;
  title: string
}

const quickSearchOptions: QuickSearchOptions[] = [{
  imageUrl: "./cabelo.svg",
  title: "Cabelo"
}, {
  imageUrl: "./barba.svg",
  title: "Barba"
}, {
  imageUrl: "./acabamento.svg",
  title: "Acabamento"
}, {
  imageUrl: "./massagem.svg",
  title: "Massagem"
}, {
  imageUrl: "./sobrancelha.svg",
  title: "Sobrancelha"
}, {
  imageUrl: "./hidratacao.svg",
  title: "Hidratação"
}
]

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
        <h2 className="uppercase font-bold text-gray-400 text-xs mt-6 mb-3">Agendamentos</h2>
        <Card>
            <CardContent className="flex justify-between p-0">
                {/* DIV LEFT */}
                <div className="flex flex-col gap-2 py-5 pl-5">
                    <Badge className="bg-indigo-500 w-fit">Confirmado</Badge>
                    <h3 className="font-bold">Corte de Cabelo</h3>

                     <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6 rounded-xl">
                            <AvatarImage 
                                src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
                            </Avatar>
                            <p className="text-sm">Barbearia FSW</p>
                      </div>
                </div>
                {/* DIV RIGHT */}
                <div className="flex flex-col items-center justify-center px-5 border-l-2 solid">
                  <p className="text-sm">Setembro</p>
                  <p className="text-2xl">03</p>
                  <p className="text-sm">20:00</p>
                </div>
            </CardContent>
        </Card>

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
