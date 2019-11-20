import { all } from 'redux-saga/effects';
import hotelsSaga from './hotels/saga';

function* rootSaga() {
  yield all([hotelsSaga()]);
}

export default rootSaga;
