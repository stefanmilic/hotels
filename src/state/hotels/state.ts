import { Hotel } from 'src/types/hotel';

export interface State {
  hotels: Hotel[];
  isHotelsInProgress: boolean;
  hotelsError: any;
}

export const initialState: State = {
  hotels: [],
  isHotelsInProgress: false,
  hotelsError: null,
};
