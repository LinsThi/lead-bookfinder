import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient';
import { useFormik } from 'formik';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Alert, Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components/native';

import { Baseboard } from '~/components/Baseboard';
import { Button } from '~/components/Button';
import Input from '~/components/Input';
import { ModalUser } from '~/components/Modal';
import Select from '~/components/Select';
import { NewText } from '~/components/Text';

import type { AplicationState } from '~/@types/Entity/AplicationState';
import type { GenderProps } from '~/@types/Entity/Gender';
import { HOME_SCREEN } from '~/constants/routes';
import { updateUserAction } from '~/store/ducks/user/action';
import type { UserProps } from '~/store/ducks/user/types';

import { validationSchema } from './validation';

import * as S from './styles';

interface DataProps {
  username: string;
  email: string;
  birthDate: string;
  gender: GenderProps;
  newPassword: string;
  confirmNewPassword: string;
}

export function Profile() {
  const { currentUser } = useSelector((state: AplicationState) => state.user);
  const { Colors } = useContext(ThemeContext);

  const [image, setImage] = useState('');
  const [visible, setVisible] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleUpdateUser = useCallback(
    (data: DataProps) => {
      const userUpdate: UserProps = {
        avatar: image,
        username: data.username,
        birthDate: data.birthDate,
        email: data.email,
        gender: data.gender,
        password: data.newPassword || currentUser.password,
      };
      dispatch(updateUserAction(userUpdate));
      navigation.navigate(HOME_SCREEN);
    },
    [image, currentUser.password, dispatch, navigation],
  );

  const showModal = useCallback(() => {
    setVisible(true);
  }, []);

  const { handleChange, handleSubmit, dirty, errors, values, setFieldValue } =
    useFormik({
      initialValues: {
        username: currentUser.username,
        email: currentUser.email,
        birthDate: currentUser.birthDate,
        gender: currentUser.gender,
        newPassword: '',
        confirmNewPassword: '',
      },
      validationSchema,
      validateOnChange: false,
      onSubmit: handleUpdateUser,
    });

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert(
            'Sorry, we need camera roll permissions to make this work!',
          );
        }
      }
    })();
  }, []);

  useEffect(() => {
    if (currentUser.avatar) {
      setImage(currentUser.avatar);
    }
  }, [currentUser.avatar]);

  return (
    <S.Container>
      <S.ContainerImage>
        <LinearGradient
          colors={[
            Colors.BACKGROUND_GRADIENT_DARK,
            Colors.BACKGROUND_GRADIENT_LIGHT,
          ]}
          style={[
            S.LinearGradient,
            {
              justifyContent: 'space-between',
              alignItems: 'center',
            },
          ]}
          start={{ x: 1, y: 0 }}
        >
          <NewText
            fontSize={28}
            fontColor={Colors.FONT_COLOR_LIGHT}
            style={{ fontWeight: 'bold' }}
          >
            {currentUser.username}
          </NewText>
        </LinearGradient>

        <S.ContainerAvatar>
          <S.ButtonImage onPress={() => showModal()}>
            <S.ImageProfile
              source={{
                uri:
                  image ||
                  'https://i.pinimg.com/originals/bd/70/22/bd702201a2b6d8960734f60f34a22754.jpg',
              }}
            />
          </S.ButtonImage>
        </S.ContainerAvatar>
      </S.ContainerImage>

      <S.ContainerInfo showsVerticalScrollIndicator={false}>
        <Input
          placeholder="Usuário"
          iconLeft="person"
          iconType="ionicons"
          value={values.username}
          onChangeText={handleChange('username')}
          error={errors.username}
        />

        <Input
          placeholder="Email"
          iconLeft="email"
          iconType="material"
          value={values.email}
          onChangeText={handleChange('email')}
          error={errors.email}
        />

        <Input
          placeholder="Data de nascimento"
          iconLeft="calendar-star"
          value={values.birthDate}
          onChangeText={handleChange('birthDate')}
          error={errors.birthDate}
        />

        <Select
          title="Selecione o gênero"
          selectedValue={values.gender}
          onValueChange={genderSelected =>
            setFieldValue('gender', genderSelected)
          }
        />

        <Input
          placeholder="Nova Senha"
          iconLeft="lock"
          value={values.newPassword}
          onChangeText={handleChange('newPassword')}
          secureTextEntry={!showNewPassword}
          iconAction={() => setShowNewPassword(!showNewPassword)}
          iconRight={showNewPassword ? 'eye-off' : 'eye'}
        />

        <Input
          placeholder="Confirmar nova senha"
          iconLeft="lock"
          value={values.confirmNewPassword}
          onChangeText={handleChange('confirmNewPassword')}
          secureTextEntry={!showConfirmPassword}
          iconAction={() => setShowConfirmPassword(!showConfirmPassword)}
          iconRight={showConfirmPassword ? 'eye-off' : 'eye'}
        />

        <Button
          title="Atualizar"
          onPress={() => handleSubmit()}
          disabled={!dirty}
        />
      </S.ContainerInfo>

      <S.ContainerBase>
        <Baseboard buttonDisabled="perfil" />
      </S.ContainerBase>
      <ModalUser visible={visible} setVisible={setVisible} />
    </S.Container>
  );
}
