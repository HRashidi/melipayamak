import axios from "axios";
import MELIPAYAMAK from './config';
const serverCall = (config) => {
    config.headers = {
        "user-agent": "MeliPayamak-Node Library - 1.0.0",
        "cache-control": "no-cache",
        "content-type": "application/json"
    };
    config.baseURL = MELIPAYAMAK.BASE_URL;
    config.timeout = 30 * 1000; // Let's say you want to wait at least 30 seconds
    return axios(config);
};
export default serverCall;