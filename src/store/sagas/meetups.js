import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as MeetupsActions } from "../ducks/meetups";

export function* getMeetups() {
  try {
    const response = yield call(api.get, "/meetups");

    yield put(MeetupsActions.getMeetupsSuccess(response.data));
  } catch (err) {
    console.log(err);
  }
}
