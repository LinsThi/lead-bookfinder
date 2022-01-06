import React, { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { ThemeContext } from 'styled-components/native';

import { Baseboard } from '~/components/Baseboard';
import { SearchBar } from '~/components/SearchBar';
import { NewText } from '~/components/Text';

import { searchBookAction } from '~/store/ducks/books/action';

import * as S from './styles';

export function Home() {
  const { Colors } = useContext(ThemeContext);

  const dispatch = useDispatch();

  const [searchBook, setSearchBook] = useState('');

  dispatch(searchBookAction(9, 'amarelo'));

  return (
    <S.Container>
      <S.ContainerInfo>
        <S.ContainerSearch>
          <SearchBar
            placeholder="Digite o nome do livro"
            iconName="book-search-outline"
            iconType="materialCommunityIcons"
            value={searchBook}
            onChangeText={setSearchBook}
          />
        </S.ContainerSearch>

        <S.ContainerBooks>
          <NewText>Aguardando uma busca</NewText>
          <S.ImageBook
            source={{
              uri: 'https://images.vexels.com/media/users/3/206006/isolated/preview/3538885ee4f6d3de4aeb1a3aa6c644bf-bonito-livro-dos-desenhos-animados.png',
            }}
          />

          {/* <S.Indicator size="large" color={Colors.BACKGROUND_GRADIENT_DARK} /> */}
        </S.ContainerBooks>
      </S.ContainerInfo>
      <Baseboard buttonDisabled="home" />
    </S.Container>
  );
}
