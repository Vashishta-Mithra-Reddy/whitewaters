import { Mail, Phone } from "lucide-react";

export default function ContactInfo() {
  return (
    <div id="contact" className="w-full max-w-4xl bg-muted/50 rounded-lg p-8 my-20">
    <h2 className="text-2xl font-bold text-center mb-6">Get in Touch</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
      <div className="flex flex-col items-center space-y-2">
        <Mail className="h-6 w-6 text-blue-600" />
        <span className="font-medium">Email</span>
        <a href="mailto:shivanandi.river.lodge@gmail.com" className="text-sm text-muted-foreground hover:text-foreground">
          shivanandi.river.lodge@gmail.com
        </a>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <Phone className="h-6 w-6 text-green-600" />
        <span className="font-medium">WhatsApp</span>
        <a href="https://wa.me/919756607880" className="text-sm text-muted-foreground hover:text-foreground">
          +91 97566 07880
        </a>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <Phone className="h-6 w-6 text-purple-600" />
        <span className="font-medium">Call</span>
        <a href="tel:+918171340036" className="text-sm text-muted-foreground hover:text-foreground">
          +91 81713 40036
        </a>
      </div>
    </div>
  </div>
  );
}