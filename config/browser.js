const {configBuild} = require("@testing/wdio-config");
const {config} = require("./base.conf");

const chrome = exports.chrome = {browserName: 'chrome'};
const firefox = exports.firefox = {browserName: 'firefox'};
const edge = exports.edge = {browserName: 'MicrosoftEdge'};
const safari = exports.safari = {browserName: 'safari', browserVersion: "13.0"};

const all = exports.all = [chrome];

exports.config = configBuild(config, {
    capabilities: all
});
