const readlineSync = require('readline-sync');

let students = [];

function addStudent() {
    const name = readlineSync.question("Student name: ");
    const id = readlineSync.questionInt("Student ID: ");
    const numberOfScores = readlineSync.questionInt("How many scores? ");

    const scores = [];

    for (let i = 0; i < numberOfScores; i++) {
        const score = readlineSync.questionFloat(`Enter score ${i + 1}: `);
        scores.push(score);
    }

    const student = {
        name: name,
        id: id,
        scores: scores
    };

    students.push(student);

    console.log(`Student "${name}" added successfully.`);
}

function calculateAverage(scores) {
    let sum = 0;

    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }

    return sum / scores.length;
}

function displayAllStudents() {
    if (students.length === 0) {
        console.log("No students have been added yet.");
        return;
    }

    console.log("\nStudent Records:");
    console.log("---------------------------------------------");

    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        const average = calculateAverage(student.scores);

        console.log(`Name: ${student.name}`);
        console.log(`ID: ${student.id}`);
        console.log(`Scores: ${student.scores.join(", ")}`);
        console.log(`Average: ${average.toFixed(2)}`);
        console.log("---------------------------------------------");
    }
}

function calculateStudentAverage() {
    const id = readlineSync.questionInt("Enter student ID: ");

    let studentFound = false;

    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            const average = calculateAverage(students[i].scores);

            console.log(
                `${students[i].name}'s average score: ${average.toFixed(2)}`
            );

            studentFound = true;
            break;
        }
    }

    if (!studentFound) {
        console.log("Error: Student ID not found.");
    }
}

function displayMenu() {
    console.log("\n================================");
    console.log("    STUDENT RECORD SYSTEM MENU");
    console.log("================================");
    console.log("1. Add student");
    console.log("2. Display all students");
    console.log("3. Calculate average score");
    console.log("4. Quit");
}

function main() {
    let running = true;

    while (running) {
        displayMenu();

        const choice = readlineSync.questionInt("Enter your choice (1-4): ");

        if (choice === 1) {
            addStudent();
        } else if (choice === 2) {
            displayAllStudents();
        } else if (choice === 3) {
            calculateStudentAverage();
        } else if (choice === 4) {
            console.log("Goodbye!");
            running = false;
        } else {
            console.log("Error: Invalid choice. Please enter a number from 1 to 4.");
        }
    }
}

main();
