import { isFuture } from "date-fns/isFuture";
import { Prisma } from "../generated/prisma";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { format } from "date-fns/format";
import { ptBR } from "date-fns/locale";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import Image from "next/image"
import PhoneItem from "./phone-item";

interface BookingItemProps {
    booking: Prisma.BookingGetPayload <{
       include: {
         service: {
           include: {
            barbershop: true
           }
         }
       }
    }>
}

//TO DO: receber agendamentos como prop
const BookingItem = ({booking}: BookingItemProps) => {
    const {service: {barbershop}} = booking
    const isConfirmed = isFuture(booking.date)
    return (  
      <Sheet>
        <SheetTrigger className="w-full">
          <Card className="min-w-[90%]">
            <CardContent className="flex justify-between p-0">
                {/* DIV LEFT */}
                <div className="flex flex-col gap-2 py-5 pl-5">
                    <Badge className={`bg-indigo-500 w-fit ${isConfirmed ? 'bg-indigo-500' : 'bg-slate-600 text-black'}`}>
                        {isConfirmed ? 'Confirmado' : 'Finalizado'}
                    </Badge>
                    <h3 className="font-bold">{booking.service.name}</h3>

                     <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6 rounded-xl">
                            <AvatarImage 
                                src={booking.service.barbershop.imageURL} />
                            </Avatar>
                            <p className="text-sm">{booking.service.barbershop.name}</p>
                      </div>
                </div>
                {/* DIV RIGHT */}
                <div className="flex flex-col items-center justify-center px-5 border-l-2 solid">
                  <p className="text-sm capitalize">
                    {format(booking.date, 'MMMM', { locale: ptBR })}
                  </p>
                  <p className="text-2xl">
                    {format(booking.date, "dd", { locale: ptBR })}
                  </p>
                  <p className="text-sm">
                    {format(booking.date, "HH:mm", { locale: ptBR })}
                  </p>
                </div>
            </CardContent>
        </Card>
        </SheetTrigger>
        <SheetContent className="w-[90%]">
          <SheetHeader>
            <SheetTitle className="text-left">Informações da Reserva</SheetTitle>
          </SheetHeader>

          <div className="relative flex h-[180px] w-full items-end mt-6">
            <Image 
            alt={`mapa da barbearia ${booking.service.barbershop.name}`} 
            src="/map.png" 
            fill 
            className="object-cover rounded-xl"  
            />

            <Card className="z-50 w-full mb-3 mx-5 rounded-xl">
              <CardContent className="px-5 py-3 flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={barbershop.imageURL} />
                </Avatar>
                <div>
                  <h3 className="font-bold">{barbershop.name}</h3>
                  <p className="text-xs">{barbershop.address}</p>
                </div>
              </CardContent>
            </Card>
          </div>
            
          <div className="mt-6">
             <Badge 
               className={`bg-indigo-500 w-fit ${isConfirmed ? 'bg-indigo-500' : 'bg-slate-600 text-black'}`}>
               {isConfirmed ? 'Confirmado' : 'Finalizado'}
              </Badge>

                <Card className="mt-3 mb-6">
                  <CardContent className="p-3 space-y-3">
                    <div className="flex justify-between items-center">
                        <h2 className="font-bold">{booking.service.name}</h2>
                        <p className="text-sm font-bold">
                            {Intl.NumberFormat("pt-br", {
                                style: "currency",
                                currency: "BRL",
                            }).format(Number(booking.service.price))}
                        </p>
                    </div>

                    <div className="flex justify-between items-center">
                        <h2 className="text-gray-400">Data</h2>
                        <p className="text-sm">
                            {format(booking.date, "d 'de' MMMM", {
                                locale: ptBR,
                            })}
                        </p>
                    </div>


                    <div className="flex justify-between items-center">
                        <h2 className="text-sm text-gray-400">Horário</h2>
                        <p className="text-sm">{format(booking.date, 'HH:mm', {
                          locale: ptBR,
                        })}</p>
                    </div>

                    <div className="flex justify-between items-center">
                        <h2 className="text-sm text-gray-400">Barbearia</h2>
                        <p className="text-sm">{barbershop.name}</p>
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-3">
                  {barbershop.phones.map((phone, index) => (
                    <PhoneItem key={index} phone={phone} />
                  ))}
                </div>
          </div>
        </SheetContent>
      </Sheet>
    );
}
 
export default BookingItem;