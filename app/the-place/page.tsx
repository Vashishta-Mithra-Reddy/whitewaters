import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "The Place | White Waters",
  description: "Discover our beautiful location and facilities at White Waters",
}

export default function ThePlacePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">The Place</h1>
        
        <div className="prose prose-lg dark:prose-invert mx-auto">
          <div className="relative w-full h-[500px] mb-12 rounded-lg overflow-hidden">
            <Image
              src="/images/the-place-hero.jpg"
              alt="White Waters Location"
              fill
              className="object-cover"
              priority
            />
          </div>

          <h2 className="text-2xl font-semibold mb-6">Our Location</h2>
          <p className="text-lg mb-6">
            Nestled in the heart of Rishikesh, our adventure center offers the perfect blend of 
            natural beauty and modern comfort. Located on the banks of the holy Ganges River, 
            we provide easy access to some of the most exciting white water rapids in the region.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/images/facility-1.jpg"
                alt="Adventure Center"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/images/facility-2.jpg"
                alt="Training Area"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-6">Our Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Adventure Center</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Modern equipment storage and maintenance area</li>
                <li>Training and briefing rooms</li>
                <li>Changing rooms and lockers</li>
                <li>First aid station</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Guest Amenities</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Comfortable waiting area</li>
                <li>Refreshment center</li>
                <li>Restrooms and showers</li>
                <li>Free Wi-Fi</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mt-12 mb-6">Getting Here</h2>
          <div className="bg-card p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Directions</h3>
            <p className="mb-4">
              We are conveniently located in Rishikesh, easily accessible by road from major 
              cities in North India. The nearest airport is in Dehradun (Jolly Grant Airport), 
              approximately 35 kilometers away.
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">By Air</h4>
                <p className="text-muted-foreground">
                  Jolly Grant Airport (DED) - 35 km<br />
                  Regular flights from Delhi and other major cities
                </p>
              </div>
              <div>
                <h4 className="font-medium">By Road</h4>
                <p className="text-muted-foreground">
                  Well-connected by road from Delhi (240 km)<br />
                  Regular bus services from major cities
                </p>
              </div>
              <div>
                <h4 className="font-medium">By Train</h4>
                <p className="text-muted-foreground">
                  Haridwar Railway Station - 25 km<br />
                  Rishikesh Railway Station - 5 km
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 