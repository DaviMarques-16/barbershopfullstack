import { CalendarIcon, HomeIcon, LogOutIcon } from "lucide-react";
import { Button } from "./ui/button";
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { Avatar, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import { quickSearchOptions } from "../_constants/search";
import Image from "next/image"

const SidebarSheet = () => {
    return ( 

          <SheetContent className="overflow-y-auto">
            <SheetHeader>
              <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>

            <div className="flex items-center border-b border-solid py-5 gap-3">
              <Avatar className="border-2 border-indigo-800 solid">
                <AvatarImage src="/tayloravatar.jpg" />
              </Avatar>

              <div>
                <p className="font-bold">Davi Marques</p>
                <p className="text-xs">dazuzin@gmail.com</p>
              </div>

            </div>


            <div className="py-5 flex flex-col gap-2 border-b border-solid">
              <SheetClose asChild>
                <Button className="justify-start gap-2" variant="ghost" asChild>
                  <Link href="/">
                  <HomeIcon size={18} />
                    Início
                  </Link>
                </Button>
              </SheetClose>

              <Button className="justify-start gap-2" variant="ghost">
                <CalendarIcon size={18} />
                Agendamentos
              </Button>
            </div>

            <div className="py-5 flex flex-col gap-2 border-b border-solid">
              {quickSearchOptions.map((option) => (
                <Button 
                key={option.title}
                className="justify-start gap-2"
                variant="ghost"
                >
                  <Image
                  alt={option.title}
                  src={option.imageUrl}
                  height={18}
                  width={18} />
                  {option.title}
              </Button>
              ))}
            </div>

            <div className="py-5 flex flex-col gap-2">
              <Button variant="ghost" className="justify-start gap-2">
                <LogOutIcon size={18}/>
                Sair da conta
              </Button>
            </div>


          </SheetContent>
     );
}
 
export default SidebarSheet;