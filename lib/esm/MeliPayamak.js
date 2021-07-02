var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import serverCall from "./serverCall";
import MELIPAYAMAK from "./config";
class MeliPayamak {
    constructor(token) {
        // send methods
        this.sendSimple = (input) => __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                let url = `${MELIPAYAMAK.SEND.SIMPLE}/${this.SMS_TOKEN}`;
                const response = yield serverCall({ method: 'POST', url, data: input });
                const { data } = response;
                resolve(data);
            }));
        });
        this.sendAdvance = (input) => __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                let url = `${MELIPAYAMAK.SEND.ADVANCE}/${this.SMS_TOKEN}`;
                const response = yield serverCall({ method: 'POST', url, data: input });
                const { data } = response;
                resolve(data);
            }));
        });
        this.sendShared = (input) => __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                let url = `${MELIPAYAMAK.SEND.SHARED}/${this.SMS_TOKEN}`;
                const response = yield serverCall({ method: 'POST', url, data: input });
                const { data } = response;
                resolve(data);
            }));
        });
        this.sendWithDomain = (input) => __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                let url = `${MELIPAYAMAK.SEND.WITHDOMAIN}/${this.SMS_TOKEN}`;
                const response = yield serverCall({ method: 'POST', url, data: input });
                const { data } = response;
                resolve(data);
            }));
        });
        // recieve methods
        this.checkStatus = (input) => __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                let url = `${MELIPAYAMAK.RECIEVE.STATUS}/${this.SMS_TOKEN}`;
                const response = yield serverCall({ method: 'POST', url, data: input });
                const { data } = response;
                resolve(data);
            }));
        });
        this.receiveMessages = (input) => __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                let url = `${MELIPAYAMAK.RECIEVE.MESSAGES}/${this.SMS_TOKEN}`;
                const response = yield serverCall({ method: 'POST', url, data: input });
                const { data } = response;
                resolve(data);
            }));
        });
        this.countMessages = (input) => __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                let url = `${MELIPAYAMAK.RECIEVE.COUNT}/${this.SMS_TOKEN}`;
                const response = yield serverCall({ method: 'POST', url, data: input });
                const { data } = response;
                resolve(data);
            }));
        });
        this.getCredit = () => __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                let url = `${MELIPAYAMAK.RECIEVE.CREDIT}/${this.SMS_TOKEN}`;
                const response = yield serverCall({ method: 'GET', url });
                const { data } = response;
                resolve(data);
            }));
        });
        this.getPrice = (input) => __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                let url = `${MELIPAYAMAK.RECIEVE.COUNT}/${this.SMS_TOKEN}`;
                const response = yield serverCall({ method: 'POST', url, data: input });
                const { data } = response;
                resolve(data);
            }));
        });
        this.SMS_TOKEN = token;
    }
}
export default MeliPayamak;
