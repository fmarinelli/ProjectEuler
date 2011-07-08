var express = require("express");
require("./fibonacci");

var calculateIndex = function(limit) {
    var fib = new Fibonacci();
    var sum = 0;
    do {
        if (fib.isEven()) {
            sum += fib.value();
        }
    } while (fib.next() < limit);
    return sum;
}

var server = express.createServer();
server.get("/sum/:limit", function(req, res) {
    res.send("Result : [" + calculateIndex(req.params.limit) + "]");
});
server.listen(8090);
