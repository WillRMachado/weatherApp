import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {useSelector} from 'react-redux';
import {getLocale} from '../../shared/locale';
import moment from 'moment';
import 'moment/min/locales.min';

const TranslateText = (props: any) => {
  const {ms} = props;

  const [locale, setLocale] = useState('en-US');

  const language = useSelector(
    (state: any) => state.store.userOptions.language,
  );

  useEffect(() => {
    setLocale(getLocale());
    moment.locale(getLocale());
  }, [language]);

  const day = new Date(0);
  day.setUTCSeconds(ms);

  // var options = {
  //   weekday: 'long',
  //   year: 'numeric',
  //   month: 'long',
  //   day: 'numeric',
  // };

  const a = moment.unix(ms);
  const b = a.format('dddd');
  console.log(a, b);

  return <Text {...props}>{b}</Text>;
};

export default TranslateText;
