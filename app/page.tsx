"use client";

import Link from "next/link";
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
  console.log('Animation completed');
};

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center">
      <div className="flex-1 w-full flex flex-col gap-20 items-center animate-gradient ">
        <div className="flex-1 flex flex-col gap-20 max-w-5xl p-5">
        <div className="flex flex-col gap-16 items-center">
      {/* Hero Section */}
      <div className="text-center space-y-6 max-w-4xl pt-8 md:pt-16">
      {/* <div className="absolute inset-0 opacity-25">
                    <div className="absolute top-80 left-40 text-6xl animate-pulse">🏞️</div>
                    <div className="absolute top-40 right-1/4 text-4xl animate-pulse">🌲</div>
                    <div className="absolute bottom-48 left-1/4 text-5xl animate-pulse">🛶</div>
                    <div className="absolute bottom-1/4 right-1/4 text-3xl animate-pulse">🚣</div>
                    <div className="absolute top-40 left-1/4 text-4xl animate-pulse">🌊</div>
                    <div className="hidden md:flex absolute top-80 right-60 text-3xl animate-pulse"><MountainSnow className="w-12 h-12" /></div>
        </div> */}
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-0 leading-tight tracking-tight">
          <span>
            Adventure <br className="block md:hidden" />
            Awaits in
          </span>
          <br></br>
          {/* <span className="block text-blue-600">Pristine Waters</span> */}
          <SplitText
          text="Pristine Waters"
          className="hidden md:block text-blue-600 tracking-tight"
          delay={100}
          duration={3}
          ease="elastic.out(1,0.3)"
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
          className="block text-blue-600 tracking-tight md:hidden"
          delay={100}
          duration={3}
          ease="elastic.out(1,0.3)"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />
        <br className="block md:hidden"></br>
        <SplitText
          text="Waters"
          className="block text-blue-600 tracking-tight md:hidden"
          delay={100}
          duration={3}
          ease="elastic.out(1,0.3)"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mt-0">
          Experience the thrill of kayaking, rafting, and mountain expeditions <br></br>with White Waters.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <AdventureModal/>
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact">
              Contact Us
            </Link>
          </Button>
        </div>
      </div>
      
      <FeaturesGrid/>
      
        </div>
        </div>
      </div>
      
      <Herox/>


      <div className="px-12 w-full max-w-7xl hidden md:block">
      <GalleryThingy/>
      </div>

      {/* <ContactInfo/> */}

    </main>
  );
}
