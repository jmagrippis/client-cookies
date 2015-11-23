import parseExpiry from './parseExpiry';

let Cookies = {
	get: key => {
		let regexp = new RegExp("(?:(?:^|.*;\\s*)" + key + "\\s*\\=\\s*([^;]*).*$)|^.*$");
		return document.cookie.replace(regexp, "$1");
	},

	set: (key, value, options = {}) => {
		let cookie = key + "=" + value;
		cookie += parseExpiry(options.expires);
		return document.cookie = cookie;
	},

	delete: key => document.cookie = key + "=; expires=0"
};

export { Cookies as default };