import styled from 'styled-components/native';

interface TextProps {
  fontSize: number;
  fontColor: string;
}

export const Text = styled.Text<TextProps>`
  font-size: ${({ fontSize }) => fontSize}px;
  color: ${({ fontColor, theme }) => fontColor || theme.Colors.FONT_COLOR};
`;
