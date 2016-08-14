import test from 'ava';
import getCurrencyAmount from '../src/js/get-currency-amount.js';

test(t => {
	const gbpAmount = getCurrencyAmount('GBP', 1);
	t.is(gbpAmount, '£1');

	const dollarAmount = getCurrencyAmount('USD', 100.50);
	t.is(dollarAmount, '$100');

	t.throws(() => {
		getCurrencyAmount(undefined, 1);
	});

	const noAmount = getCurrencyAmount('GBP', undefined);
	t.is(noAmount, '£0');
});
