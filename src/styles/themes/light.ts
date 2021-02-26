import {Dimensions} from 'react-native';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const lightTheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)', //obligatory
    background: 'rgb(242, 242, 242)', //obligatory
    card: 'rgb(255, 255, 255)', //obligatory
    text: 'rgb(28, 28, 30)', //obligatory
    border: 'rgb(199, 199, 204)', //obligatory
    notification: 'rgb(255, 69, 58)', //obligatory
  },
};

export default lightTheme;
