import { SagaIterator } from 'redux-saga';
import { all, fork } from 'redux-saga/effects';

import workSaga from './work';

export default function* rootSaga(): SagaIterator {
  yield all([
    fork(workSaga),
  ]);
};
