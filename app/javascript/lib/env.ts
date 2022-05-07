const isProduction = () => {
  return process.env.NODE_ENV === 'production';
};

const isDevelopment = () => {
  return !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
};

export { isDevelopment, isProduction }