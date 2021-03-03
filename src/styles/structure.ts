import {
  StyleSheet,
  //  Dimensions, Platform
} from 'react-native';
import {StatusBar} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

// const screenHeight = Dimensions.get('screen').height;
// const screenWidth = Dimensions.get('screen').width;
const statusBarHeight = StatusBar.currentHeight || 0;
const standardPadding = responsiveWidth(5);

const fontSize = {
  XXS: responsiveFontSize(1),
  XS: responsiveFontSize(1.5),
  S: responsiveFontSize(2),
  M: responsiveFontSize(2.5),
  L: responsiveFontSize(3),
  XL: responsiveFontSize(6),
  XXL: responsiveFontSize(10),
  iconXXL: responsiveFontSize(25),
};

const measures = {
  standardPadding: standardPadding,
  responsiveHeight: responsiveHeight(100),
  responsiveWidth: responsiveWidth(100),
  paddingAdjustedScreenHeight:
    responsiveHeight(100) - standardPadding * 2 - statusBarHeight,
  paddingAdjustedScreenWidth: responsiveWidth(100) - standardPadding * 2,
  fontSize: fontSize,
};

const structure = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    padding: standardPadding,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {measures, structure};
