import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  safeAreaWrapper: {
    flex: 1,
  },
  blurredWrapper: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  noInternetTextWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
});
