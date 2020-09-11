// index.js

function TimeStringParser(str, fix) {

	var ms, 
		secs,
		mins,
		hours,
		days,
		weeks,
		years

	if (fix == undefined) fix_val = 2 
		else if (fix == 0) fix_val = undefined
		else fix_val = fix

	if (!str) return console.error("no input");
	var _str = str.replace(/\s+/g,' ').trim().split(" ");
	if (_str.length > 2 || _str.length < 2) return console.error("check arguments");

	var amnt = parseFloat(_str[0]);
	// if (typeof amnt !== "number") return console.error("check number")
	var unit = _str[1];

	if (unit.length > 1) {
		unit = unit.toLowerCase();
	};

	var unit_dict = [
		["hr", "hour"],
		["hrs", "hour"],
		["hour", "hour"],
		["hours", "hour"],
		["h", "hour"],
		["H", "hour"],
		["min", "minute"],
		["minute", "minute"],
		["minutes", "minute"],
		["mins", "minute"],
		["m", "minute"],
		["second", "second"],
		["seconds", "second"],
		["sec", "second"],
		["secs", "second"],
		["s", "second"],
		["S", "second"],
		["milliseconds", "milliseconds"],
		["millisecs", "milliseconds"],
		["ms", "milliseconds"],
		["millis", "milliseconds"],
		["day", "day"],
		["days", "day"],
		["D", "day"],
		["week", "week"],
		["weeks", "week"],
		["w", "week"],
		["wk", "week"],
		["wks", "week"],
		["W", "week"],
		["month", "month"],
		["months", "month"],
		["mon", "month"],
		["mons", "month"],
		["mo", "month"],
		["mos", "month"],
		["month", "month"],
		["M", "month"],
		["year", "year"],
		["years", "year"],
		["yrs", "year"],
		["Y", "year"],
		["y", "year"],
	];
	let normalize = new Map(unit_dict)

	if (normalize.get(_str[1]) == undefined) {
		return console.error("check unit");
	} else {
		this.amnt = amnt

		this.unit = normalize.get(_str[1]);
	};

	var ms_dict = [
		["milliseconds", 1],
		["second", 1000],
		["minute", 1000 * 60],
		["hour", 1000 * 60 * 60],
		["day", 1000 * 60 * 60 * 24],
		["week", 1000 * 60 * 60 * 24 * 7],
		["month", 1000 * 60 * 60 * 24 * 30],
		["year", 1000 * 60 * 60 * 24 * 365],
	];
	var ms_map = new Map(ms_dict);

	ms = convertToMilliseconds(this.unit, this.amnt);
	secs = convertToValue(ms, "second").toFixed(fix_val);
	mins = convertToValue(ms, "minute").toFixed(fix_val);
	hours = convertToValue(ms, "hour").toFixed(fix_val);
	days = convertToValue(ms, "day").toFixed(fix_val);
	weeks = convertToValue(ms, "week").toFixed(fix_val);
	months = convertToValue(ms, "month").toFixed(fix_val);
	years = convertToValue(ms, "year").toFixed(fix_val);

	function convertToMilliseconds(unit, amnt) {
		let x = ms_map.get(unit);
		let output = amnt * x;
		return output;
	};

	function convertToValue(ms, toValue) {
		let output = ms / ms_map.get(toValue);
		return output;
	}

	return {
		ms,
		secs,
		mins,
		hours,
		days,
		weeks,
		months,
		years
	};

}; // END

module.exports = TimeStringParser