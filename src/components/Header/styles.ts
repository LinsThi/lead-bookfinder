import styled from 'styled-components/native';

import Icon from '../Icon';
import { NewText } from '../Text';

interface IconProps {
  name: string;
  iconType?: string;
}

export const Container = styled.View`
  width: 100%;
`;

export const ContainerButton = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
`;

export const ContainerFont = styled.View`
  flex-direction: row;
`;

export const Button = styled.TouchableOpacity``;

export const DecreaseIncreaseFont = styled(NewText).attrs({
  fontSize: 25,
})`
  font-weight: bold;
  color: ${({ theme }) => theme.Colors.ICON_COLOR_HEADER};
`;

export const RestoreFont = styled(NewText).attrs({ fontSize: 25 })`
  font-weight: bold;
  color: ${({ theme }) => theme.Colors.ICON_COLOR_HEADER};
  margin: 0px 15px;
`;

export const IconButton = styled(Icon).attrs<IconProps>(
  ({ name, iconType, theme }) => ({
    name,
    type: iconType,
    color: theme.Colors.ICON_COLOR_HEADER,
    size: theme.Sizes.ICON_SIZE_HEADER,
  }),
)<IconProps>``;

export const LinearGradient = {
  width: '100%',
};
