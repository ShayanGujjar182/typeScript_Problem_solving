#! /usr/bin/env node
import inquirer from "inquirer";
let { num1, num2, operation } = await inquirer.prompt([
    {
        name: "num1",
        type: "number",
        message: "Enter the First Number:"
    },
    {
        name: "num2",
        type: "number",
        message: "Enter the Second Number:"
    },
    {
        name: "operation",
        type: "list",
        choices: ["addition", "multiplication", "subtraction", "division"],
        message: "Enter the Operation to do:"
    }
]);
if (operation === 'addition') {
    console.log(`The sum of 2 numbers are :${num1 + num2}`);
}
else if (operation === 'subtraction') {
    console.log(`The differnce of 2 numbers are : ${num1 - num2}`);
}
else if (operation === 'multiplication') {
    console.log(`The result after multiplying 2 numbers are : ${num1 * num2}`);
}
else if (operation == 'division') {
    console.log(`The result of 2 numbers after division are: ${num1 / num2}`);
}
