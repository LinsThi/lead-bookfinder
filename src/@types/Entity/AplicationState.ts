import type { FontState } from '~/store/ducks/font/types';
import type { ThemeState } from '~/store/ducks/themes/types';

export interface AplicationState {
  theme: ThemeState;
  font: FontState;
}
