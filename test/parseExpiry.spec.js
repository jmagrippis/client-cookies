import parseExpiry from './../src/parseExpiry';

import chai from 'chai';
chai.use(require('chai-datetime'));
let should = chai.should();

describe('#parseExpiry()', function() {

	it('should return an empty string when nothing is passed along', function () {
		parseExpiry().should.equal('');
	});

	it('should return a date x days in the future when given a number', function () {
		let daysAhead = 1;
		parseExpiry(daysAhead).should.equalDate(new Date(new Date().getTime() + daysAhead * 1000*60*60*24));
		daysAhead = 10;
		parseExpiry(daysAhead).should.equalDate(new Date(new Date().getTime() + daysAhead * 1000*60*60*24));
	});

	it('should return the Date object for the given parsable string', function () {
		let dateString = '2015-11-16T09:45:15';
		parseExpiry(dateString).should.equalDate(new Date(dateString));
		dateString = '2020-10-20T20:10:20';
		parseExpiry(dateString).should.equalDate(new Date(dateString));
	});

	it('should return an empty string when the given string is not Date parsable', function () {
		let dateString = 'not a valid string!';
		parseExpiry(dateString).should.equal('');
		dateString = '1 more not valid string 4 you.';
		parseExpiry(dateString).should.equal('');
	});
});