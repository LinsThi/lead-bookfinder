import styled from 'styled-components/native';

import Icon from '../Icon';

interface ButtonProps {
  colorBackground: string;
  colorBorder: string;
}

interface IconProps {
  name: string;
  iconType: string;
  iconSize: number;
  iconColor: string;
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const ContainerButton = styled.View`
  justify-content: center;
`;

export const containerModal = {
  backgroundColor: 'white',
  padding: 20,
  margin: 15,
  borderRadius: 6,
  height: 200,
};

export const ButtonModal = styled.TouchableOpacity<ButtonProps>`
  width: 160px;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-top: 10px;
  padding: 0px 10px;
  border-radius: 7px;
  border: 1px ${({ colorBorder }) => colorBorder};
  background: ${({ colorBackground }) => colorBackground};
`;

export const TextProduct = styled.Text`
  font-size: 24px;
  margin-bottom: 5px;
  color: #000;
`;

export const IconButton = styled(Icon).attrs<IconProps>(
  ({ name, iconType, iconSize, iconColor }) => ({
    name,
    type: iconType,
    size: iconSize,
    color: iconColor,
  }),
)<IconProps>``;
