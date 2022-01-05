import { LinearGradient } from 'expo-linear-gradient';
import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { ThemeContext } from 'styled-components/native';

import {
  decrementFontAction,
  incrementFontAction,
  restoreFontAction,
} from '~/store/ducks/font/action';
import { themeToogleAction } from '~/store/ducks/themes/action';

import * as S from './styles';

export function Header() {
  const { Colors } = useContext(ThemeContext);
  const dispatch = useDispatch();

  return (
    <S.Container>
      <LinearGradient
        colors={[
          Colors.BACKGROUND_GRADIENT_DARK,
          Colors.BACKGROUND_GRADIENT_LIGHT,
        ]}
        style={S.LinearGradient}
        start={{ x: 0.8, y: 0 }}
      >
        <S.ContainerButton>
          <S.Button onPress={() => dispatch(themeToogleAction())}>
            <S.IconButton iconType="font" name="adjust" />
          </S.Button>

          <S.ContainerFont>
            <S.Button onPress={() => dispatch(decrementFontAction())}>
              <S.DecreaseIncreaseFont>A-</S.DecreaseIncreaseFont>
            </S.Button>

            <S.Button onPress={() => dispatch(restoreFontAction())}>
              <S.RestoreFont>A</S.RestoreFont>
            </S.Button>

            <S.Button onPress={() => dispatch(incrementFontAction())}>
              <S.DecreaseIncreaseFont>A+</S.DecreaseIncreaseFont>
            </S.Button>
          </S.ContainerFont>
        </S.ContainerButton>
      </LinearGradient>
    </S.Container>
  );
}
