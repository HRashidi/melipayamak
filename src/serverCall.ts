import axios from "axios";
import { AxiosRequestConfig, AxiosPromise } from 'axios';
import MELIPAYAMAK from './config';

const serverCall = (config: AxiosRequestConfig) : AxiosPromise => {
	config.headers = {
		"user-agent"    : "MeliPayamak-Node Library - 1.0.1",
		"cache-control" : "no-cache",
		"content-type"  : "application/json"
	};

	config.baseURL = MELIPAYAMAK.BASE_URL;
	config.timeout = 30 * 1000; // Let's say you want to wait at least 30 seconds
	return axios(config);
};

export default serverCall;