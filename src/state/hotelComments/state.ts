import { HotelComments } from 'src/types/hotel';

export interface State {
  hotelComments: HotelComments[];
  isHotelCommentsInProgress: boolean;
  hotelCommentsError: any;
}

export const initialState: State = {
  hotelComments: [],
  isHotelCommentsInProgress: false,
  hotelCommentsError: null,
};
