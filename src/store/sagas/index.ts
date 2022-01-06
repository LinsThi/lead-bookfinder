import { all, fork } from 'redux-saga/effects';

import bookSearh from '../ducks/books/sagas';

export default function* rootSaga() {
  yield all([fork(bookSearh)]);
}
