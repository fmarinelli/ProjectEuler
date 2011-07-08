var express = require("express");
var numbers = require("./numbers");

var sumNumbers = function(limit) {
    var sum = 0;
    var i = 1;
    while (i < limit) {
        if (i.isMultiplesOf3() || i.isMultiplesOf5()) {
            sum += i;
        }
        i++;
    }
    return sum;
}

var server = express.createServer();
server.get("/sum/:limit", function(req, res) {
    res.send("Result : [" + sumNumbers(req.params.limit) + "]");
});
server.listen(8090);
