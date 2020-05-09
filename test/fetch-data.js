import test from 'ava';
import fetchData from '../src/js/fetch-data.js';

test('fetch data - properties exist', async t => {
	const result = await fetchData();
	t.truthy(result.value);
	t.truthy(result.min);
	t.truthy(result.max);
	t.truthy(result.format);
	t.truthy(result.unit);
});
