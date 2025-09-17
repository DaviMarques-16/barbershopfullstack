'use client'

import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon } from "lucide-react";
import { Button } from "./ui/button";
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import Link from "next/link";
import Image from "next/image"
import { quickSearchOptions } from "../_constants/search";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { signOut, useSession } from "next-auth/react";
import { Avatar, AvatarImage } from "./ui/avatar";
import SignInDialog from "./sign-in-dialog";

const SidebarSheet = () => {
  const {data} = useSession()
  const handleLogoutClick = () => signOut()


    return ( 

          <SheetContent className="overflow-y-auto">
            <SheetHeader>
              <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>

            <div className="flex items-center border-b border-solid py-5 gap-3 justify-between">

              {data?.user ? (
                <div className="flex items-center gap-2">   
                  <Avatar className="border-2 border-indigo-800 solid">
                    <AvatarImage src={data?.user?.image ?? ""} />
                  </Avatar>

                  <div>
                    <p className="font-bold">{data.user.name}</p>
                    <p className="text-xs">{data.user.email}</p>
                  </div>
                </div>
            ) : (
                  <>
                    <h2 className="text-lg font-bold">Olá, faça seu Login!</h2>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="icon" className="bg-indigo-500 rounded-xl">
                        <LogInIcon />
                        </Button>
                      </DialogTrigger>

                      <DialogContent className="w-[90%]">
                         <SignInDialog />
                      </DialogContent>

                    </Dialog>
                </>
                )}
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
                <SheetClose key={options.title} asChild>
                  <Button 
                  className="justify-start gap-2"
                  variant="ghost"
                  key={options.title}
                  asChild
                  >
                    <Link href={`/barbershops?service=${options.title}`}>
                    <Image
                    alt=""
                    src={options.imageUrl}
                    height={18}
                    width={18} 
                    />
                    <p>{options.title}</p>
                    </Link>
                  </Button>
                </SheetClose>
              ))}
            </div>

            <div className="py-5 flex flex-col gap-2">
              <Button variant="ghost" className="justify-start gap-2"
              onClick={handleLogoutClick}>
                <LogOutIcon size={18}/>
                Sair da conta
              </Button>
            </div>


          </SheetContent>
     );
}
 
export default SidebarSheet;