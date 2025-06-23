import Link  from "next/link";
import Image from "next/image";
import { ThemeSwitcher } from "../theme-switcher";
import { BackgroundGradientAnimation } from "../background-gradient";

export default function Footer() {
return(
    <footer className="w-full flex items-center justify-between text-center text-xs gap-8 max-w-7xl mb-16 md:mb-16  rounded-none md:rounded-xl">
      <BackgroundGradientAnimation>
      <div className="py-16 px-20 flex items-center justify-between text-center text-xs gap-8 backdrop-blur-3xl">
      <Link href={"/"} className="text-xl font-semibold">
      <div className="flex items-center">
      <Image src="/white_waters_v5.png" width={80} height={80} alt="White Waters Logo" className="rounded-full"/>
      <p className="pl-4 font-bold">White Waters</p>
      </div>
      </Link>
      <ThemeSwitcher />
      </div>
      </BackgroundGradientAnimation>
    </footer>
);
}