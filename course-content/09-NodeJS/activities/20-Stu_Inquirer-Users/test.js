const inquirer = require("inquirer");
const fs = require("fs");

inquirer.
    prompt([
        {
            type: "input",
            message: "what is your name?",
            name: "username",
        },
        {
            type: "input",
            message: "what languages do you know",
            name: "languages",

        },
        {
            type:"list",
            message: "what is your preferred method of communication",
            name:"communication",
            choices:["English","spanish"],
        }
    ]).then(function(response){
        console.log(response)
    })