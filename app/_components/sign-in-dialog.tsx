import { signIn } from "next-auth/react";
import { Button } from "./ui/button";
import { DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import Image from "next/image"

const SignInDialog = () => {
      const handleLoginWithGoogleClick = () => signIn("google")
    return ( 
        <>
            <DialogHeader>
                <DialogTitle>Faça seu login na plataforma</DialogTitle>
                <DialogDescription>
                Conecte-se 
                </DialogDescription>
            </DialogHeader>

            <Button 
            variant="outline" 
            className="gap-1 font-bold target='_blank'"
            onClick={handleLoginWithGoogleClick}>
                <Image 
                alt="Fazer login com o Google"
                src="/google.svg"
                width={18}
                height={18}
                />
                Google
            </Button>
        </>
     );
}
 
export default SignInDialog;