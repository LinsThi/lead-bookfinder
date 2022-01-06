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
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ContainerRenderBook = styled.View`
  width: 80%;
  flex-direction: row;
  padding: 15px 7px;
`;

export const ContainerBookInfo = styled.View`
  padding-left: 7px;
  padding-right: 10px;
`;

export const ContainerBase = styled.View`
  width: 100%;
`;

export const FlatBooks = styled.FlatList`
  width: 100%;
`;

export const ImageBook = styled.Image`
  width: 200px;
  height: 200px;
`;

export const ImageBookThumb = styled.Image`
  width: 100px;
  height: 100px;
`;

export const Indicator = styled.ActivityIndicator``;

export const Button = styled.TouchableOpacity`
  border: 1px ${({ theme }) => theme.Colors.BORDER_COLOR_BUTTON};
`;
