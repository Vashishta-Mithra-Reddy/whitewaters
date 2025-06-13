import { SpecificServiceGrid } from "@/components/specific-service-grid";
import { getServicesByCategory } from "@/lib/supabase/services";
import { Waves, Users, MapPin, Trophy, Mountain, Heart, Clock, Shield, MountainSnow } from "lucide-react";
import { Metadata } from "next";

export const metadata:Metadata = {
    title: 'Kayaking | White Waters',
    description: 'Discover the thrill of whitewater kayaking at Shivanandi. Our expert instructors guide you through the Ganges catchment and the Alaknanda river, ensuring a safe and unforgettable experience.',
}

export default async function KayakingPage() {
    const services = await getServicesByCategory({ category: 'kayaking' });
    
    return (
        <div className="min-h-screen w-full overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative pb-20 pt-8 px-4 text-center">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 opacity-25 overflow-hidden">
                    <div className="absolute top-32 left-4 sm:left-10 text-4xl sm:text-6xl animate-pulse">🏞️</div>
                    <div className="absolute top-20 right-4 sm:right-20 text-3xl sm:text-4xl animate-bounce">🌲</div>
                    <div className="absolute bottom-20 left-4 sm:left-20 text-4xl sm:text-5xl animate-pulse">🛶</div>
                    <div className="absolute bottom-10 right-4 sm:right-10 text-2xl sm:text-3xl animate-bounce">🚣</div>
                    <div className="absolute top-2 left-1/4 text-3xl sm:text-4xl animate-pulse">🌊</div>
                    <div className="absolute top-2/3 right-4 sm:left-3/4 text-2xl sm:text-3xl animate-pulse">
                        <MountainSnow className="w-8 h-8 sm:w-12 sm:h-12" />
                    </div>
                </div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full text-blue-700 text-sm font-medium mb-6">
                        <Waves className="w-4 h-4" />
                        White Waters
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                        Master the Art of <span className="text-blue-600">Kayaking</span> in the Indian Himalayas
                    </h1>
                    <p className="text-lg md:text-xl px-6 md:px-0 text-muted-foreground mb-8 leading-relaxed">
                        Discover why we chose this perfect river junction where endless glacial waters flow from peaks to plains. 
                        After 20+ years of first descents and Himalayan adventures, we have found the ultimate home for whitewater enthusiasts.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 flex-shrink-0" />
                            <span className="whitespace-nowrap">Alaknanda River Banks</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mountain className="w-4 h-4 flex-shrink-0" />
                            <span className="whitespace-nowrap">Ganges Catchment</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Trophy className="w-4 h-4 flex-shrink-0" />
                            <span className="whitespace-nowrap">Expert Instruction</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid - Your Important Booking Component */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <SpecificServiceGrid services={services ?? []} />
                </div>
            </section>

            {/* Our Story */}
            <section className="py-20 px-4">
                <div className="bg-[#b1e3fa]/10 rounded-xl p-6 sm:p-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-4">Why We Love the River Most in a Kayak</h2>
                            <p className="text-lg text-foreground">Come experience a few days with us and discover the pure joy of kayaking</p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
                            <div>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                            <Heart className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <div className="min-w-0">
                                            <h3 className="font-semibold text-foreground mb-2">Born from Passion</h3>
                                            <p className="text-foreground">Kayaking at Shivanandi isn&apos;t just our business—it&apos;s our passion. We promote the sport of kayaking across India, sharing the magic that only river runners understand.</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                            <Users className="w-6 h-6 text-green-600" />
                                        </div>
                                        <div className="min-w-0">
                                            <h3 className="font-semibold text-foreground mb-2">Expert Guidance</h3>
                                            <p className="text-foreground">Learn from Shalabh, who has gained invaluable experience paddling with world-class kayakers and running first descents throughout the Indian Himalayas.</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                                            <Shield className="w-6 h-6 text-purple-600" />
                                        </div>
                                        <div className="min-w-0">
                                            <h3 className="font-semibold text-foreground mb-2">Complete Support</h3>
                                            <p className="text-foreground">From pool training for Eskimo rolls to advanced river support, we provide everything you need including audiovisual aids, books, and expert instruction.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="bg-background p-6 sm:p-8 rounded-2xl border-2 border-foreground/20 border-dashed">
                                <h3 className="text-xl font-semibold text-foreground mb-4">Perfect for Learning</h3>
                                <p className="text-foreground mb-6">Learning to kayak takes time and patience. We recommend planning at least 4-5 days for a basic course—it&apos;s always better with a friend for both fun and future paddling adventures.</p>
                                
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-sm">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                                        <span className="text-foreground">Pool training for Eskimo roll basics</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                                        <span className="text-foreground">Perfect rivers for skill development</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                                        <span className="text-foreground">World-class instruction and support</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Course Offerings */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-foreground mb-16">Our Kayaking Programs</h2>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        <div className="p-6 lg:p-8 rounded-2xl border-2 border-dashed border-foreground/20 transition-shadow">
                            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                                <Clock className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Beginner Courses</h3>
                            <p className="text-foreground mb-6">Start your kayaking journey with comprehensive 4-5 day courses covering basics, pool training, and river skills with experienced instructors.</p>
                            <div className="text-sm text-gray-500 space-y-1">
                                <p>• Pool training for Eskimo roll</p>
                                <p>• River skill development</p>
                                <p>• Safety and technique focus</p>
                            </div>
                        </div>
                        
                        <div className="p-6 lg:p-8 rounded-2xl border-2 border-dashed border-foreground/20 transition-shadow">
                            <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                                <Trophy className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Advanced Workshops</h3>
                            <p className="text-foreground mb-6">Ongoing learning for experienced paddlers with private and group workshops tailored to your skill level and river reading abilities.</p>
                            <div className="text-sm text-gray-500 space-y-1">
                                <p>• Technique refinement</p>
                                <p>• Advanced river reading</p>
                                <p>• Customized skill development</p>
                            </div>
                        </div>
                        
                        <div className="p-6 lg:p-8 rounded-2xl border-2 border-dashed border-foreground/20 transition-shadow sm:col-span-2 lg:col-span-1">
                            <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                                <Users className="w-8 h-8 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Youth Programs</h3>
                            <p className="text-foreground mb-6">Week-long workshops for children that build patience, nature appreciation, endurance, and confidence while having incredible fun.</p>
                            <div className="text-sm text-gray-500 space-y-1">
                                <p>• Character building activities</p>
                                <p>• Nature connection</p>
                                <p>• Safe, fun environment</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Rivers Section */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-foreground mb-4">Our Home Waters</h2>
                        <p className="text-lg text-foreground">Explore the magnificent rivers that flow through and around Shivanandi</p>
                    </div>
                    
                    <div className="space-y-8 lg:space-y-12">
                        {/* Alaknanda River */}
                        <div className="rounded-2xl p-6 lg:p-8 border-2 border-dashed border-foreground/20">
                            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                                <div>
                                    <h3 className="text-2xl font-bold text-foreground mb-4">Alaknanda River - Our Home River</h3>
                                    <p className="text-foreground mb-6">The Alaknanda flows right past our lodge, making it our &quot;home river.&quot; As one of the major tributaries of the Ganges in the mountains, it offers incredible variety for all skill levels.</p>
                                    
                                    <div className="space-y-3 text-sm">
                                        <div className="flex items-start gap-3">
                                            <span className="w-3 h-3 bg-red-500 rounded-full flex-shrink-0 mt-1"></span>
                                            <span><strong>Class 4-5:</strong> Birahi to Nandprayag (20 km)</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="w-3 h-3 bg-orange-500 rounded-full flex-shrink-0 mt-1"></span>
                                            <span><strong>Class 3-4:</strong> Nandprayag to Rudraprayag (40 km)</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0 mt-1"></span>
                                            <span><strong>Class 2-3:</strong> Rudraprayag to Dharidevi (20 km)</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#b1e3fa]/20 p-6 rounded-xl">
                                    <h4 className="font-semibold text-foreground mb-3">Highlighted Section</h4>
                                    <p className="text-foreground mb-4"><strong>Shivanandi to Rudraprayag:</strong> A thrilling 13km run with numerous Class 3-4 rapids, including the spectacular Goats-Leap Gorge (Kakkar Fall) entry above Rudraprayag.</p>
                                    <div className="text-sm text-gray-500">Perfect for intermediate to advanced kayakers seeking technical challenges</div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Mandakini River */}
                        <div className="rounded-2xl p-6 lg:p-8 border-2 border-dashed border-foreground/20">
                            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                                <div className="p-6 rounded-xl bg-[#b1e3fa]/20 order-2 lg:order-1">
                                    <h4 className="font-semibold text-foreground mb-3">The Hidden Gem</h4>
                                    <p className="text-foreground mb-4">The secret is out! The Mandakini provides some of the finest Class V Alpine Himalayan kayaking experiences, just 10 kilometers from our lodge.</p>
                                    <div className="text-sm text-gray-500">Joins the Alaknanda at the sacred town of Rudraprayag</div>
                                </div>
                                <div className="order-1 lg:order-2">
                                    <h3 className="text-2xl font-bold text-foreground mb-4">Mandakini River</h3>
                                    <p className="text-foreground mb-6">Experience world-class alpine kayaking on sections that offer everything from technical Class IV+ steep runs to fun Class III-IV sections perfect for rafting.</p>
                                    
                                    <div className="space-y-3 text-sm">
                                        <div className="flex items-start gap-3">
                                            <span className="w-3 h-3 bg-red-500 rounded-full flex-shrink-0 mt-1"></span>
                                            <span><strong>Class IV+:</strong> Rampur to Kalimath bridge</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="w-3 h-3 bg-orange-500 rounded-full flex-shrink-0 mt-1"></span>
                                            <span><strong>Class IV:</strong> Kalimath bridge to Syalsaur</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="w-3 h-3 bg-yellow-500 rounded-full flex-shrink-0 mt-1"></span>
                                            <span><strong>Class III-IV:</strong> Thavali to Rudraprayag</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Pindar River */}
                        <div className="rounded-2xl p-6 lg:p-8 border-2 border-dashed border-foreground/20">
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-foreground mb-4">Pindar River</h3>
                                <p className="text-foreground mb-6 max-w-3xl mx-auto">
                                    Journey from the remote Pindari Glacier through steep canyon whitewater, emerging as a mature river with sandy beaches and relaxed Class III rapids for 60 kilometers until meeting the Alaknanda at Karnprayag.
                                </p>
                                <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full text-green-700 text-sm">
                                    <Mountain className="w-4 h-4 flex-shrink-0" />
                                    <span className="whitespace-nowrap">Longest River Adventure Available</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Support Services */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-foreground mb-8">Complete River Support</h2>
                    <p className="text-lg text-foreground mb-12">Independent kayaking teams receive full support for multi-day adventures across our network of rivers</p>
                    
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                        <div className="p-4 lg:p-6">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Waves className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="font-semibold text-foreground mb-2 text-sm lg:text-base">Kayak Rental</h3>
                            <p className="text-xs lg:text-sm text-foreground">Top-quality kayaks and gear</p>
                        </div>
                        
                        <div className="p-4 lg:p-6">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Users className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="font-semibold text-foreground mb-2 text-sm lg:text-base">Raft Support</h3>
                            <p className="text-xs lg:text-sm text-foreground">Safety and gear transport</p>
                        </div>
                        
                        <div className="p-4 lg:p-6">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <MapPin className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="font-semibold text-foreground mb-2 text-sm lg:text-base">Transport</h3>
                            <p className="text-xs lg:text-sm text-foreground">Drop-off and pick-up service</p>
                        </div>
                        
                        <div className="p-4 lg:p-6">
                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Shield className="w-6 h-6 text-orange-600" />
                            </div>
                            <h3 className="font-semibold text-foreground mb-2 text-sm lg:text-base">Road Support</h3>
                            <p className="text-xs lg:text-sm text-foreground">Complete logistics assistance</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}