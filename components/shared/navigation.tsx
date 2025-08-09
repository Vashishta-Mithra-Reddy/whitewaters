"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Mountain, ShipIcon, Tent, Waves } from "lucide-react";

export default function Navigation() {
    const pathname = usePathname();
    return (
        <div className="hidden md:flex gap-4 items-center justify-center">
              {/* <Link href={"/services"} className=" px-5 py-2 rounded-lg hover:text-blue-500 hover:bg-foreground/10">
                Services
              </Link> */}
              {/* <Link href={"/home"} className={` px-5 py-2 rounded-lg hover:text-blue-500 hover:bg-foreground/10 ${pathname==="/home"?"bg-blue-500/30":""}`}>
                Home
              </Link> */}
              <Link href={"/kayaking"} className={`px-5 py-2 rounded-lg hover:text-blue-500 hover:bg-blue-500/10 ${pathname==="/kayaking"?" text-blue-500 bg-blue-500/10":"text-foreground"}`}>
                <Waves className="h-4 w-4 mr-2 mb-0.5 inline-block" />
                Kayaking
              </Link>
              <Link href={"/rafting"} className={` px-5 py-2 rounded-lg hover:text-blue-500 hover:bg-foreground/10 ${pathname==="/rafting"?"text-blue-500 bg-blue-500/10":"text-foreground"}`}>
                <ShipIcon className="h-4 w-4 mr-2 mb-0.5 inline-block" />
                Rafting
              </Link> 
              <Link href={"/hiking"} className={` px-5 py-2 rounded-lg hover:text-blue-500 hover:bg-foreground/10 ${pathname==="/hiking"?"text-blue-500 bg-blue-500/10":"text-foreground"}`}>
                <Tent className="h-4 w-4 mr-2 mb-0.5 inline-block" />
                Hiking
              </Link>
              <Link href={"/trekking"} className={` px-5 py-2 rounded-lg hover:text-blue-500 hover:bg-foreground/10 ${pathname==="/trekking"?"text-blue-500 bg-blue-500/10":"text-foreground  "}`}>
                <Mountain className="h-4 w-4 mr-2 mb-0.5 inline-block" />
                Trekking
              </Link>

              {/* <Link href={"/pilgrimage"} className={` px-5 py-2 rounded-lg hover:text-blue-500 hover:bg-foreground/10 ${pathname==="/pilgrimage"?"bg-blue-500/30":""}`}>
                Pilgrimage
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
    );
}