// SERVER COMPONENTS = sem interatividade
// A HOME PAGE

{/*BUSCA*/}
import Header from "./_components/header"
import Image from "next/image"
import { Input } from "./_components/ui/input"
import { Button } from "./_components/ui/button"
import { Badge, SearchIcon } from "lucide-react"
import { Card, CardContent } from "./_components/ui/card"
import { Avatar, AvatarImage } from "@radix-ui/react-avatar"

const Home = () => {
  return (
    <div>
      {/* HEADER */}
      <Header />

      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Davi!</h2>
        <p>Terça-feira, 02 de setembro.</p>

{/*BUSCA*/}
        <div className="mt-3 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button className="bg-indigo-500">
            <SearchIcon />
          </Button>
        </div>
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

        <Card className="mt-6">
            <CardContent className="flex">
                {/* DIV LEFT */}
                <div className="flex flex-col gap-2 py-5 pl-5">
                    <Badge>Confirmado</Badge>
                    <h3>Corte de Cabelo</h3>

                     <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                            <AvatarImage 
                                src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
                            </Avatar>
            </div>
                </div>
            </CardContent>
        </Card>

      </div>
    </div>
  )
}

export default Home
