import type { Action } from 'typesafe-actions';

export enum ThemesTypes {
  THEME_TOOGLE = '@theme/THEME_TOOGLE',
}

export interface ThemeState {
  theme: string;
}

export interface ToogleThemeProps extends Action {
  type: ThemesTypes.THEME_TOOGLE;
}
