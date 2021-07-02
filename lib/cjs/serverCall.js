"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const JSONbigNative = require('json-bigint')({ useNativeBigInt: true });
const config_1 = require("./config");
axios_1.default.defaults.transformResponse = [(data) => {
        if (typeof data === 'string') {
            try {
                data = JSONbigNative.parse(data);
            }
            catch (e) { /* Ignore */ }
        }
        return data;
    }];
const serverCall = (config) => {
    config.headers = {
        "user-agent": "MeliPayamak-Node Library - 1.0.5",
        "cache-control": "no-cache",
        "content-type": "application/json"
    };
    config.baseURL = config_1.default.BASE_URL;
    config.timeout = 30 * 1000; // Let's say you want to wait at least 30 seconds
    return axios_1.default(config);
};
exports.default = serverCall;
