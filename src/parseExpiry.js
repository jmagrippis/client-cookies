let parseExpiry = function (expires) {
	switch (typeof expires) {
		//no expiry provided
		case 'undefined':
			return '';
			break;
		//expiry provided as a number of days
		case 'number':
			return new Date(new Date().getTime() + expires * 1000*60*60*24);
			break;
		//expiry provided as a string parsable as a date object
		default:
			let date = new Date(expires);
			return isNaN(date) ? '' : date;
			break;
	}
}

export { parseExpiry as default };