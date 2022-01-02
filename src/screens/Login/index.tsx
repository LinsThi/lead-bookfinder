import React from 'react';

import { NewText } from '~/components/Text';

import * as S from './styles';

export function Login() {
  return (
    <S.Container>
      <S.ContainerImage>
        <S.Image
          source={{
            uri: 'https://cdn4.iconfinder.com/data/icons/modern-education-3/128/118-512.png',
          }}
        />
      </S.ContainerImage>
      <NewText>LoginScreen</NewText>
    </S.Container>
  );
}
