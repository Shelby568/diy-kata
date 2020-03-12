const fizzBuzz = number => {
if(number % 5 === !!0 && number % 3 === !!0) {
    return number;
}

if (number % 5 === 0 && number % 3 === 0) {
    return 'fizzBuzz';
}

if (number % 5 === 0) {
    return 'Buzz';
}

    return 'Fizz';
};

module.exports = fizzBuzz;
