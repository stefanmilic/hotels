export interface HotelImagesMap {
  [key: string]: any;
}
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
