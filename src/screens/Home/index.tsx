import { useNavigation } from '@react-navigation/native';
import { decode } from 'html-entities';
import React, { useState, useContext, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components/native';

import { Baseboard } from '~/components/Baseboard';
import { SearchBar } from '~/components/SearchBar';
import { NewText } from '~/components/Text';

import type { AplicationState } from '~/@types/Entity/AplicationState';
import { BOOK_SCREEN } from '~/constants/routes';
import {
  restoreBookListAction,
  searchBookAction,
} from '~/store/ducks/books/action';

import * as S from './styles';

export function Home() {
  const { Colors } = useContext(ThemeContext);
  const { listBooks, loadingSearchBooks } = useSelector(
    (state: AplicationState) => state.books,
  );

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [searchBook, setSearchBook] = useState('');

  useEffect(() => {
    if (searchBook === '') {
      dispatch(restoreBookListAction());
    }
  }, [dispatch, searchBook]);

  function renderBooks(item: any) {
    return (
      <S.Button
        onPress={() =>
          navigation.navigate(BOOK_SCREEN, { bookSelected: item.item })
        }
      >
        <S.ContainerRenderBook>
          <S.ImageBookThumb
            source={
              item.item.volumeInfo.imageLinks
                ? { uri: item.item.volumeInfo.imageLinks.smallThumbnail }
                : { uri: 'https://mrb.imgix.net/assets/default-book.png' }
            }
          />

          <S.ContainerBookInfo>
            <NewText fontSize={18}>
              {decode(item.item.volumeInfo.title)}
            </NewText>
            <NewText fontSize={15}>
              Autor(a):{' '}
              {item.item.volumeInfo.authors
                ? decode(item.item.volumeInfo.authors[0])
                : 'Sem informação'}
            </NewText>
          </S.ContainerBookInfo>
        </S.ContainerRenderBook>
      </S.Button>
    );
  }

  const FoaterList = useCallback(
    ({ load }) => {
      if (!load) return null;

      return (
        <S.Indicator size="large" color={Colors.BACKGROUND_GRADIENT_DARK} />
      );
    },
    [Colors.BACKGROUND_GRADIENT_DARK],
  );

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
            searchBook={searchBook}
          />
        </S.ContainerSearch>

        <S.ContainerBooks>
          {listBooks.length !== 0 ? (
            <S.FlatBooks
              data={listBooks}
              extraData={listBooks}
              keyExtractor={(_, index) => String(index)}
              renderItem={renderBooks}
              showsVerticalScrollIndicator={false}
              onEndReached={() =>
                dispatch(searchBookAction(listBooks.length, searchBook))
              }
              onEndReachedThreshold={0.3}
              ListFooterComponent={<FoaterList load={loadingSearchBooks} />}
            />
          ) : (
            <>
              <NewText>Aguardando uma busca</NewText>
              <S.ImageBook
                source={{
                  uri: 'https://images.vexels.com/media/users/3/206006/isolated/preview/3538885ee4f6d3de4aeb1a3aa6c644bf-bonito-livro-dos-desenhos-animados.png',
                }}
              />
            </>
          )}
        </S.ContainerBooks>
      </S.ContainerInfo>

      <S.ContainerBase>
        <Baseboard buttonDisabled="home" />
      </S.ContainerBase>
    </S.Container>
  );
}
