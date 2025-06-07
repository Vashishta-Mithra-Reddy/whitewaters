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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Header Skeleton */}
        <div className="bg-white rounded-2xl p-8 shadow-sm animate-pulse">
          <div className="flex items-center space-x-6">
            <div className="w-20 h-20 bg-gray-200 rounded-full"></div>
            <div className="space-y-3">
              <div className="h-8 w-64 bg-gray-200 rounded"></div>
              <div className="h-5 w-48 bg-gray-200 rounded"></div>
              <div className="h-4 w-32 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>

        {/* Stats Cards Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-sm animate-pulse">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <div className="h-4 w-20 bg-gray-200 rounded"></div>
                  <div className="h-8 w-12 bg-gray-200 rounded"></div>
                </div>
                <div className="h-8 w-8 bg-gray-200 rounded"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bookings Skeleton */}
        <div className="bg-white rounded-2xl p-8 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <div className="h-7 w-48 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-64 bg-gray-200 rounded animate-pulse"></div>
            </div>
            <div className="h-6 w-16 bg-gray-200 rounded-full animate-pulse"></div>
          </div>
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="border border-gray-100 rounded-xl p-6 animate-pulse">
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
                      {[...Array(4)].map((_, j) => (
                        <div key={j} className="h-4 bg-gray-200 rounded"></div>
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
    <div className="min-h-screen bg-gray-50/50 flex items-center justify-center">
      <div className="max-w-md w-full px-4">
        <div className="bg-white rounded-2xl p-8 shadow-sm">
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
    <div className={`bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow ${className}`}>
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
        </div>
        <div className="p-3 bg-gray-50 rounded-lg">
          <Icon className="h-6 w-6 text-gray-600" />
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
    <div className="border border-gray-100 rounded-xl p-6 hover:shadow-md hover:border-gray-200 transition-all duration-200 bg-white">
      <div className="flex items-start space-x-4">
        <ServiceImage 
          service={service} 
          className="h-16 w-16 flex-shrink-0 rounded-lg object-cover" 
        />

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors truncate mb-2">
                <Link 
                  href={`/services/${service.slug}`}
                  className="hover:underline focus:underline focus:outline-none"
                >
                  {service.name}
                </Link>
              </h3>
              <div className="flex items-center space-x-2 flex-wrap gap-2">
                <Badge className={`border ${getCategoryColor(service.category)}`}>
                  {service.category.charAt(0).toUpperCase() + service.category.slice(1)}
                </Badge>
                <Badge className={`border ${getStatusColor(booking.status)}`}>
                  {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                </Badge>
                {isUpcoming && booking.status !== 'cancelled' && (
                  <Badge className="bg-blue-50 text-blue-700 border-blue-200">
                    Upcoming
                  </Badge>
                )}
              </div>
            </div>
            <div className="text-right ml-4">
              <p className="text-xl font-bold text-gray-900">
                ₹{booking.total_amount.toLocaleString()}
              </p>
              <p className="text-sm text-gray-500">
                Booked {createdDate}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div className="flex items-center space-x-2 text-gray-600">
              <Calendar className="h-4 w-4 flex-shrink-0 text-gray-400" />
              <span className="text-sm font-medium">{bookingDate}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Users className="h-4 w-4 flex-shrink-0 text-gray-400" />
              <span className="text-sm font-medium">
                {booking.participants} participant{booking.participants > 1 ? 's' : ''}
              </span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Clock className="h-4 w-4 flex-shrink-0 text-gray-400" />
              <span className="text-sm font-medium">{service.duration}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <span className="text-sm font-medium text-gray-500">
                #{booking.id.slice(0, 8)}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex space-x-3">
              <Link href={`/booking-confirmation/${booking.id}`}>
                <Button variant="outline" size="sm" className="h-9">
                  View Details
                </Button>
              </Link>
              <Link href={`/services/${service.slug}`}>
                <Button variant="ghost" size="sm" className="h-9">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
          {/* Enhanced Header */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
                  <User className="h-10 w-10 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    Welcome back!
                  </h1>
                  <p className="text-gray-600 text-lg mb-1">{user.email}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>Member since {memberSince}</span>
                    <span>•</span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 mr-1 text-amber-400 fill-current" />
                      <Badge className={`border ${getAdventureLevelColor(stats.adventureLevel)}`}>
                        {stats.adventureLevel}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
              <Link href="/services">
                <Button size="lg" className="px-8 h-12 text-base">
                  Book New Adventure
                </Button>
              </Link>
            </div>
          </div>

          {/* Enhanced Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
              title="Adventure Level"
              value={stats.adventureLevel}
              icon={Star}
              subtitle={`${stats.totalBookings} completed`}
            />
          </div>

          {/* Full Width Bookings Section */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="p-8 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">My Adventures</h2>
                  <p className="text-gray-600 mt-1">Your booking history and upcoming experiences</p>
                </div>
                {stats.totalBookings > 0 && (
                  <Badge variant="outline" className="px-3 py-1 text-sm font-medium">
                    {stats.totalBookings} total bookings
                  </Badge>
                )}
              </div>
            </div>

            <div className="p-8">
              {safeBookings.length === 0 ? (
                <div className="text-center py-16">
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Calendar className="h-12 w-12 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    No adventures yet
                  </h3>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    Ready to start your adventure journey? Explore our exciting services and book your first experience!
                  </p>
                  <Link href="/services">
                    <Button size="lg" className="px-8 h-12">
                      Explore Adventures
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
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