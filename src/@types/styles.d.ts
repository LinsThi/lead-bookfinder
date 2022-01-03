import 'styled-components';

type ColorProps = {
  BACKGROUND: string;
  BACKGROUND_GRADIENT_LIGHT: string;
  BACKGROUND_GRADIENT_DARK: string;
  FONT_COLOR: string;
  FONT_COLOR_LIGHT: string;
  ICON_COLOR: string;
  ICON_COLOR_HEADER: string;
};

type SizeProps = {
  FONTSIZE_INPUT: number;
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
