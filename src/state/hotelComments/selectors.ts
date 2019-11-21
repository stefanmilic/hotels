import { State } from './state';

export const getHotelComments = (hotelComments: State) =>
  hotelComments.hotelComments;

export const isHotelCommentsLoading = (hotelComments: State) =>
  hotelComments.isHotelCommentsInProgress;
