import type { Action } from 'typesafe-actions';

export enum BookTypes {
  BOOK_SEARCH_SUCCESS = '@books/BOOK_SEARCH_SUCCESS',
  BOOK_SEARCH = '@books/BOOK_SEARCH',
  BOOK_SEARCH_ERROR = '@books/BOOK_SEARCH_ERROR',
  LIST_BOOK_RESTORE = '@books/LIST_BOOK_RESTORE',
}

export interface BookState {
  listBooks: any;
  loadingSearchBooks: boolean;
  errorGetBooks: boolean;
}

export interface SearchBookProps extends Action {
  type: BookTypes.BOOK_SEARCH;
  payload: { index: number; text: string };
}

export interface SearchBookSuccessProps extends Action {
  type: BookTypes.BOOK_SEARCH_SUCCESS;
  payload: { listBooks: any };
}

export interface SearchBookErrorProps extends Action {
  type: BookTypes.BOOK_SEARCH_ERROR;
}

export interface RestoreListBookProps extends Action {
  type: BookTypes.LIST_BOOK_RESTORE;
}
