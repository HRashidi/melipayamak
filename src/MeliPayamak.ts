import serverCall from "./serverCall";
import MELIPAYAMAK from "./config";
import * as TYPES from './types';


class MeliPayamak {
	private SMS_TOKEN : string;

	constructor(token: string) {
		this.SMS_TOKEN = token;
	}

	// send methods
	sendSimple = async (input: TYPES.ISimple): Promise<TYPES.OSimple> => {
		return new Promise<TYPES.OSimple>(async resolve => {
			let url: string = `${MELIPAYAMAK.SEND.SIMPLE}/${this.SMS_TOKEN}`;
			const response = await serverCall({method: 'POST', url , data: input});
			const { data } = response;
			resolve(data);
		});
	}

	sendAdvance = async (input: TYPES.IAdvance): Promise<TYPES.OAdvance> => {
		return new Promise<TYPES.OAdvance>(async resolve => {
			let url: string = `${MELIPAYAMAK.SEND.ADVANCE}/${this.SMS_TOKEN}`;
			const response = await serverCall({method: 'POST', url , data: input});
			const { data } = response;
			resolve(data);
		});
	}

	sendShared = async (input: TYPES.IShared): Promise<TYPES.OShared> => {
		return new Promise<TYPES.OShared>(async resolve => {
			let url: string = `${MELIPAYAMAK.SEND.SHARED}/${this.SMS_TOKEN}`;
			const response = await serverCall({method: 'POST', url , data: input});
			const { data } = response;
			resolve(data);
		});
	}

	sendWithDomain = async (input: TYPES.IWithDomain): Promise<TYPES.OWithDomain> => {
		return new Promise<TYPES.OWithDomain>(async resolve => {
			let url: string = `${MELIPAYAMAK.SEND.WITHDOMAIN}/${this.SMS_TOKEN}`;
			const response = await serverCall({method: 'POST', url , data: input});
			const { data } = response;
			resolve(data);
		});
	}

	// recieve methods
	checkStatus = async (input: TYPES.IStatus): Promise<TYPES.OStatus> => {
		return new Promise<TYPES.OStatus>(async resolve => {
			let url: string = `${MELIPAYAMAK.RECIEVE.STATUS}/${this.SMS_TOKEN}`;
			const response = await serverCall({method: 'POST', url , data: input});
			const { data } = response;
			resolve(data);
		});
	}

	receiveMessages = async (input: TYPES.IMessages): Promise<TYPES.OMessages> => {
		return new Promise<TYPES.OMessages>(async resolve => {
			let url: string = `${MELIPAYAMAK.RECIEVE.MESSAGES}/${this.SMS_TOKEN}`;
			const response = await serverCall({method: 'POST', url , data: input});
			const { data } = response;
			resolve(data);
		});
	}

	countMessages = async (input: TYPES.ICount): Promise<TYPES.OCount> => {
		return new Promise<TYPES.OCount>(async resolve => {
			let url: string = `${MELIPAYAMAK.RECIEVE.COUNT}/${this.SMS_TOKEN}`;
			const response = await serverCall({method: 'POST', url , data: input});
			const { data } = response;
			resolve(data);
		});
	}

	getCredit = async (): Promise<TYPES.OCredit> => {
		return new Promise<TYPES.OCredit>(async resolve => {
			let url: string = `${MELIPAYAMAK.RECIEVE.CREDIT}/${this.SMS_TOKEN}`;
			const response = await serverCall({method: 'GET', url});
			const { data } = response;
			resolve(data);
		});
	}

	getPrice = async (input: TYPES.IPrice): Promise<TYPES.OPrice> => {
		return new Promise<TYPES.OPrice>(async resolve => {
			let url: string = `${MELIPAYAMAK.RECIEVE.COUNT}/${this.SMS_TOKEN}`;
			const response = await serverCall({method: 'POST', url , data: input});
			const { data } = response;
			resolve(data);
		});
	}
}

export default MeliPayamak;