import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {useSelector} from 'react-redux';
import {getLocale} from '../../shared/locale';
import moment from 'moment';
import 'moment/min/locales.min';

const TranslateText = (props: {[ms: string]: number} & any) => {
  const {ms} = props;

  const language = useSelector(
    (state: any) => state.store.userOptions.language,
  );

  useEffect(() => {
    moment.locale(getLocale());
  }, [language]);

  const formattedWeekDay = moment.unix(ms).format('dddd');

  return <Text {...props}>{formattedWeekDay}</Text>;
};

export default TranslateText;
