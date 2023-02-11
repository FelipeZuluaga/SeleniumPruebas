const {configBuild} = require("@testing/wdio-config");
const {config} = require("./base.conf");
const {join} = require("path");

exports.device = {
    platformName: "Android",
    maxInstances: 1,
    //You need to generate an application in https://app.testobject.com/ for remote testing
    testobject_api_key : process.env.TEST_OBJECT_API_KEY_ANDROID,
    'appium:platformVersion': "9",
    'appium:app': join(__dirname, "../bin/AndroidWebView.apk"),
    'appium:deviceName': ".*",
    'appium:chromedriverExecutableDir': process.env.CHROME_DRIVER_DIR,
    'appium:autoWebview': true,
    'sauce:options': { "appiumVersion": "1.16.0" }
};

exports.config = configBuild(config, {
    capabilities: [exports.device],
}, process.env.GRID_USER ? {} : {
    port: 4723,
    services: ['appium']
});
