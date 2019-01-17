import { SagaIterator } from "redux-saga";
import { call, put, takeEvery } from "redux-saga/effects";

import { workApi } from 'src/lib/api';
import { failWorkHistoriesByMonth, GET_WORK_HISTORIES_BY_DAY, GET_WORK_HISTORIES_BY_MONTH, successWorkHistoriesByDay, successWorkHistoriesByMonth } from "src/store/modules/work";

export function* getWorkHistoriesByMonth({ payload }: any): SagaIterator {
  const response = yield call(workApi.requestWorkHistoriesByMonth, payload);

  const { status, data: responseBodyData } = response;

  switch (status) {
    case 200:
      yield put(successWorkHistoriesByMonth(responseBodyData));
      break;
    default:
      console.log('알 수 없는 에러');
      yield put(failWorkHistoriesByMonth(responseBodyData));
      break;
  }
};

export function* getWorkHistoriesByDay({ payload }: any): SagaIterator {
  const response = yield call(workApi.requestWorkHistoriesByDay, payload);

  const { status, data: responseBodyData } = response;

  switch (status) {
    case 200:
      yield put(successWorkHistoriesByDay(responseBodyData));
      break;
    default:
      console.log('알 수 없는 에러');
      yield put(failWorkHistoriesByMonth(response));
      break;
  }
}

export function* watchRequestWorkHistoriesByMonth() {
  yield takeEvery(GET_WORK_HISTORIES_BY_MONTH, getWorkHistoriesByMonth);
};

export function* watchRequestWorkHistoriesByDay() {
  yield takeEvery(GET_WORK_HISTORIES_BY_DAY, getWorkHistoriesByDay);
};