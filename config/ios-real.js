const {configBuild} = require("@testing/wdio-config");
const {config} = require("./base.conf");
const {join} = require("path");

exports.device = {
    platformName: 'iOS',
    'appium:deviceName': '.*',
    'appium:orientation': 'PORTRAIT',
    'appium:platformVersion': '13',
    'appium:automationName': 'XCUITest',
    'appium:app': join(__dirname, "../bin/WebViewLoader.app.zip"),
    'appium:autoWebview': true,
    //You need to generate an application in https://app.testobject.com/ for remote testing
    testobject_api_key : process.env.TEST_OBJECT_API_KEY_IOS,
    maxInstances: 1,
    //With Shadow DOM appium must be >= 1.16 in iOS
    'sauce:options': { "appiumVersion": "1.16.0" }
};

exports.config = configBuild(config, {
    capabilities: [exports.device],
}, process.env.GRID_USER ? {} : {
    port: 4723,
    services: ['appium']
});
