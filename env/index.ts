const env = () => {
  try {
    if (__DEV__) {
      return require('./env.dev.json');
    } else {
      return require('./env.prod.json');
    }
  } catch (err) {
    console.error(err);
  }
};

export default env();
