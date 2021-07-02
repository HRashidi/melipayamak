var MP = require('./lib/cjs/MeliPayamak').MeliPayamak;
module.exports = MP;
// adding circular ref to allow easy importing in both ES5/6 and TS projects
module.exports.MeliPayamak = MP;