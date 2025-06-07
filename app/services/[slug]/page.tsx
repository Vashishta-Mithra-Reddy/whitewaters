import { getService } from '@/lib/supabase/services';
import { BookingForm } from '@/components/booking-form';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Users, MapPin, Star } from 'lucide-react';
import Image from 'next/image';

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const service = await getService({ slug });

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service not found</h1>
          <p className="text-gray-600">The service you are looking for does not exist or has been removed.</p>
        </div>
      </div>
    );
  }

  const getDifficultyColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
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
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          {service.images && service.images.length > 0 && (
            <div className="relative h-96 w-full">
              <Image
                src={service.images[0]}
                alt={service.name}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end">
                <div className="p-6 text-white">
                  <h1 className="text-4xl font-bold mb-2">{service.name}</h1>
                  <div className="flex items-center space-x-4">
                    <Badge className={getCategoryColor(service.category)}>
                      {service.category.charAt(0).toUpperCase() + service.category.slice(1)}
                    </Badge>
                    <Badge className={getDifficultyColor(service.difficulty_level)}>
                      {service.difficulty_level.charAt(0).toUpperCase() + service.difficulty_level.slice(1)}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {(!service.images || service.images.length === 0) && (
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white">
              <h1 className="text-4xl font-bold mb-4">{service.name}</h1>
              <div className="flex items-center space-x-4">
                <Badge className={getCategoryColor(service.category)}>
                  {service.category.charAt(0).toUpperCase() + service.category.slice(1)}
                </Badge>
                <Badge className={getDifficultyColor(service.difficulty_level)}>
                  {service.difficulty_level.charAt(0).toUpperCase() + service.difficulty_level.slice(1)}
                </Badge>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Service Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Overview */}
            <Card>
              <CardHeader>
                <CardTitle className='text-2xl'>Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">
                  {service.description || 'Experience the thrill of this amazing adventure!'}
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-semibold">{service.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-500">Max Participants</p>
                      <p className="font-semibold">{service.max_participants}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-500">Difficulty</p>
                      <p className="font-semibold capitalize">{service.difficulty_level}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-500">Price</p>
                      <p className="font-semibold">₹{service.price}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What's Included */}
            {service.included_items && service.included_items.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className='text-2xl'>Things Included</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {service.included_items.map((item, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Requirements */}
            {service.requirements && service.requirements.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className='text-2xl'>Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                        <span className="text-foreground">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Additional Images */}
            {service.images && service.images.length > 1 && (
              <Card>
                <CardHeader>
                  <CardTitle>Gallery</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {service.images.slice(1).map((image, index) => (
                      <div key={index} className="relative h-32 rounded-lg overflow-hidden">
                        <Image
                          src={image}
                          alt={`${service.name} ${index + 2}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <BookingForm
                serviceId={service.id}
                serviceName={service.name}
                price={service.price}
                maxParticipants={service.max_participants}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}