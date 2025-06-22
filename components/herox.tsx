"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Herox() {
  const { resolvedTheme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  // Fallback to system preference if resolvedTheme is undefined
  const isDark = resolvedTheme === "dark" || 
    (resolvedTheme === undefined && 
     typeof window !== "undefined" && 
     window.matchMedia("(prefers-color-scheme: dark)").matches);

  const src = isDark
    ? isMobile
      ? "/product_mobile.png"
      : "/product_desktop.png"
    : isMobile
    ? "/product_mobile_light.png"
    : "/product_desktop_light.png";

  return (
    <section className="flex-row md:flex justify-center items-center my-20 md:my-32">
      <div className="px-20 py-20 rounded-2xl font-satoshi">
        <p className="text-4xl text-center md:text-end text-foreground/60 font-bold">
          All your <br />
          Adventures<br />
          {/* At <br /> */}
          <span>at one place.</span>
        </p>
      </div>
      <Link href="/services">
      <Image
        src={src}
        width={768}
        height={200}
        className="rounded-2xl border-2 border-foreground/10 drop-shadow-2xl dark:drop-shadow-foreground/10 transition-all duration-500"
        alt="White Waters Services"
      />
      </Link>

      
    </section>
  );
}