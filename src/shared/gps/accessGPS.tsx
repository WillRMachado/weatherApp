import {PermissionsAndroid, Platform} from 'react-native';
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

const _getGeoLocation = (
  successCallback: SuccessCallback = successGetGPS,
  errorCallback?: ErrorCallback,
) => {
  Geolocation.getCurrentPosition(
    successCallback,
    (error) => {
      console.log('err', error.code, error.message);
    },

    // errorCallback()
    {timeout: 50000},
  );
};

const _getPermission = async () => {
  if (Platform.OS === 'ios') {
    const permission = await Geolocation.requestAuthorization('whenInUse');
    return permission === 'granted' ? true : false;
  } else {
    const permission = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    return permission === PermissionsAndroid.RESULTS.GRANTED ? true : false;
  }
};

const getGPSPosition = async (
  successCallback: SuccessCallback = successGetGPS,
  errorCallback?: ErrorCallback,
  permissionDeniedCallback?: ErrorCallback,
) => {
  try {
    const granted = await _getPermission();
    if (granted) {
      _getGeoLocation(successCallback, errorCallback);
    } else {
      // permissionDeniedCallback()
    }
  } catch (err) {
    // errorCallback()
  }
};

export type {GeoPosition as GeoPositionType};
export default getGPSPosition;
