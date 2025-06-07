import Link  from "next/link";
import { ThemeSwitcher } from "../theme-switcher";
export default function Footer() {
return(
    <footer className="w-full flex items-center justify-between text-center text-xs gap-8 py-16 max-w-7xl px-20 mb-16 md:mb-12 bg-background border-t md:border-none md:bg-foreground/10 rounded-none md:rounded-xl">
      <Link href={"/"} className="text-xl font-semibold">
      White Waters
      </Link>
      <ThemeSwitcher />
    </footer>
);
}