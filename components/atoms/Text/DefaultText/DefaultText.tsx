import React, {FC} from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';

import {styles} from './styles';

export interface DefaultTextProps {
  children?: React.ReactNode | string;
  onPress?: () => void;
  style?: TextStyle;
  customFontSize?: number;
  fontColor?: string;
  fontFamilyLight?: boolean;
  fontFamilyThin?: boolean;
  fontFamilyMedium?: boolean;
  fontFamilyBold?: boolean;
  isTextAlignCenter?: boolean;
  marginTopCustom?: number;
  marginLeftCustom?: number;
  xxs?: boolean;
  xxs2?: boolean;
  xs?: boolean;
  s?: boolean;
  m?: boolean;
  l?: boolean;
  xl?: boolean;
  xxl?: boolean;
  uppercased?: boolean;
  numberOfLines?: number;
  fitText?: boolean;
}

const DefaultText: FC<DefaultTextProps> = ({
  children,
  customFontSize,
  fontColor,
  fontFamilyLight,
  fontFamilyThin,
  fontFamilyMedium,
  fontFamilyBold,
  isTextAlignCenter,
  marginTopCustom,
  onPress,
  style,
  xxs,
  xxs2,
  xs,
  s,
  m,
  l,
  xl,
  xxl,
  marginLeftCustom,
  uppercased,
  numberOfLines = 1,
  fitText = true,
}) => {
  const defaultTextStyle = [
    customFontSize && styles.customFontSize(customFontSize),
    isTextAlignCenter && styles.textAlignCenter,
    fontColor && styles.fontColor(fontColor),
    marginTopCustom && styles.marginTopCustom(marginTopCustom),
    marginLeftCustom && styles.marginLeftCustom(marginLeftCustom),
    fontFamilyLight && styles.fontFamilyLight,
    fontFamilyThin && styles.fontFamilyThin,
    fontFamilyMedium && styles.fontFamilyMedium,
    fontFamilyBold && styles.fontFamilyBold,
    xxs && styles.xxs,
    xxs2 && styles.xxs2,
    xs && styles.xs,
    s && styles.s,
    m && styles.m,
    l && styles.l,
    xl && styles.xl,
    xxl && styles.xxl,
    uppercased && styles.uppercased,
  ];
  return (
    <Text
      style={StyleSheet.flatten([styles.text, defaultTextStyle, style])}
      onPress={onPress}
      adjustsFontSizeToFit={fitText}
      numberOfLines={numberOfLines ? numberOfLines : 1}>
      {children}
    </Text>
  );
};

export default DefaultText;
