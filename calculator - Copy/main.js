import inquirer from "inquirer";
// asking question from users through inquirer 
let answers = await inquirer.prompt([
    { message: "Enter your first number?", type: "number", name: "firstNumber" },
    { message: "Enter your second number?", type: "number", name: "secondNumber" },
    {
        message: "select an operator for operation",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division"],
    },
]);
// If-Else statements
if (answers.operator === "addition") {
    console.log(answers.firstNumber + answers.secondNumber);
}
else if (answers.operator === "subtraction") {
    console.log(answers.firstNumber - answers.secondNumber);
}
else if (answers.operator === "multiplication") {
    console.log(answers.firstNumber * answers.secondNumber);
}
else if (answers.operator === "division") {
    console.log(answers.firstNumber / answers.secondNumber);
}
else {
    console.log("SYNTAX Error:)");
}
