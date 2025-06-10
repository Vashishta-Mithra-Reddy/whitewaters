"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navigation() {
    const pathname = usePathname();
    return (
        <div className="hidden md:flex gap-4">
              {/* <Link href={"/services"} className="text-foreground px-5 py-2 rounded-lg hover:text-foreground hover:bg-foreground/10">
                Services
              </Link> */}
              <Link href={"/kayaking"} className={`text-foreground px-5 py-2 rounded-lg hover:text-foreground hover:bg-foreground/10 ${pathname==="/kayaking"?"bg-foreground/10 border-2 border-dashed border-foreground/10":""}`}>
                Kayaking
              </Link>
              <Link href={"/rafting"} className={`text-foreground px-5 py-2 rounded-lg hover:text-foreground hover:bg-foreground/10 ${pathname==="/rafting"?"bg-foreground/10 border-2 border-dashed border-foreground/10":""}`}>
                Rafting
              </Link> 
              <Link href={"/hiking"} className={`text-foreground px-5 py-2 rounded-lg hover:text-foreground hover:bg-foreground/10 ${pathname==="/hiking"?"bg-foreground/10 border-2 border-dashed border-foreground/10":""}`}>
                Hiking
              </Link>
              <Link href={"/trekking"} className={`text-foreground px-5 py-2 rounded-lg hover:text-foreground hover:bg-foreground/10 ${pathname==="/trekking"?"bg-foreground/10 border-2 border-dashed border-foreground/10":""}`}>
                Trekking
              </Link> 
              <Link href={"/pilgrimage"} className={`text-foreground px-5 py-2 rounded-lg hover:text-foreground hover:bg-foreground/10 ${pathname==="/pilgrimage"?"bg-foreground/10 border-2 border-dashed border-foreground/10":""}`}>
                Pilgrimage
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