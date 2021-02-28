import React from 'react';
import {FlatList} from 'react-native';
import WeatherItem, {displayItemType} from './fragments/WeatherItem';
import {weatherListType} from '../../shared/types/weather';

const weatherStripe = (props: {weatherList: weatherListType}) => {
  const {weatherList} = props;
  const renderItem = (weatherUnity: displayItemType) => {
    return <WeatherItem weatherUnity={weatherUnity} />;
  };

  return (
    <FlatList
      data={weatherList}
      horizontal={true}
      renderItem={renderItem}
      keyExtractor={(item) => item.id || item.time.toString()}
    />
  );
};

export default weatherStripe;
