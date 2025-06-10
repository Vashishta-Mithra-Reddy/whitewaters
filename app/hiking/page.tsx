import { SpecificServiceGrid } from "@/components/specific-service-grid";
import { getServicesByCategory } from "@/lib/supabase/services";
import { TreePine, Footprints, Heart, Camera, Clock, MapPin, Sun, Wind } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Hiking | White Waters',
    description: 'Explore scenic trails and nature walks in the beautiful Himalayan foothills with guided hiking adventures',
}

export default async function HikingPage() {
    const services = await getServicesByCategory({ category: 'hiking' });
    
    return (
        <div className="min-h-screen max-w-7xl">
            {/* Hero Section - Creative Approach */}
            <section className="relative pb-16 pt-8 px-4">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 opacity-25">
                    <div className="absolute top-10 left-10 text-6xl animate-pulse opacity-10">🏔️</div>
                    <div className="absolute top-20 right-20 text-4xl animate-bounce">🌳</div>
                    <div className="absolute bottom-20 left-20 text-5xl animate-pulse">🌲</div>
                    <div className="absolute bottom-10 right-10 text-3xl animate-bounce">🥾</div>
                    <div className="absolute top-2 left-1/4 text-4xl animate-pulse"><Footprints className="w-12 h-12" /></div>
                    {/* <div className="absolute top-1/3 left-3/4 text-3xl animate-bounce">🥾</div> */}
                </div>
                <div className="max-w-6xl mx-auto">
                    {/* Floating Badge */}
                    <div className="flex justify-center mb-8">
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-blue-50 px-6 py-3 rounded-full text-green-700 text-sm font-medium border border-green-100">
                            <Footprints className="w-4 h-4" />
                            Step into Nature&apos;s Embrace
                        </div>
                    </div>

                    {/* Main Hero Content */}
                    <div className="text-center mb-12">
                        <h1 className="text-6xl font-bold text-foreground mb-6 leading-tight">
                            Discover the Joy of 
                            <span className="block text-green-600 mt-2">Simple Walking</span>
                        </h1>
                        <p className="text-lg md:text-xl text-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                            Sometimes the best adventures happen one step at a time. Join us for gentle hikes through 
                            pine forests, meadows full of wildflowers, and hidden waterfalls that refresh both body and soul.
                        </p>
                    </div>

                    {/* Quick Stats Cards */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        <div className="bg-green-50 p-4 rounded-xl text-center">
                            <Clock className="w-6 h-6 text-green-600 mx-auto mb-2" />
                            <div className="text-sm font-semibold text-green-700">2-6 Hours</div>
                            <div className="text-xs text-green-600">Perfect Duration</div>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-xl text-center">
                            <Heart className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                            <div className="text-sm font-semibold text-blue-700">All Ages</div>
                            <div className="text-xs text-blue-600">Family Friendly</div>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-xl text-center">
                            <Camera className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                            <div className="text-sm font-semibold text-purple-700">Photo Spots</div>
                            <div className="text-xs text-purple-600">Instagram Ready</div>
                        </div>
                        <div className="bg-orange-50 p-4 rounded-xl text-center">
                            <TreePine className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                            <div className="text-sm font-semibold text-orange-700">Nature Immersion</div>
                            <div className="text-xs text-orange-600">Pure Bliss</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <SpecificServiceGrid services={services ?? []} />
                </div>
            </section>

            {/* Why Hiking Heals - Creative Layout */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Every Step Matters</h2>
                        <p className="text-lg text-foreground max-w-2xl mx-auto">
                            In a world that moves too fast, hiking brings you back to your natural rhythm
                        </p>
                    </div>
                    
                    {/* Alternating Layout */}
                    <div className="space-y-16">
                        {/* First Item */}
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="order-2 md:order-1">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                        <Heart className="w-6 h-6 text-green-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground">Mental Reset</h3>
                                </div>
                                <p className="text-foreground mb-4">
                                    Leave the digital noise behind and reconnect with your thoughts. The gentle rhythm of walking 
                                    through nature has been proven to reduce stress, improve mood, and spark creativity.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">Stress Relief</span>
                                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">Mental Clarity</span>
                                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">Mindfulness</span>
                                </div>
                            </div>
                            <div className="order-1 md:order-2 bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl">
                                <div className="text-center">
                                    <div className="text-3xl mb-4">🧠</div>
                                    <div className="text-sm text-gray-600 font-medium">Studies show</div>
                                    <div className="text-2xl font-bold text-green-600">90%</div>
                                    <div className="text-sm text-gray-600">feel calmer after nature walks</div>
                                </div>
                            </div>
                        </div>

                        {/* Second Item */}
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                                <div className="text-center">
                                    <div className="text-3xl mb-4">👥</div>
                                    <div className="text-sm text-gray-600 font-medium">Perfect for</div>
                                    <div className="text-2xl font-bold text-blue-600">Everyone</div>
                                    <div className="text-sm text-gray-600">Ages 5 to 85 welcome</div>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                        <TreePine className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground">Nature Connection</h3>
                                </div>
                                <p className="text-foreground mb-4">
                                    Breathe in the fresh mountain air, listen to birds singing, and feel the soft earth beneath your feet. 
                                    These simple pleasures reconnect you with the natural world we often forget exists.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">Fresh Air</span>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">Wildlife Spotting</span>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">Forest Bathing</span>
                                </div>
                            </div>
                        </div>

                        {/* Third Item */}
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="order-2 md:order-1">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                                        <Camera className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground">Memory Making</h3>
                                </div>
                                <p className="text-foreground mb-4">
                                    Discover hidden waterfalls, stumble upon wildflower meadows, and witness sunrise views that 
                                    take your breath away. Every hike offers new discoveries and photo-worthy moments.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">Hidden Gems</span>
                                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">Photography</span>
                                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">Adventure</span>
                                </div>
                            </div>
                            <div className="order-1 md:order-2 bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
                                <div className="text-center">
                                    <div className="text-3xl mb-4">📸</div>
                                    <div className="text-sm text-gray-600 font-medium">Average per hike</div>
                                    <div className="text-2xl font-bold text-purple-600">50+</div>
                                    <div className="text-sm text-gray-600">Instagram-worthy shots</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Popular Hiking Trails - Card Grid */}
            <section className="py-16 px-4 bg-foreground/5 rounded-xl">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-foreground mb-4">Popular Trails Near You</h2>
                        <p className="text-lg text-foreground">Each trail offers its own personality and rewards</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Waterfall Trail */}
                        <div className="bg-background rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between mb-4">
                                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                    <Sun className="w-5 h-5 text-blue-600" />
                                </div>
                                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Easy</span>
                            </div>
                            <h3 className="font-bold text-foreground mb-2">Hidden Waterfall Trail</h3>
                            <p className="text-sm text-foreground mb-4">A gentle 3km walk through bamboo groves leading to a stunning 20-meter waterfall. Perfect for hot days!</p>
                            <div className="space-y-2 text-xs text-gray-500">
                                <div className="flex items-center gap-2">
                                    <Clock className="w-3 h-3" />
                                    <span>2-3 hours round trip</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-3 h-3" />
                                    <span>15 min drive from base</span>
                                </div>
                            </div>
                        </div>

                        {/* Sunrise Point */}
                        <div className="bg-background rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between mb-4">
                                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                                    <Sun className="w-5 h-5 text-orange-600" />
                                </div>
                                <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">Moderate</span>
                            </div>
                            <h3 className="font-bold text-foreground mb-2">Sunrise Point Hike</h3>
                            <p className="text-sm text-foreground mb-4">Early morning hike to catch breathtaking sunrise views over the valley. Worth every early step!</p>
                            <div className="space-y-2 text-xs text-gray-500">
                                <div className="flex items-center gap-2">
                                    <Clock className="w-3 h-3" />
                                    <span>4-5 hours with sunrise</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-3 h-3" />
                                    <span>5:30 AM start recommended</span>
                                </div>
                            </div>
                        </div>

                        {/* Forest Loop */}
                        <div className="bg-background rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between mb-4">
                                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                    <TreePine className="w-5 h-5 text-green-600" />
                                </div>
                                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Easy</span>
                            </div>
                            <h3 className="font-bold text-foreground mb-2">Pine Forest Loop</h3>
                            <p className="text-sm text-foreground mb-4">Peaceful circular trail through ancient pine forests. Listen to birds and breathe the purest air.</p>
                            <div className="space-y-2 text-xs text-gray-500">
                                <div className="flex items-center gap-2">
                                    <Clock className="w-3 h-3" />
                                    <span>1.5-2 hours loop</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-3 h-3" />
                                    <span>Perfect for meditation</span>
                                </div>
                            </div>
                        </div>

                        {/* Village Trail */}
                        <div className="bg-background rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between mb-4">
                                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                    <Heart className="w-5 h-5 text-purple-600" />
                                </div>
                                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Cultural</span>
                            </div>
                            <h3 className="font-bold text-foreground mb-2">Village Heritage Walk</h3>
                            <p className="text-sm text-foreground mb-4">Meet local families, see traditional farming, and taste authentic village food along scenic paths.</p>
                            <div className="space-y-2 text-xs text-gray-500">
                                <div className="flex items-center gap-2">
                                    <Clock className="w-3 h-3" />
                                    <span>3-4 hours with stops</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-3 h-3" />
                                    <span>Includes local lunch</span>
                                </div>
                            </div>
                        </div>

                        {/* Meadow Trail */}
                        <div className="bg-background rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between mb-4">
                                <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                                    <Wind className="w-5 h-5 text-pink-600" />
                                </div>
                                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Easy</span>
                            </div>
                            <h3 className="font-bold text-foreground mb-2">Wildflower Meadow</h3>
                            <p className="text-sm text-foreground mb-4">Seasonal trail through meadows bursting with colorful wildflowers. Peak beauty in spring and monsoon.</p>
                            <div className="space-y-2 text-xs text-gray-500">
                                <div className="flex items-center gap-2">
                                    <Clock className="w-3 h-3" />
                                    <span>2-3 hours gentle walk</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-3 h-3" />
                                    <span>Best: April-June, Aug-Oct</span>
                                </div>
                            </div>
                        </div>

                        {/* Night Hike */}
                        <div className="bg-background rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between mb-4">
                                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                    <span className="text-gray-600">🌙</span>
                                </div>
                                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">Adventure</span>
                            </div>
                            <h3 className="font-bold text-foreground mb-2">Moonlight Nature Walk</h3>
                            <p className="text-sm text-foreground mb-4">Experience the forest at night! Listen to owls, spot fireflies, and see the world in a new light.</p>
                            <div className="space-y-2 text-xs text-gray-500">
                                <div className="flex items-center gap-2">
                                    <Clock className="w-3 h-3" />
                                    <span>2-3 hours after sunset</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-3 h-3" />
                                    <span>Headlamps provided</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Adventure */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-foreground mb-6">Take That First Step Today</h2>
                    <p className="text-lg text-foreground mb-8">
                        Your perfect hiking adventure is just a step away. Whether you&apos;re seeking solitude, 
                        family fun, or Instagram-worthy views, we have the trail that speaks to your heart.
                    </p>
                    
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl border border-green-100">
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <Footprints className="w-8 h-8 text-green-600 mx-auto mb-3" />
                                <h3 className="font-semibold text-gray-700 mb-2">Start Walking</h3>
                                <p className="text-sm text-gray-600">No experience needed, just comfortable shoes and an open heart</p>
                            </div>
                            
                            <div className="text-center">
                                <Heart className="w-8 h-8 text-red-500 mx-auto mb-3" />
                                <h3 className="font-semibold text-gray-700 mb-2">Feel Better</h3>
                                <p className="text-sm text-gray-600">Return home refreshed, recharged, and connected to nature</p>
                            </div>
                            
                            <div className="text-center">
                                <Camera className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                                <h3 className="font-semibold text-gray-700 mb-2">Share Stories</h3>
                                <p className="text-sm text-gray-600">Create memories and photos that inspire others to explore</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}