function withClosure(value = 0) {
    return function(num) {
        value += num;
        return value;
    }
}

const sum = withClosure();
console.log(sum(5));



