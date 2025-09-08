import { BarbershopService } from "../generated/prisma"
import Image from "next/image"
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface ServiceItemProps {
    service: BarbershopService
}

const ServiceItem = ({service}: ServiceItemProps) => {
    return (  
    <Card>
      <CardContent className="flex items-center gap-3 p-3">
            {/*  Image */}
            <div className="relative min-h-[110px] min-w-[110px] max-h-[110px] max-w-[110px]">
                <Image
                    alt={service.name}
                    src={service.imageURL}
                    fill
                    className="rounded-xl object-cover">
                </Image>
            </div>
            {/* Direita */}
            <div className="space-y-2">
                <h3 className="font-semibold text-sm">{service.name}</h3>
                <p className="text-[15px] text-gray-400">{service.description}</p>
                {/* Preço e botão */}
                <div className="flex items-center justify-between">
                    <p className="font-bold text-sm text-indigo-500">
                        {Intl.NumberFormat("pt-br",{
                        style:  'currency',
                        currency: 'BRL'
                    }).format(Number(service.price))}
                    </p>

                    <Button variant="secondary" size="sm">
                        Reservar
                    </Button>
                </div>
            </div>
      </CardContent>
    </Card>

    );
}
 
export default ServiceItem;