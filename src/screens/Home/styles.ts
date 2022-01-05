import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.Colors.BACKGROUND};
`;

export const ContainerInfo = styled.View`
  flex: 1;
`;

export const ContainerSearch = styled.View`
  width: 100%;
  height: 80px;

  justify-content: center;
  align-items: center;
`;

export const ContainerBooks = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const ImageBook = styled.Image`
  width: 200px;
  height: 200px;
`;

export const Indicator = styled.ActivityIndicator``;
