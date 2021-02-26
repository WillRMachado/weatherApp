import React from 'react';
import {View, Text, TouchableOpacity, PermissionsAndroid} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

import {asyncGetWeather} from '../../../store/reducers/weather';

import {useTheme} from '@react-navigation/native';

import styles from '../../../styles';
import Geolocation from 'react-native-geolocation-service';

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
  const sel = useSelector((state: any) => state.store.weather);
  // console.log(JSON.stringify(sel));
  const {colors, dark} = useTheme();

  // console.log(dark, colors);
  return (
    <View style={{backgroundColor: colors.primary}}>
      <TouchableOpacity
        onPress={() => dispatch(asyncGetWeather('-23.533773', '-46.625290'))}>
        <Text>display</Text>
        <Text>display</Text>
        <Text>display</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DisplayWeather;
