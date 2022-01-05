import styled from 'styled-components/native';

import Icon from '../Icon';

interface IconProps {
  name: string;
  iconType: string;
}

interface TextInputProps {
  fontSize: number;
}

export const Container = styled.View`
  width: 90%;
  flex-direction: row;
  background: #ff9966;
  border-radius: 7px;
  padding: 5px 5px;
`;

export const InputSearch = styled.TextInput<TextInputProps>`
  padding: 0px 10px;
  font-size: ${({ fontSize }) => fontSize}px;
  font-style: italic;
`;

export const IconInput = styled(Icon).attrs<IconProps>(
  ({ name, iconType, theme }) => ({
    name,
    type: iconType,
    size: theme.Sizes.ICON_SIZE_HEADER,
    color: theme.Colors.ICON_COLOR_HEADER,
  }),
)<IconProps>``;
