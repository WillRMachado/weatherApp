import NetInfo from '@react-native-community/netinfo';
import {AxiosInstance} from 'axios';

const checkInternetConnection: Function = (client: AxiosInstance) => {
  console.log('intercepted');
  client.interceptors.request.use(async (config) => {
    const isUserConnected = await NetInfo.fetch().then((state) => {
      return state.isConnected;
    });
    if (!isUserConnected) {
      console.log('user off');
    }

    return config;
  });
};

export default checkInternetConnection;
