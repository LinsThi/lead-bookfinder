import styled from 'styled-components/native';

import Icon from '~/components/Icon';

interface IconProps {
  name: string;
}

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.Colors.BACKGROUND};
  align-items: center;
`;

export const ContainerImage = styled.View`
  flex: 0.3;
  width: 100%;
`;

export const ContainerInfo = styled.ScrollView`
  flex: 1;
  margin-top: 50px;
`;

export const ContainerBase = styled.View`
  width: 100%;
`;

export const ImageProfile = styled.Image`
  width: 95px;
  height: 95px;
  border-radius: 50px;
`;

export const ContainerAvatar = styled.View`
  width: 100%;
  position: absolute;
  align-items: center;
  bottom: -30px;
`;

export const ButtonImage = styled.TouchableOpacity``;

export const LinearGradient = {
  flex: 1,
  width: '100%',
  borderBottomLeftRadius: 150,
  borderBottomRightRadius: 150,
};
