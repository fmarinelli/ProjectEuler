(function() {
    var sumDigits = function(value) {
        var sum = 0;
        while (value > 0) {
            sum += value % 10;
            value = Math.floor(value / 10);
        }
        return sum;
    }

    Number.prototype.isMultiplesOf3 = function() {
        var number = this;
        while (number > 9) {
            number = sumDigits(number);
        }
        return (number == 3 || number == 6 || number == 9);
    }

    Number.prototype.isMultiplesOf5 = function() {
        var remainder = this % 10;
        return (remainder == 0 || remainder == 5);
    }
} ());

