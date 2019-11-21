import { combineReducers } from 'redux';

import { State as CombinedState } from './state';
import hotels from './hotels/reducer';
import hotelComments from './hotelComments/reducer';
import hotelImages from './hotelImages/reducer';

export default combineReducers<CombinedState>({
  hotels,
  hotelComments,
  hotelImages,
});
