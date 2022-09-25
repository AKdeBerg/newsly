import { all } from "redux-saga/effects";
import sagas from "./news";

export default function* rootSaga() {
  yield all([...sagas]);
}
