import { combineReducers } from 'redux';

import { State as CombinedState } from './state';
import hotels from './hotels/reducer';

export default combineReducers<CombinedState>({
  hotels,
});
