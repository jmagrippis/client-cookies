import sinon from 'sinon';

import Cookies from './../src/Cookies';

let should = require('chai').should();

describe('Cookies', function() {

	describe('#get()', function () {

		it('should return the value of the given key', function () {
			Cookies.get('moniker');
		});

	});
});