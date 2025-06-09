import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About Us | White Waters",
  description: "Learn about White Waters - Your adventure partner in the Himalayas",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">About White Waters</h1>
        
        <div className="prose prose-lg dark:prose-invert mx-auto">
          <div className="mb-12">
            <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
              <Image
                src="/images/about-hero.jpg"
                alt="White Waters Adventure"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            <p className="text-lg mb-6">
              Welcome to White Waters, your premier adventure destination in the heart of the Himalayas. 
              For over two decades, we have been crafting unforgettable experiences for adventure enthusiasts 
              and nature lovers from around the world.
            </p>

            <p className="text-lg mb-6">
              Our journey began with a simple passion for the mountains and a desire to share the 
              breathtaking beauty of the Himalayas with others. Today, we stand as one of the most 
              trusted adventure operators in the region, offering a wide range of activities including 
              white water rafting, kayaking, trekking, and mountain expeditions.
            </p>

            <h2 className="text-2xl font-semibold mt-12 mb-6">Our Mission</h2>
            <p className="text-lg mb-6">
              We are committed to providing safe, sustainable, and exhilarating adventure experiences 
              while promoting responsible tourism and environmental conservation. Our goal is to create 
              meaningful connections between people and nature, fostering a deeper appreciation for 
              the Himalayan ecosystem.
            </p>

            <h2 className="text-2xl font-semibold mt-12 mb-6">Why Choose Us</h2>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-3">Experienced and certified guides with extensive local knowledge</li>
              <li className="mb-3">State-of-the-art safety equipment and protocols</li>
              <li className="mb-3">Sustainable tourism practices</li>
              <li className="mb-3">Personalized adventure experiences</li>
              <li className="mb-3">Deep commitment to environmental conservation</li>
            </ul>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Safety First</h3>
                <p>
                  Your safety is our top priority. We maintain the highest standards of safety 
                  equipment and protocols, ensuring that every adventure is both thrilling and secure.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Local Expertise</h3>
                <p>
                  Our team consists of local experts who know the terrain intimately, ensuring 
                  authentic and enriching experiences for all our guests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 