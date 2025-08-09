import { Metadata } from "next"
import Link from "next/link"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
// import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact Us | White Waters",
  description: "Get in touch with White Waters for your adventure needs",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 wrapperx ">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-16 text-center text-gray-800">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          
          {/* Left Column - Contact Info */}
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">Send us a Message</h2>
            {/* <ContactForm /> */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">Feel free to drop us a message, and we will get back to you as soon as possible!</p>
              {/* Placeholder for Contact Form */}
              {/* <ContactForm /> */}
            </div>
          </div>
          
          
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">Get in Touch</h2>
            <div className="space-y-4">
              {/* Address */}
              <div>
                <h3 className="text-lg font-medium mb-3 text-gray-700">Address</h3>
                <Link href="https://maps.app.goo.gl/n3Ldva7gTwytpKbW9" target="_blank" className="flex items-center gap-4 justify-start p-3 rounded-md border border-transparent hover:border-blue-500 hover:bg-blue-50 transition-colors duration-500">
                   <MapPin className="h-6 w-6 text-blue-500 flex-shrink-0" />
                   <span className="text-gray-700">Shivanandi River Lodge, Bankhil, Uttarakhand.</span>
                </Link>
              </div>
              
              {/* Phone */}
              <div>
                <h3 className="text-lg font-medium mb-3 text-gray-700">Phone</h3>
                <Link href="tel:+918171340036" className="flex items-center gap-4 justify-start p-3 rounded-md border border-transparent hover:border-blue-500 hover:bg-blue-50 transition-colors duration-500">
                  <Phone className="h-6 w-6 text-blue-500 flex-shrink-0" />
                  <span className="text-gray-700">+918171340036</span>
                </Link>
              </div>
              
              {/* Email */}
              <div>
                <h3 className="text-lg font-medium mb-3 text-gray-700">Email</h3>
                  <Link href="mailto:info@whitewaters.com" className="flex items-center gap-4 justify-start p-3 rounded-md border border-transparent hover:border-blue-500 hover:bg-blue-50 transition-colors duration-500">
                      <Mail className="h-6 w-6 text-blue-500 flex-shrink-0" />
                      <span className="text-gray-700">shivanandi.river.lodge@gmail.com</span>
                  </Link>
              </div>
              
              {/* Business Hours */}
              <div>
                <h3 className="text-lg font-medium mb-3 text-gray-700">Business Hours</h3>
                <div className="flex items-center gap-4 p-3 text-gray-700">
                  <Clock className="h-6 w-6 text-blue-500 flex-shrink-0" />
                  <span className="text-balance">Monday - Sunday: 8:00 AM - 8:00 PM</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Message Section */}
          
        </div>
        
        {/* Map Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Location</h2>
          <div className="aspect-video w-full rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.9411629638635!2d79.06849187580652!3d30.295736574798024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909c8fc2df244ff%3A0xde37a5ced0ea0e9!2sShivanandi%20River%20Lodge!5e0!3m2!1sen!2sin!4v1754728783092!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
