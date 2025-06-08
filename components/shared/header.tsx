import Link from "next/link";
import { AuthButton } from "../auth-button";
import Navigation from "./navigation";

export default function Header() {
return (
         <nav className="w-full max-w-7xl flex justify-center h-20 bg-foreground/10 backdrop-blur-3xl sticky top-0 md:top-8 rounded-none md:rounded-xl px-6 md:px-4 z-50">
          <div className="w-full max-w-7xl flex justify-between items-center p-3 px-2 md:px-5 text-sm">
            <div className="flex gap-5 items-center font-semibold">
              <Link href={"/"} className="text-xl font-bold">White Waters</Link>
            </div>
            <Navigation />
            <AuthButton />
          </div>
        </nav>
);
}