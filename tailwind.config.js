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
    extend: {
      colors: {
      primary: '#272640',
      secondary: '#212F45',
      tertiary: '#144552'  
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
