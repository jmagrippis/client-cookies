let Cookies = class Cookies {
	get (key) {
		let regexp = new RegExp("(?:(?:^|.*;\s*)" + key + "\s*\=\s*([^;]*).*$)|^.*$");
		return document.cookie.replace(regexp, "$1");
	}

	set (key, value) {
		return document.cookie = key + "=" + value;
	}
};

export { Cookies as default };