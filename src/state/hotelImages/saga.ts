import { all, put, takeEvery } from 'redux-saga/effects';
import { HotelImagesActionTypes } from './actions';
import * as actions from './actionCreators';
import connection from 'src/utils/connection';

function* fetchHotelImages$(
  action: ReturnType<typeof actions.fetchHotelImages>,
) {
  try {
    const { data } = yield connection.get(`/hotels/images/${action.payload}`);
    // console.log(data.images);
    yield put(actions.fetcHotelImagesSuccess(data));
  } catch (e) {
    yield put(actions.fetcHotelImagesError(e));
  }
}

function* hotelsSaga() {
  yield all([
    yield takeEvery(
      HotelImagesActionTypes.FETCH_HOTEL_IMAGES_REQUEST,
      fetchHotelImages$,
    ),
  ]);
}

export default hotelsSaga;
