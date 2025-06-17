import { SpecificServiceGrid } from "@/components/specific-service-grid";
import { getServicesByCategory } from "@/lib/supabase/services";
// import { Star, Heart, Mountain, Users, Calendar, MapPin, Sparkles, Sun, Clock, Shield, Camera, Phone } from "lucide-react";
import { Mountain, Users, Sparkles, Clock, Shield } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Pilgrimage | White Waters',
    description: 'Sacred journeys to holy shrines and temples in the Himalayas - spiritual adventures that transform hearts and souls',
}

export default async function PilgrimagePage() {
    const services = await getServicesByCategory({ category: 'pilgrimage' });
    
    return (
        <div className="min-h-screen max-w-7xl mx-auto">
            {/* Hero Section - Spiritual Design */}
            <section className="relative pb-16 pt-8 px-4 overflow-hidden animate-in fade-in-20 duration-1000">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 opacity-25">
                    <div className="absolute top-10 left-10 text-6xl animate-pulse">🕉️</div>
                    <div className="absolute top-20 right-20 text-4xl animate-bounce">🪔</div>
                    {/* <div className="absolute bottom-20 left-20 text-5xl animate-pulse">🙏</div> */}
                    <div className="absolute bottom-10 right-10 text-3xl animate-bounce">⭐</div>
                    <div className="absolute top-2 left-1/4 text-4xl animate-pulse">🌸</div>
                    <div className="absolute top-1/3 right-2/3 text-3xl animate-bounce">🔔</div>
                </div>
                
                <div className="max-w-6xl mx-auto relative">
                    {/* Sacred Badge */}
                    <div className="flex justify-center mb-8">
                        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-50 to-yellow-50 px-6 py-3 rounded-full border border-orange-100 hover:shadow-md transition-all duration-300">
                            <div className="w-6 h-6 text-yellow-600 animate-pulse">🕉️</div>
                            <span className="text-orange-700 font-medium">Sacred Journeys of the Soul</span>
                        </div>
                    </div>

                    {/* Main Hero */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                            Where Faith Meets 
                            <span className="block text-transparent bg-gradient-to-r from-[#F4C430] to-[#F4C430] bg-clip-text mt-2">The Mountains</span>
                        </h1>
                        <p className="text-lg md:text-xl px-6 md:px-0 text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed slide-in-from-top-4 animate-in duration-1000">
                            Journey to ancient temples, sacred caves, and holy shrines nestled in the lap of the Himalayas. 
                            These are not just trips—they are transformative experiences that connect you with centuries 
                            of devotion, peace, and divine energy.
                        </p>
                        
                    </div>

                    {/* Sacred Statistics */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-8 px-6 md:px-0">
                    {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-8"> */}
                        <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl text-center border border-orange-100 hover:shadow-lg transition-all transform hover:-translate-y-1 slide-in-from-top-8 animate-in duration-1000">
                            <div className="text-2xl mb-2">🏔️</div>
                            <div className="text-lg font-bold text-orange-700">12+</div>
                            <div className="text-xs text-orange-600">Sacred Sites</div>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl text-center border border-blue-100 hover:shadow-lg transition-all transform hover:-translate-y-1 slide-in-from-top-16 animate-in duration-1000">
                            <div className="text-2xl mb-2">🛕</div>
                            <div className="text-lg font-bold text-blue-700">1000+</div>
                            <div className="text-xs text-blue-600">Years History</div>
                        </div>
                        {/* <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl text-center border border-purple-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                            <div className="text-2xl mb-2">🙏</div>
                            <div className="text-lg font-bold text-purple-700">Daily</div>
                            <div className="text-xs text-purple-600">Prayers & Rituals</div>
                        </div> */}
                        <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-2xl text-center border border-green-100 hover:shadow-lg transition-all transform hover:-translate-y-1 slide-in-from-top-24 animate-in duration-1000">
                            <div className="text-2xl mb-2">✨</div>
                            <div className="text-lg font-bold text-green-700">∞</div>
                            <div className="text-xs text-green-600">Blessings</div>
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

            {/* Sacred Journey Types - Vertical Timeline Style */}
            {/* <section className="py-16 px-4 bg-gradient-to-br from-orange-50/30 to-yellow-50/30 rounded-xl mx-4"> */}
            <section className="py-16 px-4 bg-gradient-to-br rounded-xl mx-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Choose Your Sacred Path</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Each pilgrimage offers its own spiritual rewards and divine experiences
                        </p>
                    </div>
                    
                    {/* Timeline Layout */}
                    <div className="relative">
                        {/* Central Line - Hidden on mobile */}
                        {/* <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-orange-100 to-yellow-100 h-[80%] mt-28 rounded-full"></div> */}
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-orange-100 to-yellow-100 h-full rounded-full"></div>
                        
                        <div className="space-y-12">
                            {/* Char Dham */}
                            <div className="relative grid md:grid-cols-2 gap-8 items-center">
                                <div className="md:text-right">
                                    <div className="bg-background p-8 rounded-2xl  border-4 border-dashed border-orange-100  transition-all duration-300">
                                        <div className="flex items-center gap-3 mb-4 md:justify-end">
                                            <h3 className="text-2xl font-bold text-foreground">Char Dham Yatra</h3>
                                            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                                                <span className="text-orange-600">🛕</span>
                                            </div>
                                        </div>
                                        <p className="text-muted-foreground mb-4">
                                            The ultimate spiritual journey covering four sacred shrines: Yamunotri, Gangotri, 
                                            Kedarnath, and Badrinath. A once-in-a-lifetime pilgrimage that promises moksha and divine blessings.
                                        </p>
                                        <div className="flex items-center gap-4 text-sm text-muted-foreground md:justify-end">
                                            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 12-15 days</span>
                                            <span className="flex items-center gap-1"><Mountain className="w-4 h-4" /> High altitude</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden md:block">
                                    {/* <div className="w-16 h-16 bg-orange-500 rounded-full border-4 border-white shadow-lg mx-auto flex items-center justify-center">
                                        <span className="text-white text-xl">🛕</span>
                                    </div> */}
                                </div>
                                <div className="md:col-start-2 md:row-start-1"></div>
                            </div>

                            {/* Kedarnath */}
                            <div className="relative grid md:grid-cols-2 gap-8 items-center">
                                <div className="hidden md:block">
                                    {/* <div className="w-16 h-16 bg-blue-500 rounded-full border-4 border-white shadow-lg mx-auto flex items-center justify-center">
                                        <span className="text-white text-xl">🏔️</span>
                                    </div> */}
                                </div>
                                <div>
                                    <div className="bg-background p-8 rounded-2xl  border-4 border-dashed border-blue-100  transition-all duration-300">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                                <span className="text-blue-600">🏔️</span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-foreground">Kedarnath Temple</h3>
                                        </div>
                                        <p className="text-muted-foreground mb-4">
                                            One of the twelve Jyotirlingas dedicated to Lord Shiva, situated at 3,583 meters above sea level. 
                                            The temple&apos;s magnificent architecture and spiritual aura make it a must-visit destination.
                                        </p>
                                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 3-4 days</span>
                                            <span className="flex items-center gap-1"><Mountain className="w-4 h-4" /> Trek required</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Badrinath */}
                            <div className="relative grid md:grid-cols-2 gap-8 items-center">
                                <div className="md:text-right">
                                    <div className="bg-background p-8 rounded-2xl  border-4 border-dashed border-purple-100  transition-all duration-300">
                                        <div className="flex items-center gap-3 mb-4 md:justify-end">
                                            <h3 className="text-2xl font-bold text-foreground">Badrinath Temple</h3>
                                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                                                <span className="text-purple-600">🙏</span>
                                            </div>
                                        </div>
                                        <p className="text-muted-foreground mb-4">
                                            Sacred to Lord Vishnu, this temple stands majestically between Nar and Narayan mountain ranges. 
                                            The hot springs and divine atmosphere provide ultimate peace and spiritual fulfillment.
                                        </p>
                                        <div className="flex items-center gap-4 text-sm text-muted-foreground md:justify-end">
                                            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 2-3 days</span>
                                            <span className="flex items-center gap-1"><Mountain className="w-4 h-4" /> Scenic drive</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden md:block">
                                    {/* <div className="w-16 h-16 bg-purple-500 rounded-full border-4 border-white shadow-lg mx-auto flex items-center justify-center">
                                        <span className="text-white text-xl">🙏</span>
                                    </div> */}
                                </div>
                                <div className="md:col-start-2 md:row-start-1"></div>
                            </div>

                            {/* Amarnath */}
                            <div className="relative grid md:grid-cols-2 gap-8 items-center">
                                <div className="hidden md:block">
                                    {/* <div className="w-16 h-16 bg-green-500 rounded-full border-4 border-white shadow-lg mx-auto flex items-center justify-center">
                                        <span className="text-white text-xl">❄️</span>
                                    </div> */}
                                </div>
                                <div>
                                    <div className="bg-background p-8 rounded-2xl  border-4 border-dashed border-green-100  transition-all duration-300">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                                <span className="text-green-600">❄️</span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-foreground">Amarnath Cave</h3>
                                        </div>
                                        <p className="text-muted-foreground mb-4">
                                            The holy cave shrine where Lord Shiva revealed the secret of immortality. The naturally formed 
                                            ice lingam is a divine manifestation that attracts millions of devotees annually.
                                        </p>
                                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 5-6 days</span>
                                            <span className="flex items-center gap-1"><Mountain className="w-4 h-4" /> Challenging trek</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Our Pilgrimage Services */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Journey With Us?</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            We ensure your spiritual journey is safe, comfortable, and truly transformative
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Expert Guidance */}
                        <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border border-orange-100 hover:shadow-lg transition-all duration-300">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Users className="w-8 h-8 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-bold text-orange-400 mb-4">Expert Spiritual Guides</h3>
                            <p className="text-muted-foreground">
                                Our experienced guides share the rich history, legends, and spiritual significance of each sacred site, 
                                enriching your pilgrimage experience.
                            </p>
                        </div>

                        {/* Safety First */}
                        <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Shield className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-blue-400 mb-4">Safety & Comfort</h3>
                            <p className="text-muted-foreground">
                                Your safety is our priority. We provide medical support, comfortable accommodations, 
                                and ensure all necessary safety measures throughout your journey.
                            </p>
                        </div>

                        {/* Authentic Experience */}
                        <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100 hover:shadow-lg transition-all duration-300">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Sparkles className="w-8 h-8 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-purple-400 mb-4">Authentic Rituals</h3>
                            <p className="text-muted-foreground">
                                Participate in traditional prayers, ceremonies, and rituals performed by local priests, 
                                creating memories that last a lifetime.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            {/* <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-gray-50 rounded-xl mx-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Sacred Experiences Shared</h2>
                        <p className="text-lg text-muted-foreground">Hear from pilgrims who found peace and transformation</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-background p-6 rounded-2xl shadow-lg border hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                                ))}
                            </div>
                            <p className="text-muted-foreground mb-4 italic">
                                "The Char Dham Yatra changed my life completely. The spiritual energy at each temple was overwhelming. 
                                Our guide's knowledge made every moment meaningful."
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                                    <span className="text-orange-600">👤</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground">Rajesh Kumar</p>
                                    <p className="text-sm text-muted-foreground">Delhi</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-background p-6 rounded-2xl shadow-lg border hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                                ))}
                            </div>
                            <p className="text-muted-foreground mb-4 italic">
                                "Kedarnath temple visit was divine! The trek was challenging but the team's support made it comfortable. 
                                The darshan was a moment I'll treasure forever."
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                    <span className="text-blue-600">👤</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground">Priya Sharma</p>
                                    <p className="text-sm text-muted-foreground">Mumbai</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-background p-6 rounded-2xl shadow-lg border hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                                ))}
                            </div>
                            <p className="text-muted-foreground mb-4 italic">
                                "Perfect organization from start to finish. The spiritual atmosphere, comfortable stay, 
                                and excellent food made our family pilgrimage truly memorable."
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                                    <span className="text-purple-600">👤</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground">Amit Patel</p>
                                    <p className="text-sm text-muted-foreground">Ahmedabad</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Call to Action */}
            {/* <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white p-12 rounded-3xl shadow-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Your Sacred Journey?</h2>
                        <p className="text-lg mb-8 text-orange-100">
                            Let us guide you on a transformative pilgrimage that will touch your soul and create memories for eternity.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-orange-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2">
                                <Phone className="w-5 h-5" />
                                Contact Us Now
                            </button>
                            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300 flex items-center gap-2">
                                <Calendar className="w-5 h-5" />
                                Plan Your Pilgrimage
                            </button>
                        </div>
                    </div>
                </div>
            </section> */}
        </div>
    );
}