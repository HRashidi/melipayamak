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

// send
export type ISimple = {
	from : string, 
	to   : string, 
	text : string
}

export type OSimple = {
	recId  : number,
	status : string
}

export type IAdvance = {
	from : string, 
	to   : string[], 
	text : string,
	udh  : string
}

export type OAdvance = {
	recIds : number[],
	status : string
}

export type IShared = {
	to     : string,
	bodyId : number,
	args   : string[]
}

export type OShared = {
	recId  : number,
	status : string
}

export type IWithDomain = {
	from   : string, 
	to     : string, 
	text   : string,
	domain : string
}

export type OWithDomain = {
	recId  : number,
	status : string
}

// Recieve
export type IStatus = {
	recIds : number[]
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