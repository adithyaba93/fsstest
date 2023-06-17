const path = require("path");
var config = require(path.resolve(__dirname, "./appConfig.js"));
const node_env = process.env.NODE_ENV;
let env = 0;

if (node_env == "local") {
    env = config.local;
} else if (node_env == "dev") {
    env = config.dev;
} else if (node_env == "uat") {
    env = config.uat;
} else if (node_env == "prod") {
    env = config.prod;
} else {
    env = config.local;
}

module.exports = env;