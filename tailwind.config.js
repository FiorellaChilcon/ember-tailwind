const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const isProduction = EmberApp.env() === 'production';

module.exports = {
  purge: {
    enabled: isProduction,
    content: [
      './app/index.html',
      './app/pods/**/*.hbs'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
