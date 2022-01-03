import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useCallback, useContext, useState } from 'react';
import { ThemeContext } from 'styled-components/native';

import Input from '~/components/Input';
import { NewText } from '~/components/Text';

import { HOME_SCREEN } from '~/constants/routes';

import * as S from './styles';

export function Login() {
  const { Colors } = useContext(ThemeContext);
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = useCallback(() => {
    navigation.navigate(HOME_SCREEN);
  }, [navigation]);

  return (
    <S.Container>
      <LinearGradient
        colors={[
          Colors.BACKGROUND_GRADIENT_LIGHT,
          Colors.BACKGROUND_GRADIENT_DARK,
        ]}
        style={S.LinearGradient}
        locations={[0.5, 1]}
        start={{ x: 1, y: 0 }}
      >
        <S.ContainerImage>
          <S.Image
            source={{
              uri: 'https://cdn.discordapp.com/attachments/689286899835207713/927389322452279356/1954934.png',
            }}
          />

          <S.ContainerImageText>
            <NewText fontColor={Colors.FONT_COLOR_LIGHT} fontSize={20}>
              Login
            </NewText>
          </S.ContainerImageText>
        </S.ContainerImage>
      </LinearGradient>

      <S.ContainerInput>
        <Input
          placeholder="Usuário"
          iconLeft="person"
          iconType="ionicons"
          value={username}
          onChangeText={setUsername}
        />

        <Input
          placeholder="Senha"
          iconLeft="lock"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          iconAction={() => setShowPassword(!showPassword)}
          iconRight={showPassword ? 'eye-off' : 'eye'}
        />
      </S.ContainerInput>

      <S.ContainerButon>
        <LinearGradient
          colors={[
            Colors.BACKGROUND_GRADIENT_LIGHT,
            Colors.BACKGROUND_GRADIENT_DARK,
          ]}
          style={S.LinearGradientButton}
          locations={[0.5, 1]}
        >
          <S.ButtonLogin onPress={() => handleLogin()}>
            <NewText fontColor={Colors.FONT_COLOR_LIGHT}>Entrar</NewText>
          </S.ButtonLogin>
        </LinearGradient>
      </S.ContainerButon>
    </S.Container>
  );
}
