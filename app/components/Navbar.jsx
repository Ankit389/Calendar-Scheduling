// import Link from "next/link"
// import Image  from "next/image"
// import Logo from '@/public/logo.png'
// export function Navbar(){
//     <div className="flex py-5 items-center justify-between">
//        <Link href='/'>

//        <Image src={Logo} alt="Logo" className="size-10"/>
//       </Link>
//     </div>
// }


import Link from "next/link";
import Image from "next/image";
import Logo from '@/public/logo.png';
import { AuthModal } from "./AuthModal";


export function Navbar() {
  return (  // Added return statement
    <div className="flex py-5 items-center justify-between ">
      <Link href='/' className=" flex gap-2 items-center">
        <Image src={Logo} alt="Logo" className="size-10" />

        <h4 className="text-3xl font-semibold">
        Cal<span className="text-blue-500">Marshall</span>
      </h4>
      </Link>

      
      <AuthModal/>
    </div>
  );
}
