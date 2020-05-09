import test from 'ava';
import random from '../src/js/random.js';

test('random', t => {
	for (let i = 0; i < 1000; i++) {
		const number = random(10, 100);
		t.true(number >= 10);
		t.true(number <= 100);
	}
});
