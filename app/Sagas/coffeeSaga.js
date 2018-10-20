import { takeLatest, call, put } from "redux-saga/effects";

function* fetchOutlets(action) {
  try {
    const json = yield fetch(
      "https://raw.githubusercontent.com/adamterlson/react-native-coffee/master/venue-search.json"
    ).then(response => response.json());
    // console.log("Data is" + JSON.stringify(json));
    yield put({ type: "OUTLET_FETCH_SUCCEEDED", outlets: json.businesses });
  } catch (e) {
    yield put({ type: "OUTLET_FETCH_FAILED", message: e.message });
  }
}

function* coffeeSaga() {
  yield takeLatest("OUTLET_FETCH_REQUESTED", fetchOutlets);
}

export default coffeeSaga;
