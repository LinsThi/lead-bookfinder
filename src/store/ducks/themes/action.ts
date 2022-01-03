import { action } from 'typesafe-actions';

import type { ToogleThemeProps } from './types';
import { ThemesTypes } from './types';

export const themeToogleAction = (): ToogleThemeProps =>
  action(ThemesTypes.THEME_TOOGLE);
