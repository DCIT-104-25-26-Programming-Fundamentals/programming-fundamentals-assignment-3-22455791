const readlineSync = require('readline-sync');

function generateFibonacci(n) {
    let sequence = [];
    let first = 0;
    let second = 1;

    for (let i = 0; i < n; i++) {
        sequence.push(first);

        let next = first + second;
        first = second;
        second = next;
    }

    return sequence;
}

function checkFibonacci(number) {
    let first = 0;
    let second = 1;

    while (first <= number) {
        if (first === number) {
            return true;
        }

        let next = first + second;
        first = second;
        second = next;
    }

    return false;
}

function main() {
    // Part A
    const n = readlineSync.questionInt("How many terms? ");

    if (n <= 0) {
        console.log("Error: Number of terms must be a positive integer.");
        return;
    }

    const sequence = generateFibonacci(n);

    console.log("Fibonacci sequence: " + sequence.join(" "));

    // Part B
    const number = readlineSync.questionInt("Enter a number to check: ");

    if (number < 0) {
        console.log(`${number} is NOT a Fibonacci number.`);
    } else if (checkFibonacci(number)) {
        console.log(`${number} is a Fibonacci number.`);
    } else {
        console.log(`${number} is NOT a Fibonacci number.`);
    }
}

main();
