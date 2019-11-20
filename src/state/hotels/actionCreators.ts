// import { Hotel } from 'src/types/hotel';
import { action } from 'typesafe-actions';
import { HotelActionTypes } from './actions';

export const fetchHotels = () => action(HotelActionTypes.FETCH_HOTELS_REQUEST);

// export function fetchHotels(): HotelActionTypes {
//   return {
//     type: FETCH_HOTELS_REQUEST
//   }
// }
export const fetchHotelsSuccess = (hotels: any) =>
  action(HotelActionTypes.FETCH_HOTELS_SUCCESS, hotels);

// export function fetchHotelsSuccess(hotels:Hotel[]): HotelActionTypes {
//   return {
//     type: FETCH_HOTELS_SUCCESS,
//     payload:hotels
//   }
// }

export const fetchHotelsError = (message: string) =>
  action(HotelActionTypes.FETCH_HOTELS_ERROR, message);

// export function fetchHotelsSuccessError(): HotelActionTypes {
//   return {
//     type: FETCH_HOTELS_ERROR
//   }
// }
