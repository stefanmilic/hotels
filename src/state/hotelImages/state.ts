import { HotelImagesMap } from 'src/types/hotel';

export interface State {
  hotelImages: HotelImagesMap;
  isHotelImagesInProgress: boolean;
  hotelImagesError: any;
}

export const initialState: State = {
  hotelImages: {},
  isHotelImagesInProgress: false,
  hotelImagesError: null,
};
