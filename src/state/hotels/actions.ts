// import { Hotel } from "src/types/hotel";

// export const FETCH_HOTELS_REQUEST= 'FETCH_HOTELS_REQUEST';
// export const FETCH_HOTELS_SUCCESS= 'FETCH_HOTELS_SUCCESS';
// export const FETCH_HOTELS_ERROR= 'FETCH_HOTELS_ERROR';

export enum HotelActionTypes {
  FETCH_HOTELS_REQUEST = 'FETCH_HOTELS_REQUEST',
  FETCH_HOTELS_SUCCESS = 'FETCH_HOTELS_SUCCESS',
  FETCH_HOTELS_ERROR = 'FETCH_HOTELS_ERROR',
}

//  interface FetchHotelsAction {
//   type: typeof FETCH_HOTELS_REQUEST
// }

// interface FetchHotelsActionSuccess {
//   type: typeof FETCH_HOTELS_SUCCESS
//   payload:Hotel[]
// }
//  interface FetchHotelsActionError {
//   type: typeof FETCH_HOTELS_ERROR
// }

// export type HotelActionTypes = FetchHotelsAction | FetchHotelsActionSuccess | FetchHotelsActionError
