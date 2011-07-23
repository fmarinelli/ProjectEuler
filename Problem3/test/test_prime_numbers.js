var fibonacci = require("../src/PrimeNumbers");

exports["Test numeri primi"]  = function(test) {
	test.expect(10);

	var primeNumbers = new PrimeNumber();

    test.equals(primeNumbers.nextPrime(), 2, "Next prime must be 2");
    test.equals(primeNumbers.nextPrime(), 3, "Next prime must be 3");
    test.equals(primeNumbers.nextPrime(), 5, "Next prime must be 5");
    test.equals(primeNumbers.nextPrime(), 7, "Next prime must be 7");
    test.equals(primeNumbers.nextPrime(), 11, "Next prime must be 11");
    test.equals(primeNumbers.nextPrime(), 13, "Next prime must be 13");
    test.equals(primeNumbers.nextPrime(), 17, "Next prime must be 17");
    test.equals(primeNumbers.nextPrime(), 19, "Next prime must be 19");
    test.equals(primeNumbers.nextPrime(), 23, "Next prime must be 23");
    test.equals(primeNumbers.nextPrime(), 29, "Next prime must be 29");

	test.done();
}

exports["Test fattori"]  = function(test) {
	test.expect(17);

	var primeNumbers = new PrimeNumber();

    test.equals(primeNumbers.nextPrime(), 2, "Next prime must be 2");
    test.equals(primeNumbers.nextPrime(), 3, "Next prime must be 3");
    test.equals(primeNumbers.nextPrime(), 5, "Next prime must be 5");
    test.equals(primeNumbers.nextPrime(), 7, "Next prime must be 7");
    test.equals(primeNumbers.nextPrime(), 11, "Next prime must be 11");
    test.equals(primeNumbers.nextPrime(), 13, "Next prime must be 13");
    test.equals(primeNumbers.nextPrime(), 17, "Next prime must be 17");
    test.equals(primeNumbers.nextPrime(), 19, "Next prime must be 19");
    test.equals(primeNumbers.nextPrime(), 23, "Next prime must be 23");
    test.equals(primeNumbers.nextPrime(), 29, "Next prime must be 29");

    test.equals(primeNumbers.factors().length, 1, "For a prime number there be only 1 factor (itself)");
    test.equals(primeNumbers.factors()[0], 29, "Only itself as a factor 29");

    test.equals(primeNumbers.next(), 30, "Next number must be 30");
    test.equals(primeNumbers.factors().length, 3, "Factors for 30 are 2, 3, 5");
    test.equals(primeNumbers.factors()[0], 2, "Contains factor 2");
    test.equals(primeNumbers.factors()[1], 3, "Contains factor 3");
    test.equals(primeNumbers.factors()[2], 5, "Contains factor 5");

	test.done();
}
