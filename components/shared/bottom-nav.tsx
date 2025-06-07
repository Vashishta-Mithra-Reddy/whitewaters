"use client";

import Link from "next/link";
import { Home, ShipWheel, ShipIcon } from "lucide-react";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();
  
  const navigationLinks = [
    { href: "/", label: "Home", icon: <Home  className="h-5 w-5" /> },
    { href: "/kayaking", label: "Kayaking", icon: <ShipWheel className="h-5 w-5" /> },
    { href: "/rafting", label: "Rafting", icon: <ShipIcon className="h-5 w-5" /> },
    // { href: "/tours", label: "Tours", icon: <Compass className="h-5 w-5" /> },
    // { href: "/blog", label: "Blog", icon: <BookOpen className="h-5 w-5" /> },
    // { href: "/contact", label: "Contact", icon: <MessageSquare className="h-5 w-5" /> }
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-t shadow-lg">
      <div className="flex justify-around items-center h-16 px-4">
        {navigationLinks.map((link) => {
          const isActive = pathname === link.href || 
                          (link.href !== "/" && pathname.startsWith(link.href));
          
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex flex-col items-center justify-center flex-1 h-full py-1 transition-colors ${
                isActive 
                  ? "text-primary" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <div className={`${isActive ? "text-primary" : "text-muted-foreground"}`}>
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