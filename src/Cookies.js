import parseExpiry from './parseExpiry';

let Cookies = {
  get: key => {
    let regexp = new RegExp(
        '(?:(?:^|.*;\\s*)' + key + '\\s*\\=\\s*([^;]*).*$)|^.*$'
      );
    return document.cookie.replace(regexp, '$1');
  },

  set: (key, value, options = {}) => {
    let cookie = key + '=' + value;
    let expires = parseExpiry(options.expires);
    cookie += expires ? ';expires=' + expires : '';
    cookie += options.secure ? ';secure' : '';
    document.cookie = cookie;
    return;
  },

  delete: key => document.cookie = key + '=; expires=0'
};

export {Cookies as default};
