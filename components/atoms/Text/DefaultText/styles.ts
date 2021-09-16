import {Platform, StyleSheet} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import styled from '../../../../constants/styled';

import {DefaultTextProps} from './DefaultText';

export const styles = StyleSheet.create({
  text: {
    fontSize: RFPercentage(3),

    fontWeight: '400',
    color: styled.colors.grey50opacity,
  },
  fontFamilyLight: {
    fontWeight: '100',
  },
  fontFamilyThin: {
    fontWeight: '200',
  },
  fontFamilyMedium: {
    fontWeight: '500',
  },
  fontFamilyBold: {
    fontWeight: Platform.OS === 'android' ? 'bold' : '600',
  },
  marginTopCustom: (marginTopCustom: DefaultTextProps['marginTopCustom']) => ({
    marginTop: marginTopCustom,
  }),
  marginLeftCustom: (
    marginLeftCustom: DefaultTextProps['marginLeftCustom'],
  ) => ({
    marginLeft: marginLeftCustom,
  }),
  textAlignCenter: {
    textAlign: 'center',
  },
  xxs: {
    fontSize: styled.font.size.xxs,
  },
  xxs2: {
    fontSize: styled.font.size.xxs2,
  },
  xs: {
    fontSize: styled.font.size.xs,
  },
  s: {
    fontSize: styled.font.size.s,
  },
  m: {
    fontSize: styled.font.size.m,
  },
  l: {
    fontSize: styled.font.size.l,
  },
  xl: {
    fontSize: styled.font.size.xl,
  },
  xxl: {
    fontSize: styled.font.size.xxl,
  },
  fontColor: (fontColor: DefaultTextProps['fontColor']) => ({
    color: fontColor,
  }),
  customFontSize: (customFontSize: DefaultTextProps['customFontSize']) => ({
    fontSize: customFontSize,
  }),
  uppercased: {
    textTransform: 'uppercase',
  },
});
