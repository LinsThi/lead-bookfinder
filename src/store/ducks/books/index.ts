import type { Reducer } from 'redux';

import type { BookState } from './types';
import { BookTypes } from './types';

const INITIAL_STATE: BookState = {
  listBooks: [],
  loadingSearchBooks: false,
  errorGetBooks: false,
};

const reducer: Reducer<BookState> = (
  state = INITIAL_STATE,
  { type, payload },
) => {
  switch (type) {
    case BookTypes.BOOK_SEARCH:
      return {
        ...state,
        loadingSearchBooks: true,
      };
    case BookTypes.BOOK_SEARCH_SUCCESS:
      return {
        ...state,
        listBooks: payload.listBooks,
        loadingSearchBooks: false,
      };
    case BookTypes.BOOK_SEARCH_ERROR:
      return {
        ...state,
        loadingSearchBooks: false,
        errorGetBooks: true,
      };
    default:
      return state;
  }
};

export default reducer;
