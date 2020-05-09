function getCurrencyAmount(currency, amount = 0) {
	const stringAmount = amount.toLocaleString('EN-gb', {
		style: 'currency',
		currency
	});

	return stringAmount.split('.')[0];
}

export default getCurrencyAmount;
