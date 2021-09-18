import styled from '@constants/styled';
import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

interface ContainerCenterProps {
  style?: ViewStyle;
  marginVertical?: boolean;
  mtXXXS?: boolean;
  mtXXS?: boolean;
  mtXS?: boolean;
  mtS?: boolean;
  mtM?: boolean;
  mtL?: boolean;
  mtXL?: boolean;
}
const styles = StyleSheet.create({
  marginVertical: {
    marginVertical: hp(3),
  },
  mtXXXS: {
    marginTop: styled.spaceVertical.xxxs,
  },
  mtXXS: {
    marginTop: styled.spaceVertical.xxs,
  },
  mtXS: {
    marginTop: styled.spaceVertical.xs,
  },
  mtS: {
    marginTop: styled.spaceVertical.s,
  },
  mtM: {
    marginTop: styled.spaceVertical.m,
  },
  mtL: {
    marginTop: styled.spaceVertical.l,
  },
  mtXL: {
    marginTop: styled.spaceVertical.xl,
  },
});

const ContainerSpace: React.FunctionComponent<ContainerCenterProps> = ({
  children,
  style,
  marginVertical,
  mtXXXS,
  mtXXS,
  mtXS,
  mtS,
  mtM,
  mtL,
  mtXL,
}) => {
  const containerSpaceStyles = [
    marginVertical && styles.marginVertical,
    mtXXXS && styles.mtXXXS,
    mtXXS && styles.mtXXS,
    mtXS && styles.mtXS,
    mtS && styles.mtS,
    mtM && styles.mtM,
    mtL && styles.mtL,
    mtXL && styles.mtXL,
  ];
  return <View style={[containerSpaceStyles, style]}>{children}</View>;
};

export default ContainerSpace;
