"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navigation() {
    const pathname = usePathname();
    return (
        <div className="hidden md:flex gap-10">
              {/* <Link href={"/services"} className="text-foreground px-5 py-2 rounded-lg hover:text-foreground hover:bg-background/50">
                Services
              </Link> */}
              <Link href={"/kayaking"} className={`text-foreground px-5 py-2 rounded-lg hover:text-foreground hover:bg-background/50 ${pathname==="/kayaking"?"bg-background/50":""}`}>
                Kayaking
              </Link>
              <Link href={"/rafting"} className={`text-foreground px-5 py-2 rounded-lg hover:text-foreground hover:bg-background/50 ${pathname==="/rafting"?"bg-background/50":""}`}>
                Rafting
              </Link> 
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
    );
}