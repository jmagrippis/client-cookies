let parseExpiry = function(expires) {
  switch (typeof expires) {
    // no expiry provided
    case 'undefined':
      return '';
		// expiry provided as a number of days
    case 'number':
      return new Date(new Date().getTime() + expires * 1000 * 60 * 60 * 24);
		// expiry provided as a string parsable as a date object
    default:
      let date = new Date(expires);
      return isNaN(date) ? '' : date;
  }
};

export {parseExpiry as default};
