import { useSelector } from 'react-redux';
import { all, call, takeLatest, put, select } from 'redux-saga/effects';

import type { AplicationState } from '~/@types/Entity/AplicationState';
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
      const { listBooks } = yield select(
        (state: AplicationState) => state.books,
      );

      let allBooks = [];

      if (action.payload.index === 0) {
        allBooks = response.data.items;
      } else {
        allBooks = [...listBooks, ...response.data.items];
      }

      yield put(searchBookSucessAction(allBooks));
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
