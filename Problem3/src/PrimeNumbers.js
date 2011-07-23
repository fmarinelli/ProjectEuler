(function() {
    this.PrimeNumber = function() {
        var primes = new Array();
        var counters = new Array();
        var index = 1;

        var isPrime = function() {
            for (i in primes) {
                if ((counters[i] == 0) && (primes[i]<index)) {
                    return false;
                }
            }
            return true;
        }

        var progressRegistry = function() {
            for (i in primes) {
                counters[i] += 1;
                if (counters[i] == primes[i]) {
                    counters[i] = 0;
                }
            }
        }

        var addToPrimeNumbers = function() {
            primes.push(index);
            counters.push(0);
        }

        this.current = function() {
            return index;
        }

        this.next = function() {
            index += 1;
            progressRegistry();
            if(isPrime()) {
                addToPrimeNumbers();
            }
            return index;
        }

        this.nextPrime = function() {
            do {
                this.next();
            } while (!isPrime());
            return index;
        }

        this.factors = function() {
            var factors = new Array();
            for(i in counters) {
                if(counters[i]==0) {
                    factors.push(primes[i]);
                }
            }
            return factors;
        }
    }
}());