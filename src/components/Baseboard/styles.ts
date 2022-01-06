import styled from 'styled-components/native';

import Icon from '../Icon';

interface IconProps {
  name: string;
  iconType?: string;
}

export const Container = styled.View`
  background: ${({ theme }) => theme.Colors.BACKGROUND_GRADIENT_DARK};
`;

export const ContainerButton = styled.View`
  padding: 8px 10px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const IconButton = styled.TouchableOpacity``;

export const IconImg = styled(Icon).attrs<IconProps>(
  ({ name, iconType, theme }) => ({
    name,
    type: iconType,
    size: theme.Sizes.ICON_SIZE_HEADER,
    color: theme.Colors.ICON_COLOR_HEADER,
  }),
)<IconProps>``;
