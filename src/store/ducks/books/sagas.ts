import { all, call, takeLatest, put } from 'redux-saga/effects';

import { searchBooks } from '~/services/books';

import { searchBookErrorAction, searchBookSucessAction } from './action';
import type { SearchBookProps } from './types';
import { BookTypes } from './types';

interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status: number;
  statusText?: string;
}

function* GetBookSagas(action: SearchBookProps) {
  try {
    const response: ResponseGenerator = yield call(
      searchBooks,
      action.payload.index,
      action.payload.text,
    );

    if (response.status >= 200 && response.status < 300) {
      yield put(searchBookSucessAction(response.data));
    } else {
      yield put(searchBookErrorAction());
    }
  } catch {
    yield put(searchBookErrorAction());
  }
}

export default function* watchSaga() {
  yield all([takeLatest(BookTypes.BOOK_SEARCH, GetBookSagas)]);
}
