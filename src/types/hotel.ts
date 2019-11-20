export interface Hotel {
  id: string;
  name: string;
  country: string;
  city: string;
  price: number;
  stars: number;
  description: string;
  date_created: string;
}

export interface HotelImages {
  hotel_id: string;
  images: any[];
}

export interface HotelComments {
  id: string;
  hotel_id: string;
  fullName: string;
  comment: string;
  date_created: string;
}
