import Link  from "next/link";
import Image from "next/image";
import { ThemeSwitcher } from "../theme-switcher";

export default function Footer() {
return(
    <footer className="w-full flex items-center justify-between text-center text-xs gap-8 py-16 max-w-7xl px-20 mb-16 md:mb-16 md:bg-[#b1e3fa]/20 md:dark:bg-[#b1e3fa]/10 bg-background/60 rounded-none md:rounded-xl">
      <Link href={"/"} className="text-xl font-semibold">
      <div className="flex items-center">
      <Image src="/whitewatersx.jpg" width={50} height={50} alt="White Waters Logo" className="rounded-full"/>
      <p className="pl-4 font-bold">White Waters</p>
      </div>
      </Link>
      <ThemeSwitcher />
    </footer>
);
}