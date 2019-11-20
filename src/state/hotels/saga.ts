import { all, put, takeLatest } from 'redux-saga/effects';
import { HotelActionTypes } from './actions';
import * as actions from './actionCreators';
import connection from 'src/utils/connection';
//const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT || 'https://api.opendota.com'

function* fetchHotels$() {
  try {
    const { data: hotels } = yield connection.get('/hotels');
    yield put(actions.fetchHotelsSuccess(hotels.slice(0, 10)));
  } catch (e) {
    yield put(actions.fetchHotelsError(e));
  }
}

function* hotelsSaga() {
  yield all([
    yield takeLatest(HotelActionTypes.FETCH_HOTELS_REQUEST, fetchHotels$),
  ]);
}

export default hotelsSaga;
