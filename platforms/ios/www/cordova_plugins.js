cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-geolocation-ios-fixed.Coordinates",
      "file": "plugins/cordova-plugin-geolocation-ios-fixed/www/Coordinates.js",
      "pluginId": "cordova-plugin-geolocation-ios-fixed",
      "clobbers": [
        "Coordinates"
      ]
    },
    {
      "id": "cordova-plugin-geolocation-ios-fixed.PositionError",
      "file": "plugins/cordova-plugin-geolocation-ios-fixed/www/PositionError.js",
      "pluginId": "cordova-plugin-geolocation-ios-fixed",
      "clobbers": [
        "PositionError"
      ]
    },
    {
      "id": "cordova-plugin-geolocation-ios-fixed.Position",
      "file": "plugins/cordova-plugin-geolocation-ios-fixed/www/Position.js",
      "pluginId": "cordova-plugin-geolocation-ios-fixed",
      "clobbers": [
        "Position"
      ]
    },
    {
      "id": "cordova-plugin-geolocation-ios-fixed.geolocation",
      "file": "plugins/cordova-plugin-geolocation-ios-fixed/www/geolocation.js",
      "pluginId": "cordova-plugin-geolocation-ios-fixed",
      "clobbers": [
        "navigator.geolocation"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-geolocation-ios-fixed": "1.0.0"
  };
});