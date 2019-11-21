import { State } from './state';

export const getHotels = (hotels: State) => hotels.hotels;
export const isHotelsLoading = (hotels: State) => hotels.isHotelsInProgress;
