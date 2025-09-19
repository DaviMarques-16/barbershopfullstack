import { isFuture } from "date-fns/isFuture";
import Booking from "../bookings/page";
import { Prisma } from "../generated/prisma";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { format } from "date-fns/format";
import { ptBR } from "date-fns/locale";

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
    const isConfirmed = isFuture(booking.date)
    return (  
        <>
      
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
        </>
    );
}
 
export default BookingItem;