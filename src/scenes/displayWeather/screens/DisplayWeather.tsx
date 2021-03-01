import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  PermissionsAndroid,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

import {asyncGetWeather} from '../../../store/reducers/weather';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {useTheme} from '@react-navigation/native';

import styles, {measures} from '../../../styles';
import Geolocation from 'react-native-geolocation-service';
import Icon from 'react-native-vector-icons/FontAwesome';

import WeatherStripe from '../../../components/weatherStripe/WeatherStripe';

// const aaa = async (params) => {
//   try {
//     const granted = await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//       // {
//       //   title: 'Device current location permission',
//       //   message: 'Allow app to get your current location',
//       //   buttonNeutral: 'Ask Me Later',
//       //   buttonNegative: 'Cancel',
//       //   buttonPositive: 'OK',
//       // },
//     );
//     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//       Geolocation.getCurrentPosition(
//         (position) => {
//           console.log(position);
//         },
//         (error) => {
//           console.log('err', error.code, error.message);
//         },
//       );
//     } else {
//       console.log('Location permission denied');
//     }
//   } catch (err) {
//     console.warn(err);
//   }
// };
// aaa();

const DisplayWeather: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  // const icon = useSelector((state: any) => state.store.weather.current.icon);
  const sevenDaysForecast = useSelector(
    (state: any) => state.store.weather.forecast,
  );
  // console.log(sel);
  // const {colors, dark} = useTheme();
  // console.log(sevenDaysForecast);

  // console.log(dark, colors);
  console.log(sevenDaysForecast.length);
  return (
    <View
      style={
        (styles.structure.container,
        {
          flexDirection: 'row',
          height: measures.responsiveHeight,
          paddingBottom: 20,
          alignItems: 'flex-end',
        })
      }>
      {/* <TouchableOpacity
        onPress={() => dispatch(asyncGetWeather('-23.533773', '-46.625290'))}>
        <Text>display</Text>
        <Text>display</Text>
        <Text>display</Text>
      </TouchableOpacity> */}
      {/* <Image
        style={{
          width: measures.adjustedScreenWidth,
          height: measures.adjustedScreenHeight,
        }}
        resizeMode="contain"
        source={{uri: `http://openweathermap.org/img/wn/${icon}@2x.png`}}
      /> */}
      <WeatherStripe weatherList={sevenDaysForecast} />
    </View>
  );
};

export default DisplayWeather;
