import { put, call } from "redux-saga/effects";
import types from "../Types/coffee";
import * as Api from "../Services/Api";

export function* fetchOutlets(action) {
  try {
    const json = yield call(Api.fetchOutlets);
    // console.log("Data is" + JSON.stringify(json));
    yield put({ type: types.OUTLET_FETCH_SUCCEEDED, outlets: json.businesses });
  } catch (e) {
    yield put({ type: types.OUTLET_FETCH_FAILED, message: e.message });
  }
}
