import type { PickerProps } from '@react-native-picker/picker';
import { Picker } from '@react-native-picker/picker';
import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { ThemeContext } from 'styled-components/native';

import { LIST_GENDERS } from '~/@types/Entity/Gender';

import * as S from './styles';

interface SelectProps {
  title: string;
}

const Select: React.FC<PickerProps & SelectProps> = ({
  title,
  ...rest
}: SelectProps) => {
  const { Colors } = useContext(ThemeContext);

  return (
    <S.Container
      style={{
        borderBottomColor: Colors.BORDER_COLOR_INPUT,
        borderBottomWidth: 2,
        borderBottomStartRadius: 15,
        borderBottomEndRadius: 15,
      }}
    >
      <S.IconSelect iconType="feather" name="users" />
      <S.ContainerSelect>
        <S.SelectPicker
          {...rest}
          style={{ marginLeft: 10 }}
          dropdownIconColor={Colors.ICON_COLOR}
        >
          <Picker.Item
            label={title}
            value="b"
            enabled={false}
            color={Colors.INPUT_TEXT_COLOR}
          />
          {LIST_GENDERS.map(gender => {
            return (
              <Picker.Item
                label={gender.label}
                value={gender.id}
                key={gender.id}
                color={Colors.INPUT_TEXT_COLOR}
              />
            );
          })}
        </S.SelectPicker>
      </S.ContainerSelect>
    </S.Container>
  );
};

export default Select;
