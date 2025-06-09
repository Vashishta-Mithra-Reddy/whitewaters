import { Metadata } from "next"
// import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact Us | White Waters",
  description: "Get in touch with White Waters for your adventure needs",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Address</h3>
                <p className="text-muted-foreground">
                  White Waters Adventure<br />
                  Rishikesh, Uttarakhand<br />
                  India - 249201
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Phone</h3>
                <p className="text-muted-foreground">
                  +91 1234567890<br />
                  +91 9876543210
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Email</h3>
                <p className="text-muted-foreground">
                  info@whitewaters.com<br />
                  bookings@whitewaters.com
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Business Hours</h3>
                <p className="text-muted-foreground">
                  Monday - Sunday: 8:00 AM - 8:00 PM<br />
                  (Open all year round)
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
            {/* <ContactForm /> */}
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Location</h2>
          <div className="aspect-video w-full rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.1234567890123!2d78.267962!3d30.086928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDA1JzEzLjEiTiA3OMKwMTYnMDQuNyJF!5e0!3m2!1sen!2sin!4v1234567890"
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