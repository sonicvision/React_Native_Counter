import coffeeTypes from "../Types/coffee";
import * as coffeeSagas from "../Sagas/coffee";
import { takeEvery } from "redux-saga";

export default function* rootSaga() {
  yield [
    takeEvery(coffeeTypes.OUTLET_FETCH_REQUESTED, coffeeSagas.fetchOutlets)
  ];
}
