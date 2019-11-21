import { action } from 'typesafe-actions';
import { HotelActionTypes } from './actions';

export const fetchHotels = () => action(HotelActionTypes.FETCH_HOTELS_REQUEST);

export const fetchHotelsSuccess = (hotels: any) =>
  action(HotelActionTypes.FETCH_HOTELS_SUCCESS, hotels);

export const fetchHotelsError = (message: string) =>
  action(HotelActionTypes.FETCH_HOTELS_ERROR, message);
