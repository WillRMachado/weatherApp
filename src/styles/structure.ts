import {StyleSheet, Dimensions, Platform} from 'react-native';
import {StatusBar} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;
const statusBarHeight = StatusBar.currentHeight || 0;
const standardPadding = responsiveWidth(5);

const fontSize = {
  XXS: responsiveFontSize(1),
  XS: responsiveFontSize(1.5),
  S: responsiveFontSize(2),
  M: responsiveFontSize(2.5),
  L: responsiveFontSize(3),
  XL: responsiveFontSize(3.5),
  XXL: responsiveFontSize(4),
};

const measures = {
  responsiveHeight: responsiveHeight(100),
  responsiveWidth: responsiveWidth(100),
  adjustedScreenHeight:
    responsiveHeight(100) - standardPadding * 2 - statusBarHeight,
  adjustedScreenWidth: responsiveWidth(100) - standardPadding * 2,
  fontSize: fontSize,
};

const structure = StyleSheet.create({
  container: {
    flex: 1,
    padding: standardPadding,
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    borderColor: 'red',
  },
});

export {measures, structure};
