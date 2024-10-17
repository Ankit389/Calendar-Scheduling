// "use client"


// import {Button} from "@/components/ui/button"
// import {useFormStatus} from "react-dom"
// import GoogleLogo from "@/public/google.svg"
// import GithubLogo from "@/public/github.svg"
// import { Loader2 } from "lucide-react";
// import Image from "next/image"; // Correct Next.js import

// export  function GoogleAuthButton(){
// const {pending} = useFormStatus();

//     return(
//         <>{pending ? (
//             <Button disabled variant="outline " className="w-full">
//                <Loader2  className="size-4 mr-2 animate-spin"/> please wait
//             </Button> 
//         ) :(
       
//          <Button variant ="outline" className="w-full">
//          <Image src={GoogleLogo} alt ="Google logo" className="size-4 mr-2"/>
//          Sing in with  Gooogle</Button> 
//             )}
//        </>
//     )
// }



// export  function GithubAuthButton(){
//     const {pending} = useFormStatus();
    
//         return(
//             <>{pending ? (
//                 <Button disabled variant="outline " className="w-full">
//                    <Loader2  className="size-4 mr-2 animate-spin"/> please wait
//                 </Button> 
//             ) :(
           
//              <Button variant ="outline" className="w-full">
//              <Image src={GithubLogo} alt ="Google logo" className="size-4 mr-2"/>
//              Sing in with  Github</Button> 
//                 )}
//            </>
//         )
//     }



"use client";  // This makes it a client component

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react"; // Import signIn from NextAuth
import { useFormStatus } from "react-dom";
import GoogleLogo from "@/public/google.svg";
import GithubLogo from "@/public/github.svg"
import { Loader2 } from "lucide-react";
import Image from "next/image";

export function GoogleAuthButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled variant="outline" className="w-full">
          <Loader2 className="size-4 mr-2 animate-spin" /> please wait
        </Button>
      ) : (
        <Button
          variant="outline"
          className="w-full"
          onClick={() => signIn("google")}  // Client-side signIn call
        >
          <Image src={GoogleLogo} alt="Google logo" className="size-4 mr-2" />
          Sign in with Google
        </Button>
      )}
    </>
  );
}



export function GithubAuthButton() {
    const { pending } = useFormStatus();
  
    return (
      <>
        {pending ? (
          <Button disabled variant="outline" className="w-full">
            <Loader2 className="size-4 mr-2 animate-spin" /> please wait
          </Button>
        ) : (
          <Button
            variant="outline"
            className="w-full"
            onClick={() => signIn("github")}  // Client-side signIn call
          >
            <Image src={GithubLogo} alt="Github logo" className="size-4 mr-2" />
            Sign in with Github
          </Button>
        )}
      </>
    );
  }