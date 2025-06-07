import { createClient } from '@/lib/supabase/server';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, Calendar, Users, Clock, Mail, Phone, User, IndianRupee } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// type BookingWithService = {
//   id: string;
//   service_id: string;
//   user_id: string | null;
//   guest_name: string | null;
//   guest_email: string | null;
//   guest_phone: string | null;
//   booking_date: string;
//   participants: number;
//   total_amount: number;
//   status: 'pending' | 'confirmed' | 'cancelled';
//   special_requests: string | null;
//   created_at: string;
//   services: {
//     name: string;
//     slug: string;
//     category: string;
//     duration: string;
//     description: string;
//     images: string[] | null;
//     included_items: string[] | null;
//   };
// };

export default async function BookingConfirmationPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;
  const supabase = await createClient();
  
  // Fetch booking details with service information
  const { data: booking, error } = await supabase
    .from('bookings')
    .select(`
      id,
      service_id,
      user_id,
      guest_name,
      guest_email,
      guest_phone,
      booking_date,
      participants,
      total_amount,
      status,
      special_requests,
      created_at
    `)
    .eq('id', id)
    .single();

  if (error || !booking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Booking not found</h1>
          <p className="text-gray-600 mb-6">The booking you are looking for doesnot exist or has been removed.</p>
          <Link href="/services">
            <Button>Browse Services</Button>
          </Link>
        </div>
      </div>
    );
  }

  // Now fetch the service:
  const { data: service, error: serviceError } = await supabase
  .from('services')
  .select(`
    name,
    slug,
    category,
    duration,
    description,
    images,
    included_items
    `)
  .eq('id', booking.service_id)
  .single();

  if (serviceError || !service) {
  // handle error
  return <div>Service not found</div>;
  }


  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800 border-green-200';
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'cancelled': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'kayaking': return 'bg-blue-100 text-blue-800';
      case 'rafting': return 'bg-orange-100 text-orange-800';
      case 'expedition': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {booking.status === 'confirmed' ? 'Booking Confirmed!' : 'Booking Received!'}
          </h1>
          <p className="text-lg text-gray-600">
            {booking.status === 'confirmed' 
              ? 'Your adventure is confirmed and ready to go!' 
              : 'We\'ve received your booking and will confirm it shortly.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Service Information */}
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{service.name}</CardTitle>
                    <div className="flex items-center space-x-2 mb-3">
                      <Badge className={getCategoryColor(service.category)}>
                        {service.category.charAt(0).toUpperCase() + service.category.slice(1)}
                      </Badge>
                      <Badge className={`border ${getStatusColor(booking.status)}`}>
                        {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                      </Badge>
                    </div>
                  </div>
                  {service.images && service.images.length > 0 && (
                    <div className="relative h-20 w-20 rounded-lg overflow-hidden ml-4">
                      <Image
                        src={service.images[0]}
                        alt={service.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
                <CardDescription>
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-500">Date</p>
                      <p className="font-semibold">
                        {new Date(booking.booking_date).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-500">Participants</p>
                      <p className="font-semibold">{booking.participants}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-semibold">{service.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <IndianRupee className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-500">Total Amount</p>
                      <p className="font-semibold text-lg">{booking.total_amount}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What's Included */}
            {service.included_items && service.included_items.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Things Included</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {service.included_items.map((item: string, index: number) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Special Requests */}
            {booking.special_requests && (
              <Card>
                <CardHeader>
                  <CardTitle>Special Requests</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{booking.special_requests}</p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Booking Summary & Contact */}
          <div className="space-y-6">
            {/* Booking Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Booking ID:</span>
                  <span className="font-mono text-sm">{booking.id.slice(0, 8)}...</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Booked on:</span>
                  <span>{new Date(booking.created_at).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <Badge className={getStatusColor(booking.status)}>
                    {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                  </Badge>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total Amount:</span>
                  <span>₹{booking.total_amount}</span>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {booking.user_id ? (
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">Registered User</span>
                  </div>
                ) : (
                  <>
                    {booking.guest_name && (
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">{booking.guest_name}</span>
                      </div>
                    )}
                    {booking.guest_email && (
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">{booking.guest_email}</span>
                      </div>
                    )}
                    {booking.guest_phone && (
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">{booking.guest_phone}</span>
                      </div>
                    )}
                  </>
                )}
              </CardContent>
            </Card>

            {/* Actions */}
            <div>
              <Link href={`/services/${service.slug}`} className="w-full">
                <Button className="w-full">
                  View Service Details
                </Button>
              </Link>
                {/* <Link href="/services" className="w-full">
                    <Button className="w-full">
                    Browse More Services
                    </Button>
                </Link> */}
              {booking.user_id && (
                <Link href="/profile" className="w-full mt-20">
                  <Button variant="outline" className="w-full mt-2">
                    View All Bookings
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Next Step?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Confirmation Email</h3>
                <p className="text-sm text-gray-600">
                  You will receive a confirmation email with all the details shortly.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Contact Support</h3>
                <p className="text-sm text-gray-600">
                  Have questions? Our team is here to help you prepare for your adventure.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Prepare for Adventure</h3>
                <p className="text-sm text-gray-600">
                  Check the included items and requirements to ensure you are ready.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}