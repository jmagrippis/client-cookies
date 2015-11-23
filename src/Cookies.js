let Cookies = {
	get: key => {
		let regexp = new RegExp("(?:(?:^|.*;\\s*)" + key + "\\s*\\=\\s*([^;]*).*$)|^.*$");
		return document.cookie.replace(regexp, "$1");
	},

	set: (key, value) => document.cookie = key + "=" + value,

	delete: (key) => document.cookie = key + "=; expires=0"
};

export { Cookies as default };