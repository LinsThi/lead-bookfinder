import { LinearGradient } from 'expo-linear-gradient';
import React, { useContext } from 'react';
import type { TouchableOpacityProps } from 'react-native';
import { ThemeContext } from 'styled-components/native';

import { NewText } from '../Text';

import * as S from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  disabled?: boolean;
}

export function Button({ title, disabled, ...rest }: ButtonProps) {
  const { Colors } = useContext(ThemeContext);

  return (
    <S.Container>
      <LinearGradient
        colors={
          disabled
            ? [Colors.BUTTON_DISABLED, Colors.BUTTON_DISABLED]
            : [
                Colors.BACKGROUND_GRADIENT_DARK,
                Colors.BACKGROUND_GRADIENT_LIGHT,
              ]
        }
        style={[S.LinearGradientButton, { justifyContent: 'center' }]}
        start={{ x: 1, y: 0 }}
      >
        <S.Button {...rest} disabled={disabled}>
          <NewText
            fontColor={disabled ? Colors.FONT_COLOR : Colors.FONT_COLOR_LIGHT}
          >
            {title}
          </NewText>
        </S.Button>
      </LinearGradient>
    </S.Container>
  );
}
