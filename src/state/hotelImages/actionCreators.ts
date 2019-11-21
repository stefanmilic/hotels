import { action } from 'typesafe-actions';
import { HotelImages } from 'src/types/hotel';
import { HotelImagesActionTypes } from './actions';

export const fetchHotelImages = (id: string) =>
  action(HotelImagesActionTypes.FETCH_HOTEL_IMAGES_REQUEST, id);

export const fetcHotelImagesSuccess = (comments: HotelImages) =>
  action(HotelImagesActionTypes.FETCH_HOTEL_IMAGES_SUCCESS, comments);

export const fetcHotelImagesError = (message: string) =>
  action(HotelImagesActionTypes.FETCH_HOTEL_IMAGES_REQUEST, message);
