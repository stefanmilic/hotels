import { State } from './state';

export const getHotelImages = (hotelImages: State) => hotelImages.hotelImages;

export const isHotelImagesLoading = (hotelImages: State) =>
  hotelImages.isHotelImagesInProgress;
