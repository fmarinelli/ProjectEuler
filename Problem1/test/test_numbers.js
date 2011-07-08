var numbers = require("../src/numbers");

exports["Test multiples of 3"]  = function(test) {
	test.expect(3);
	var num = 3;
	test.ok(num.isMultiplesOf3(), num + " is multiples of 3");
	num = 31231242;
	test.ok(num.isMultiplesOf3(), num + " is multiples of 3");
	num += 1;
	test.ok(!num.isMultiplesOf3(), num + " is not multiples of 3");
	test.done();
}

exports["Test multiples of 5"]  = function(test) {
	test.expect(3);
	var num = 5;
	test.ok(num.isMultiplesOf5(), num + " is multiples of 5");
	num = 31231245;
	test.ok(num.isMultiplesOf5(), num + " is multiples of 5");
	num += 1;
	test.ok(!num.isMultiplesOf5(), num + " is not multiples of 5");
	test.done();
}
