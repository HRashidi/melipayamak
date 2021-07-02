export * from './MeliPayamak';
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
export interface IMeliPayamak {
    sendSimple(input: ISimple): Promise<OSimple>;
    sendAdvance(input: IAdvance): Promise<OAdvance>;
    sendShared(input: IShared): Promise<OShared>;
    sendWithDomain(input: IWithDomain): Promise<OWithDomain>;
    checkStatus(input: IStatus): Promise<OStatus>;
    receiveMessages(input: IMessages): Promise<OMessages>;
    countMessages(input: ICount): Promise<OCount>;
    getCredit(): Promise<OCredit>;
    getPrice(input: IPrice): Promise<OPrice>;
}
export interface IConstructor {
    token: string;
    new (token: string): IMeliPayamak;
}
export declare type ISimple = {
    from: string;
    to: string;
    text: string;
};
export declare type OSimple = {
    recId: string;
    status: string;
};
export declare type IAdvance = {
    from: string;
    to: string[];
    text: string;
    udh: string;
};
export declare type OAdvance = {
    recIds: string[];
    status: string;
};
export declare type IShared = {
    to: string;
    bodyId: number;
    args: string[];
};
export declare type OShared = {
    recId: string;
    status: string;
};
export declare type IWithDomain = {
    from: string;
    to: string;
    text: string;
    domain: string;
};
export declare type OWithDomain = {
    recId: string;
    status: string;
};
export declare type IStatus = {
    recIds: string[];
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
