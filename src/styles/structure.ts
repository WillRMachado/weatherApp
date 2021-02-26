import {Dimensions} from 'react-native';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const container = {
  padding: screenWidth*0.05,
};

const structure = {container};

export default structure;
