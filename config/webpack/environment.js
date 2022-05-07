const { environment } = require('@rails/webpacker')

const fileLoader = environment.loaders.get('file')
fileLoader.exclude = /node_modules[\\/]quill/

environment.loaders.prepend('svg', {
  test: /\.svg$/,
  use: ['@svgr/webpack'],
});

environment.loaders.prepend('graphql', {
  test: /\.graphql$/,
  use: ['graphql-tag/loader'],
});

environment.optimization = {
  runtimeChunk: 'single',
};

environment.resolve = {
  alias: {
    'components': 'frontend/components',
    'lib': 'frontend/lib',
    'hooks': 'frontend/hooks',
    'images': 'app/assets/images',
    'icons': 'app/assets/icons',
  },
};

module.exports = environment