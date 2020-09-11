// test.js

var parsetime = require("./index.js")

console.log(parsetime("8 yrs", 0).months)
// 97
console.log(parsetime("69 months", 0).weeks)
// 296
console.log(parsetime("420 week", 0).days)
// 2940
console.log(parsetime("3.14159 days", 2).hours)
// 75.40
console.log(parsetime("1024 hrs", 0).mins)
// 61440
console.log(parsetime("5040 minutes", 0).secs)
// 302400
console.log(parsetime("8128 seconds", 0).ms)
// 8128000
console.log(parsetime("299792458 millis", 10).years)
// 0.0095063565