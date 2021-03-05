import RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import enUS from './enUS';
// import ptBR from './ptBR';

const setLocale = () => {
  i18n.translations = {
    // ['pt-BR']: ptBR,
    ['en-US']: enUS,
  };

  i18n.defaultLocale = 'en-US';
  i18n.fallbacks = true;
  i18n.locale =
    RNLocalize.findBestAvailableLanguage(Object.keys(i18n.translations))
      ?.languageTag || 'en-US';
};
setLocale();

const translate = (key: string, params?: any) => {
  return i18n.t(key, params);
};

const changeLocale = (params: string) => {
  i18n.locale = params;
};

const getLocale = () => {
  return i18n.locale;
};

export {setLocale, changeLocale, translate, getLocale};
