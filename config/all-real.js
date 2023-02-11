const {configBuild} = require("@testing/wdio-config");
const {config} = require("./base.conf");

const android = require("./android-real");
const ios = require("./ios-real");

exports.config = configBuild(config, {
    capabilities: [
        android.device,
        ios.device,
    ],
}, process.env.GRID_USER ? {} : {
    port: 4723,
    services: ['appium']
});
