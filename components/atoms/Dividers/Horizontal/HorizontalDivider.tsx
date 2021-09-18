import styled from '@constants/styled';
import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';

import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

interface HorizontalDividerProps {
  width?: number;
  color?: string;
  marginVertical?: number;
}

const HorizontalDivider: FC<HorizontalDividerProps> = props => {
  const {width, color, marginVertical} = props;
  return <View style={styles.divider(width, color, marginVertical)} />;
};

export default HorizontalDivider;

const styles = StyleSheet.create({
  divider: (width, color, marginVertical) => ({
    borderTopWidth: width ? width : 1,
    borderTopColor: color ? color : styled.colors.grey20opacity,
    width: '100%',
    marginVertical: marginVertical ? marginVertical : hp(5),
  }),
});
