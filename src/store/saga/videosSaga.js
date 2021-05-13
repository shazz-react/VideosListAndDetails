import * as Actions from "../actions/videosAction";
import { put, takeLatest, all } from "redux-saga/effects";

function* getVideosSaga() {
  const result = yield fetch("https://example-data.draftbit.com/videos").then(
    (response) => response.json()
  );
  const filtered = result.filter((item) => item.title != undefined).reverse();
  yield put({ type: Actions.GET_VIDEOS, items: filtered });
}

function* fetchVideosSaga() {
  yield takeLatest(Actions.FETCH_VIDEOS, getVideosSaga);
}

export default function* rootSaga() {
  yield all([fetchVideosSaga()]);
}
