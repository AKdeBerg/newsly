import { call, put, fork, takeLatest } from "redux-saga/effects";
import * as api from "../../api/topNews";
import * as actions from "../actions/actions";

function* getHomeNews() {
  try {
    const response = yield call(api.getHomeTopStories);
    yield put(actions.loadHomeDataSuccess(response.data.results));
  } catch (error) {
    console.error(error);
  }
}
function* getUSNews() {
  try {
    const response = yield call(api.getUSTopStories);
    yield put(actions.loadUSDataSuccess(response.data.results));
  } catch (error) {
    console.error(error);
  }
}
function* getWorldNews() {
  try {
    const response = yield call(api.getWorldTopStories);
    yield put(actions.loadWorldDataSuccess(response.data.results));
  } catch (error) {
    console.error(error);
  }
}
function* getScienceNews() {
  try {
    const response = yield call(api.getScienceTopStories);

    yield put(actions.loadScienceDataSuccess(response.data.results));
  } catch (error) {
    console.error(error);
  }
}
function* getArtsNews() {
  try {
    const response = yield call(api.getArtsTopStories);
    yield put(actions.loadArtsDataSuccess(response.data.results));
  } catch (error) {
    console.error(error);
  }
}

function* watcherSaga() {
  yield takeLatest(actions.actionTypes.GET_HOME_TOP, getHomeNews);
  yield takeLatest(actions.actionTypes.GET_US_TOP, getUSNews);
  yield takeLatest(actions.actionTypes.GET_WORLD_TOP, getWorldNews);
  yield takeLatest(actions.actionTypes.GET_SCIENCE_TOP, getScienceNews);
  yield takeLatest(actions.actionTypes.GET_ARTS_TOP, getArtsNews);
}

const sagas = [fork(watcherSaga)];

export default sagas;
