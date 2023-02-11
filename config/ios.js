const {configBuild} = require("@testing/wdio-config");
const {config} = require("./base.conf");
const {join} = require("path");

const device = {
    platformName: "iOS",
    platformVersion: "13.2",
    'appium:deviceName': "iPhone XS Simulator",
    'appium:appiumVersion': "1.16.0",
    'appium:orientation': 'PORTRAIT',
};

exports.web = {
    ...device,
    browserName: "safari",
}

exports.device = {
    ...device,
    'appium:app': join(__dirname, "../bin/WebViewLoader.app.zip"),
    'appium:autoWebview': true,
};

exports.config = configBuild(config, {
    capabilities: [exports.device, exports.web],
}, process.env.GRID_USER ? {} : {
    port: 4723,
    services: ['appium']
});
