import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Users, MapPin, Clock, Star, TrendingUp, Award, User } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

type BookingWithService = {
  id: string;
  service_id: string;
  booking_date: string;
  participants: number;
  total_amount: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  created_at: string;
  services: {
    name: string;
    slug: string;
    category: string;
    duration: string;
    images: string[] | null;
}[];
};


// {
//   id: any;
//   service_id: any;
//   booking_date: any;
//   participants: any;
//   total_amount: any;
//   status: any;
//   created_at: any;
//   services: {
//       name: any;
//       slug: any;
//       category: any;
//       duration: any;
//       images: any;
//   }[];
// }[] | null


export default async function ProfilePage() {
  const supabase = await createClient();
  
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    redirect('/auth/login');
  }

  // Fetch user's bookings with service details
  const { data: bookings, error } = await supabase
    .from('bookings')
    .select(`
      id,
      service_id,
      booking_date,
      participants,
      total_amount,
      status,
      created_at,
      services!inner (
        name,
        slug,
        category,
        duration,
        images
      )
    `)
    .eq('user_id', user.id)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching bookings:', error);
  }

  // Calculate stats
  const totalBookings = bookings?.length || 0;
  const confirmedBookings = bookings?.filter(b => b.status === 'confirmed').length || 0;
  const totalSpent = bookings?.reduce((sum, booking) => sum + booking.total_amount, 0) || 0;
  const upcomingBookings = bookings?.filter(b => 
    new Date(b.booking_date) > new Date() && b.status !== 'cancelled'
  ).length || 0;

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
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-blue-100 rounded-full p-3">
              <User className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Welcome back!</h1>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm font-medium">Total Bookings</p>
                  <p className="text-3xl font-bold">{totalBookings}</p>
                </div>
                <Calendar className="h-8 w-8 text-blue-200" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm font-medium">Confirmed</p>
                  <p className="text-3xl font-bold">{confirmedBookings}</p>
                </div>
                <Award className="h-8 w-8 text-green-200" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm font-medium">Upcoming</p>
                  <p className="text-3xl font-bold">{upcomingBookings}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-purple-200" />
              </div>
            </CardContent>
          </Card>
          
          {/* <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100 text-sm font-medium">Total Spent</p>
                  <p className="text-3xl font-bold">₹{totalSpent.toLocaleString()}</p>
                </div>
                <Star className="h-8 w-8 text-orange-200" />
              </div>
            </CardContent>
          </Card> */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Account Information */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>Account Info</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Email Address</p>
                  <p className="font-medium text-gray-900">{user.email}</p>
                </div> */}
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Member Since</p>
                  <p className="font-medium text-gray-900">
                    {new Date(user.created_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Adventure Level</p>
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-blue-100 text-blue-800">
                      {totalBookings === 0 ? 'Beginner' : 
                       totalBookings < 5 ? 'Explorer' : 
                       totalBookings < 10 ? 'Adventurer' : 'Expert'}
                    </Badge>
                  </div>
                </div>
                <Link href="/services" className="w-full">
                  <Button className="w-full mt-4">
                    Book New Adventure
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Bookings */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">My Adventures</CardTitle>
                    <CardDescription>
                      Your booking history and upcoming adventures
                    </CardDescription>
                  </div>
                  {totalBookings > 0 && (
                    <Badge variant="outline" className="text-sm">
                      {totalBookings} total
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                {!bookings || bookings.length === 0 ? (
                  <div className="text-center py-16">
                    <div className="bg-gray-100 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                      <Calendar className="h-12 w-12 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      No adventures yet
                    </h3>
                    <p className="text-gray-600 mb-8 max-w-md mx-auto">
                      Ready to start your adventure journey? Explore our exciting services and book your first experience!
                    </p>
                    <Link href="/services">
                      <Button size="lg" className="px-8">
                        Explore Adventures
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {bookings.map((booking: BookingWithService) => {
                      const isUpcoming = new Date(booking.booking_date) > new Date();
                      const isPast = new Date(booking.booking_date) < new Date();
                      
                      return (
                        <div key={booking.id} className="group border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-200">
                          <div className="flex items-start space-x-4">
                            {/* Service Image */}
                            {booking.services[0].images && booking.services[0].images.length > 0 ? (
                              <div className="relative h-16 w-16 rounded-lg overflow-hidden flex-shrink-0">
                                <Image
                                  src={booking.services[0].images[0]}
                                  alt={booking.services[0].name}
                                  fill
                                  className="object-cover group-hover:scale-105 transition-transform duration-200"
                                />
                              </div>
                            ) : (
                              <div className="h-16 w-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Calendar className="h-8 w-8 text-white" />
                              </div>
                            )}
                            
                            {/* Booking Details */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between mb-3">
                                <div className="flex-1">
                                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                    <Link href={`/services/${booking.services[0].slug}`}>
                                      {booking.services[0].name}
                                    </Link>
                                  </h3>
                                  <div className="flex items-center space-x-2 mt-1">
                                    <Badge className={getCategoryColor(booking.services[0].category)}>
                                      {booking.services[0].category.charAt(0).toUpperCase() + booking.services[0].category.slice(1)}
                                    </Badge>
                                    <Badge className={`border ${getStatusColor(booking.status)}`}>
                                      {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                                    </Badge>
                                    {isUpcoming && booking.status !== 'cancelled' && (
                                      <Badge className="bg-blue-100 text-blue-800">
                                        Upcoming
                                      </Badge>
                                    )}
                                  </div>
                                </div>
                                <div className="text-right">
                                  <p className="text-lg font-bold text-gray-900">₹{booking.total_amount}</p>
                                  <p className="text-sm text-gray-500">
                                    {new Date(booking.created_at).toLocaleDateString()}
                                  </p>
                                </div>
                              </div>
                              
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                <div className="flex items-center space-x-2 text-gray-600">
                                  <Calendar className="h-4 w-4" />
                                  <span>
                                    {new Date(booking.booking_date).toLocaleDateString('en-US', {
                                      month: 'short',
                                      day: 'numeric',
                                      year: 'numeric'
                                    })}
                                  </span>
                                </div>
                                <div className="flex items-center space-x-2 text-gray-600">
                                  <Users className="h-4 w-4" />
                                  <span>{booking.participants} participant{booking.participants > 1 ? 's' : ''}</span>
                                </div>
                                <div className="flex items-center space-x-2 text-gray-600">
                                  <Clock className="h-4 w-4" />
                                  <span>{booking.services[0].duration}</span>
                                </div>
                                <div className="flex items-center space-x-2 text-gray-600">
                                  {/* <D className="h-4 w-4" /> */}
                                  <span className="truncate">ID: {booking.id.slice(0, 8)}...</span>
                                </div>
                              </div>
                              
                              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                                <div className="flex space-x-3">
                                  <Link href={`/booking-confirmation/${booking.id}`}>
                                    <Button variant="outline" size="sm">
                                      View Details
                                    </Button>
                                  </Link>
                                  <Link href={`/services/${booking.services[0].slug}`}>
                                    <Button variant="ghost" size="sm">
                                      View Service
                                    </Button>
                                  </Link>
                                </div>
                                {booking.status === 'pending' && (
                                  <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                                    Cancel Booking
                                  </Button>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}