<h1 align="center">
    <a href="https://github.com/hrashidi/melipayamak"><img width="465" height="170" src="https://raw.github.com/hrashidi/melipayamak/master/mp-logo.png" alt="AccessControl.js" /></a>
</h1>
[![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/hrashidi/melipayamak)](https://github.com/hrashidi/melipayamak/releases/latest)
[![GitHub](https://img.shields.io/github/license/hrashidi/melipayamak)](LICENSE)
[![GitHub contributors](https://img.shields.io/github/contributors/hrashidi/melipayamak)](https://github.com/hrashidi/melipayamak/graphs/contributors)

# melipayamak

This is a lib to handle payment from bahamta


## Installing

Using npm:
(Does not puplished yet)
```bash
$ npm install node-melipayamak
```

Using yarn:
(Does not puplished yet)
```bash
$ yarn add node-melipayamak
```

Building the package:
(Does not puplished yet)
```bash
$ npm run tsc
```

## Example
```js
const MeliPayamak = require('node-melipayamak');
const sms = new MeliPayamak(process.env.SMS_TOKEN);
```


Sending simple sms
```js
let from = '5000****';
let to   = '0912*******';
let text = 'a test message';

sms.sendSimple({from, to, text}).then(res => {
  let { recId, status } = res;
  console.log(recId, status);
}).catch(error => {
  console.log(error);
});
```
output example:
```json
{
  "recId": 3741437414,
  "status": "error message if occurred"
}
```


Sending advance sms
```js
let from = '5000****';
let to   = ['0912*******', '0917******', ...];
let text = 'a test message';
let udh  = '';

sms.sendAdvance({from, to, text, udh}).then(res => {
  let { recIds, status } = res;
  console.log(recIds, status);
}).catch(error => {
  console.log(error);
});
```
output example:
```json
{
  "recIds": [3741437414, 3741437415],
  "status": "error message if occurred"
}
```


Sending shared sms

(You should create a message template in the site first
ex: 'Dear {0}, your registration code is {1}')

```js
let to   = '0912*******';
let bodyId = 254;
let args = ['Mr Smith', '1911'];

sms.sendShared({to, bodyId, args}).then(res => {
  let { recId, status } = res;
  console.log(recIds, status);
}).catch(error => {
  console.log(error);
});
```
output example:
```json
{
  "recId": 3741437414,
  "status": "error message if occurred"
}
```


Sending with domain sms
```js
let from   = '5000****';
let to     = '0912*******';
let text   = 'a test message';
let domain = 'www.some-domain.com';

sms.sendWithDomain({from, to, text, domain}).then(res => {
  let { recId, status } = res;
  console.log(recIds, status);
}).catch(error => {
  console.log(error);
});
```
output example:
```json
{
  "recId": 3741437414,
  "status": "error message if occurred"
}
```


Getting sms status with its refId
```js
let recIds   = [3741437414, 3741437415];

sms.checkStatus({recIds}).then(res => {
  let { results, resultsAsCode,  status} = res;
  console.log(results, resultsAsCode,  status);
}).catch(error => {
  console.log(error);
});
```
output example:
```json
{
  "results": ['ارسال شده' ,'ارسال نشده'],
  "resultsAsCode": [-1, 200],
  "status": "error message if occurred"
}
```

Getting messages from server
```js
let type   = '';
let number = '';
let index  = 0;
let count  = 100;

sms.receiveMessages({type, number, index, count}).then(res => {
  let { messages,  status} = res;
  console.log(messages,  status);
}).catch(error => {
  console.log(error);
});
```
output example:
```json
{
  "messages": [{}],
  "status": "error message if occurred"
}
```

Getting messages count from server
```js
let isRead   = true;

sms.countMessages({isRead}).then(res => {
  let { count,  status} = res;
  console.log(count,  status);
}).catch(error => {
  console.log(error);
});
```
output example:
```json
{
  "count": 274,
  "status": "error message if occurred"
}
```


Getting account remaining credit from server
```js
sms.getCredit().then(res => {
  let { amount,  status} = res;
  console.log(amount,  status);
}).catch(error => {
  console.log(error);
});
```
output example:
```json
{
  "amount": 37414,
  "status": "error message if occurred"
}
```


Getting price for sending messages from server
```js
let mtnCount   = 10;
let irancellCount = 20;
let from = '5000****';
let text   = 'a test message';

sms.getPrice({mtnCount, irancellCount, from, text}).then(res => {
  let { price,  status} = res;
  console.log(price,  status);
}).catch(error => {
  console.log(error);
});
```
output example:
```json
{
  "price": 15000,
  "status": "error message if occurred"
}
```

## API Documentation
https://console.melipayamak.com/send/simple

[Support Me](https://hrashidi.github.io/support-me)