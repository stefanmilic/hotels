import { State } from './state';

import * as fromHotels from './hotels/selectors';
import * as fromHotelComments from './hotelComments/selectors';
import * as fromHotelImages from './hotelImages/selectors';

// hotels
export const getHotels = ({ hotels }: State) => fromHotels.getHotels(hotels);
export const isHotelsLoading = ({ hotels }: State) =>
  fromHotels.isHotelsLoading(hotels);

// hotel comments
export const getHotelComments = ({ hotelComments }: State) =>
  fromHotelComments.getHotelComments(hotelComments);

export const isHotelCommentsLoading = ({ hotelComments }: State) =>
  fromHotelComments.isHotelCommentsLoading(hotelComments);

// hotel images
export const getHotelImages = ({ hotelImages }: State) =>
  fromHotelImages.getHotelImages(hotelImages);

export const isHotelImagesLoading = ({ hotelImages }: State) =>
  fromHotelImages.isHotelImagesLoading(hotelImages);
