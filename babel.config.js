module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      // 'expo-router/babel' // do not need

      // reason
     // iOS Bundling failed 9ms node_modules/expo-router/entry.js (1 module)
    // error: node_modules/expo-router/entry.js: [BABEL]: expo-router/babel is deprecated in favor of babel-preset-expo in SDK 50. To fix the issue, remove "expo-router/babel" from "plugins" in your babel.config.js file. 


    ],
  };
};

 