# time-string-parser
Converts an arbitrary string of an amount of time to other units of time. You can use any of the conventional spellings/abbreviations of time units.

Ex: *10 weeks/wks, 14 hours/hrs/H*

The function takes 2 arguments:

`string`: your time string

`number`: number of digits to appear after decimal point (optional, default is 2)

## example
```javascript
var timestring = require("time-string-parser")

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

```
