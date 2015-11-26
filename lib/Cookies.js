'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _parseExpiry = require('./parseExpiry');

var _parseExpiry2 = _interopRequireDefault(_parseExpiry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cookies = {
  get: function get(key) {
    var regexp = new RegExp('(?:(?:^|.*;\\s*)' + key + '\\s*\\=\\s*([^;]*).*$)|^.*$');
    return document.cookie.replace(regexp, '$1');
  },

  set: function set(key, value) {
    var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

    var cookie = key + '=' + value;
    var expires = (0, _parseExpiry2.default)(options.expires);
    cookie += expires ? ';expires=' + expires : '';
    cookie += options.secure ? ';secure' : '';
    document.cookie = cookie;
    return;
  },

  delete: function _delete(key) {
    return document.cookie = key + '=; expires=0';
  }
};

exports.default = Cookies;