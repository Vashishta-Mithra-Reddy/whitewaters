"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
// import { ArrowRight} from "lucide-react";
import SplitText from "@/components/SplitText";
import AdventureModal from "@/components/AdventureModal";
import Herox from "@/components/herox";
// import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
// import { Mail, Phone } from "lucide-react";
import GalleryThingy from "@/components/GalleryThingy";
// import { BackgroundGradientAnimation } from "@/components/background-gradient";
// import ContactInfo from "@/components/ContactInfo";
import FeaturesGrid from "@/components/FeaturesGrid";

const handleAnimationComplete = () => {
  console.log("Animation completed");
};

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center px-4 md:px-20 py-12 md:py-16 pb-16 md:pb-20">
      <div className="flex-1 w-full flex flex-col gap-20 items-center">
        <div className="flex-1 flex flex-col gap-20 max-w-8xl p-0 md:p-5">
          <div className="flex flex-col gap-16 items-center">
            {/* Hero Section */}
            <div className="relative w-full rounded-3xl overflow-hidden h-[70vh] flex items-center justify-center animate-in slideinfrom duration-700">
              {/* Background Image with Next.js Image */}
              <Image
                src="/whitewaters_hero.jpg"
                alt="White Waters Hero"
                fill
                priority
                placeholder="blur"
                blurDataURL="/whitewaters_hero_blur.jpg" 
                className="object-cover object-center brightness-125"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black/50 to-black/20"></div>

              {/* Hero Content */}
              <div className="relative z-10 text-center space-y-6 px-4 max-w-4xl">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-0 leading-tight tracking-tight">
                  <span>
                    Adventure <br className="block md:hidden" />
                    Awaits in
                  </span>
                  <br />
                  <SplitText
                    text="Pristine Waters"
                    className="hidden md:block text-blue-400 tracking-tight"
                    delay={100}
                    duration={3}
                    ease="elastic.out(1, 0.3)"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                    onLetterAnimationComplete={handleAnimationComplete}
                  />
                  <SplitText
                    text="Pristine"
                    className="block text-blue-400 tracking-tight md:hidden"
                    delay={100}
                    duration={3}
                    ease="elastic.out(1, 0.3)"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                    onLetterAnimationComplete={handleAnimationComplete}
                  />
                  <br className="block md:hidden" />
                  <SplitText
                    text="Waters"
                    className="block text-blue-400 tracking-tight md:hidden"
                    delay={100}
                    duration={3}
                    ease="elastic.out(1, 0.3)"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                    onLetterAnimationComplete={handleAnimationComplete}
                  />
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mt-0 text-balance">
                  Experience the thrill of kayaking, rafting, and mountain expeditions with White Waters.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <AdventureModal />
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>

            <FeaturesGrid />
          </div>
        </div>
      </div>

      <Herox />

      <div className="md:px-12 px-0 w-full max-w-7xl">
        <GalleryThingy />
      </div>

      {/* <ContactInfo/> */}
    </main>
  );
}
