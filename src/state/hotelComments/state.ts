export interface State {
  hotelComments: any[];
  isHotelCommentsInProgress: boolean;
  hotelCommentsError: any;
}

export const initialState: State = {
  hotelComments: [],
  isHotelCommentsInProgress: false,
  hotelCommentsError: null,
};
