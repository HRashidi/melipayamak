"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const config_1 = require("./config");
const serverCall = (config) => {
    config.headers = {
        "user-agent": "MeliPayamak-Node Library - 1.0.3",
        "cache-control": "no-cache",
        "content-type": "application/json"
    };
    config.baseURL = config_1.default.BASE_URL;
    config.timeout = 30 * 1000; // Let's say you want to wait at least 30 seconds
    return axios_1.default(config);
};
exports.default = serverCall;
