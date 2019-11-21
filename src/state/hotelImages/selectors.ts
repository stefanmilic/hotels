import { State } from './state';

// import { createSelector } from 'reselect';

export const getHotelImages = (hotelImages: State) => hotelImages.hotelImages;

// export const getHotelImages = createSelector(
//   getHotelId,
//   getHotelImagesData,
//   (id, hotelImagesData) =>
//     id && hotelImagesData[id] && hotelImagesData[id].images,
// );

export const isHotelImagesLoading = (hotelImages: State) =>
  hotelImages.isHotelImagesInProgress;
