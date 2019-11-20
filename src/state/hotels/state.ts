export interface State {
  hotels: any[];
  isHotelsInProgress: boolean;
  hotelsError: any;
  // hotelImages:any[];
  // isHotelImagesInProgress:boolean;
  // hotelImagesError:any
  // hotelComments:any[];
  // isHotelCommentsInProgress:boolean;
  // hotelCommentsError:any
}

export const initialState: State = {
  hotels: [],
  isHotelsInProgress: false,
  hotelsError: null,
  // hotelImages:[],
  // isHotelImagesInProgress:false,
  // hotelImagesError:null,
  // hotelComments:[],
  // isHotelCommentsInProgress:false,
  // hotelCommentsError:null
};
