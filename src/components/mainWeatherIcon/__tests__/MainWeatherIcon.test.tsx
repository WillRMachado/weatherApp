import React from 'react';
import screenRender from '../../../../jestHelpers/screenRender';
import screenSnapshotCreator from '../../../../jestHelpers/screenSnapshotCreator';
import MainWeatherIcon from '../MainWeatherIcon';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import weatherToIconRelationLightTheme from '../mock/weatherToIconRelationLightTheme.json';
import weatherToIconRelationDarkTheme from '../mock/weatherToIconRelationDarkTheme.json';
import * as reactRedux from 'react-redux';

describe('MainWeatherIcon Component', () => {
  const mockWeather = 'Clear';
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');

  const MainWeatherIconWithProps = () => <MainWeatherIcon main={mockWeather} />;

  beforeEach(() => {
    useSelectorMock.mockClear();
  });

  it('renders correctly', async () => {
    const component = await screenRender(MainWeatherIconWithProps);
    expect(component).toBeTruthy();
  });

  it('matches snapshot', async () => {
    const component = await screenSnapshotCreator(MainWeatherIconWithProps);
    expect(component).toMatchSnapshot();
  });

  it('gets weather icon properly on light theme', async () => {
    for (
      let index = 0;
      index < weatherToIconRelationLightTheme.length;
      index++
    ) {
      const element = weatherToIconRelationLightTheme[index];

      const MainWeatherIconWithCurrentIcon = () => (
        <MainWeatherIcon main={element.weatherName} />
      );
      const component = await screenRender(MainWeatherIconWithCurrentIcon);

      let renderedIcon;
      if (element.iconsFamily === 'Feather') {
        renderedIcon = component.root.findAllByType(Feather)[0];
      } else if (element.iconsFamily === 'MaterialCommunityIcons') {
        renderedIcon = component.root.findAllByType(MaterialCommunityIcons)[0];
      } else {
        throw new Error('unidentified icon family');
      }

      const renderedIconName = renderedIcon.props.name;

      expect(renderedIconName).toEqual(element.iconName);
    }
  });

  it('gets weather icon properly on dark theme', async () => {
    useSelectorMock.mockReturnValue(true);

    for (
      let index = 0;
      index < weatherToIconRelationDarkTheme.length;
      index++
    ) {
      const element = weatherToIconRelationDarkTheme[index];

      const MainWeatherIconWithCurrentIcon = () => (
        <MainWeatherIcon main={element.weatherName} />
      );
      const component = await screenRender(MainWeatherIconWithCurrentIcon);

      let renderedIcon;
      if (element.iconsFamily === 'Feather') {
        renderedIcon = component.root.findAllByType(Feather)[0];
      } else if (element.iconsFamily === 'MaterialCommunityIcons') {
        renderedIcon = component.root.findAllByType(MaterialCommunityIcons)[0];
      } else {
        throw new Error('unidentified icon family');
      }

      const renderedIconName = renderedIcon.props.name;

      expect(renderedIconName).toEqual(element.iconName);
    }
  });
});
