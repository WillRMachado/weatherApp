import {combineReducers} from 'redux';

import weatherReducer from './weather';

const store = combineReducers({
  weather: weatherReducer,
});

export default store;
