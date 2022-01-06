import styled from 'styled-components/native';

import { NewText } from '~/components/Text';

export const Container = styled.ScrollView`
  flex: 1;
  background: ${({ theme }) => theme.Colors.BACKGROUND};
`;

export const ContainerImage = styled.View`
  width: 100%;
  padding: 20px 20px;
  align-items: center;
`;

export const ContainerBookInfo = styled.View`
  padding: 0px 20px;
  align-items: center;
`;

export const ContainerLink = styled.View`
  flex-direction: row;
  padding-bottom: 15px;
`;

export const ContainerBase = styled.View`
  width: 100%;
`;

export const BookImage = styled.Image`
  width: 230px;
  height: 230px;
`;

export const TextInfo = styled(NewText).attrs({
  fontSize: 24,
})`
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity``;

export const InfoStyleTitle = {
  paddingBottom: 15,
  fontWeight: 'bold',
  textAlign: 'center',
};

export const InfoStyle = {
  paddingBottom: 15,
  textAlign: 'center',
};
