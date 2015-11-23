"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

var parseExpiry = function parseExpiry(expires) {
	switch (typeof expires === "undefined" ? "undefined" : _typeof(expires)) {
		//no expiry provided
		case "undefined":
			return "";
			break;
		//expiry provided as a number of days
		case "number":
			return new Date(new Date().getTime() + expires * 1000 * 60 * 60 * 24);
			break;
		//expiry provided as a string parsable as a date object
		default:
			var date = new Date(expires);
			return isNaN(date) ? '' : date;
			break;
	}
};

exports.default = parseExpiry;