/* global document */

import updateMeter from './update-meter.js';

console.log('Hello from main');

document.addEventListener('DOMContentLoaded', () => {
	updateMeter();
	setInterval(updateMeter, 1000);
});
