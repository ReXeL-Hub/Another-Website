export interface Class {
  id: number;
  name: string;
  trainer: string;
  time: string;
  duration: string;
  intensity: 'Low' | 'Medium' | 'High';
  spots: number;
  maxSpots: number;
}

export interface BookingDetails {
  name: string;
  email: string;
  phone: string;
  emergencyContact: string;
}