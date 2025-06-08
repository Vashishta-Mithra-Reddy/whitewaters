import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Calendar, Users, Clock, TrendingUp, Award, User, AlertCircle, RefreshCw, Star } from 'lucide-react';
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
function ProfileLoadingSkeleton() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header Skeleton */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm animate-pulse">
          <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded-full mx-auto sm:mx-0"></div>
            <div className="space-y-3 text-center sm:text-left flex-1">
              <div className="h-6 sm:h-8 w-48 sm:w-64 bg-gray-200 rounded mx-auto sm:mx-0"></div>
              <div className="h-4 sm:h-5 w-36 sm:w-48 bg-gray-200 rounded mx-auto sm:mx-0"></div>
              <div className="h-3 sm:h-4 w-24 sm:w-32 bg-gray-200 rounded mx-auto sm:mx-0"></div>
            </div>
          </div>
        </div>

        {/* Stats Cards Skeleton */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white rounded-xl p-4 sm:p-6 shadow-sm animate-pulse">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                <div className="space-y-2">
                  <div className="h-3 sm:h-4 w-16 sm:w-20 bg-gray-200 rounded"></div>
                  <div className="h-6 sm:h-8 w-8 sm:w-12 bg-gray-200 rounded"></div>
                </div>
                <div className="h-6 sm:h-8 w-6 sm:w-8 bg-gray-200 rounded"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bookings Skeleton */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm space-y-4 sm:space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
            <div className="space-y-2">
              <div className="h-6 sm:h-7 w-36 sm:w-48 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-3 sm:h-4 w-48 sm:w-64 bg-gray-200 rounded animate-pulse"></div>
            </div>
            <div className="h-5 sm:h-6 w-12 sm:w-16 bg-gray-200 rounded-full animate-pulse"></div>
          </div>
          <div className="space-y-3 sm:space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="border border-gray-100 rounded-xl p-4 sm:p-6 animate-pulse">
                <div className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4">
                  <div className="h-12 w-12 sm:h-16 sm:w-16 bg-gray-200 rounded-lg mx-auto sm:mx-0 flex-shrink-0"></div>
                  <div className="flex-1 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between space-y-2 sm:space-y-0">
                      <div className="space-y-2 flex-1">
                        <div className="h-5 sm:h-6 w-36 sm:w-48 bg-gray-200 rounded mx-auto sm:mx-0"></div>
                        <div className="flex justify-center sm:justify-start space-x-2">
                          <div className="h-4 sm:h-5 w-12 sm:w-16 bg-gray-200 rounded-full"></div>
                          <div className="h-4 sm:h-5 w-16 sm:w-20 bg-gray-200 rounded-full"></div>
                        </div>
                      </div>
                      <div className="space-y-1 text-center sm:text-right">
                        <div className="h-5 sm:h-6 w-12 sm:w-16 bg-gray-200 rounded mx-auto sm:mx-0"></div>
                        <div className="h-3 sm:h-4 w-16 sm:w-20 bg-gray-200 rounded mx-auto sm:mx-0"></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
                      {[...Array(4)].map((_, j) => (
                        <div key={j} className="h-3 sm:h-4 bg-gray-200 rounded"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Error component
function ProfileError({ error, retry }: { error: string; retry?: () => void }) {
  return (
    <div className="min-h-screen bg-gray-50/50 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
          <Alert className="border-red-200 bg-red-50">
            <AlertCircle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-800">
              {error}
            </AlertDescription>
          </Alert>
          {retry && (
            <div className="mt-6 text-center">
              <Button onClick={retry} variant="outline" className="gap-2">
                <RefreshCw className="h-4 w-4" />
                Try Again
              </Button>
            </div>
          )}
        </div>
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
    totalBookings < 2 ? 'Explorer' :
    totalBookings < 5 ? 'Adventurer' : 'Expert';

  return {
    totalBookings,
    confirmedBookings,
    upcomingBookings,
    adventureLevel
  };
}

function getStatusColor(status: BookingStatus): string {
  const colors = {
    confirmed: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    pending: 'bg-amber-50 text-amber-700 border-amber-200',
    cancelled: 'bg-red-50 text-red-700 border-red-200'
  };
  return colors[status] || 'bg-gray-50 text-gray-700 border-gray-200';
}

function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    kayaking: 'bg-blue-50 text-blue-700 border-blue-200',
    rafting: 'bg-orange-50 text-orange-700 border-orange-200',
    expedition: 'bg-purple-50 text-purple-700 border-purple-200'
  };
  return colors[category] || 'bg-gray-50 text-gray-700 border-gray-200';
}

function formatDate(dateString: string, options?: Intl.DateTimeFormatOptions): string {
  try {
    return new Date(dateString).toLocaleDateString('en-US', options);
  } catch {
    return 'Invalid Date';
  }
}

function getAdventureLevelColor(level: string): string {
  const colors: Record<string, string> = {
    'Beginner': 'bg-green-50 text-green-700 border-green-200',
    'Explorer': 'bg-blue-50 text-blue-700 border-blue-200',
    'Adventurer': 'bg-purple-50 text-purple-700 border-purple-200',
    'Expert': 'bg-orange-50 text-orange-700 border-orange-200'
  };
  return colors[level] || 'bg-gray-50 text-gray-700 border-gray-200';
}

// Stats card component
function StatsCard({ 
  title, 
  value, 
  icon: Icon, 
  subtitle,
  className = ""
}: { 
  title: string; 
  value: number | string; 
  icon: React.ComponentType<{ className?: string }>;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={`bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow ${className}`}>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
        <div className="space-y-1 text-center sm:text-left">
          <p className="text-xs sm:text-sm font-medium text-gray-600">{title}</p>
          <p className="text-xl sm:text-2xl font-bold text-gray-900">{value}</p>
          {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
        </div>
        <div className="p-2 sm:p-3 bg-gray-50 rounded-lg mx-auto sm:mx-0 sm:ml-16">
          <Icon className="h-4 w-4 sm:h-6 sm:w-6 text-gray-600" />
        </div>
      </div>
    </div>
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
    <div className="border border-gray-100 rounded-xl p-4 sm:p-6 hover:shadow-md hover:border-gray-200 transition-all duration-200 bg-white">
      <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
        <ServiceImage 
          service={service} 
          className="h-16 w-16 sm:h-16 sm:w-16 flex-shrink-0 rounded-lg object-cover mx-auto sm:mx-0" 
        />

        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 space-y-2 sm:space-y-0">
            <div className="flex-1 min-w-0 text-center sm:text-left">
              <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors truncate mb-2">
                <Link 
                  href={`/services/${service.slug}`}
                  className="hover:underline focus:underline focus:outline-none"
                >
                  {service.name}
                </Link>
              </h3>
              <div className="flex items-center justify-center sm:justify-start space-x-2 flex-wrap gap-2">
                <Badge className={`border text-xs ${getCategoryColor(service.category)}`}>
                  {service.category.charAt(0).toUpperCase() + service.category.slice(1)}
                </Badge>
                <Badge className={`border text-xs ${getStatusColor(booking.status)}`}>
                  {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                </Badge>
                {isUpcoming && booking.status !== 'cancelled' && (
                  <Badge className="bg-blue-50 text-blue-700 border-blue-200 text-xs">
                    Upcoming
                  </Badge>
                )}
              </div>
            </div>
            <div className="text-center sm:text-right sm:ml-4">
              <p className="text-lg sm:text-xl font-bold text-gray-900">
                ₹{booking.total_amount.toLocaleString()}
              </p>
              <p className="text-xs sm:text-sm text-gray-500">
                Booked {createdDate}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-4">
            <div className="flex items-center justify-center sm:justify-start space-x-1 sm:space-x-2 text-gray-600">
              <Calendar className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0 text-gray-400" />
              <span className="text-xs sm:text-sm font-medium truncate">{bookingDate}</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start space-x-1 sm:space-x-2 text-gray-600">
              <Users className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0 text-gray-400" />
              <span className="text-xs sm:text-sm font-medium truncate">
                {booking.participants} participant{booking.participants > 1 ? 's' : ''}
              </span>
            </div>
            <div className="flex items-center justify-center sm:justify-start space-x-1 sm:space-x-2 text-gray-600">
              <Clock className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0 text-gray-400" />
              <span className="text-xs sm:text-sm font-medium truncate">{service.duration}</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start space-x-1 sm:space-x-2 text-gray-600">
              <span className="text-xs sm:text-sm font-medium text-gray-500 truncate">
                #{booking.id.slice(0, 8)}
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-4 border-t border-gray-100 space-y-3 sm:space-y-0">
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 w-full sm:w-auto">
              <Link href={`/booking-confirmation/${booking.id}`} className="w-full sm:w-auto">
                <Button variant="outline" size="sm" className="h-9 w-full sm:w-auto">
                  View Details
                </Button>
              </Link>
              <Link href={`/services/${service.slug}`} className="w-full sm:w-auto">
                <Button variant="ghost" size="sm" className="h-9 w-full sm:w-auto">
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
      month: 'long'
    });

    return (
      <div className="min-h-screen">
        <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
          {/* Enhanced Header */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm border border-gray-100">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
              <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md mx-auto sm:mx-0">
                  <User className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
                <div className="text-center sm:text-left">
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    Welcome back!
                  </h1>
                  <p className="text-gray-600 text-base sm:text-lg mb-1 break-all sm:break-normal">{user.email}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 text-sm text-gray-500">
                    <span>Member since {memberSince}</span>
                    <span className="hidden sm:inline">•</span>
                    <div className="flex items-center justify-center sm:justify-start space-x-1">
                      <Star className="h-4 w-4 mr-1 text-amber-400 fill-current" />
                      <Badge className={`border text-xs ${getAdventureLevelColor(stats.adventureLevel)}`}>
                        {stats.adventureLevel}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-auto">
                <Link href="/services" className="w-full sm:w-auto">
                  <Button size="lg" className="px-6 sm:px-8 h-11 sm:h-12 text-base w-full sm:w-auto">
                    Book New Adventure
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Enhanced Stats Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            <StatsCard
              title="Total Bookings"
              value={stats.totalBookings}
              icon={Calendar}
              subtitle="All time"
            />
            <StatsCard
              title="Confirmed"
              value={stats.confirmedBookings}
              icon={Award}
              subtitle="Successfully booked"
            />
            <StatsCard
              title="Upcoming"
              value={stats.upcomingBookings}
              icon={TrendingUp}
              subtitle="Future adventures"
            />
            <StatsCard
              title="Level"
              value={stats.adventureLevel}
              icon={Star}
              subtitle={`${stats.totalBookings} completed`}
            />
          </div>

          {/* Full Width Bookings Section */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="p-4 sm:p-6 lg:p-8 border-b border-gray-100">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                <div className="text-center sm:text-left">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">My Adventures</h2>
                  <p className="text-gray-600 mt-1 text-sm sm:text-base">Your booking history and upcoming experiences</p>
                </div>
                {stats.totalBookings > 0 && (
                  <Badge variant="outline" className="px-3 py-1 text-sm font-medium mx-auto sm:mx-0">
                    {stats.totalBookings} total bookings
                  </Badge>
                )}
              </div>
            </div>

            <div className="p-4 sm:p-6 lg:p-8">
              {safeBookings.length === 0 ? (
                <div className="text-center py-12 sm:py-16">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Calendar className="h-10 w-10 sm:h-12 sm:w-12 text-gray-400" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                    No adventures yet
                  </h3>
                  <p className="text-gray-600 mb-6 sm:mb-8 max-w-md mx-auto text-sm sm:text-base px-4">
                    Ready to start your adventure journey? Explore our exciting services and book your first experience!
                  </p>
                  <Link href="/services">
                    <Button size="lg" className="px-6 sm:px-8 h-11 sm:h-12 w-full sm:w-auto max-w-xs">
                      Explore Adventures
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="space-y-3 sm:space-y-4">
                  {safeBookings.map((booking) => {
                    const service = servicesMap.get(booking.service_id);
                    if (!service) {
                      const fallbackService: Service = {
                        id: booking.service_id,
                        name: 'Service Unavailable',
                        slug: '#',
                        category: 'unknown',
                        duration: 'N/A',
                        images: []
                      };
                      return (
                        <BookingCard 
                          key={booking.id} 
                          booking={booking} 
                          service={fallbackService} 
                        />
                      );
                    }

                    return (
                      <BookingCard 
                        key={booking.id} 
                        booking={booking} 
                        service={service} 
                      />
                    );
                  })}
                </div>
              )}
            </div>
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