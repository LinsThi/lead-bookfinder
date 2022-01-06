import { action } from 'typesafe-actions';

import type {
  SearchBookErrorProps,
  SearchBookProps,
  SearchBookSuccessProps,
} from './types';
import { BookTypes } from './types';

export const searchBookAction = (
  index: number,
  text: string,
): SearchBookProps => action(BookTypes.BOOK_SEARCH, { index, text });

export const searchBookSucessAction = (
  listBooks: any,
): SearchBookSuccessProps =>
  action(BookTypes.BOOK_SEARCH_SUCCESS, { listBooks });

export const searchBookErrorAction = (): SearchBookErrorProps =>
  action(BookTypes.BOOK_SEARCH_ERROR);
