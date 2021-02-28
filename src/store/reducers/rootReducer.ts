import {combineReducers} from 'redux';

import weatherReducer from './weather';
import userOptionsReducer from './userOptions';

const store = combineReducers({
  weather: weatherReducer,
  userOptions: userOptionsReducer,
});

export default store;
