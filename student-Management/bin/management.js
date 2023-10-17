#! /usr/bin/env node
import inquirer from "inquirer";
class Student {
    constructor(name) {
        this.courses = [];
        this.name = name;
        this.id = this.generaterandomId();
        this.balance = 0;
    }
    generaterandomId() {
        const min = 10000;
        const max = 99999;
        return Math.floor(Math.random() * (max - min)) + min;
    }
    enrollInCourse(course) {
        this.courses.push(course);
    }
    addBalance(amount) {
        this.balance += amount;
    }
    deductbalance(amount) {
        this.balance -= amount;
    }
    payTutionfees() {
        this.balance - 1200;
    }
    viewBalance() {
        return this.balance;
    }
}
console.log("Welcome to Digital University");
const answers = await inquirer.prompt([
    {
        type: "string",
        name: "studentName",
        message: "What is Your Name"
    },
]);
const student = new Student(answers.studentName);
async function studentform() {
    const givechoicetostudent = await inquirer.prompt([
        {
            type: "list",
            name: "givechoice",
            choices: ["Enroll In Course", "Add Balance", "Show Status", "Close"],
            message: "Please Select the following Options:"
        }
    ]);
    if (givechoicetostudent.givechoice == "Enroll In Course") {
        const enrollcourse = await inquirer.prompt([
            {
                type: "list",
                name: "enrollInCourses",
                choices: ["Computer Science", "Fine Arts", "Sociology", "Business Administration"],
                message: "In Which Course you wanted to Get Enrolled"
            }
        ]);
        if (student.viewBalance() >= 1200) {
            student.enrollInCourse(enrollcourse.enrollInCourses);
            student.deductbalance(1200);
            console.log(`You have Successfully enrolled in ${enrollcourse.enrollInCourses}`);
            console.log(`Your remaining Balance is ${student.balance}`);
            studentform();
        }
        else {
            console.log("You don't have sufficient balalnce to enroll in this Course");
            studentform();
        }
    }
    else if (givechoicetostudent.givechoice == "Add Balance") {
        const addblnc = await inquirer.prompt([
            {
                name: "addbalance",
                type: "number",
                message: "How much balance you want to Add?"
            }
        ]);
        student.addBalance(addblnc.addbalance);
        console.log(`You have Successfully added balance of ${student.viewBalance()}`);
        studentform();
    }
    else if (givechoicetostudent.givechoice == "Show Status") {
        console.log("Name : ", student.name);
        console.log("Student Id:", student.id);
        console.log("Courses : ", student.courses);
        console.log("Balance: ", student.balance);
        studentform();
    }
    else if (givechoicetostudent.givechoice == "Close") {
        return;
    }
}
studentform();
//show status method
// name, id, courses enroled, balance
