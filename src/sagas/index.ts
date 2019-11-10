import { takeEvery, call, put, fork, all } from "@redux-saga/core/effects";
import { actionIds } from "../common";
import { generateNewNumber } from "../services";
import { numberRequestCompletedAction } from "../actions";

function* watchNewGeneratedNumberRequestStart() {
  yield takeEvery(actionIds.GET_NUMBER_REQUEST_START, requestNewGeneratedNumber);
} 

function* requestNewGeneratedNumber() {
  const generateNumber = yield call(generateNewNumber);
  yield put(numberRequestCompletedAction(generateNumber));
}

export const rootSaga = function* root() {
  yield all([
    fork(watchNewGeneratedNumberRequestStart),
    
  ])
}