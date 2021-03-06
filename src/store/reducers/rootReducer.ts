import {combineReducers} from 'redux';

import weatherReducer from './weather';
import userDataReducer from './userData';

const store = combineReducers({
  weather: weatherReducer,
  userData: userDataReducer,
});

export default store;
