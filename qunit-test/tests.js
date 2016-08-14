/* global QUnit, assert, document */

QUnit.test('assert.async() test', function(assert) {
	var done = assert.async();

	setTimeout(function () {
		var ndl = document.querySelector('.needle');
		var result = ndl.style.transform;
		assert.ok(result.indexOf('rotateZ(') !== -1, 'Rotate Z has been set');
		done();
	}, 5000);
});
