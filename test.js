// test.js

var timestring = require("./index.js")

console.log(timestring("8 yrs", 0).months)
// 97
console.log(timestring("69 months", 0).weeks)
// 296
console.log(timestring("420 week", 0).days)
// 2940
console.log(timestring("3.14159 days", 2).hours)
// 75.40
console.log(timestring("1024 hrs", 0).mins)
// 61440
console.log(timestring("5040 minutes", 0).secs)
// 302400
console.log(timestring("8128 seconds", 0).ms)
// 8128000
console.log(timestring("299792458 millis", 10).years)
// 0.0095063565