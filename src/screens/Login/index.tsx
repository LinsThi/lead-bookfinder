import { LinearGradient } from 'expo-linear-gradient';
import { useFormik } from 'formik';
import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ThemeContext } from 'styled-components/native';

import Input from '~/components/Input';
import { NewText } from '~/components/Text';

import { loginAction } from '~/store/ducks/user/action';

import { validationSchema } from './validation';

import * as S from './styles';

interface DataProps {
  username: string;
  password: string;
}

export function Login() {
  const { Colors } = useContext(ThemeContext);
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  function handleLogin(data: DataProps) {
    dispatch(loginAction(data.username, data.password));
  }

  const { handleSubmit, dirty, handleChange, values, errors } = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema,
    onSubmit: handleLogin,
    validateOnChange: false,
  });

  return (
    <S.Container>
      <LinearGradient
        colors={[
          Colors.BACKGROUND_GRADIENT_DARK,
          Colors.BACKGROUND_GRADIENT_LIGHT,
        ]}
        style={S.LinearGradient}
        start={{ x: 1, y: 0 }}
      >
        <S.ContainerImage>
          <S.Image
            source={{
              uri: 'https://cdn.discordapp.com/attachments/689286899835207713/928343797010665503/5594134-removebg-preview.png',
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
          value={values.username}
          onChangeText={handleChange('username')}
          error={errors.username}
        />

        <Input
          placeholder="Senha"
          iconLeft="lock"
          value={values.password}
          onChangeText={handleChange('password')}
          error={errors.password}
          secureTextEntry={!showPassword}
          iconAction={() => setShowPassword(!showPassword)}
          iconRight={showPassword ? 'eye-off' : 'eye'}
        />
      </S.ContainerInput>

      <S.ContainerButon>
        <LinearGradient
          colors={[
            Colors.BACKGROUND_GRADIENT_DARK,
            Colors.BACKGROUND_GRADIENT_LIGHT,
          ]}
          style={S.LinearGradientButton}
          start={{ x: 1, y: 0 }}
        >
          <S.ButtonLogin onPress={() => handleSubmit()}>
            <NewText fontColor={Colors.FONT_COLOR_LIGHT}>Entrar</NewText>
          </S.ButtonLogin>
        </LinearGradient>
      </S.ContainerButon>
    </S.Container>
  );
}
