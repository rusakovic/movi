import React, {CSSProperties, FC} from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Feather';

import styled from '../../../constants/styled';
import DefaultText from '../Text/DefaultText/DefaultText';

interface ButtonWithShadowSmallProps {
  style?: CSSProperties;
  text?: string;
  onPress: () => void;
  isDisabled?: boolean;
  isMarginTop5?: boolean;
  isIcon?: boolean;
  iconName?: string;
  iconSize?: number;
  percentageWidth?: number;
}

const ButtonWithShadowSmall: FC<ButtonWithShadowSmallProps> = ({
  style,
  text,
  onPress,
  isDisabled,
  isMarginTop5,
  isIcon,
  iconName,
  iconSize,
  percentageWidth,
}) => {
  const buttonStyles = [
    styles.container(percentageWidth),
    isDisabled && styles.disabled,
    !isDisabled && styles.enabled,
    isMarginTop5 && styles.isMarginTop5,
  ];

  return (
    <Pressable
      style={({pressed}) => [
        buttonStyles,
        !isDisabled && pressed && styles.pressed,
        style,
      ]}
      onPress={onPress}
      disabled={isDisabled}>
      {isIcon && (
        <Icon
          style={styles.icon}
          name={iconName}
          size={iconSize || 20}
          color={styled.colors.grey30opacity}
        />
      )}
      <DefaultText s fontColor={styled.colors.grey40opacity} isTextAlignCenter>
        {text}
      </DefaultText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: (
    percentageWidth: ButtonWithShadowSmallProps['percentageWidth'],
  ) => ({
    backgroundColor: styled.colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: hp(1),
    paddingTop: hp(1),
    width: `${percentageWidth || 100}%`,
    borderRadius: 1,
  }),
  disabled: {
    borderColor: styled.colors.grey10opacity,
    borderWidth: 1,
  },
  enabled: {
    elevation: 1.3,
    shadowColor: styled.colors.grey30opacity,
  },
  pressed: {
    elevation: 1,
  },
  isMarginTop5: {
    marginTop: hp(5),
  },
  icon: {
    paddingLeft: '5%',
  },
});

export default ButtonWithShadowSmall;
