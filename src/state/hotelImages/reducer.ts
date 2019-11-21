import { Reducer } from 'redux';
import { State } from './state';
import { HotelImagesActionTypes } from './actions';
import { initialState } from './state';

const reducer: Reducer<State> = (state = initialState, action) => {
  switch (action.type) {
    case HotelImagesActionTypes.FETCH_HOTEL_IMAGES_REQUEST:
      return {
        ...state,
        isHotelImagesInProgress: true,
      };
    case HotelImagesActionTypes.FETCH_HOTEL_IMAGES_SUCCESS:
      return {
        ...state,
        hotelImages: {
          ...state.hotelImages,
          [action.payload.hotel_id]: action.payload,
        },
        isHotelImagesInProgress: false,
      };
    case HotelImagesActionTypes.FETCH_HOTEL_IMAGES_ERROR:
      return {
        ...state,
        isHotelImagesInProgress: false,
        hotelImagesError: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
