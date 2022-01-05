import React, { useContext } from 'react';
import type { TextInputProps } from 'react-native';
import { useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components/native';

import type { AplicationState } from '~/@types/Entity/AplicationState';

import * as S from './styles';

interface SearchBarProps {
  iconName: string;
  iconType: string;
}

export function SearchBar({
  iconName,
  iconType,
  ...rest
}: TextInputProps & SearchBarProps) {
  const { delta } = useSelector((state: AplicationState) => state.font);
  const { Sizes, Colors } = useContext(ThemeContext);
  const fontSizeSearch = Sizes.FONTSIZE_SEARCH + delta;

  return (
    <S.Container>
      <S.IconInput name={iconName} iconType={iconType} />
      <S.InputSearch
        {...rest}
        fontSize={fontSizeSearch}
        placeholderTextColor={Colors.INPUT_TEXT_COLOR}
      />
    </S.Container>
  );
}
