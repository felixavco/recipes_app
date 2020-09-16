import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import { colors } from '../config';

const index = (props) => {
  const buttonColor = Platform.OS === 'android' ? colors.white : colors.primary
  return (
    <HeaderButton
      {...props}
      iconSize={23}
      IconComponent={Ionicons}
      color={buttonColor}
    />
  );
};

export default index;