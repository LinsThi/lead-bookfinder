import * as ImagePicker from 'expo-image-picker';
import React, { useContext } from 'react';
import { Portal, Modal } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components/native';

import type { AplicationState } from '~/@types/Entity/AplicationState';
import { updateAvatarAction } from '~/store/ducks/user/action';

import { NewText } from '../Text';

import * as S from './styles';

interface Props {
  visible: boolean;
  setVisible: (show: boolean) => void;
}

export function ModalUser({ visible, setVisible }: Props) {
  const { Colors, Sizes } = useContext(ThemeContext);
  const dispatch = useDispatch();

  const hideModal = () => setVisible(false);

  const pickImage = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      dispatch(updateAvatarAction(result.uri));
      setVisible(false);
    }
  };

  const selectImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      dispatch(updateAvatarAction(result.uri));
      setVisible(false);
    }
  };

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={S.containerModal}
      >
        <S.Container>
          <S.TextProduct>Selecione uma opção</S.TextProduct>
          <S.ContainerButton>
            <S.ButtonModal
              colorBackground={Colors.BACKGROUND}
              colorBorder={Colors.BORDER_COLOR_BUTTON}
              onPress={() => pickImage()}
            >
              <S.IconButton
                iconType="font"
                name="camera"
                iconColor={Colors.ICON_COLOR}
                iconSize={Sizes.ICON_SIZE}
              />
              <NewText fontColor={Colors.FONT_COLOR}>Abrir camera</NewText>
            </S.ButtonModal>
            <S.ButtonModal
              colorBackground={Colors.BACKGROUND}
              colorBorder={Colors.BORDER_COLOR_BUTTON}
              onPress={() => selectImage()}
            >
              <S.IconButton
                iconType="font"
                name="photo"
                iconColor={Colors.ICON_COLOR}
                iconSize={Sizes.ICON_SIZE}
              />
              <NewText fontColor={Colors.FONT_COLOR}>Abrir galeria</NewText>
            </S.ButtonModal>
          </S.ContainerButton>
        </S.Container>
      </Modal>
    </Portal>
  );
}
