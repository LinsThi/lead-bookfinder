import type { Action } from 'typesafe-actions';

export enum FontTypes {
  FONT_SIZE_DECREMENT = '@font/FONT_SIZE_DECREMENT',
  FONT_SIZE_RESTORE = '@font/FONT_SIZE_RESTORE',
  FONT_SIZE_INCREMENT = '@font/FONT_SIZE_INCREMENT',
}

export interface FontState {
  delta: number;
}

export interface DecrementFontProps extends Action {
  type: FontTypes.FONT_SIZE_DECREMENT;
}

export interface RestoreFontProps extends Action {
  type: FontTypes.FONT_SIZE_RESTORE;
}

export interface IncrimentFontProps extends Action {
  type: FontTypes.FONT_SIZE_INCREMENT;
}
