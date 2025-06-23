"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import SplitText from "@/components/SplitText";
import AdventureModal from "@/components/AdventureModal";
import Herox from "@/components/herox";
import { Mail, Phone } from "lucide-react";
import GalleryThingy from "@/components/GalleryThingy";
import { BackgroundGradientAnimation } from "@/components/background-gradient";
import ContactInfo from "@/components/ContactInfo";
import FeaturesGrid from "@/components/FeaturesGrid";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center">
      
      {/* Animated background gradient applied here */}
      <div className="flex-1 w-full flex flex-col gap-20 items-center animate-gradient">
        <div className="flex-1 flex flex-col gap-20 max-w-5xl p-5">
          <div className="flex flex-col gap-16 items-center">
            <Hero />
            <FeaturesGrid />
          </div>
        </div>
      </div>

      <Herox />

      <div className="px-12 w-full max-w-7xl hidden md:block">
        <GalleryThingy />
      </div>

      <ContactInfo />

    </main>
  );
}
