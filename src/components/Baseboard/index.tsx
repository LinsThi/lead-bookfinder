import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { ThemeContext } from 'styled-components/native';

import { HOME_SCREEN, PROFILE_SCREEN } from '~/constants/routes';
import { logoutAction } from '~/store/ducks/user/action';

import * as S from './styles';

interface BaseboardProps {
  buttonDisabled?: string;
}

export function Baseboard({ buttonDisabled = '' }: BaseboardProps) {
  const { Colors } = useContext(ThemeContext);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <S.Container>
      <LinearGradient
        colors={[
          Colors.BACKGROUND_GRADIENT_LIGHT,
          Colors.BACKGROUND_GRADIENT_DARK,
        ]}
        start={{ x: 1, y: 0 }}
      >
        <S.ContainerButton>
          {buttonDisabled !== 'home' && (
            <S.IconButton onPress={() => navigation.navigate(HOME_SCREEN)}>
              <S.IconImg name="home" iconType="font-5" />
            </S.IconButton>
          )}

          {buttonDisabled !== 'perfil' && (
            <S.IconButton onPress={() => navigation.navigate(PROFILE_SCREEN)}>
              <S.IconImg name="user-circle-o" iconType="font" />
            </S.IconButton>
          )}

          <S.IconButton onPress={() => dispatch(logoutAction())}>
            <S.IconImg name="logout" iconType="material" />
          </S.IconButton>
        </S.ContainerButton>
      </LinearGradient>
    </S.Container>
  );
}
