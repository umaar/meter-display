import 'number-to-locale-string';

function getCurrencyAmount(currency, amount = 0) {
	const strAmount = amount.toLocaleString('EN-gb', {
		style: 'currency',
		currency: currency
	});

	return strAmount.split('.')[0];
}

export default getCurrencyAmount;
