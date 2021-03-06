import axios from "axios";
const JSONbigNative = require('json-bigint')({ useNativeBigInt: true });
import MELIPAYAMAK from './config';
axios.defaults.transformResponse = [(data) => {
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
        "user-agent": "MeliPayamak-Node Library - 1.0.9",
        "cache-control": "no-cache",
        "content-type": "application/json"
    };
    config.baseURL = MELIPAYAMAK.BASE_URL;
    config.timeout = 30 * 1000; // Let's say you want to wait at least 30 seconds
    return axios(config);
};
export default serverCall;
