import {saveWeatherData} from '../weather';
import store from '../../../index';
import apiReturn from '../mocks/apiReturn.json';
import updatedStateMock from '../mocks/updatedState.json';
import initialStateStoreMock from '../mocks/initialStateStore';

it('updates redux with api data', async () => {
  const initialStateStore = store.getState().store.weather;
  expect(initialStateStore).toStrictEqual(initialStateStoreMock);
  store.dispatch(saveWeatherData(apiReturn));
  const updatedStore = store.getState().store.weather;
  // due to it`s time bound nature
  // lastUpdated should be different
  expect({...updatedStore, lastUpdated: ''}).toStrictEqual(updatedStateMock);
  expect(updatedStore.lastUpdated).not.toBe(updatedStateMock.lastUpdated);
});
