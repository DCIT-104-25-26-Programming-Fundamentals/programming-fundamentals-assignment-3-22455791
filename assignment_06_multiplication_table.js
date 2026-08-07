const readlineSync = require('readline-sync');

function printTable(number) {
    console.log(`Multiplication Table for ${number}:`);

    for (let i = 1; i <= 12; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

function singleTable() {
    const number = readlineSync.questionInt("Enter a number: ");

    if (number <= 0) {
        console.log("Error: Number must be a positive integer.");
        return;
    }

    printTable(number);
}

function tablesFromOneToN() {
    const n = readlineSync.questionInt("Enter N: ");

    if (n <= 0) {
        console.log("Error: N must be a positive integer.");
        return;
    }

    for (let number = 1; number <= n; number++) {
        printTable(number);

        if (number < n) {
            console.log("---------------------------");
        }
    }
}

function main() {
    // Part A
    singleTable();

    // Part B
    tablesFromOneToN();
}

main();
