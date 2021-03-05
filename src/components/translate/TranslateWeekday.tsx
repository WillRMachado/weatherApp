import React from 'react';
import TranslateText from './TranslateText';

const TranslateWeekday = (props: {[UTCSeconds: string]: number} & any) => {
  const {UTCSeconds} = props;
  const day = new Date(0);

  day.setUTCSeconds(UTCSeconds);
  const weekDayNumber = day.getDay();

  return <TranslateText string={`time.weekday${weekDayNumber}`} {...props} />;
};

export default TranslateWeekday;
