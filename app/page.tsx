// import Hero from "@/components/hero";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="flex-1 w-full flex flex-col gap-20 items-center">
        <div className="flex-1 flex flex-col gap-20 max-w-5xl p-5">
        <div className="flex flex-col gap-16 items-center">
      {/* Hero Section */}
      <div className="text-center space-y-6 max-w-4xl pt-8 md:pt-16">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight tracking-tight">
          Adventure Awaits in
          <span className="block text-blue-600">Pristine Waters</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground">
          Experience the thrill of kayaking, rafting, and mountain expeditions with <br></br> White Waters.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/services">
              Explore Adventures <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#contact">
              Contact Us
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
            <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold">Professional Guides</h3>
          <p className="text-muted-foreground">Expert guides with years of experience in whitewater adventures</p>
        </div>
        
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold">Safety First</h3>
          <p className="text-muted-foreground">Top-quality safety equipment and comprehensive safety briefings</p>
        </div>
        
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
            <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold">Easy Booking</h3>
          <p className="text-muted-foreground">Simple booking process - no account required for one-time adventures</p>
        </div>
      </div>
      
      {/* Contact Info */}
      {/* <div id="contact" className="w-full max-w-4xl bg-muted/50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center space-y-2">
            <Mail className="h-6 w-6 text-blue-600" />
            <span className="font-medium">Email</span>
            <a href="mailto:shivanandi.river.lodge@gmail.com" className="text-sm text-muted-foreground hover:text-foreground">
              shivanandi.river.lodge@gmail.com
            </a>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Phone className="h-6 w-6 text-green-600" />
            <span className="font-medium">WhatsApp</span>
            <a href="https://wa.me/919756607880" className="text-sm text-muted-foreground hover:text-foreground">
              +91 97566 07880
            </a>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Phone className="h-6 w-6 text-purple-600" />
            <span className="font-medium">Call</span>
            <a href="tel:+918171340036" className="text-sm text-muted-foreground hover:text-foreground">
              +91 81713 40036
            </a>
          </div>
        </div>
      </div> */}
    </div>
        </div>
      </div>
    </main>
  );
}
