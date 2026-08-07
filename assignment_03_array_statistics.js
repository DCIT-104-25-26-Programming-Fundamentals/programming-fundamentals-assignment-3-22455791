const readlineSync = require("readline-sync");

function calculateSum(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}

function calculateAverage(numbers) {
    const sum = calculateSum(numbers);
    return sum / numbers.length;
}

function calculateMaximum(numbers) {
    let maximum = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maximum) {
            maximum = numbers[i];
        }
    }

    return maximum;
}

function calculateMinimum(numbers) {
    let minimum = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < minimum) {
            minimum = numbers[i];
        }
    }

    return minimum;
}

function main() {
    const n = readlineSync.questionInt("How many numbers? ");

    if (n <= 0) {
        console.log("Error: Number of numbers must be positive.");
        return;
    }

    const numbers = [];

    for (let i = 0; i < n; i++) {
        const number = readlineSync.questionFloat(`Enter number ${i + 1}: `);
        numbers.push(number);
    }

    const sum = calculateSum(numbers);
    const average = calculateAverage(numbers);
    const maximum = calculateMaximum(numbers);
    const minimum = calculateMinimum(numbers);

    console.log("\nResults:");
    console.log(`Sum:     ${sum}`);
    console.log(`Average: ${average}`);
    console.log(`Maximum: ${maximum}`);
    console.log(`Minimum: ${minimum}`);
}

main();
