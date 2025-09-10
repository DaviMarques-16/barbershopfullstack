import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon } from "lucide-react";
import { Button } from "./ui/button";
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { Avatar, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import Image from "next/image"
import { quickSearchOptions } from "../_constants/search";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "./ui/dialog";
import { DialogHeader } from "./ui/dialog";

const SidebarSheet = () => {
    return ( 

          <SheetContent className="overflow-y-auto">
            <SheetHeader>
              <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>

            <div className="flex items-center border-b border-solid py-5 gap-3 justify-between">
              <h2 className="text-lg font-bold">Olá, faça seu Login!</h2>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="icon" className="bg-indigo-500 rounded-xl">
                    <LogInIcon />
                    </Button>
                  </DialogTrigger>

                  <DialogContent className="w-[90%]">
                    <DialogHeader>
                      <DialogTitle>Faça seu login na plataforma</DialogTitle>
                      <DialogDescription>
                        Conecte-se 
                      </DialogDescription>
                    </DialogHeader>

                    <Button variant="outline" className="gap-1 font-bold">
                      <Image 
                      alt="Fazer login com o Google"
                      src="/google.svg"
                      width={18}
                      height={18}
                      />
                      Google
                    </Button>
                  </DialogContent>
                </Dialog>
              {/* <Avatar className="border-2 border-indigo-800 solid">
                <AvatarImage src="/tayloravatar.jpg" />
              </Avatar>

              <div>
                <p className="font-bold">Davi Marques</p>
                <p className="text-xs">dazuzin@gmail.com</p>
              </div> */}

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
              {quickSearchOptions.map((options) => (
                <Button 
                className="justify-start gap-2"
                variant="ghost"
                key={options.title}>
                  <Image
                  alt=""
                  src={options.imageUrl}
                  height={18}
                  width={18} 
                  />
                  <p>{options.title}</p>
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