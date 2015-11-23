import sinon from 'sinon';
import jsdom from 'mocha-jsdom';

import Cookies from './../src/Cookies';

let should = require('chai').should();

describe('Cookies', function() {

	jsdom();

	describe('#get()', function () {

		it('should return the value of the given key', function () {
			Cookies.get('moniker').should.equal('');
			document.cookie = 'dummy=text';
			document.cookie = 'moniker=jmag';
			document.cookie = 'it-is=a-trap';
			Cookies.get('moniker').should.equal('jmag');
			Cookies.get('dummy').should.equal('text');
		});

	});
});