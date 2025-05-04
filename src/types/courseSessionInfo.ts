export interface Instructor {
  first_name: string;
  last_name: string;
  portrait_image: string;
}

export interface Location {
  timezone: string;
}

export interface Pricing {
  amount: number;
  currency: string;
  valid_until: number; // Unix timestamp
}

export interface CourseSessionInfo {
  id: number;
  dates: [number, number][]; // array of [start, end] timestamp pairs
  instructors: Instructor[];
  location: Location;
  pricing: Pricing;
}

