import {saveWeatherData} from '..';
import store from '../../../index';
import apiReturn from '../mocks/apiReturn.json';
import {weatherUpdatedStore} from '../mocks/updatedState';
import initialStateStoreMock from '../mocks/initialStateStore';

it('redux initial state', async () => {
  const initialStateStore = store.getState().store.weather;
  expect(initialStateStore).toStrictEqual(initialStateStoreMock);
});

it('updates redux with api data', async () => {
  store.dispatch(saveWeatherData(apiReturn));
  const updatedStore = store.getState().store.weather;
  // due to it`s time bound nature
  // lastUpdated should be different
  expect({...updatedStore, lastUpdated: ''}).toStrictEqual(weatherUpdatedStore);
  expect(updatedStore.lastUpdated).not.toBe(weatherUpdatedStore.lastUpdated);
});
