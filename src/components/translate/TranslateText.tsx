import React from 'react';
import {Text} from 'react-native';
import {useSelector} from 'react-redux';
import {translate} from '../../shared/locale';

const TranslateText = (props: any & {string: string}) => {
  const {string} = props;

  const language = useSelector(
    (state: any) => state.store.userOptions.language,
  );

  return <Text {...props}>{translate(string, {locale: language})}</Text>;
};

export default TranslateText;
