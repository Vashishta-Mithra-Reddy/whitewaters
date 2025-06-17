import { SpecificServiceGrid } from "@/components/specific-service-grid";
import { getServicesByCategory } from "@/lib/supabase/services";
import { Waves, Moon, Users, Mountain, Calendar, Star, Compass, MountainSnow } from "lucide-react";
import { Metadata } from "next";

export const metadata:Metadata = {
    title: 'Rafting | White Waters',
    description: 'Explore the magic of river rafting in the Indian Himalayas',
}

export default async function RaftingPage() {
    const services = await getServicesByCategory({ category: 'rafting' });
    
    return (
        <div className="min-h-screen max-w-7xl">
            {/* Hero Section */}
            <section className="relative pb-20 pt-8 px-4 text-center animate-in fade-in-20 duration-1000">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 opacity-25">
                    <div className="absolute top-32 left-10 text-6xl animate-pulse">🏞️</div>
                    <div className="absolute top-20 right-20 text-4xl animate-bounce">🌲</div>
                    <div className="absolute bottom-20 left-20 text-5xl animate-pulse">🛶</div>
                    <div className="absolute bottom-10 right-10 text-3xl animate-bounce">🚣</div>
                    <div className="absolute top-2 left-1/4 text-4xl animate-pulse">🌊</div>
                    <div className="absolute top-1/3 left-3/4 text-3xl animate-pulse"><MountainSnow className="w-12 h-12" /></div>
                </div>
                <div className="max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full text-blue-700 text-sm font-medium mb-6">
                        <Waves className="w-4 h-4" />
                        White Waters
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                        Experience the Magic of <span className="text-blue-600">River Rafting</span> in the Indian Himalayas
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed px-6 md:px-0 slide-in-from-top-4 animate-in duration-1000">
                        From the silent calm of gently flowing waters to the thunderous roar of rapids—discover why a moonlit night 
                        on a virgin river beach after an action-packed day is pure magic.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-gray-500">
                        <div className="flex items-center gap-2 slide-in-from-top-4 animate-in duration-1000">
                            <Mountain className="w-4 h-4" />
                            Class II-V Rapids
                        </div>
                        <div className="flex items-center gap-2 slide-in-from-top-8 animate-in duration-1000">
                            <Calendar className="w-4 h-4" />
                            Single & Multi-Day
                        </div>
                        <div className="flex items-center gap-2 slide-in-from-top-12 animate-in duration-1000">
                            <Users className="w-4 h-4" />
                            Group Adventures
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

            {/* Experience the Magic */}
            <section className="py-20 px-4 bg-[#b1e3fa]/10 rounded-xl">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-foreground mb-4">Why Rafting Touches Your Soul</h2>
                        <p className="text-lg text-foreground">Experience the river up close with friends and create memories that last a lifetime</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                    <Waves className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground mb-2">River Connection</h3>
                                    <p className="text-foreground">Feel the pulse of the river beneath you as you navigate through pristine waters, experiencing nature in its most raw and beautiful form.</p>
                                </div>
                            </div>
                            
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                                    <Moon className="w-6 h-6 text-purple-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground mb-2">Magical Nights</h3>
                                    <p className="text-foreground">Camp under starlit skies on virgin river beaches, sharing stories around the fire after thrilling days navigating Himalayan rapids.</p>
                                </div>
                            </div>
                            
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                    <Users className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground mb-2">Shared Adventures</h3>
                                    <p className="text-foreground">Bring your friends and family to experience the perfect blend of teamwork, adrenaline, and natural beauty that only river rafting provides.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-background p-8 rounded-2xl border-2 border-foreground/20 border-dashed">
                            <h3 className="text-xl font-semibold text-foreground mb-4">The Full Experience</h3>
                            <p className="text-foreground mb-6">We help you choose the perfect descent based on your group&apos;s experience and adventure appetite. From gentle Class II waters to heart-pounding Class V rapids, every journey is tailored to your desires.</p>
                            
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div className="flex items-center gap-2">
                                    <Star className="w-4 h-4 text-yellow-500" />
                                    <span className="text-foreground">Expert Guides</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Compass className="w-4 h-4 text-blue-500" />
                                    <span className="text-foreground">Route Planning</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Mountain className="w-4 h-4 text-green-500" />
                                    <span className="text-foreground">All Skill Levels</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Moon className="w-4 h-4 text-purple-500" />
                                    <span className="text-foreground">River Camping</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* River Descents */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-foreground mb-4">Choose Your Adventure</h2>
                        <p className="text-lg text-foreground">Three incredible rivers, each offering unique challenges and unforgettable experiences</p>
                    </div>
                    
                    <div className="space-y-12">
                        {/* Alaknanda River Rafting */}
                        <div className="rounded-2xl p-8  border-2 border-foreground/20 border-dashed">
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="md:col-span-2">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                            <Waves className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-foreground">Alaknanda River Descent</h3>
                                    </div>
                                    <p className="text-foreground mb-6">Our home river offers the perfect variety for every skill level. With our riverside base, we can easily accommodate all kinds of rafting adventures, from gentle family trips to heart-pounding expeditions.</p>
                                    
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                                            <div>
                                                <h4 className="font-semibold text-foreground">Gentle Introduction</h4>
                                                <p className="text-sm text-foreground">Rudraprayag to Dharidevi (20 km) • Class 2-3 • 1 day rafting</p>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-start gap-3">
                                            <div className="w-3 h-3 bg-orange-500 rounded-full mt-2"></div>
                                            <div>
                                                <h4 className="font-semibold text-foreground">Classic Adventure</h4>
                                                <p className="text-sm text-foreground">Nandprayag to Rudraprayag (40 km) • Class 3-4 • 2 days with river camping</p>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-start gap-3">
                                            <div className="w-3 h-3 bg-red-500 rounded-full mt-2"></div>
                                            <div>
                                                <h4 className="font-semibold text-foreground">Ultimate Challenge</h4>
                                                <p className="text-sm text-foreground">Birahi to Nandprayag (20 km) • Class 4-5 • 1 day expert rafting</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="bg-blue-50 p-6 rounded-xl">
                                    <h4 className="font-semibold text-blue-700 mb-3">Why Choose Alaknanda?</h4>
                                    <ul className="space-y-2 text-sm text-blue-500">
                                        <li>• Riverside lodge base for easy access</li>
                                        <li>• Perfect progression of difficulty levels</li>
                                        <li>• Practice day available for harder sections</li>
                                        <li>• Beautiful river camping opportunities</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        {/* Mandakini River Rafting */}
                        <div className="rounded-2xl p-8  border-2 border-foreground/20 border-dashed">
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="md:col-span-2">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                            <Mountain className="w-5 h-5 text-purple-600" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-foreground">Mandakini River Descent</h3>
                                    </div>
                                    <p className="text-foreground mb-6">An action-packed 10 kilometers from Tilwara to Rudraprayag featuring eight Class IV rapids and almost a dozen easier ones. Navigate through narrow canyons where teamwork becomes essential for conquering technical and steep rapids.</p>
                                    
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-foreground mb-3">The Challenge</h4>
                                            <ul className="space-y-2 text-sm text-foreground">
                                                <li>• 8 major Class IV rapids</li>
                                                <li>• Multiple technical sections</li>
                                                <li>• Narrow canyon navigation</li>
                                                <li>• Team coordination essential</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground mb-3">The Experience</h4>
                                            <ul className="space-y-2 text-sm text-foreground">
                                                <li>• Top-notch safety equipment</li>
                                                <li>• Expert guide leadership</li>
                                                <li>• Upper section available for more challenge</li>
                                                <li>• Unforgettable adrenaline rush</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="bg-purple-50 p-6 rounded-xl">
                                    <h4 className="font-semibold text-purple-700 mb-3">Expert Setup Required</h4>
                                    <p className="text-purple-500 mb-4">The Mandakini demands an efficient and top-notch setup to run successfully. Our gear and guides represent the best available in the region.</p>
                                    <div className="text-sm text-purple-700 bg-purple-100 p-3 rounded-lg">
                                        <strong>Challenge Level:</strong> If you&apos;re looking for even more excitement, ask about our upper Mandakini sections!
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Pindar River Rafting */}
                        <div className=" rounded-2xl p-8  border-2 border-foreground/20 border-dashed">
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="md:col-span-2">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                            <Compass className="w-5 h-5 text-green-600" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-foreground">Pindar River Descent</h3>
                                    </div>
                                    <p className="text-foreground mb-6">The most versatile river experience we offer—from gentle single-day adventures to epic 100km multi-day expeditions through quiet, unspoiled river valleys that showcase the true wilderness of the Himalayas.</p>
                                    
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                                            <div>
                                                <h4 className="font-semibold text-foreground">Day Adventure</h4>
                                                <p className="text-sm text-foreground">10 km • Class II-III • Perfect for families and beginners</p>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-start gap-3">
                                            <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                                            <div>
                                                <h4 className="font-semibold text-foreground">Multi-Day Expedition</h4>
                                                <p className="text-sm text-foreground">Up to 100 km • Class III-IV through unspoiled valleys</p>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-start gap-3">
                                            <div className="w-3 h-3 bg-orange-500 rounded-full mt-2"></div>
                                            <div>
                                                <h4 className="font-semibold text-foreground">Seasonal Challenge</h4>
                                                <p className="text-sm text-foreground">Summer & early fall • Continuous Class IV with higher waters</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="bg-green-50 p-6 rounded-xl">
                                    <h4 className="font-semibold text-green-700 mb-3">Wilderness Experience</h4>
                                    <p className="text-green-500 mb-4">Journey through one of the most pristine and quiet river valleys in the region, perfect for those seeking both adventure and tranquility.</p>
                                    <div className="space-y-2 text-sm text-green-700">
                                        <div>🏔️ Remote canyon beauty</div>
                                        <div>🏕️ Pristine camping spots</div>
                                        <div>🌊 Seasonal water variations</div>
                                        <div>⭐ Ultimate wilderness escape</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 px-4 rounded-xl">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-foreground mb-4">What Makes Our Rafting Special</h2>
                        <p className="text-lg text-foreground">Years of experience, local knowledge, and passion for the rivers</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 rounded-2xl  border-2 border-foreground/20 border-dashed">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                <Star className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Expert Guidance</h3>
                            <p className="text-foreground mb-4">Our guides know every rapid, every eddy, and every safe camping spot. They use all the help they can get from paddling teams to navigate technical sections safely.</p>
                            <div className="text-sm text-gray-500">
                                <p>• Experienced local guides</p>
                                <p>• Safety-first approach</p>
                                <p>• Team coordination training</p>
                            </div>
                        </div>
                        
                        <div className="p-8 rounded-2xl  border-2 border-foreground/20 border-dashed">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                                <Users className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Perfect for Groups</h3>
                            <p className="text-foreground mb-4">Bring your friends and family for an adventure that bonds you together. We help you choose the right difficulty level and provide everything needed for an amazing experience.</p>
                            <div className="text-sm text-gray-500">
                                <p>• Tailored difficulty levels</p>
                                <p>• Group coordination activities</p>
                                <p>• Memorable shared experiences</p>
                            </div>
                        </div>
                        
                        <div className="p-8 rounded-2xl  border-2 border-foreground/20 border-dashed">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                                <Moon className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Magical Camping</h3>
                            <p className="text-foreground mb-4">Experience the true magic of river life with overnight camping on pristine beaches under star-filled Himalayan skies—an experience that stays with you forever.</p>
                            <div className="text-sm text-gray-500">
                                <p>• Virgin river beaches</p>
                                <p>• Starlit night experiences</p>
                                <p>• Campfire stories and bonding</p>
                            </div>
                        </div>
                        
                        <div className="p-8 rounded-2xl  border-2 border-foreground/20 border-dashed">
                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                                <Mountain className="w-6 h-6 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Himalayan Setting</h3>
                            <p className="text-foreground mb-4">Raft through some of the most spectacular mountain scenery on Earth, where glacial waters meet pristine wilderness in the heart of the Indian Himalayas.</p>
                            <div className="text-sm text-gray-500">
                                <p>• Pristine mountain rivers</p>
                                <p>• Glacial water origins</p>
                                <p>• Untouched wilderness areas</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Adventure */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-foreground mb-6">Ready for Your River Adventure?</h2>
                    <p className="text-lg text-foreground mb-8">
                        From the gentle whisper of calm waters to the exhilarating roar of white rapids, 
                        discover why the river calls to adventurers from around the world. Let us help you 
                        choose the perfect journey for your group.
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-6 mt-12">
                        <div className="p-6 bg-blue-50 rounded-xl">
                            <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                            <h3 className="font-semibold text-gray-700 mb-2">Plan Your Trip</h3>
                            <p className="text-sm text-gray-500">Single day adventures to multi-day expeditions</p>
                        </div>
                        
                        <div className="p-6 bg-green-50 rounded-xl">
                            <Users className="w-8 h-8 text-green-600 mx-auto mb-3" />
                            <h3 className="font-semibold text-gray-700 mb-2">Bring Your Crew</h3>
                            <p className="text-sm text-gray-500">Perfect for families, friends, and team building</p>
                        </div>
                        
                        <div className="p-6 bg-purple-50 rounded-xl">
                            <Star className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                            <h3 className="font-semibold text-gray-700 mb-2">Create Memories</h3>
                            <p className="text-sm text-gray-500">Experiences that bond you with nature and each other</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}