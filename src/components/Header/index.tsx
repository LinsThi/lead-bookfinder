import { LinearGradient } from 'expo-linear-gradient';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components/native';

import * as S from './styles';

export function Header() {
  const { Colors } = useContext(ThemeContext);

  return (
    <S.Container>
      <LinearGradient
        colors={[
          Colors.BACKGROUND_GRADIENT_LIGHT,
          Colors.BACKGROUND_GRADIENT_DARK,
        ]}
        style={S.LinearGradient}
        start={{ x: 0.4, y: 0 }}
      >
        <S.ContainerButton>
          <S.Button>
            <S.IconButton iconType="font" name="adjust" />
          </S.Button>

          <S.ContainerFont>
            <S.Button>
              <S.DecreaseIncreaseFont>A-</S.DecreaseIncreaseFont>
            </S.Button>

            <S.Button>
              <S.RestoreFont>A</S.RestoreFont>
            </S.Button>

            <S.Button>
              <S.DecreaseIncreaseFont>A+</S.DecreaseIncreaseFont>
            </S.Button>
          </S.ContainerFont>
        </S.ContainerButton>
      </LinearGradient>
    </S.Container>
  );
}
