import {PermissionsAndroid, Platform} from 'react-native';
import Geolocation, {
  SuccessCallback,
  ErrorCallback,
  GeoPosition,
} from 'react-native-geolocation-service';
import {asyncFeedLocation} from '../../store/reducers/weather/index';
import redux from '../../store/index';
import {showModal} from '../../store/reducers/userData';

const successGetGPS = (position: GeoPosition) => {
  redux.dispatch(
    asyncFeedLocation(position.coords.latitude, position.coords.longitude),
  );
};

const _getGeoLocation = (
  successCallback: SuccessCallback = successGetGPS,
  errorCallback: ErrorCallback,
) => {
  Geolocation.getCurrentPosition(successCallback, errorCallback, {
    timeout: 50000,
  });
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

const showErrorModal = () => {
  redux.dispatch(
    showModal({
      title: 'modal.gpsPermission.title',
      description: 'modal.gpsPermission.description',
      buttonText: 'modal.gpsPermission.buttonText',
    }),
  );
};

const getGPSPosition = async (
  successCallback: SuccessCallback = successGetGPS,
  errorCallback: ErrorCallback = showErrorModal,
  permissionDeniedCallback: ErrorCallback = showErrorModal,
) => {
  try {
    const granted = await _getPermission();
    if (granted) {
      _getGeoLocation(successCallback, errorCallback);
    } else {
      permissionDeniedCallback({code: 0, message: 'permission: ' + granted});
    }
  } catch (err) {
    errorCallback({code: 0, message: err});
  }
};

export type {GeoPosition as GeoPositionType};
export default getGPSPosition;
