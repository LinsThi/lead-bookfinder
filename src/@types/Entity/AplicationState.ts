import type { BookState } from '~/store/ducks/books/types';
import type { FontState } from '~/store/ducks/font/types';
import type { ThemeState } from '~/store/ducks/themes/types';
import type { UserState } from '~/store/ducks/user/types';

export interface AplicationState {
  theme: ThemeState;
  font: FontState;
  user: UserState;
  books: BookState;
}
