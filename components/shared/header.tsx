import Link from "next/link";
// import { AuthButton } from "../auth-button";
import Navigation from "./navigation";
import Image from "next/image";

export default function Header() {
return (
         <nav className="w-full max-w-7xl flex justify-center h-20 bg-[#b1e3fa]/10 dark:[#b1e3fa]/5 backdrop-blur-3xl sticky top-0 md:top-8 rounded-none md:rounded-xl px-6 md:px-4 z-50 md:shadow-md">
          <div className="w-full max-w-7xl flex justify-between items-center p-3 px-2 md:px-5 text-sm">
            <div className="flex gap-5 items-center font-semibold">
              {/* <Link href={"/"} className="text-xl font-bold">White Waters</Link> */}
              <Link href={"/"} className="text-xl font-bold px-0 md:px-2">
              <Image src="/white_waters_v5.png" width={60} height={60} priority alt="White Waters Logo" className="rounded-full"/>
              </Link>
            </div>
            <Navigation />
            
              <Link href={"/contact"} className={`text-white bg-blue-500 font-semibold tracking-wide px-5 py-2.5 rounded-lg hover:bg-blue-500/80`}>
                Connect with us!
              </Link> 
            {/* <AuthButton /> */}
          </div>
        </nav>
);
}