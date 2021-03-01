import {Theme} from '@react-navigation/native';

export type themeColorsTypes = {
  primary: string; //obligatory
  background: string; //obligatory
  card: string; //obligatory
  text: string; //obligatory
  border: string; //obligatory
  notification: string; //obligatory

  secondary: string;
  tertiary: string;
  semitransparentBackground: string;
};

export type themesType = Theme & {
  colors: themeColorsTypes;
};
