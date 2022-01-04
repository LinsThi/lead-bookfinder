import { action } from 'typesafe-actions';

import type {
  DecrementFontProps,
  IncrimentFontProps,
  RestoreFontProps,
} from './types';
import { FontTypes } from './types';

export const decrementFontAction = (): DecrementFontProps =>
  action(FontTypes.FONT_SIZE_DECREMENT);

export const restoreFontAction = (): RestoreFontProps =>
  action(FontTypes.FONT_SIZE_RESTORE);

export const incrementFontAction = (): IncrimentFontProps =>
  action(FontTypes.FONT_SIZE_INCREMENT);
