import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const Button = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  border: 1px ${({ theme }) => theme.Colors.FONT_COLOR_LIGHT};
  border-radius: 10px;
`;

export const LinearGradientButton = {
  width: 200,
  height: 40,
  borderRadius: 10,
};
