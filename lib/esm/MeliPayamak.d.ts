import * as TYPES from './types';
export declare class MeliPayamak implements TYPES.IMeliPayamak {
    token: string;
    private SMS_TOKEN;
    constructor(token: string);
    sendSimple: (input: TYPES.ISimple) => Promise<TYPES.OSimple>;
    sendAdvance: (input: TYPES.IAdvance) => Promise<TYPES.OAdvance>;
    sendShared: (input: TYPES.IShared) => Promise<TYPES.OShared>;
    sendWithDomain: (input: TYPES.IWithDomain) => Promise<TYPES.OWithDomain>;
    checkStatus: (input: TYPES.IStatus) => Promise<TYPES.OStatus>;
    receiveMessages: (input: TYPES.IMessages) => Promise<TYPES.OMessages>;
    countMessages: (input: TYPES.ICount) => Promise<TYPES.OCount>;
    getCredit: () => Promise<TYPES.OCredit>;
    getPrice: (input: TYPES.IPrice) => Promise<TYPES.OPrice>;
}
