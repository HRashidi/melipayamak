export declare type IConfig = {
    BASE_URL: string;
    SEND: {
        SIMPLE: string;
        ADVANCE: string;
        SHARED: string;
        WITHDOMAIN: string;
    };
    RECIEVE: {
        STATUS: string;
        MESSAGES: string;
        COUNT: string;
        CREDIT: string;
        PRICE: string;
    };
};
export declare type ISimple = {
    from: string;
    to: string;
    text: string;
};
export declare type OSimple = {
    recId: number;
    status: string;
};
export declare type IAdvance = {
    from: string;
    to: string[];
    text: string;
    udh: string;
};
export declare type OAdvance = {
    recIds: number[];
    status: string;
};
export declare type IShared = {
    to: string;
    bodyId: number;
    args: string[];
};
export declare type OShared = {
    recId: number;
    status: string;
};
export declare type IWithDomain = {
    from: string;
    to: string;
    text: string;
    domain: string;
};
export declare type OWithDomain = {
    recId: number;
    status: string;
};
export declare type IStatus = {
    recIds: number[];
};
export declare type OStatus = {
    results: string[];
    resultsAsCode: number[];
    status: string;
};
export declare type IMessages = {
    type: string;
    number: string;
    index: number;
    count: number;
};
export declare type OMessages = {
    messages: object[];
    status: string;
};
export declare type ICount = {
    isRead: boolean;
};
export declare type OCount = {
    count: number;
    status: string;
};
export declare type OCredit = {
    amount: number;
    status: string;
};
export declare type IPrice = {
    mtnCount: number;
    irancellCount: number;
    from: string;
    text: string;
};
export declare type OPrice = {
    price: number;
    status: string;
};
