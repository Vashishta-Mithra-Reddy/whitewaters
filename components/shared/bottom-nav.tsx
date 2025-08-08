"use client";

import Link from "next/link";
import { Waves, ShipIcon, Mountain, Trees, Home } from "lucide-react";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();
  
  const navigationLinks = [
    { href: "/", label: "Home", icon: <Home  className="h-5 w-5" /> },
    { href: "/kayaking", label: "Kayaking", icon: <Waves className="h-5 w-5" /> },
    { href: "/rafting", label: "Rafting", icon: <ShipIcon className="h-5 w-5" /> },
    { href: "/hiking", label: "Hiking", icon: <Trees className="h-5 w-5" /> },
    { href: "/trekking", label: "Trekking", icon: <Mountain className="h-5 w-5" /> },
    // { href: "/pilgrimage", label: "Pilgrimage", icon: <MountainSnow className="h-5 w-5" /> },

    // { href: "/tours", label: "Tours", icon: <Compass className="h-5 w-5" /> },
    // { href: "/blog", label: "Blog", icon: <BookOpen className="h-5 w-5" /> },
    // { href: "/contact", label: "Contact", icon: <MessageSquare className="h-5 w-5" /> }
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-background/60 backdrop-blur-3xl shadow-lg">
      <div className="flex justify-around items-center h-20 px-4">
        {navigationLinks.map((link) => {
          const isActive = pathname === link.href || 
                          (link.href !== "/" && pathname.startsWith(link.href));
          
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex flex-col items-center justify-center flex-1 h-full py-1 transition-colors ${
                isActive 
                  ? "text-[#00b8f1]" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <div className={`${isActive ? "text-[#00b8f1]" : "text-muted-foreground"}`}>
                {link.icon}
              </div>
              <span className="text-xs mt-1">{link.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}