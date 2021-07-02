"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MELIPAYAMAK = {
    BASE_URL: 'https://console.melipayamak.com/api',
    SEND: {
        SIMPLE: 'send/simple',
        ADVANCE: 'send/advanced',
        SHARED: 'send/shared',
        WITHDOMAIN: 'send/withdomain',
    },
    RECIEVE: {
        STATUS: 'receive/status',
        MESSAGES: 'receive/messages',
        COUNT: 'receive/inboxcount',
        CREDIT: 'receive/credit',
        PRICE: 'receive/price',
    }
};
exports.default = MELIPAYAMAK;
