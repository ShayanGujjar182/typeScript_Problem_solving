#! /usr/bin/env node
import inquirer from "inquirer";

interface tasks {
  title: string;
  description: string;
  status: string;
}

let todos: tasks[] = [];
const calltodo = async () => {
  let answers = await inquirer.prompt([
    {
      name: "showtodo",
      type: "list",
      choices: ["Add", "Show todoList", "Update", "Delete", "Close"],
      message: "What You want to do?",
    },
  ]);


    if (answers.showtodo == "Show todoList") {
        if(todos.length > 0){
        for (let i = 0; i < todos.length; i++) {
        console.log(`${i + 1}:`, todos[i]);
        }
        calltodo();
        }else{
            console.log('Their is no Task to display')
            calltodo()
        }
    } else if (answers.showtodo == "Add") {
    answers = await inquirer.prompt([
      {
        name: "title",
        type: "text",
        message: "What is the title of Your Task.",
      },
      {
        name: "description",
        type: "text",
        message: "What is the description of Your Task.",
      },
      {
        name: "Status",
        type: "list",
        choices: ["inComplete", "Completed"],
        message: "What is the Status of Your Task.",
      },
    ]);
    const task: tasks = {
      title: answers.title,
      description: answers.description,
      status: answers.Status,
    };
    todos.push(task);
    calltodo();
  } 
  
  
  
  
  else if (answers.showtodo == "Update") {
    answers = await inquirer.prompt([
      {
        name: "todonum",
        type: "number",
        message: "Give the Number/Position of the task in the array",
      }
    ]);
    if (answers.todonum <= todos.length && answers.todonum >= 0) {
        const chooselist = await inquirer.prompt([
            {
              name: "todotask",
              type: "list",
              choices: ["title", "description", "status"],
              message: "Choose from the following",
            },
          ]);
        if(chooselist.todotask == "title"){
            const uptitle = await inquirer.prompt([
                {
                  name: "newtitle",
                  type: "text",
                  message: "Enter the new Title to Update",
                }
            ])
            todos[answers.todonum - 1].title = uptitle.newtitle
            console.log('Task Updated Successfully')
            console.log(todos[answers.todonum - 1])
            calltodo();
        }
        else if(chooselist.todotask == "description"){
            const updescription = await inquirer.prompt([
                {
                  name: "newdes",
                  type: "text",
                  message: "Enter the new Description to Update",
                }
            ])
            todos[answers.todonum - 1].description = updescription.newdes
            console.log('Task Updated Successfully')
            console.log(todos[answers.todonum - 1])
            calltodo();
        }
        else if(chooselist.todotask == "status"){
            const asktask = await inquirer.prompt([
                {
                  name: "statustoupdate",
                  type: "list",
                  choices: ["Incomplete", "completed"],
                  message: "Choose the Status to update",
                },
              ]);
              todos[answers.todonum - 1].status = asktask.statustoupdate;
              console.log("Status updated Successfully");
              console.log(todos[answers.todonum - 1]);
              calltodo();
            }

            else {
                console.log("Sorry the Provided number task in Not Found in the List");
                calltodo();
              }
        }
        else {
            console.log("Sorry the Provided number task in Not found in the List");
            calltodo();
          }



    } 
       
  
  
  
  
  
  
  else if (answers.showtodo == "Delete") {
    answers = await inquirer.prompt([
      {
        name: "todelete",
        type: "number",
        message: "Give the Number/Position of the task in the array",
      },
    ]);
    if (answers.todelete <= todos.length && answers.todelete >= 0) {
      todos.splice(answers.todelete - 1, 1);
      console.log("Successfully Removed that task from the List");
      calltodo();
    } else {
      console.log("Sorry the Provided number task not Found in the List");
      calltodo();
    }
  } else {
    console.log("Thank You so Much for using our Application");
  }
};
calltodo();
