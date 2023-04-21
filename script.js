function withClosure() {
    let value = 0;
    return function(num) {
        return value += num;
    }
}

const sum = withClosure();
console.log(sum(5));



