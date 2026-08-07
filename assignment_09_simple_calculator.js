const readlineSync = require('readline-sync');

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return null;
    }

    return a / b;
}

function modulus(a, b) {
    return a % b;
}

function exponentiate(a, b) {
    return a ** b;
}

function displayMenu() {
    console.log("\n============================");
    console.log("       SIMPLE CALCULATOR");
    console.log("============================");
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");
    console.log("5. Modulus");
    console.log("6. Exponentiation");
    console.log("7. Quit");
}

function main() {
    let running = true;

    while (running) {
        displayMenu();

        const choice = readlineSync.questionInt("Select an operation (1-7): ");

        if (choice === 7) {
            console.log("Goodbye!");
            running = false;
            continue;
        }

        if (choice < 1 || choice > 7) {
            console.log("Error: Invalid menu choice.");
            continue;
        }

        const firstNumber = readlineSync.questionFloat("Enter first number : ");
        const secondNumber = readlineSync.questionFloat("Enter second number: ");

        let result;

        if (choice === 1) {
            result = add(firstNumber, secondNumber);
            console.log(`Result: ${firstNumber} + ${secondNumber} = ${result.toFixed(2)}`);
        } else if (choice === 2) {
            result = subtract(firstNumber, secondNumber);
            console.log(`Result: ${firstNumber} - ${secondNumber} = ${result.toFixed(2)}`);
        } else if (choice === 3) {
            result = multiply(firstNumber, secondNumber);
            console.log(`Result: ${firstNumber} * ${secondNumber} = ${result.toFixed(2)}`);
        } else if (choice === 4) {
            result = divide(firstNumber, secondNumber);

            if (result === null) {
                console.log("Error: Cannot divide by zero.");
            } else {
                console.log(`Result: ${firstNumber} / ${secondNumber} = ${result.toFixed(2)}`);
            }
        } else if (choice === 5) {
            result = modulus(firstNumber, secondNumber);
            console.log(`Result: ${firstNumber} % ${secondNumber} = ${result.toFixed(2)}`);
        } else if (choice === 6) {
            result = exponentiate(firstNumber, secondNumber);
            console.log(`Result: ${firstNumber} ** ${secondNumber} = ${result.toFixed(2)}`);
        }
    }
}

main();
