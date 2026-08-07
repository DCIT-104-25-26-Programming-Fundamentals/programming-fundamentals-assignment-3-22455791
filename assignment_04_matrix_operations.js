const readlineSync = require('readline-sync');

function readMatrix(rows, cols, name) {
    const matrix = [];

    console.log(`\nEnter values for matrix ${name}:`);

    for (let i = 0; i < rows; i++) {
        const row = readlineSync.question(`Enter row ${i + 1}: `);
        const values = row.split(' ').map(Number);

        matrix.push(values);
    }

    return matrix;
}

function displayMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join('  '));
    }
}

function transposeMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const transpose = [];

    for (let j = 0; j < cols; j++) {
        const row = [];

        for (let i = 0; i < rows; i++) {
            row.push(matrix[i][j]);
        }

        transpose.push(row);
    }

    return transpose;
}

function addMatrices(matrixA, matrixB) {
    const rows = matrixA.length;
    const cols = matrixA[0].length;
    const result = [];

    for (let i = 0; i < rows; i++) {
        const row = [];

        for (let j = 0; j < cols; j++) {
            row.push(matrixA[i][j] + matrixB[i][j]);
        }

        result.push(row);
    }

    return result;
}

function multiplyMatrices(matrixA, matrixB) {
    const rowsA = matrixA.length;
    const colsA = matrixA[0].length;
    const colsB = matrixB[0].length;
    const result = [];

    for (let i = 0; i < rowsA; i++) {
        const row = [];

        for (let j = 0; j < colsB; j++) {
            let sum = 0;

            for (let k = 0; k < colsA; k++) {
                sum += matrixA[i][k] * matrixB[k][j];
            }

            row.push(sum);
        }

        result.push(row);
    }

    return result;
}

function main() {
    // PART A - Transpose
    console.log("PART A - Transpose Matrix");

    const rows = readlineSync.questionInt("Enter number of rows: ");
    const cols = readlineSync.questionInt("Enter number of columns: ");

    const matrix = readMatrix(rows, cols, "A");

    console.log("\nOriginal Matrix:");
    displayMatrix(matrix);

    const transpose = transposeMatrix(matrix);

    console.log("\nTransposed Matrix:");
    displayMatrix(transpose);


    // PART B - Addition
    console.log("\nPART B - Add Two Matrices");

    const addRows = readlineSync.questionInt("Enter number of rows: ");
    const addCols = readlineSync.questionInt("Enter number of columns: ");

    const matrixA = readMatrix(addRows, addCols, "A");
    const matrixB = readMatrix(addRows, addCols, "B");

    const sum = addMatrices(matrixA, matrixB);

    console.log("\nMatrix A:");
    displayMatrix(matrixA);

    console.log("\nMatrix B:");
    displayMatrix(matrixB);

    console.log("\nSum:");
    displayMatrix(sum);


    // PART C - Multiplication
    console.log("\nPART C - Multiply Two Matrices");

    const rowsA = readlineSync.questionInt("Enter rows for Matrix A: ");
    const colsA = readlineSync.questionInt("Enter columns for Matrix A: ");

    const matrixC = readMatrix(rowsA, colsA, "A");

    const rowsB = readlineSync.questionInt("Enter rows for Matrix B: ");
    const colsB = readlineSync.questionInt("Enter columns for Matrix B: ");

    if (colsA !== rowsB) {
        console.log("Error: Columns of Matrix A must equal rows of Matrix B.");
        return;
    }

    const matrixD = readMatrix(rowsB, colsB, "B");

    const product = multiplyMatrices(matrixC, matrixD);

    console.log("\nMatrix A:");
    displayMatrix(matrixC);

    console.log("\nMatrix B:");
    displayMatrix(matrixD);

    console.log("\nProduct:");
    displayMatrix(product);
}

main();
