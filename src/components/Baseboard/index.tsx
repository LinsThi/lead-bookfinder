import React from 'react';
import { useDispatch } from 'react-redux';

import { logoutAction } from '~/store/ducks/user/action';

import * as S from './styles';

interface BaseboardProps {
  buttonDisabled?: string;
}

export function Baseboard({ buttonDisabled = '' }: BaseboardProps) {
  const dispatch = useDispatch();

  return (
    <S.Container>
      <S.ContainerButton>
        {buttonDisabled !== 'home' && (
          <S.IconButton>
            <S.IconImg name="home" iconType="font-5" />
          </S.IconButton>
        )}

        {buttonDisabled !== 'perfil' && (
          <S.IconButton>
            <S.IconImg name="user-circle-o" iconType="font" />
          </S.IconButton>
        )}

        <S.IconButton onPress={() => dispatch(logoutAction())}>
          <S.IconImg name="logout" iconType="material" />
        </S.IconButton>
      </S.ContainerButton>
    </S.Container>
  );
}
