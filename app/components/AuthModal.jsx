import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog";

import Image from "next/image";
import Logo from '@/public/logo.png'

import { Button } from "@/components/ui/button";
import { signIn } from "../lib/auth";
import { GithubAuthButton, GoogleAuthButton } from "./SubmitButton";
export function AuthModal(){
    return(
         <Dialog>
            <DialogTrigger asChild>
                <Button>
                    Try for Free
                </Button>
            </DialogTrigger>
            <DialogContent  className="sm:max-w-[360px]">
            <DialogHeader className="flex  justify-center flex-row items-center gap-2 ">
              <Image src={Logo} alt="Logo" className="size-10"/>
              <h4 className="text-3xl font-semibold">
                Cal<span className="text-primary">Marshal</span></h4>
            </DialogHeader>
            <div className="flex flex-col mt-t gap-3" >
                <form action={async () =>{
                    "use server"
                    await signIn ("google")

                }} className="w-full" >
                  <GoogleAuthButton/>
                </form>

                <form action={async () =>{
                    "use server"

                    await signIn ("github")
                }}>
                <GithubAuthButton/>
                </form>
            </div>
            </DialogContent>
         </Dialog>
    )
}