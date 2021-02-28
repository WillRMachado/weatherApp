import React from 'react';
import {View, Text} from 'react-native';

import {weatherItemType} from '../../../shared/types/weather';
import {TouchableOpacity} from 'react-native-gesture-handler';

import TranslatedText from '../../translateText/TranslateText';

export interface displayItemType {
  index: number;
  item: weatherItemType;
}

const WeatherItem = (props: {weatherUnity: displayItemType}) => {
  const {weatherUnity} = props;
  console.log('render');
  const day = new Date(0);
  day.setUTCSeconds(weatherUnity.item.time);

  return (
    <View
      style={{
        width: 100,
        height: 100,
        backgroundColor: '#00000050',
        borderRadius: 10,
        marginLeft: weatherUnity.index === 0 ? 0 : 10,
      }}>
      <TranslatedText string={'time.day'} style={{backgroundColor: 'green'}} />

      {/* <Text>{weatherUnity.item.main}</Text>
      <Text>{weatherUnity.item.icon}</Text>
      <Text>{weatherUnity.item.time}</Text> */}
      {/* <Text>{label + language}</Text> */}
    </View>
  );
};

export default WeatherItem;
