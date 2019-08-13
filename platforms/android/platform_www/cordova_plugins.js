cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-geolocation-ios-fixed.geolocation",
      "file": "plugins/cordova-plugin-geolocation-ios-fixed/www/android/geolocation.js",
      "pluginId": "cordova-plugin-geolocation-ios-fixed",
      "clobbers": [
        "navigator.geolocation"
      ]
    },
    {
      "id": "cordova-plugin-geolocation-ios-fixed.PositionError",
      "file": "plugins/cordova-plugin-geolocation-ios-fixed/www/PositionError.js",
      "pluginId": "cordova-plugin-geolocation-ios-fixed",
      "runs": true
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-geolocation-ios-fixed": "1.0.0"
  };
});