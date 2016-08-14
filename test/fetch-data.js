import test from 'ava';
import fetchData from '../src/js/fetch-data.js';

test(async t => {
	global.navigator = {onLine: false};
	const result = await fetchData('1');
	t.truthy(result.value);
	t.truthy(result.min);
	t.truthy(result.max);
	t.truthy(result.format);
	t.truthy(result.unit);
});

test(async t => {
	global.navigator = {onLine: true};
	global.fetch = () => {
		return {
			then: cb => {
				return cb({
					json: () => {
						return new Promise(resolve => resolve('Resolved'));
					}
				});
			}
		};
	};

	const result = await fetchData('1');
	t.is(result, 'Resolved');
});
