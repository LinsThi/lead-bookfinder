import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background: ${({ theme }) => theme.Colors.BACKGROUND};
`;

export const ContainerImage = styled.View`
  flex: 1;
  align-items: center;
`;

export const ContainerImageText = styled.View`
  position: absolute;
  right: 32px;
  bottom: 32px;
`;

export const ContainerInput = styled.View`
  flex: 0.3;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const ContainerButon = styled.View`
  flex: 0.1;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const Image = styled.Image`
  width: 170px;
  height: 170px;
`;

export const LinearGradient = {
  width: '100%',
  flex: 0.4,
  borderBottomLeftRadius: 100,
};
