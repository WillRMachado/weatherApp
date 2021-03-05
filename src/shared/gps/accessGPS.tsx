import {PermissionsAndroid} from 'react-native';
import Geolocation, {
  SuccessCallback,
  ErrorCallback,
  GeoPosition,
} from 'react-native-geolocation-service';
import {asyncFeedLocation} from '../../store/reducers/weather/index';
import redux from '../../store/index';

const successGetGPS = (position: GeoPosition) => {
  redux.dispatch(
    asyncFeedLocation(position.coords.latitude, position.coords.longitude),
  );
};

const getGPSPosition = async (
  successCallback: SuccessCallback = successGetGPS,
  errorCallback?: ErrorCallback,
  permissionDeniedCallback?: ErrorCallback,
) => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      Geolocation.getCurrentPosition(successCallback, (error) => {
        console.log('err', error.code, error.message);
      });
    } else {
      console.log('Location permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

export type {GeoPosition as GeoPositionType};
export default getGPSPosition;
