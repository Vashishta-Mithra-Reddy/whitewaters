import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Our Team | White Waters",
  description: "Meet the passionate team behind White Waters adventures",
}

const teamMembers = [
  {
    name: "Rajesh Kumar",
    role: "Founder & Lead Guide",
    bio: "With over 20 years of experience in white water rafting and mountaineering, Rajesh leads our team with expertise and passion.",
    image: "/images/team/rajesh.jpg",
  },
  {
    name: "Priya Sharma",
    role: "Operations Manager",
    bio: "Priya ensures smooth operations and exceptional guest experiences at White Waters.",
    image: "/images/team/priya.jpg",
  },
  {
    name: "Amit Singh",
    role: "Senior Rafting Guide",
    bio: "Amit is our most experienced rafting guide, having navigated the Ganges for over 15 years.",
    image: "/images/team/amit.jpg",
  },
  {
    name: "Neha Patel",
    role: "Safety & Training Coordinator",
    bio: "Neha oversees all safety protocols and training programs, ensuring the highest standards of safety.",
    image: "/images/team/neha.jpg",
  },
  {
    name: "Vikram Mehta",
    role: "Adventure Sports Specialist",
    bio: "Vikram specializes in kayaking and rock climbing, bringing years of expertise to our adventure programs.",
    image: "/images/team/vikram.jpg",
  },
  {
    name: "Anjali Desai",
    role: "Guest Relations Manager",
    bio: "Anjali ensures that every guest has a memorable experience with us, handling all guest communications.",
    image: "/images/team/anjali.jpg",
  },
]

export default function PeoplePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Team</h1>
        
        <div className="prose prose-lg dark:prose-invert mx-auto mb-12">
          <p className="text-center text-lg mb-12">
            Meet the passionate individuals who make White Waters adventures possible. 
            Our team consists of experienced professionals dedicated to providing safe, 
            exciting, and memorable experiences for all our guests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-card rounded-lg overflow-hidden">
              <div className="relative h-[300px]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-muted-foreground mb-4">{member.role}</p>
                <p className="text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-card p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-6 text-center">Join Our Team</h2>
          <p className="text-center mb-8">
            We're always looking for passionate individuals to join our team. 
            If you love adventure and want to be part of something special, 
            we'd love to hear from you.
          </p>
          <div className="text-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Contact Us About Opportunities
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 