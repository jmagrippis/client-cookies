import jsdom from 'mocha-jsdom';

import Cookies from './../src/Cookies';

let should = require('chai').should();

describe('Cookies', function() {

	jsdom();

	describe('#get()', function () {

		it('should return the value of the given key, or an empty string if the key does not exist', function () {
			Cookies.get('moniker').should.equal('');
			document.cookie = 'dummy=text';
			document.cookie = 'moniker=jmag';
			document.cookie = 'it-is=a-trap';
			Cookies.get('moniker').should.equal('jmag');
			Cookies.get('dummy').should.equal('text');
		});

	});

	describe('#set()', function () {

		it('should set the given value to the given key', function () {
			Cookies.get('setter').should.equal('');
			Cookies.set('setter', 'works!');
			Cookies.get('setter').should.equal('works!');

			Cookies.get('key with spaces').should.equal('');
			Cookies.set('key with spaces', 'should also work');
			Cookies.get('key with spaces').should.equal('should also work');
		});

		it('should set the expiry according to the provided option', function () {
			Cookies.get('expiring-soon').should.equal('');
			Cookies.set('expiring-soon', 'like, a day after', {expires: 1});
			Cookies.get('expiring-soon').should.equal('like, a day after');

			Cookies.get('expiring later').should.equal('');
			Cookies.set('expiring later', 'twenty days later even.', {expires: 20});
			Cookies.get('expiring later').should.equal('twenty days later even.');
		});

    it('should pass the secure attribute only when the relevant option is truthy', function () {
      let cookie = Cookies.set('sensitive cookie', 'transmitted only via https', {secure: 1});
      cookie.should.include('secure');
      cookie = Cookies.set('another cookie', 'transmitted only via https', {secure: true});
      cookie.should.include('secure');

      cookie = Cookies.set('non-sensitive cookie', 'transmitted via anything', {secure: 0});
      cookie.should.not.include('secure');
      cookie = Cookies.set('another simple cookie', 'transmitted via anything', {secure: false});
      cookie.should.not.include('secure');
    });

    it('should pass the HttpOnly attribute only when the relevant option is truthy', function () {
      let cookie = Cookies.set('no xss for this cookie', 'read only by the client', {HttpOnly: 1});
      cookie.should.include('HttpOnly');
      cookie = Cookies.set('another cookie', 'read only by the client', {HttpOnly: true});
      cookie.should.include('HttpOnly');
      Cookies.get('another cookie').should.equal('');

      cookie = Cookies.set('non-sensitive cookie', 'read by anything', {HttpOnly: 0});
      cookie.should.not.include('HttpOnly');
      cookie = Cookies.set('another simple cookie', 'read by anything', {HttpOnly: false});
      cookie.should.not.include('HttpOnly');
      Cookies.get('another simple cookie').should.equal('read by anything');
    });

	});

	describe('#delete()', function () {

		it('should clear the cookie of the given key', function () {
			Cookies.get('it-is').should.equal('a-trap');
			Cookies.delete('it-is');
			Cookies.get('it-is').should.equal('');

			Cookies.get('key with spaces').should.equal('should also work');
			Cookies.delete('key with spaces');
			Cookies.get('key with spaces').should.equal('');
		});

	});
});