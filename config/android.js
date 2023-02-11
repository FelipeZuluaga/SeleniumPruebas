const {configBuild} = require("@testing/wdio-config");
const {config} = require("./base.conf");
const {join} = require("path");

const device = {
    platformName: "Android",
    platformVersion: "10.0",
    'appium:deviceName': "Google Pixel 3 GoogleAPI Emulator",
    'appium:automationName': "UiAutomator2",
    'appium:chromedriverExecutableDir': process.env.CHROME_DRIVER_DIR,
    'sauce:options': { "appiumVersion": "1.16.0" }
}

exports.web = {
    ...device,
    browserName: "chrome",
};

exports.device = {
    ...device,
    'appium:app': join( __dirname, "../bin/AndroidWebView.apk"),
    autoWebview: true,
};

exports.config = configBuild(config, {
    capabilities: [exports.device, exports.web],
}, process.env.GRID_USER ? {} : {
    port: 4723,
    services: ['appium']
});
