
export type Participant = {
    id: string;
    booking_id: string;
    name: string;
    age: number | null;
    weight: number | null;
    medical_conditions: string | null;
    emergency_contact: {
      name: string;
      phone: string;
      relationship: string;
    } | null;
  };