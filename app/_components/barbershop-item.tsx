import { Barbershop } from "../generated/prisma"
import { Card, CardContent } from "./ui/card";
import Image from "next/image"

interface BarbershopItemProps {
    barbershop: Barbershop
}

const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
    return (
        <Card className="w-[159px]">
            <CardContent className="p-0">
                {/* IMAGEM */}
                <div className="relative h-[159px] w-[159px]">
                    <Image 
                    alt={barbershop.name} 
                    fill 
                    className="object-cover" 
                    src={barbershop.imageURL} />
                </div>
            </CardContent>
        </Card>
    )
}
 
export default BarbershopItem;