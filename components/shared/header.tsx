import Link from "next/link";
import { AuthButton } from "../auth-button";

export default function Header() {
return (
         <nav className="w-full max-w-7xl flex justify-center h-20 bg-foreground/10 backdrop-blur-3xl sticky top-0 md:top-8 rounded-none md:rounded-xl px-4 z-50">
          <div className="w-full max-w-7xl flex justify-between items-center p-3 px-2 md:px-5 text-sm">
            <div className="flex gap-5 items-center font-semibold">
              <Link href={"/"} className="text-lg">White Waters</Link>
            </div>
            <div className="hidden md:flex gap-10">
              <Link href={"/services"} className="text-foreground px-5 py-2 rounded-lg hover:text-foreground hover:bg-background/50">
                Services
              </Link>
              {/* <Link href={"/kayaking"} className="text-foreground/60 px-5 py-2 rounded-lg hover:text-foreground hover:bg-background/80">
                Kayaking
              </Link>
              <Link href={"/rafting"} className="text-foreground/60 px-5 py-2 rounded-lg hover:text-foreground hover:bg-background/80">
                Rafting
              </Link>  */}
              {/* <Link href={"/about"} className="text-muted-foreground">
                About
              </Link>
              <Link href={"/contact"} className="text-muted-foreground">
                Contact
              </Link> */}
              {/* {user && <Link href={"/profile"} className="text-muted-foreground">
                Profile
              </Link>} */}
            </div>
            <AuthButton />
          </div>
        </nav>
);
}