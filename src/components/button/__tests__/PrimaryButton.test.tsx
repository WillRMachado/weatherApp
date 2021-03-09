import React from 'react';
import {TouchableOpacity} from 'react-native';
import {act} from 'react-test-renderer';
import screenRender from '../../../../jestHelpers/screenRender';
import screenSnapshotCreator from '../../../../jestHelpers/screenSnapshotCreator';
import PrimaryButton from '../PrimaryButton';

describe('PrimaryButton Component', () => {
  const onPressCallback = jest.fn(() => {});
  const PrimaryButtonWithProps = () => (
    <PrimaryButton text={'weather.unableToFind'} onPress={onPressCallback} />
  );

  it('renders correctly', async () => {
    const component = await screenRender(PrimaryButtonWithProps);
    expect(component).toBeTruthy();
  });

  it('matches snapshot', async () => {
    const component = await screenSnapshotCreator(PrimaryButtonWithProps);
    expect(component).toMatchSnapshot();
  });

  it('clicks', async () => {
    const component = await screenRender(PrimaryButtonWithProps);
    const button = component.root.findAllByType(TouchableOpacity)[0];
    act(() => {
      button.props.onPress();
    });
    expect(onPressCallback.mock.calls.length).toBe(1);
  });
});
