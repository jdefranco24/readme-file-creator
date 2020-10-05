const inquirer = require("inquirer");
const fs = require("fs");
const open = require("open");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

const writeAsync = util.promisify(fs.writeFile);
// array of questions for user 
const questions = [{
    message: "what is your title?",
    name: "title" 
},
{
    message: "what is your name?",
    name: "name" 
},
{
    message: "What is your age?",
    name: "age"
},


];

// function to write read me file
async function writeToFile(fileName, data) {
    await writeAsync(fileName, data);
    
}
// function to initialize program
async function init() {
    const answers = await inquirer.prompt(questions);

    const htmlString = generateMarkdown(answers);
    
    writeToFile(answers.name + ".md", htmlString);
    // console.log(answers.name, answers.age);
    
}
// function call to initialize program
init();