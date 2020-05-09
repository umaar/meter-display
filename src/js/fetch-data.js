import randomBetween from './random.js';

function fetchData() {
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
