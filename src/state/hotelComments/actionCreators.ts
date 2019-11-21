import { HotelComments } from 'src/types/hotel';
import { action } from 'typesafe-actions';
import { HotelCommentActionTypes } from './actions';

export const fetchHotelComments = (id: string) =>
  action(HotelCommentActionTypes.FETCH_HOTEL_COMMENTS_REQUEST, id);

export const fetcHotelCommentsSuccess = (comments: HotelComments) =>
  action(HotelCommentActionTypes.FETCH_HOTEL_COMMENTS_SUCCESS, comments);

export const fetcHotelCommentsError = (message: string) =>
  action(HotelCommentActionTypes.FETCH_HOTEL_COMMENTS_ERROR, message);

export const createComment = (id: string, name: string, text: string) =>
  action(HotelCommentActionTypes.CREATE_COMMENT, { id, name, text });
