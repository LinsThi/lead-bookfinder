import React from 'react';
import type { TextProps } from 'react-native';

import * as S from './styles';

interface NewTextProps {
  fontSize?: number;
  fontColor?: string;
}

export function NewText({
  fontSize = 18,
  fontColor,
  children,
  ...rest
}: NewTextProps & TextProps) {
  return (
    <S.Text fontSize={fontSize} fontColor={fontColor} {...rest}>
      {children}
    </S.Text>
  );
}
