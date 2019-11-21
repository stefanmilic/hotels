import { Reducer } from 'redux';
import { HotelActionTypes } from './actions';
import { initialState, State } from './state';

const reducer: Reducer<State> = (state = initialState, action: any) => {
  switch (action.type) {
    case HotelActionTypes.FETCH_HOTELS_REQUEST:
      return {
        ...state,
        isHotelsInProgress: true,
      };
    case HotelActionTypes.FETCH_HOTELS_SUCCESS:
      return {
        ...state,
        hotels: action.payload,
        isHotelsInProgress: false,
      };
    case HotelActionTypes.FETCH_HOTELS_ERROR:
      return {
        ...state,
        isHotelsInProgress: false,
        hotelsError: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

// const rootReducer = combineReducers({
//   hotel: hotelReducer,
// })

// export type AppState = ReturnType<typeof rootReducer>
