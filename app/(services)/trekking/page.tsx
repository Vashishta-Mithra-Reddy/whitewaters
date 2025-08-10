import { SpecificServiceGrid } from "@/components/specific-service-grid";
import { getServicesByCategory } from "@/lib/supabase/services";
import { Mountain, Compass, Users, Star, Calendar, Sunrise, TreePine, MapPin, Footprints } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import trekking from "@/public/trekking_main.jpg";
import valleyofflowers from "@/public/valley_of_flowers.jpg";
import roopkund from "@/public/roopkund_lake.jpg";
import kerdarkantha from "@/public/kedarkantha.jpg";

export const metadata: Metadata = {
    title: 'Trekking | White Waters',
    description: 'Discover the breathtaking trails of the Indian Himalayas with expert guides and unforgettable mountain experiences',
}

export default async function TrekkingPage() {
    const services = await getServicesByCategory({ category: 'trekking' });
    
    return (
        <div className="min-h-screen max-w-7xl">
            {/* Hero Section */}
            <section className="relative pb-20 pt-8 px-4 text-center animate-in fade-in-20 duration-1000">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 opacity-25">
                    <div className="absolute top-32 left-10 text-6xl animate-pulse hidden md:block">🏞️</div>
                    <div className="absolute top-20 right-20 text-4xl animate-bounce">🌲</div>
                    <div className="absolute bottom-20 left-20 text-5xl animate-pulse">🌳</div>
                    <div className="absolute bottom-10 right-10 text-3xl animate-bounce">🥾</div>
                    <div className="absolute top-2 left-1/4 text-4xl animate-pulse"><Footprints className="w-12 h-12" /></div>
                    <div className="absolute top-1/3 left-3/4 text-3xl animate-pulse"><Mountain className="w-12 h-12" /></div>
                </div>
                <div className="max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full text-green-700 text-sm font-medium mb-6">
                        <Mountain className="w-4 h-4" />
                        White Waters Trekking
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                        Journey Through the <br></br><span className="text-green-600">Majestic Himalayas</span><br></br> on Foot
                    </h1>
                    <p className="text-lg md:text-xl px-6 md:px-0 text-muted-foreground mb-8 leading-relaxed slide-in-from-top-4 animate-in duration-1000">
                        From gentle valley walks to challenging high-altitude adventures—experience the raw beauty 
                        of the Indian Himalayas with expert guides who know every trail, every peak, and every story.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-gray-500">
                        <div className="flex items-center gap-2 slide-in-from-top-4 animate-in duration-1000">
                            <Mountain className="w-4 h-4" />
                            2,000m - 5,000m+
                        </div>
                        <div className="flex items-center gap-2 slide-in-from-top-8 animate-in duration-1000">
                            <Calendar className="w-4 h-4" />
                            1-15 Day Treks
                        </div>
                        <div className="flex items-center gap-2 slide-in-from-top-12 animate-in duration-1000">
                            <Users className="w-4 h-4" />
                            All Skill Levels
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

            {/* Why Trekking Transforms You */}
            <section className="py-20 px-4 bg-foreground/5 rounded-xl">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-foreground mb-4">Why Trekking Changes Everything</h2>
                        <p className="text-lg text-foreground">Step into a world where every footstep leads to discovery and every summit reveals new perspectives</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                    <Mountain className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground mb-2">Mountain Connection</h3>
                                    <p className="text-foreground">Feel the ancient pulse of the Himalayas as you walk paths carved by centuries of pilgrims, traders, and adventurers seeking the sacred and sublime.</p>
                                </div>
                            </div>
                            
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                                    <Sunrise className="w-6 h-6 text-orange-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground mb-2">Sunrise Revelations</h3>
                                    <p className="text-foreground">Witness the first light painting snow-capped peaks in gold and pink, moments of pure magic that remind you why the mountains call to every soul.</p>
                                </div>
                            </div>
                            
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                    <Users className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground mb-2">Shared Journeys</h3>
                                    <p className="text-foreground">Bond with fellow trekkers as you overcome challenges together, sharing stories under star-filled skies and creating friendships that last a lifetime.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-background p-8 rounded-2xl border-2 border-foreground/20 border-dashed">
                            <Image src={trekking} alt="Trekking" className="w-full h-64 object-cover rounded-xl mb-6" />
                            <h3 className="text-xl font-semibold text-foreground mb-4">Your Himalayan Adventure</h3>
                            <p className="text-foreground mb-6">We craft each trek to match your group&apos;s experience and aspirations. From gentle valley walks to challenging high-altitude expeditions, every journey is designed to push your boundaries while keeping you safe.</p>
                            
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
                                    <span className="text-foreground">All Altitudes</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <TreePine className="w-4 h-4 text-green-600" />
                                    <span className="text-foreground">Eco-Friendly</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Trekking Destinations */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-foreground mb-4">Iconic Himalayan Treks</h2>
                        <p className="text-lg text-foreground">Choose from our signature adventures, each offering unique landscapes and unforgettable experiences</p>
                    </div>
                    
                    <div className="space-y-12">
                        {/* Valley of Flowers */}
                        <div className="rounded-2xl p-8 border-2 border-foreground/20 border-dashed">
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="md:col-span-2">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                                            <TreePine className="w-5 h-5 text-pink-600" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-foreground">Valley of Flowers Trek</h3>
                                    </div>
                                    <p className="text-foreground mb-6">A UNESCO World Heritage site that transforms into a vibrant carpet of alpine flowers during monsoon season. This moderate trek combines natural beauty with cultural immersion in the Garhwal Himalayas.</p>
                                    
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                                            <div>
                                                <h4 className="font-semibold text-foreground">Trek Details</h4>
                                                <p className="text-sm text-foreground">Duration: 6-8 days • Max Altitude: 4,200m • Difficulty: Moderate</p>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-start gap-3">
                                            <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                                            <div>
                                                <h4 className="font-semibold text-foreground">Best Season</h4>
                                                <p className="text-sm text-foreground">July to September • Peak flower blooming period</p>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-start gap-3">
                                            <div className="w-3 h-3 bg-purple-500 rounded-full mt-2"></div>
                                            <div>
                                                <h4 className="font-semibold text-foreground">Highlights</h4>
                                                <p className="text-sm text-foreground">300+ flower species • Hemkund Sahib gurudwara • Stunning valley views</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="bg-pink-50 p-6 rounded-xl">
                                    <Image src={valleyofflowers} alt="Valley Of Flowers Trek" className="w-full h-44 object-cover rounded-xl mb-4" />

                                    <h4 className="font-semibold text-pink-700 mb-3">Natural Wonder</h4>
                                    <ul className="space-y-2 text-sm text-pink-600">
                                        <li>• UNESCO World Heritage site</li>
                                        <li>• Rare Himalayan flora & fauna</li>
                                        <li>• Perfect for nature photography</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        {/* Roopkund Trek */}
                        <div className="rounded-2xl p-8 border-2 border-foreground/20 border-dashed">
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="md:col-span-2">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                            <Mountain className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-foreground">Roopkund - Mystery Lake Trek</h3>
                                    </div>
                                    <p className="text-foreground mb-6">Known as the Skeleton Lake, this challenging high-altitude trek leads to one of the most mysterious places in the Himalayas. Ancient human remains and stunning alpine scenery make this an unforgettable adventure.</p>
                                    
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-foreground mb-3">The Challenge</h4>
                                            <ul className="space-y-2 text-sm text-foreground">
                                                <li>• High altitude acclimatization</li>
                                                <li>• Steep boulder sections</li>
                                                <li>• Weather-dependent summit day</li>
                                                <li>• Technical terrain navigation</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground mb-3">The Reward</h4>
                                            <ul className="space-y-2 text-sm text-foreground">
                                                <li>• 360° Himalayan panorama</li>
                                                <li>• Ancient historical mystery</li>
                                                <li>• Pristine alpine lakes</li>
                                                <li>• Ultimate trekking achievement</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="bg-blue-50 p-6 rounded-xl">
                                    <Image src={roopkund} alt="Roopkund Trek" className="w-full h-40 object-cover rounded-xl mb-4" />

                                    <h4 className="font-semibold text-blue-700 mb-3">Advanced Trek</h4>
                                    <p className="text-blue-600 mb-4">Duration: 8-9 days • Max Altitude: 5,029m • Difficulty: Challenging</p>
                                    <div className="text-sm text-blue-700 bg-blue-100 p-3 rounded-lg">
                                        <strong>Requirements:</strong> Previous high-altitude trekking experience recommended
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Kedarkantha Trek */}
                        <div className="rounded-2xl p-8 border-2 border-foreground/20 border-dashed">
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="md:col-span-2">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                                            <Sunrise className="w-5 h-5 text-orange-600" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-foreground">Kedarkantha Winter Trek</h3>
                                    </div>
                                    <p className="text-foreground mb-6">The perfect winter trek offering snow-covered trails, frozen lakes, and breathtaking summit views. This moderate trek is ideal for those seeking their first high-altitude winter experience in the Himalayas.</p>
                                    
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                                            <div>
                                                <h4 className="font-semibold text-foreground">Winter Wonderland</h4>
                                                <p className="text-sm text-foreground">December to April • Snow-covered trails and campsites</p>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-start gap-3">
                                            <div className="w-3 h-3 bg-orange-500 rounded-full mt-2"></div>
                                            <div>
                                                <h4 className="font-semibold text-foreground">Summit Views</h4>
                                                <p className="text-sm text-foreground">360° views of Swargarohini, Bandarpoonch, and Gangotri ranges</p>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-start gap-3">
                                            <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                                            <div>
                                                <h4 className="font-semibold text-foreground">Perfect Introduction</h4>
                                                <p className="text-sm text-foreground">Moderate difficulty • Great for winter trekking beginners</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="bg-orange-50 p-6 rounded-xl">
                                    <Image src={kerdarkantha} alt="Kedarkantha Trek" className="w-full h-44 object-cover rounded-xl mb-4" />
                                    <h4 className="font-semibold text-orange-700 mb-3">Winter Specialist</h4>
                                    {/* <p className="text-orange-600 mb-4">Experience the magic of Himalayan winters with proper equipment and expert guidance.</p> */}
                                    <div className="space-y-2 text-sm text-orange-700">
                                        <div>❄️ Snow trekking techniques</div>
                                        <div>🏔️ Winter camping experience</div>
                                        <div>⭐ Clear starry nights</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trekking Essentials */}
            <section className="py-20 px-4 rounded-xl">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-foreground mb-4">What Makes Our Treks Special</h2>
                        <p className="text-lg text-foreground">Years of mountain experience, local knowledge, and passion for sustainable trekking</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-background p-8 rounded-2xl border-2 border-foreground/20 border-dashed">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                                <Mountain className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Local Expertise</h3>
                            <p className="text-foreground mb-4">Our guides are born in these mountains, knowing every trail, weather pattern, and safe passage through decades of experience.</p>
                            <div className="text-sm text-gray-500">
                                <p>• Born and raised in the Himalayas</p>
                                <p>• Certified mountain guides</p>
                                <p>• First aid and rescue trained</p>
                            </div>
                        </div>
                        
                        <div className="bg-background p-8 rounded-2xl border-2 border-foreground/20 border-dashed">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                <Compass className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Safety First</h3>
                            <p className="text-foreground mb-4">Complete safety equipment, emergency protocols, and careful group management ensure your adventure is both thrilling and secure.</p>
                            <div className="text-sm text-gray-500">
                                <p>• Emergency communication systems</p>
                                <p>• Weather monitoring</p>
                                <p>• Medical support available</p>
                            </div>
                        </div>
                        
                        <div className="bg-background p-8 rounded-2xl border-2 border-foreground/20 border-dashed">
                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                                <TreePine className="w-6 h-6 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Eco-Responsible</h3>
                            <p className="text-foreground mb-4">We practice Leave No Trace principles, support local communities, and ensure our adventures preserve the mountains for future generations.</p>
                            <div className="text-sm text-gray-500">
                                <p>• Waste management protocols</p>
                                <p>• Local community support</p>
                                <p>• Sustainable tourism practices</p>
                            </div>
                        </div>
                        
                        <div className="bg-background p-8 rounded-2xl border-2 border-foreground/20 border-dashed">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                                <Users className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Small Groups</h3>
                            <p className="text-foreground mb-4">Intimate group sizes ensure personalized attention, flexibility in routes, and a more authentic mountain experience.</p>
                            <div className="text-sm text-gray-500">
                                <p>• Maximum 8-10 trekkers per guide</p>
                                <p>• Flexible itineraries</p>
                                <p>• Personal attention to each member</p>
                            </div>
                        </div>
                        
                        <div className="bg-background p-8 rounded-2xl border-2 border-foreground/20 border-dashed">
                            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                                <Star className="w-6 h-6 text-red-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Complete Support</h3>
                            <p className="text-foreground mb-4">From equipment rental to meal planning, we handle every detail so you can focus on the incredible journey ahead.</p>
                            <div className="text-sm text-gray-500">
                                <p>• Quality equipment provided</p>
                                <p>• Nutritious mountain meals</p>
                                <p>• Porter support available</p>
                            </div>
                        </div>
                        
                        <div className="bg-background p-8 rounded-2xl border-2 border-foreground/20 border-dashed">
                            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                                <MapPin className="w-6 h-6 text-indigo-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-4">Hidden Gems</h3>
                            <p className="text-foreground mb-4">Discover secret trails, hidden valleys, and pristine campsites that only locals know, away from crowded tourist routes.</p>
                            <div className="text-sm text-gray-500">
                                <p>• Off-the-beaten-path routes</p>
                                <p>• Secret viewpoints</p>
                                <p>• Untouched wilderness areas</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Adventure */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Answer the Mountain&apos;s Call?</h2>
                    <p className="text-lg text-foreground mb-8">
                        From gentle valley walks to challenging summit attempts, the Himalayas offer adventures 
                        that transform perspectives and create lifelong memories. Let us guide you to peaks you&apos;ve 
                        only dreamed of reaching.
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-6 mt-12">
                        <div className="p-6 bg-green-50 rounded-xl">
                            <Calendar className="w-8 h-8 text-green-600 mx-auto mb-3" />
                            <h3 className="font-semibold text-gray-700 mb-2">Choose Your Adventure</h3>
                            <p className="text-sm text-gray-500">Day hikes to multi-week expeditions across all difficulty levels</p>
                        </div>
                        
                        <div className="p-6 bg-blue-50 rounded-xl">
                            <Mountain className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                            <h3 className="font-semibold text-gray-700 mb-2">Reach New Heights</h3>
                            <p className="text-sm text-gray-500">From 2,000m valleys to 5,000m+ peaks with expert guidance</p>
                        </div>
                        
                        <div className="p-6 bg-orange-50 rounded-xl">
                            <Sunrise className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                            <h3 className="font-semibold text-gray-700 mb-2">Create Magic</h3>
                            <p className="text-sm text-gray-500">Sunrise views and starlit nights that change your perspective forever</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}