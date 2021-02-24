import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {call} from 'react-native-reanimated';
import {useDispatch, useSelector} from 'react-redux';

import {getWeatherOneCall} from '../../service/weather';
// import { Container } from './styles';
import {asyncGetWeather} from '../../store/reducers/weather/weather';
import { PURGE } from 'redux-persist';

const DisplayWeather: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  return (
    <View>
      <TouchableOpacity
        onPress={() => dispatch(asyncGetWeather('-23.533773', '-46.625290'))}>
        <Text>display</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DisplayWeather;
