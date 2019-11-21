import { State as HotelsState } from './hotels/state';
import { State as HotelCommentsState } from './hotelComments/state';
import { State as HotelImagesState } from './hotelImages/state';

export interface State {
  hotels: HotelsState;
  hotelComments: HotelCommentsState;
  hotelImages: HotelImagesState;
}
