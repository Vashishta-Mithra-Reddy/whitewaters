import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Calendar, Users, Clock, TrendingUp, Award, User, AlertCircle, RefreshCw } from 'lucide-react';
import Link from 'next/link';
import ServiceImage from '@/components/ServiceImage';
import { Suspense } from 'react';

type BookingStatus = 'pending' | 'confirmed' | 'cancelled';

type Booking = {
  id: string;
  service_id: string;
  booking_date: string;
  participants: number;
  total_amount: number;
  status: BookingStatus;
  created_at: string;
  user_id: string;
};

type Service = {
  id: string;
  name: string;
  slug: string;
  category: string;
  duration: string;
  images: string[];
};

type ProfileStats = {
  totalBookings: number;
  confirmedBookings: number;
  upcomingBookings: number;
  adventureLevel: string;
};

// Loading skeleton components
function StatsCardSkeleton() {
  return (
    <Card className="animate-pulse">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <div className="h-4 w-24 bg-gray-200 rounded"></div>
            <div className="h-8 w-16 bg-gray-200 rounded"></div>
          </div>
          <div className="h-8 w-8 bg-gray-200 rounded"></div>
        </div>
      </CardContent>
    </Card>
  );
}

function BookingCardSkeleton() {
  return (
    <div className="border border-gray-200 rounded-xl p-6 animate-pulse">
      <div className="flex items-start space-x-4">
        <div className="h-16 w-16 bg-gray-200 rounded-lg flex-shrink-0"></div>
        <div className="flex-1 space-y-3">
          <div className="flex items-start justify-between">
            <div className="space-y-2 flex-1">
              <div className="h-6 w-48 bg-gray-200 rounded"></div>
              <div className="flex space-x-2">
                <div className="h-5 w-16 bg-gray-200 rounded-full"></div>
                <div className="h-5 w-20 bg-gray-200 rounded-full"></div>
              </div>
            </div>
            <div className="space-y-1 text-right">
              <div className="h-6 w-16 bg-gray-200 rounded"></div>
              <div className="h-4 w-20 bg-gray-200 rounded"></div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-4 bg-gray-200 rounded"></div>
            ))}
          </div>
          <div className="border-t pt-4">
            <div className="flex space-x-3">
              <div className="h-8 w-24 bg-gray-200 rounded"></div>
              <div className="h-8 w-24 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfileLoadingSkeleton() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Skeleton */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-gray-200 rounded-full p-3 animate-pulse">
              <div className="h-8 w-8"></div>
            </div>
            <div className="space-y-2">
              <div className="h-8 w-48 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-64 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Stats Cards Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <StatsCardSkeleton />
          <StatsCardSkeleton />
          <StatsCardSkeleton />
        </div>

        {/* Main Content Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Skeleton */}
          <div className="lg:col-span-1">
            <Card className="animate-pulse">
              <CardHeader>
                <div className="h-6 w-32 bg-gray-200 rounded"></div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg space-y-2">
                  <div className="h-4 w-24 bg-gray-200 rounded"></div>
                  <div className="h-5 w-32 bg-gray-200 rounded"></div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg space-y-2">
                  <div className="h-4 w-28 bg-gray-200 rounded"></div>
                  <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
                </div>
                <div className="h-10 w-full bg-gray-200 rounded"></div>
              </CardContent>
            </Card>
          </div>

          {/* Bookings Skeleton */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <div className="h-6 w-32 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 w-48 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                  <div className="h-6 w-16 bg-gray-200 rounded-full animate-pulse"></div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <BookingCardSkeleton />
                <BookingCardSkeleton />
                <BookingCardSkeleton />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

// Error component
function ProfileError({ error, retry }: { error: string; retry?: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full px-4">
        <Alert className="border-red-200 bg-red-50">
          <AlertCircle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800">
            {error}
          </AlertDescription>
        </Alert>
        {retry && (
          <div className="mt-4 text-center">
            <Button onClick={retry} variant="outline" className="gap-2">
              <RefreshCw className="h-4 w-4" />
              Try Again
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

// Utility functions
function calculateStats(bookings: Booking[]): ProfileStats {
  const totalBookings = bookings.length;
  const confirmedBookings = bookings.filter((b) => b.status === 'confirmed').length;
  const upcomingBookings = bookings.filter(
    (b) => new Date(b.booking_date) > new Date() && b.status !== 'cancelled'
  ).length;

  const adventureLevel = 
    totalBookings === 0 ? 'Beginner' :
    totalBookings < 5 ? 'Explorer' :
    totalBookings < 10 ? 'Adventurer' : 'Expert';

  return {
    totalBookings,
    confirmedBookings,
    upcomingBookings,
    adventureLevel
  };
}

function getStatusColor(status: BookingStatus): string {
  const colors = {
    confirmed: 'bg-green-100 text-green-800 border-green-200',
    pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    cancelled: 'bg-red-100 text-red-800 border-red-200'
  };
  return colors[status] || 'bg-gray-100 text-gray-800 border-gray-200';
}

function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    kayaking: 'bg-blue-100 text-blue-800',
    rafting: 'bg-orange-100 text-orange-800',
    expedition: 'bg-purple-100 text-purple-800'
  };
  return colors[category] || 'bg-gray-100 text-gray-800';
}

function formatDate(dateString: string, options?: Intl.DateTimeFormatOptions): string {
  try {
    return new Date(dateString).toLocaleDateString('en-US', options);
  } catch {
    return 'Invalid Date';
  }
}

// Stats card component
function StatsCard({ 
  title, 
  value, 
  icon: Icon, 
  gradient 
}: { 
  title: string; 
  value: number; 
  icon: any; 
  gradient: string; 
}) {
  return (
    <Card className={`${gradient} text-white`}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white/80 text-sm font-medium">{title}</p>
            <p className="text-3xl font-bold" aria-label={`${title}: ${value}`}>
              {value}
            </p>
          </div>
          <Icon className="h-8 w-8 text-white/60" aria-hidden="true" />
        </div>
      </CardContent>
    </Card>
  );
}

// Booking card component
function BookingCard({ 
  booking, 
  service 
}: { 
  booking: Booking; 
  service: Service; 
}) {
  const isUpcoming = new Date(booking.booking_date) > new Date();
  const bookingDate = formatDate(booking.booking_date, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
  const createdDate = formatDate(booking.created_at);

  return (
    <div className="group border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-200">
      <div className="flex items-start space-x-4">
        <ServiceImage 
          service={service} 
          className="h-16 w-16 flex-shrink-0" 
        />

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors truncate">
                <Link 
                  href={`/services/${service.slug}`}
                  className="hover:underline focus:underline focus:outline-none"
                  aria-label={`View ${service.name} service details`}
                >
                  {service.name}
                </Link>
              </h3>
              <div className="flex items-center space-x-2 mt-1 flex-wrap gap-1">
                <Badge className={getCategoryColor(service.category)}>
                  {service.category.charAt(0).toUpperCase() + service.category.slice(1)}
                </Badge>
                <Badge className={`border ${getStatusColor(booking.status)}`}>
                  {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                </Badge>
                {isUpcoming && booking.status !== 'cancelled' && (
                  <Badge className="bg-blue-100 text-blue-800">Upcoming</Badge>
                )}
              </div>
            </div>
            <div className="text-right ml-4">
              <p className="text-lg font-bold text-gray-900" aria-label={`Total amount: ${booking.total_amount} rupees`}>
                ₹{booking.total_amount.toLocaleString()}
              </p>
              <p className="text-sm text-gray-500" aria-label={`Booked on ${createdDate}`}>
                {createdDate}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center space-x-2 text-gray-600">
              <Calendar className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
              <span className="truncate" title={bookingDate}>
                {bookingDate}
              </span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Users className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
              <span>
                {booking.participants} participant{booking.participants > 1 ? 's' : ''}
              </span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Clock className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
              <span className="truncate" title={service.duration}>
                {service.duration}
              </span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <span className="truncate" title={`Booking ID: ${booking.id}`}>
                ID: {booking.id.slice(0, 8)}...
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
            <div className="flex space-x-3">
              <Link href={`/booking-confirmation/${booking.id}`}>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </Link>
              <Link href={`/services/${service.slug}`}>
                <Button variant="ghost" size="sm">
                  View Service
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main profile content component
async function ProfileContent() {
  const supabase = await createClient();

  try {
    const {
      data: { user },
      error: userError
    } = await supabase.auth.getUser();

    if (userError) {
      throw new Error('Failed to fetch user information');
    }

    if (!user) {
      redirect('/auth/login');
    }

    // Fetch bookings with error handling
    const { data: bookings, error: bookingsError } = await supabase
      .from('bookings')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    if (bookingsError) {
      throw new Error('Failed to load your bookings. Please try again.');
    }

    // Fetch services for the bookings
    const servicesMap = new Map<string, Service>();
    if (bookings && bookings.length > 0) {
      const serviceIds = [...new Set(bookings.map((b) => b.service_id))];
      const { data: services, error: servicesError } = await supabase
        .from('services')
        .select('id, name, slug, category, duration, images')
        .in('id', serviceIds);

      if (servicesError) {
        console.error('Error fetching services:', servicesError);
        // Don't throw here, just log - we can still show bookings without full service details
      } else {
        services?.forEach((service) => {
          servicesMap.set(service.id, service);
        });
      }
    }

    const safeBookings = bookings || [];
    const stats = calculateStats(safeBookings);
    const memberSince = formatDate(user.created_at, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    return (
      <div className="min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-blue-100 rounded-full p-3">
                <User className="h-8 w-8 text-blue-600" aria-hidden="true" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Welcome back!</h1>
                <p className="text-gray-600" aria-label={`User email: ${user.email}`}>
                  {user.email}
                </p>
              </div>
            </div>
          </header>

          {/* Stats Cards */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8" aria-label="Account statistics">
            <StatsCard
              title="Total Bookings"
              value={stats.totalBookings}
              icon={Calendar}
              gradient="bg-gradient-to-r from-blue-500 to-blue-600"
            />
            <StatsCard
              title="Confirmed"
              value={stats.confirmedBookings}
              icon={Award}
              gradient="bg-gradient-to-r from-green-500 to-green-600"
            />
            <StatsCard
              title="Upcoming"
              value={stats.upcomingBookings}
              icon={TrendingUp}
              gradient="bg-gradient-to-r from-purple-500 to-purple-600"
            />
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Account Information */}
            <aside className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <User className="h-5 w-5" aria-hidden="true" />
                    <span>Account Info</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Member Since</p>
                    <p className="font-medium text-gray-900">
                      {memberSince}
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Adventure Level</p>
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-blue-100 text-blue-800">
                        {stats.adventureLevel}
                      </Badge>
                    </div>
                  </div>
                  <Link href="/services" className="w-full">
                    <Button className="w-full mt-4">Book New Adventure</Button>
                  </Link>
                </CardContent>
              </Card>
            </aside>

            {/* Bookings */}
            <main className="lg:col-span-3">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">My Adventures</CardTitle>
                      <CardDescription>Your booking history and upcoming adventures</CardDescription>
                    </div>
                    {stats.totalBookings > 0 && (
                      <Badge variant="outline" className="text-sm">
                        {stats.totalBookings} total
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  {safeBookings.length === 0 ? (
                    <div className="text-center py-16">
                      <div className="bg-gray-100 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                        <Calendar className="h-12 w-12 text-gray-400" aria-hidden="true" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">No adventures yet</h3>
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
                    <div className="space-y-4" role="list" aria-label="Your bookings">
                      {safeBookings.map((booking) => {
                        const service = servicesMap.get(booking.service_id);
                        if (!service) {
                          // Create a fallback service object
                          const fallbackService: Service = {
                            id: booking.service_id,
                            name: 'Service Unavailable',
                            slug: '#',
                            category: 'unknown',
                            duration: 'N/A',
                            images: []
                          };
                          return (
                            <div key={booking.id} role="listitem">
                              <BookingCard booking={booking} service={fallbackService} />
                            </div>
                          );
                        }

                        return (
                          <div key={booking.id} role="listitem">
                            <BookingCard booking={booking} service={service} />
                          </div>
                        );
                      })}
                    </div>
                  )}
                </CardContent>
              </Card>
            </main>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Something went wrong. Please try again.';
    return <ProfileError error={errorMessage} />;
  }
}

// Main component with suspense boundary
export default function ProfilePage() {
  return (
    <Suspense fallback={<ProfileLoadingSkeleton />}>
      <ProfileContent />
    </Suspense>
  );
}