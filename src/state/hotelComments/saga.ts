import { all, put, takeLatest } from 'redux-saga/effects';
import { HotelCommentActionTypes } from './actions';
import * as actions from './actionCreators';
import connection from 'src/utils/connection';

function* fetchHotelComments$(
  action: ReturnType<typeof actions.fetchHotelComments>,
) {
  try {
    const { data: comments } = yield connection.get(
      `/hotels/comments/${action.payload}`,
    );
    yield put(actions.fetcHotelCommentsSuccess(comments.slice(0, 10)));
  } catch (e) {
    yield put(actions.fetcHotelCommentsError(e));
  }
}

function* createComment$(action: ReturnType<typeof actions.createComment>) {
  const { id, name, text } = action.payload;

  try {
    const data = yield connection.post(`/hotels/comment/${id}`, {
      params: {
        hotel_id: id,
        comment: text,
        fullName: name,
      },
    });
    console.log(data);
    // yield put(actions.fetcHotelCommentsSuccess(comments.slice(0, 10)));
  } catch (e) {
    //  yield put(actions.fetcHotelCommentsError(e));
  }
}

function* hotelsSaga() {
  yield all([
    yield takeLatest(
      HotelCommentActionTypes.FETCH_HOTEL_COMMENTS_REQUEST,
      fetchHotelComments$,
    ),
    yield takeLatest(HotelCommentActionTypes.CREATE_COMMENT, createComment$),
  ]);
}

export default hotelsSaga;
