import 'styled-components';

type ColorProps = {
  BACKGROUND: string;
  BACKGROUND_GRADIENT_LIGHT: string;
  BACKGROUND_GRADIENT_DARK: string;
  BUTTON_DISABLED: string;
  FONT_COLOR: string;
  FONT_COLOR_LIGHT: string;
  ICON_COLOR: string;
  ICON_COLOR_HEADER: string;
  INPUT_TEXT_COLOR: string;
  PLACEHOLDER_INPUT_TEXT_COLOR: string;
  BORDER_COLOR_INPUT: string;
  BORDER_COLOR_BUTTON: string;
  ERROR_COLOR: string;
  SEARCH_BAR_COLOR: string;
};

type SizeProps = {
  FONTSIZE_INPUT: number;
  FONTSIZE_SEARCH: number;
  INPUT_SIZE: number;
  ICON_SIZE: number;
  ICON_SIZE_HEADER: number;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    Colors: ColorProps;
    Sizes: SizeProps;
  }
}
