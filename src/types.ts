export * from './MeliPayamak';
// global
export type IConfig = {
	BASE_URL: string,
	SEND: {
		SIMPLE     : string,
		ADVANCE    : string,
		SHARED     : string,
		WITHDOMAIN : string,
	},
	RECIEVE:  {
		STATUS   : string,
		MESSAGES : string,
		COUNT    : string,
		CREDIT   : string,
		PRICE    : string,
	}
}

export interface IMeliPayamak {
	sendSimple (input: ISimple)        : Promise<OSimple>;
	sendAdvance(input: IAdvance)       : Promise<OAdvance>;
	sendShared(input: IShared)         : Promise<OShared>;
	sendWithDomain(input: IWithDomain) : Promise<OWithDomain>;
	checkStatus(input: IStatus)        : Promise<OStatus>;
	receiveMessages(input: IMessages)  : Promise<OMessages>;
	countMessages(input: ICount)       : Promise<OCount>;
	getCredit()                        : Promise<OCredit>;
	getPrice(input: IPrice)            : Promise<OPrice>;
}

// Constructor
export interface IConstructor {
	token: string
	new (token: string): IMeliPayamak;
}

// send
export type ISimple = {
	from : string, 
	to   : string, 
	text : string
}

export type OSimple = {
	recId  : string,
	status : string
}

export type IAdvance = {
	from : string, 
	to   : string[], 
	text : string,
	udh  : string
}

export type OAdvance = {
	recIds : string[],
	status : string
}

export type IShared = {
	to     : string,
	bodyId : number,
	args   : string[]
}

export type OShared = {
	recId  : string,
	status : string
}

export type IWithDomain = {
	from   : string, 
	to     : string, 
	text   : string,
	domain : string
}

export type OWithDomain = {
	recId  : string,
	status : string
}

// Recieve
export type IStatus = {
	recIds : string[]
}

export type OStatus = {
	results       : string[],
	resultsAsCode : number[],
	status        : string
}

export type IMessages = {
	type   : string,
	number : string,
	index  : number,
	count  : number
}

export type OMessages = {
	messages : object[],
	status   : string,
}

export type ICount = {
	isRead : boolean
}

export type OCount = {
	count  : number,
	status : string,
}

export type OCredit = {
	amount  : number,
	status : string,
}

export type IPrice = {
	mtnCount      : number,
	irancellCount : number,
	from          : string,
	text          : string,
}

export type OPrice = {
	price  : number,
	status : string,
}