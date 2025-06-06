'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Checkbox } from './ui/checkbox';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

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
  const [guestInfo, setGuestInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  
  // Check if user is logged in
  useState(() => {
    const checkAuth = async () => {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      setIsLoggedIn(!!user);
    };
    checkAuth();
  });
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const supabase = createClient();
    
    try {
      const bookingData = {
        service_id: serviceId,
        booking_date: bookingDate,
        participants,
        total_amount: price * participants,
        status: 'pending'
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
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-2xl'>Book Your Adventure</CardTitle>
        <CardDescription>
          <span className='font-bold'>{serviceName}</span> <br></br> <span className='font-bold'>₹{price}</span> per person
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Booking Date */}
          <div>
            <Label htmlFor="date">Preferred Date</Label>
            <Input
              id="date"
              type="date"
              value={bookingDate}
              onChange={(e) => setBookingDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              required
            />
          </div>
          
          {/* Number of Participants */}
          <div>
            <Label htmlFor="participants">Number of Participants</Label>
            <Input
              id="participants"
              type="number"
              min="1"
              max={maxParticipants}
              value={participants}
              onChange={(e) => setParticipants(parseInt(e.target.value))}
              required
            />
          </div>
          
          {/* Guest Booking Option */}
          {isLoggedIn && (
            <div className="flex items-center space-x-2">
              <Checkbox
                id="guest-booking"
                checked={useGuestBooking}
                onCheckedChange={(checked) => setUseGuestBooking(checked as boolean)}
              />
              <Label htmlFor="guest-booking">
                Book as guest (for someone else)
              </Label>
            </div>
          )}
          
          {/* Guest Information */}
          {(useGuestBooking || !isLoggedIn) && (
            <div className="space-y-3 p-4 border rounded-lg bg-muted/50">
              <h4 className="font-medium">Contact Information</h4>
              <div>
                <Label htmlFor="guest-name">Full Name</Label>
                <Input
                  id="guest-name"
                  value={guestInfo.name}
                  onChange={(e) => setGuestInfo(prev => ({ ...prev, name: e.target.value }))}
                  required
                />
              </div>
              <div>
                <Label htmlFor="guest-email">Email</Label>
                <Input
                  id="guest-email"
                  type="email"
                  value={guestInfo.email}
                  onChange={(e) => setGuestInfo(prev => ({ ...prev, email: e.target.value }))}
                  required
                />
              </div>
              <div>
                <Label htmlFor="guest-phone">Phone Number</Label>
                <Input
                  id="guest-phone"
                  type="tel"
                  value={guestInfo.phone}
                  onChange={(e) => setGuestInfo(prev => ({ ...prev, phone: e.target.value }))}
                  required
                />
              </div>
            </div>
          )}
          
          {/* Total Amount */}
          <div className="p-4 bg-muted rounded-lg">
            <div className="flex justify-between items-center">
              <span>Total Amount:</span>
              <span className="text-2xl font-bold text-green-600">
                ₹{(price * participants).toLocaleString()}
              </span>
            </div>
          </div>
          
          {!isLoggedIn && (
            <p className="text-sm text-muted-foreground text-center">
              Want to track your bookings? 
              <Button variant="link" className="p-0 pl-2 h-auto" asChild>
                <Link href="/auth/sign-up" className='underline'>Create an account</Link>
              </Button>
            </p>
          )}

          {/* Submit Button */}
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Processing...' : 'Book Now'}
          </Button>
          
          
        </form>
      </CardContent>
    </Card>
  );
}