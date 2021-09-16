import {RFPercentage} from 'react-native-responsive-fontsize';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styled = {
  font: {
    size: {
      xxs: RFPercentage(1),
      xxs2: RFPercentage(1.5),
      xs: RFPercentage(2),
      s: RFPercentage(2.5),
      m: RFPercentage(3),
      l: RFPercentage(3.5),
      xl: RFPercentage(4.5),
      xxl: RFPercentage(6.5),
    },
  },
  colors: {
    grey3opacity: 'rgba(0,0,0,0.03)',
    grey5opacity: 'rgba(0,0,0,0.05)',
    grey10opacity: 'rgba(0,0,0,0.1)',
    grey20opacity: 'rgba(0,0,0,0.2)',
    grey30opacity: 'rgba(0,0,0,0.3)',
    grey40opacity: 'rgba(0,0,0,0.4)',
    grey50opacity: 'rgba(0,0,0,0.5)',
    grey60opacity: 'rgba(0,0,0,0.6)',
    grey70opacity: 'rgba(0,0,0,0.7)',
    grey80opacity: 'rgba(0,0,0,0.8)',
    black: '#000',

    white: {
      white: '#FFF',
      white60opacity: 'rgba(255,255,255,0.6)',
    },

    red: {
      redButton: '#cc5858',
    },
    blue: {
      standardIosBlue: 'rgb(0, 122, 255)',
    },
  },
  spaceVertical: {
    xxxs: hp(1),
    xxs: hp(2),
    xs: hp(3),
    s: hp(5),
    m: hp(8),
    l: hp(8),
    xl: hp(13),
  },
};

export default styled;
