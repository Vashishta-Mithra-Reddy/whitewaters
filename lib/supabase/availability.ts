import { createClient } from './client';

export type ServiceAvailability = {
  id: string;
  service_id: string;
  date: string;
  max_capacity: number;
  booked_capacity: number;
  is_available: boolean;
  price_override: number | null;
  notes: string | null;
  created_at: string;
  updated_at: string;
};

export type AvailabilityWithDetails = ServiceAvailability & {
  available_spots: number;
  is_fully_booked: boolean;
};

// Get available dates for a service
export async function getServiceAvailability(
  serviceId: string,
  startDate?: string,
  endDate?: string
): Promise<AvailabilityWithDetails[] | null> {
  const supabase = createClient();
  
  let query = supabase
    .from('service_availability')
    .select('*')
    .eq('service_id', serviceId)
    .eq('is_available', true)
    .gte('date', startDate || new Date().toISOString().split('T')[0])
    .order('date', { ascending: true });
  
  if (endDate) {
    query = query.lte('date', endDate);
  }
  
  const { data, error } = await query;
  
  if (error) {
    console.error('Error fetching availability:', error);
    return null;
  }
  
  // Calculate available spots and fully booked status
  const availabilityWithDetails: AvailabilityWithDetails[] = data.map(item => ({
    ...item,
    available_spots: Math.max(0, item.max_capacity - item.booked_capacity),
    is_fully_booked: item.booked_capacity >= item.max_capacity
  }));
  
  return availabilityWithDetails.filter(item => !item.is_fully_booked);
}

// Check if a specific date is available for booking
export async function checkDateAvailability(
  serviceId: string,
  date: string,
  requiredSpots: number = 1
): Promise<{ available: boolean; availableSpots: number; maxCapacity: number } | null> {
  const supabase = createClient();
  
  const { data, error } = await supabase
    .from('service_availability')
    .select('*')
    .eq('service_id', serviceId)
    .eq('date', date)
    .eq('is_available', true)
    .single();
  
  if (error) {
    console.error('Error checking date availability:', error);
    return null;
  }
  
  if (!data) {
    return { available: false, availableSpots: 0, maxCapacity: 0 };
  }
  
  const availableSpots = Math.max(0, data.max_capacity - data.booked_capacity);
  
  return {
    available: availableSpots >= requiredSpots,
    availableSpots,
    maxCapacity: data.max_capacity
  };
}

// Create availability slots for a service (admin function)
export async function createServiceAvailability(
  serviceId: string,
  dates: Array<{
    date: string;
    maxCapacity: number;
    priceOverride?: number;
    notes?: string;
  }>
): Promise<boolean> {
  const supabase = createClient();
  
  const availabilityData = dates.map(item => ({
    service_id: serviceId,
    date: item.date,
    max_capacity: item.maxCapacity,
    booked_capacity: 0,
    is_available: true,
    price_override: item.priceOverride || null,
    notes: item.notes || null
  }));
  
  const { error } = await supabase
    .from('service_availability')
    .upsert(availabilityData, {
      onConflict: 'service_id,date',
      ignoreDuplicates: false
    });
  
  if (error) {
    console.error('Error creating availability:', error);
    return false;
  }
  
  return true;
}

// Update booking capacity after a booking is made
export async function updateBookingCapacity(
  serviceId: string,
  date: string
): Promise<boolean> {
  const supabase = createClient();
  
  // Get total booked participants for this service and date
  const { data: bookings, error: bookingError } = await supabase
    .from('bookings')
    .select('participants')
    .eq('service_id', serviceId)
    .eq('booking_date', date)
    .in('status', ['confirmed', 'pending']);
  
  if (bookingError) {
    console.error('Error fetching bookings:', bookingError);
    return false;
  }
  
  const totalBooked = bookings?.reduce((sum, booking) => sum + booking.participants, 0) || 0;
  
  // Update availability
  const { error: updateError } = await supabase
    .from('service_availability')
    .update({ booked_capacity: totalBooked })
    .eq('service_id', serviceId)
    .eq('date', date);
  
  if (updateError) {
    console.error('Error updating availability:', updateError);
    return false;
  }
  
  return true;
}