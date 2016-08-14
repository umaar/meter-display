/*global fetch, navigator */

import 'whatwg-fetch';
import PromiseModule from 'es6-promise';
import randomBetween from './random';

const Promise = PromiseModule.Promise;

function fetchData(url) {
	if (navigator.onLine) {
		return fetch(url).then(response => response.json());
	}

	console.info('Returning mock data');

	return new Promise(resolve => {
		const mockData = {
			value: randomBetween(300, 600),
			min: randomBetween(0, 300),
			max: randomBetween(600, 900),
			format: 'currency',
			unit: 'GBP'
		};

		resolve(mockData);
	});
}

export default fetchData;
