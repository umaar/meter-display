import test from 'ava';
import random from '../src/js/random.js';

test(t => {
	for (let i = 0; i < 100; i++) {
		const num = random(10, 100);
		t.true(num >= 10);
		t.true(num <= 100);
	}
});
