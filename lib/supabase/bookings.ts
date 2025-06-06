import { createClient } from "./server";

export type Booking = {
    id: string;
    service_id: string;
    user_id: string | null; 
    guest_email: string | null;
    guest_phone: string | null;
    guest_name: string | null;
    booking_date: string; 
    participants: number;
    total_amount: number;
    status: 'pending' | 'confirmed' | 'cancelled';
    special_requests: string | null;
    emergency_contact: {
      name: string;
      phone: string;
      relationship: string;
    } | null;
    created_at: string; 
    updated_at: string; 
  };