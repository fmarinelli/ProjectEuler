(function() {
    this.Fibonacci = function() {
        var idx = 1;
        var next = 2;
        var value = 1;

        var assign = function(_value, _next) {
            next = _next;
            value = _value;
        }

        this.next = function() {
            idx++;
            assign(next, value + next);
            return value;
        }

        this.value = function() {
            return value;
        }

        this.getIndex = function() {
            return idx;
        }

        this.isEven = function() {
            return ((value % 2) == 0);
        }
    }
}());