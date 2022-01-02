import 'styled-components';

type ColorProps = {
  FONT_COLOR: string;
};

type SizeProps = {
  INPUT_SIZE: number;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    Colors: ColorProps;
    Sizes: SizeProps;
  }
}
