import Link from "next/link";
import Image from "next/image";
import { ThemeSwitcher } from "../theme-switcher";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Compass, 
  MessageSquare,
  Instagram,
  Facebook,
  Twitter,
  Waves,
  Mountain,
  Tent,
  ShipIcon
} from "lucide-react";

export default function Footer() {
return(
    <footer className="w-full border-t bg-gradient-to-b from-muted/30 to-muted/50 md:pb-0 pb-20">
                <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-10">
                    <div className="text-center sm:text-left">
                      <h3 className="font-semibold mb-4 text-xl flex items-center gap-2 justify-center sm:justify-start">
                        <Link href={"/"} className="text-xl font-bold">
                          <Image src="/white_waters_v5.png" width={60} height={60} priority alt="White Waters Logo" className="rounded-full"/>
                        </Link>
                        White Waters
                      </h3>
                      <p className="text-base text-muted-foreground text-balance">Experience the thrill of adventure in the Indian Himalayas with our expert-guided water and mountain expeditions.</p>
                      
                      <div className="mt-6 flex items-center justify-center sm:justify-start gap-5">
                        <a href="https://instagram.com" className="text-muted-foreground hover:text-blue-500 transition-colors p-2 hover:bg-blue-500/10 rounded-full" aria-label="Instagram">
                          <Instagram className="h-6 w-6" />
                        </a>
                        <a href="https://facebook.com" className="text-muted-foreground hover:text-blue-500 transition-colors p-2 hover:bg-blue-500/10 rounded-full" aria-label="Facebook">
                          <Facebook className="h-6 w-6" />
                        </a>
                        <a href="https://twitter.com" className="text-muted-foreground hover:text-blue-500 transition-colors p-2 hover:bg-blue-500/10 rounded-full" aria-label="Twitter">
                          <Twitter className="h-6 w-6" />
                        </a>
                      </div>
                    </div>
                    
                    <div className="text-center sm:text-left pt-4">
                      <h3 className="font-semibold mb-6 text-xl flex items-center gap-2 justify-center sm:justify-start">
                        <Compass className="h-6 w-6 text-blue-500  mr-1" />
                        Our Adventures
                      </h3>
                      <ul className="space-y-3 text-base">
                        <li>
                          <Link href="/kayaking" className="hover:text-blue-500 transition-all flex items-center gap-2 justify-center sm:justify-start p-2 hover:translate-x-1 duration-200">
                            <Waves className="h-5 w-5 text-blue-500  mr-1" />
                            Kayaking Expeditions
                          </Link>
                        </li>
                        
                        <li>
                          <Link href="/rafting" className="hover:text-blue-500 transition-all flex items-center gap-2 justify-center sm:justify-start p-2 hover:translate-x-1 duration-200">
                            <ShipIcon className="h-5 w-5 text-blue-500  mr-1" />
                            Rafting Trips
                          </Link>
                        </li>
                        {/* <li>
                          <Link href="/services?category=rafting&type=expedition" className="hover:text-blue-500 transition-all flex items-center gap-2 justify-center sm:justify-start p-1 hover:translate-x-1 duration-200">
                            <ShipIcon className="h-5 w-5 text-blue-500  mr-1" />
                            Rafting Expeditions
                          </Link>
                        </li> */}
                        {/* <li>
                          <Link href="/services?category=kayaking&type=course" className="hover:text-blue-500 transition-all flex items-center gap-2 justify-center sm:justify-start p-1 hover:translate-x-1 duration-200">
                            <BookOpen className="h-5 w-5 text-blue-500  mr-1" />
                            Kayak Courses
                          </Link>
                        </li>
                        <li>
                          <Link href="/services?category=kayaking&type=rental" className="hover:text-blue-500 transition-all flex items-center gap-2 justify-center sm:justify-start p-1 hover:translate-x-1 duration-200">
                            <Backpack className="h-5 w-5 text-blue-500  mr-1" />
                            Kayak Rental
                          </Link>
                        </li> */}
                        <li>
                          <Link href="/hiking" className="hover:text-blue-500 transition-all flex items-center gap-2 justify-center sm:justify-start p-2 hover:translate-x-1 duration-200">
                            <Tent className="h-5 w-5 text-blue-500 mr-1" />
                            Hiking
                          </Link>
                        </li>

                        <li>
                          <Link href="/trekking" className="hover:text-blue-500 transition-all flex items-center gap-2 justify-center sm:justify-start p-2 hover:translate-x-1 duration-200">
                            <Mountain className="h-5 w-5 text-blue-500" />
                            Trekking
                          </Link>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="text-center sm:text-left pt-4">
                      {/* <h3 className="font-semibold mb-4 text-xl flex items-center gap-2 justify-center sm:justify-start">
                        <Mountain className="h-6 w-6 text-blue-500" />
                        Mountain Adventures
                      </h3>
                      <ul className="space-y-3 text-base mb-6">
                        
                      </ul> */}
                      
                      <h3 className="font-semibold mb-6 text-xl flex items-center gap-2 justify-center sm:justify-start">
                        <MessageSquare className="h-6 w-6 text-blue-500" />
                        Contact Us
                      </h3>
                      <div className="space-y-4 text-base">
                        <Link href="tel:+918171340036" className="flex items-center gap-3 justify-center sm:justify-start p-2 hover:text-blue-500 transition-colors hover:bg-blue-500/5 rounded-md">
                          <Phone className="h-5 w-5 text-blue-500 flex-shrink-0" />
                          <span>+918171340036</span>
                        </Link>
                        
                        <Link href="mailto:info@whitewaters.com" className="flex items-center gap-3 justify-center sm:justify-start p-2 hover:text-blue-500 transition-colors hover:bg-blue-500/5 rounded-md">
                          <Mail className="h-5 w-5 text-blue-500 flex-shrink-0" />
                          <span>shivanandi.river.lodge@gmail.com</span>
                        </Link>
                        
                        <Link href="https://maps.app.goo.gl/n3Ldva7gTwytpKbW9" target="_blank" className="flex items-center gap-3 justify-center sm:justify-start p-2 hover:bg-blue-500/5 rounded-md group hover:text-blue-500">
                          <MapPin className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5 transition-all duration-300" />
                          <span className="text-balance">Shivanandi River Lodge, Bankhil, Uttarakhand 246171</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-300 text-sm text-muted-foreground">
                    <div className="flex items-center gap-4 mb-2 mt-2 md:mb-0">
                    <ThemeSwitcher />
                    </div>
                    
                    <p className="text-center md:text-left mb-2 mt-2 md:mb-0">© {new Date().getFullYear()} White Waters. All rights reserved.</p>
                    <p className="flex items-center justify-center md:justify-start mb-2 mt-2 md:mb-0 text-sm text-muted-foreground">
                      Built with <span className="animate-pulse text-lg p-1">❤️</span> in the Himalayas.
                    </p>
                  
                  </div>
                </div>
              </footer>
);
}