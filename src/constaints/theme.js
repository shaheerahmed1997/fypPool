import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  // base colors
  primary: '#00A197', // green
  secondary: '#969696', // gray

  // colors
  black: '#000000',
  white: '#FFFFFF',
  red: '#FF0000',
  sharpGreen: '#00FFEF',
  lightGray: '#8E8E8E',
  darkblue: '#272643',

  lightGray3: '#ABABB5',
  lightGray4: '#979797',
  lightGray5:'#454A4A',
  transparent: 'transparent',
  darkgray: '#414143',
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 30,
  padding: 10,
  padding2: 12,

  // font sizes
  largeTitle: 80,
  h1: 26,
  h2: 22,
  h3: 20,
  h4: 16,
  h5: 18,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 14,
  body6: 12,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  largeTitle: {
    fontFamily: 'Poppins-Black',
    fontSize: 22,
  
  },
  h1: {fontFamily: 'Poppins-Bold', fontSize: 22, },
  h2: {fontFamily: 'Poppins-Bold', fontSize: 17,letterSpacing:3 },
  h3: {fontFamily: 'Poppins-Bold', fontSize: 20, },
  h4: {fontFamily: 'Poppins-Regular', fontSize: 15, },
  h6: {fontFamily: 'Poppins-Bold', fontSize: 1,},
  h5: {
    fontFamily: 'Poppins-Bold', fontSize: 14, 
  },
  h6: {fontFamily: 'Poppins-Bold', fontSize: 16,},
  h7: {fontFamily: 'Poppins-Bold', fontSize: 25, },
  h8: {fontFamily: 'Poppins-Bold', fontSize: 9, },
  h9: {fontFamily: 'Poppins-Bold', fontSize: 10, },
  h10: {fontFamily: 'Poppins-Bold', fontSize: 12, },
  h11: {fontFamily: 'Poppins-Bold', fontSize: 28, },
  h12: {fontFamily: 'Poppins-Bold', fontSize: 34, },
//   h7: {fontFamily: 'Gilroy-Medium', fontSize: SIZES.h5, lineHeight: 28},


  body1: {
    fontFamily: 'Poppins-Regular', fontSize: 15,
  },

  body2: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,

  },
  body3: {
    fontFamily: 'Poppins-Bold',
    fontSize: 17,
   
  },
  body4: {fontFamily: 'Poppins', fontSize: SIZES.body6, },
  body5: {fontFamily: 'Poppins', fontSize: SIZES.body5, },
  body6: {fontFamily: 'Poppins-Regular', fontSize: 13, },
  body7: {fontFamily: 'Poppins-Regular', fontSize: 10,},
  body8: {fontFamily: 'Poppins-Medium', fontSize: 10, },
  
 body10: {fontFamily: 'Poppins-Medium', fontSize: 17,letterSpacing:-0.4},
 body11: {fontFamily: 'Poppins-Medium', fontSize: 15, },
 body12: {fontFamily: 'Poppins-Regular', fontSize: 19, },
  body13: {fontFamily: 'Poppin-Medium', fontSize: 13,},
  body14: {fontFamily: 'Poppins-Regular', fontSize: 12, },
  body15: {fontFamily: 'Poppins-Regular', fontSize: 16, },
  body16: {fontFamily: 'Poppins-SemiBold', fontSize: 13, },
  body17: {fontFamily: 'Poppins-SemiBold', fontSize: 15, },
  body18: {fontFamily: 'Poppins-Regular', fontSize: 20, },
  body19: {fontFamily: 'Poppins-Medium', fontSize: 13,},
  body20: {fontFamily: 'Poppins-SemiBold', fontSize: 20, },
  body21: {fontFamily: 'Poppins-SemiBold', fontSize: 8, },

  
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
