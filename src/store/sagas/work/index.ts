import { SagaIterator } from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import { watchRequestWorkHistoriesByDay, watchRequestWorkHistoriesByMonth } from './work';

export default function* workSaga(): SagaIterator {
  yield all([
    fork(watchRequestWorkHistoriesByMonth),
    fork(watchRequestWorkHistoriesByDay),
  ]);
};
