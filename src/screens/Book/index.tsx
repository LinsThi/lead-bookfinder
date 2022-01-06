import { useRoute } from '@react-navigation/native';
import { decode } from 'html-entities';
import React, { useCallback, useContext } from 'react';
import { Linking } from 'react-native';
import { ThemeContext } from 'styled-components/native';

import { Baseboard } from '~/components/Baseboard';
import { NewText } from '~/components/Text';

import * as S from './styles';

export function Book() {
  const route = useRoute();

  const { Colors } = useContext(ThemeContext);

  const { bookSelected } = route.params;

  const handleRedirect = useCallback(async () => {
    const url = bookSelected.volumeInfo.infoLink;
    await Linking.openURL(url);
  }, [bookSelected.volumeInfo.infoLink]);

  return (
    <>
      <S.Container>
        <S.ContainerImage>
          <NewText fontSize={28} style={S.InfoStyleTitle}>
            {bookSelected.volumeInfo.title}
          </NewText>
          <S.BookImage
            source={
              bookSelected.volumeInfo.imageLinks
                ? { uri: bookSelected.volumeInfo.imageLinks.thumbnail }
                : { uri: 'https://mrb.imgix.net/assets/default-book.png' }
            }
          />
        </S.ContainerImage>

        <S.ContainerBookInfo>
          <>
            <S.TextInfo>Autor</S.TextInfo>
            <NewText style={S.InfoStyle}>
              {bookSelected.volumeInfo.authors
                ? bookSelected.volumeInfo.authors[0]
                : 'Sem informação'}
            </NewText>
          </>

          <>
            <S.TextInfo>Editora</S.TextInfo>
            <NewText style={S.InfoStyle}>
              {bookSelected.volumeInfo.publisher
                ? bookSelected.volumeInfo.publisher
                : 'Sem informação'}{' '}
              em{' '}
              {bookSelected.volumeInfo.publishedDate
                ? bookSelected.volumeInfo.publishedDate
                : 'Sem informação'}
            </NewText>
          </>

          <>
            <S.TextInfo>Sinopse</S.TextInfo>
            <NewText style={S.InfoStyle}>
              {bookSelected.volumeInfo.description
                ? decode(bookSelected.volumeInfo.description)
                : 'Sem sinopse'}
            </NewText>
          </>

          <S.ContainerLink>
            <NewText>Para mais informações clique </NewText>
            <S.Button onPress={() => handleRedirect()}>
              <NewText fontColor={Colors.FONT_COLOR_CLICKABLE}>aqui</NewText>
            </S.Button>
          </S.ContainerLink>
        </S.ContainerBookInfo>
      </S.Container>

      <S.ContainerBase>
        <Baseboard />
      </S.ContainerBase>
    </>
  );
}
