/* global document */

import fetchData from './fetch-data.js';
import getCurrencyAmount from './get-currency-amount.js';

function moveNeedle(amount) {
	const ndl = document.querySelector('.needle');
	ndl.style.transform = `rotateZ(${amount}deg)`;
}

function updateMeter() {
	fetchData().then(data => {
		const {unit, value, min, max, format} = data;

		if (min > max || value < min || value > max) {
			return;
		}

		let valueAmount;
		let minAmount;
		let maxAmount;

		if (format === 'currency') {
			valueAmount = getCurrencyAmount(unit, value);
			minAmount = getCurrencyAmount(unit, min);
			maxAmount = getCurrencyAmount(unit, max);
		} else {
			valueAmount = value;
			minAmount = min;
			maxAmount = max;
		}

		moveNeedle(180 * ((value - min) / (max - min)));

		document.querySelector('.meter-amount__value').textContent = valueAmount;
		document.querySelector('.meter-amount__min').textContent = minAmount;
		document.querySelector('.meter-amount__max').textContent = maxAmount;
	});
}

export default updateMeter;
