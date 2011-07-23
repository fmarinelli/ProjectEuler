var express = require("express");
require("./PrimeNumbers");

function printFactors(value) {
    var primeNumber = new PrimeNumber();
    var factors = new Array();
    primeNumber.nextPrime();
    while (value>1) {
        if((value % primeNumber.current()) == 0) {
            value = value / primeNumber.current();
            factors.push(primeNumber.current());
        } else {
            primeNumber.nextPrime();
        }
    }
    return factors;
}

var server = express.createServer();
server.get("/factors/:number", function(req, res) {
    res.send("Result : [" + printFactors(req.params.number) + "]");
});
server.listen(8090);
