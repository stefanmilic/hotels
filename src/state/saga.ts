import { all } from 'redux-saga/effects';
import hotelsSaga from './hotels/saga';
import hotelCommentsSaga from './hotelComments/saga';
import hotelImagesSaga from './hotelImages/saga';

function* rootSaga() {
  yield all([hotelsSaga(), hotelCommentsSaga(), hotelImagesSaga()]);
}

export default rootSaga;
