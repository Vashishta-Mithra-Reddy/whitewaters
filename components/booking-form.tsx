'use client';

import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Checkbox } from './ui/checkbox';
import { Badge } from './ui/badge';
import { Alert } from './ui/alert';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import { getServiceAvailability, checkDateAvailability, type AvailabilityWithDetails } from '@/lib/supabase/availability';
import Link from 'next/link';
import { Calendar, Users, AlertCircle, CheckCircle } from 'lucide-react';

interface BookingFormProps {
  serviceId: string;
  serviceName: string;
  price: number;
  maxParticipants: number;
}

export function BookingForm({ serviceId, serviceName, price, maxParticipants }: BookingFormProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [useGuestBooking, setUseGuestBooking] = useState(false);
  const [participants, setParticipants] = useState(1);
  const [bookingDate, setBookingDate] = useState('');
  const [availableDates, setAvailableDates] = useState<AvailabilityWithDetails[]>([]);
  const [selectedDateInfo, setSelectedDateInfo] = useState<AvailabilityWithDetails | null>(null);
  const [guestInfo, setGuestInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);
  const [loadingAvailability, setLoadingAvailability] = useState(true);
  const [availabilityError, setAvailabilityError] = useState('');
  const router = useRouter();
  
  // Check if user is logged in
  useEffect(() => {
    const checkAuth = async () => {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      setIsLoggedIn(!!user);
    };
    checkAuth();
  }, []);
  
  // Load available dates
  useEffect(() => {
    const loadAvailability = async () => {
      setLoadingAvailability(true);
      const endDate = new Date();
      endDate.setMonth(endDate.getMonth() + 3); // Show 3 months ahead
      
      const availability = await getServiceAvailability(
        serviceId,
        new Date().toISOString().split('T')[0],
        endDate.toISOString().split('T')[0]
      );
      
      if (availability) {
        setAvailableDates(availability);
      } else {
        setAvailabilityError('Unable to load available dates. Please try again.');
      }
      setLoadingAvailability(false);
    };
    
    loadAvailability();
  }, [serviceId]);
  
  // Handle date selection
  const handleDateChange = (date: string) => {
    setBookingDate(date);
    const dateInfo = availableDates.find(d => d.date === date);
    setSelectedDateInfo(dateInfo || null);
    
    // Reset participants if selected exceeds available spots
    if (dateInfo && participants > dateInfo.available_spots) {
      setParticipants(Math.min(dateInfo.available_spots, maxParticipants));
    }
  };
  
  // Handle participants change
  const handleParticipantsChange = (newParticipants: number) => {
    const maxAllowed = selectedDateInfo 
      ? Math.min(selectedDateInfo.available_spots, maxParticipants)
      : maxParticipants;
    
    setParticipants(Math.min(newParticipants, maxAllowed));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const supabase = createClient();
    
    try {
      // Double-check availability before booking
      const availabilityCheck = await checkDateAvailability(serviceId, bookingDate, participants);
      
      if (!availabilityCheck?.available) {
        alert('Sorry, this date is no longer available for the selected number of participants. Please choose another date.');
        setLoading(false);
        return;
      }
      
      const bookingData = {
        service_id: serviceId,
        booking_date: bookingDate,
        participants,
        total_amount: price * participants,
        status: 'pending' as const
      };
      
      if (useGuestBooking || !isLoggedIn) {
        // Guest booking
        Object.assign(bookingData, {
          guest_name: guestInfo.name,
          guest_email: guestInfo.email,
          guest_phone: guestInfo.phone
        });
      } else {
        // Authenticated user booking
        const { data: { user } } = await supabase.auth.getUser();
        Object.assign(bookingData, { user_id: user?.id });
      }
      
      const { data, error } = await supabase
        .from('bookings')
        .insert([bookingData])
        .select()
        .single();
      
      if (error) throw error;
      
      // Redirect to booking confirmation
      router.push(`/booking-confirmation/${data.id}`);
    } catch (error) {
      console.error('Booking error:', error);
      alert('Failed to create booking. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };
  
  const isFormValid = () => {
    const hasDate = bookingDate !== '';
    const hasValidParticipants = participants > 0 && participants <= maxParticipants;
    const hasAvailableSpots = selectedDateInfo ? participants <= selectedDateInfo.available_spots : false;
    
    if (useGuestBooking || !isLoggedIn) {
      return hasDate && hasValidParticipants && hasAvailableSpots && 
             guestInfo.name && guestInfo.email && guestInfo.phone;
    }
    
    return hasDate && hasValidParticipants && hasAvailableSpots;
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-2xl'>Book Your Adventure</CardTitle>
        <CardDescription>
          <span className='font-bold'>{serviceName}</span> <br />
          <span className='font-bold'>₹{price}</span> per person
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Available Dates */}
          <div>
            <Label htmlFor="booking-date" className="text-base font-semibold mb-3 block">
              Select Date
            </Label>
            
            {loadingAvailability ? (
              <div className="flex items-center justify-center p-8 border border-gray-200 rounded-lg">
                <div className="text-center">
                  <Calendar className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Loading available dates...</p>
                </div>
              </div>
            ) : availabilityError ? (
              <Alert className="border-red-200 bg-red-50">
                <AlertCircle className="h-4 w-4 text-red-600" />
                <p className="text-red-800">{availabilityError}</p>
              </Alert>
            ) : availableDates.length === 0 ? (
              <Alert className="border-yellow-200 bg-yellow-50">
                <AlertCircle className="h-4 w-4 text-yellow-600" />
                <p className="text-yellow-800">No available dates in the next 3 months. Please check back later.</p>
              </Alert>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {availableDates.map((availability) => {
                  const isSelected = bookingDate === availability.date;
                  const isLowAvailability = availability.available_spots <= 3;
                  
                  return (
                    <button
                      key={availability.date}
                      type="button"
                      onClick={() => handleDateChange(availability.date)}
                      className={`p-3 border rounded-lg text-left transition-all hover:shadow-md ${
                        isSelected 
                          ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="font-medium text-sm">
                        {formatDate(availability.date)}
                      </div>
                      <div className="flex items-center justify-between mt-1">
                        <span className={`text-xs ${
                          isLowAvailability ? 'text-orange-600' : 'text-green-600'
                        }`}>
                          {availability.available_spots} spots left
                        </span>
                        {isSelected && (
                          <CheckCircle className="h-4 w-4 text-blue-500" />
                        )}
                      </div>
                      {isLowAvailability && (
                        <Badge className="mt-1 text-xs bg-orange-100 text-orange-800">
                          Limited
                        </Badge>
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
          
          {/* Selected Date Info */}
          {selectedDateInfo && (
            <Alert className="border-blue-200 bg-blue-50">
              <Calendar className="h-4 w-4 text-blue-600" />
              <div className="text-blue-800">
                <p className="font-medium">
                  {formatDate(selectedDateInfo.date)} - {selectedDateInfo.available_spots} spots available
                </p>
                <p className="text-sm mt-1">
                  Maximum {Math.min(selectedDateInfo.available_spots, maxParticipants)} participants for this date
                </p>
              </div>
            </Alert>
          )}
          
          {/* Participants */}
          <div>
            <Label htmlFor="participants" className="text-base font-semibold">
              Number of Participants
            </Label>
            <div className="flex items-center space-x-3 mt-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => handleParticipantsChange(participants - 1)}
                disabled={participants <= 1}
                className="h-10 w-10 p-0"
              >
                -
              </Button>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-gray-500" />
                <span className="font-semibold text-lg min-w-[2rem] text-center">
                  {participants}
                </span>
              </div>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => handleParticipantsChange(participants + 1)}
                disabled={!!(
                  participants >= maxParticipants || 
                  (selectedDateInfo && participants >= selectedDateInfo.available_spots)
                )}
                className="h-10 w-10 p-0"
              >
                +
              </Button>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Total: ₹{(price * participants).toLocaleString()}
            </p>
          </div>
          
          {/* Authentication Options */}
          {!isLoggedIn && (
            <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="guest-booking"
                  checked={useGuestBooking}
                  onCheckedChange={(checked) => setUseGuestBooking(checked as boolean)}
                />
                <Label htmlFor="guest-booking" className="text-sm">
                  Continue as guest (no account required)
                </Label>
              </div>
              
              {!useGuestBooking && (
                <div className="text-center space-y-2">
                  <p className="text-sm text-gray-600">Have an account?</p>
                  <div className="flex space-x-2">
                    <Link href="/auth/login" className="flex-1">
                      <Button type="button" variant="outline" className="w-full">
                        Sign In
                      </Button>
                    </Link>
                    <Link href="/auth/sign-up" className="flex-1">
                      <Button type="button" variant="outline" className="w-full">
                        Sign Up
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}
          
          {/* Guest Information */}
          {(useGuestBooking || !isLoggedIn) && useGuestBooking && (
            <div className="space-y-4 p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold">Contact Information</h3>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <Label htmlFor="guest-name">Full Name *</Label>
                  <Input
                    id="guest-name"
                    type="text"
                    value={guestInfo.name}
                    onChange={(e) => setGuestInfo({...guestInfo, name: e.target.value})}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <Label htmlFor="guest-email">Email Address *</Label>
                  <Input
                    id="guest-email"
                    type="email"
                    value={guestInfo.email}
                    onChange={(e) => setGuestInfo({...guestInfo, email: e.target.value})}
                    required
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <Label htmlFor="guest-phone">Phone Number *</Label>
                  <Input
                    id="guest-phone"
                    type="tel"
                    value={guestInfo.phone}
                    onChange={(e) => setGuestInfo({...guestInfo, phone: e.target.value})}
                    required
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
            </div>
          )}
          
          {/* Submit Button */}
          <Button 
            type="submit" 
            className="w-full h-12 text-lg font-semibold"
            disabled={loading || !isFormValid()}
          >
            {loading ? (
              'Processing...'
            ) : (
              `Book Now - ₹${(price * participants).toLocaleString()}`
            )}
          </Button>
          
          {!isFormValid() && bookingDate && (
            <p className="text-sm text-red-600 text-center">
              {!selectedDateInfo?.available_spots || participants > selectedDateInfo.available_spots
                ? 'Not enough spots available for selected date'
                : 'Please fill in all required information'}
            </p>
          )}
        </form>
      </CardContent>
    </Card>
  );
}