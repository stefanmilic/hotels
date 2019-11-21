import { Reducer } from 'redux';
import { State } from './state';
import { HotelCommentActionTypes } from './actions';
import { initialState } from './state';

const reducer: Reducer<State> = (state = initialState, action) => {
  switch (action.type) {
    case HotelCommentActionTypes.FETCH_HOTEL_COMMENTS_REQUEST:
      return {
        ...state,
        isHotelCommentsInProgress: true,
      };
    case HotelCommentActionTypes.FETCH_HOTEL_COMMENTS_SUCCESS:
      return {
        ...state,
        hotelComments: action.payload,
        isHotelCommentsInProgress: false,
      };
    case HotelCommentActionTypes.FETCH_HOTEL_COMMENTS_ERROR:
      return {
        ...state,
        isHotelCommentsInProgress: false,
        hotelCommentsError: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
