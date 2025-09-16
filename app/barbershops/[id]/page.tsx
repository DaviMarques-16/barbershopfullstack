import { Button } from "@/app/_components/ui/button";
import { db } from "@/app/_lib/prisma";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image"
import Link from "next/link";
import { notFound } from "next/navigation";
import ServiceItem from "@/app/_components/service-item";
import PhoneItem from "@/app/_components/phone-item";
import { Sheet, SheetTrigger } from "@/app/_components/ui/sheet";
import SidebarSheet from "@/app/_components/sidebar-sheet";


//TELA DETALHES DA BARBEARIA

interface BarbershopPageProps {
    params: {
        id: string
    }
}

//Recebe dados da barbearia na URL
const BarbershopPage = async ({params}: BarbershopPageProps) => {
    //Chamar bdd
    const barbershop = await db.barbershop.findUnique({
        where: {
            id: params.id
        },
        include: {
            services: true
        }
    })

    console.log(barbershop?.services)

    //retorna 404 para id inválidos
    if (!barbershop) {
        return notFound()
    }
    
    return ( 
       <div>
            {/* Imagem */}
            <div className="relative w-full h-[250px]">
                <Image 
                alt={barbershop.name} 
                src={barbershop?.imageURL} 
                fill
                className="object-cover"
                />

                <Button 
                    size="icon" 
                    variant="secondary" 
                    className="absolute top-4 left-4"
                    asChild
                >
                    <Link href="/">
                        <ChevronLeftIcon />
                    </Link>
                </Button>

                <Sheet>
                    <SheetTrigger asChild>
                        <Button 
                            size="icon"
                            variant="outline"
                            className="absolute top-4 right-4"
                            >
                        <MenuIcon />
                        </Button>
                    </SheetTrigger>

                    <SidebarSheet />
                </Sheet>
            </div>

            <div className="p-5 border-b border-solid ">
                <h1 className="font-bold text-xl mb-3">
                    {barbershop?.name}
                </h1>

                <div className="flex items-center gap-1 mb-2">
                    <MapPinIcon className="text-indigo-500"/>
                    <p className="text-sm">{barbershop?.address}</p>
                </div>

                <div className="flex items-center gap-1">
                    <StarIcon className="text-indigo-500"/>
                    <p className="text-sm">5,0 (334 avaliações)</p>
                </div>
            </div>

            {/* Descrição */}
            <div className="p-5 border-b border solid space-y-2">
                <h2 className="font-bold uppercaseb text-gray-400">Sobre nós</h2>
                <p className="text-sm text-justify">{barbershop?.description}</p>
            </div>

            {/* Serviços  */}
            <div className="p-5 space-y-3 border-b border-solid">
                <h2 className="font-bold text-xs uppercase text-gray-400">Serviços</h2>
                <div className="space-y-3">
                    {/* Renderizar todos os serviços */}
                    {barbershop.services.map(service => (
                        <ServiceItem 
                        service={service} 
                        key="service.id"
                        barbershop={barbershop}
                        />
                        ))}
                </div>
            </div>

            {/* Contato */}
            <div className="p-5 space-y-2">
                {barbershop.phones.map(phone => (
                   <PhoneItem phone={phone} key={phone} />
                ))}
            </div>

       </div>
     );
}
 
export default BarbershopPage;