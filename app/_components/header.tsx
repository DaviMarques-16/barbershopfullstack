import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Sheet, SheetTrigger } from "./ui/sheet"
import SidebarSheet from "./sidebar-sheet"
import { MenuIcon } from "lucide-react"

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Image alt="FSW Barber" src="/logo.png" height={18} width={120} />
        
          <Sheet>
              <SheetTrigger asChild>
                  <Button 
                      size="icon"
                      variant="outline"
                      className="absolute top-4 right-4">
                  <MenuIcon />
                  </Button>
              </SheetTrigger>
          <SidebarSheet />
          </Sheet>
      </CardContent>
    </Card>
  )
}

//Composition pattern: microcomponentes
export default Header
