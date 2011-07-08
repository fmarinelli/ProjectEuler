var fibonacci = require("../src/fibonacci");

exports["Test fibonacci serie"]  = function(test) {
	test.expect(7);

	var num = new Fibonacci();

    test.equals(num.getIndex(), 1, "Fibonacci must start from index 1");
    test.ok(!num.isEven(), "First fibonacci value is not even");

    test.equals(num.next(), 2, "Next item must be 2");
    test.ok(num.isEven(), "Second item is even");

    //Calculate item 10
    var item;
    while(num.getIndex()<10) {
        item = num.next();
    }
    test.equals(num.getIndex(), 10, "Iteration get to item 10");
    test.equals(item, 89, "Item 10 must be 89");
    test.ok(!num.isEven(), "Item 10 is not even");
	test.done();
}
