const inquirer = require("inquirer");
const fs = require("fs");
// const open = require("open");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

const writeAsync = util.promisify(fs.writeFile);
// array of questions for user 
const questions = [
{
    message: "what is your Name?",
    name: "name" 
},
{
    message: "what is your Project Title?",
    name: "title" 
},
{
    message: "Please provide the badge links.",
    name: "badge"
},
{
    message: "Provide your projects description.",
    name: "description"
},
{
    message: "Please provide installation instructions?",
    name: "installation"
},
{
    message: "Provide instruction and examples for use. Include screenshots as needed.",
    name: "usage"
},
{
    message: "Please provide the project license or badge link.",
    name: "license"
},
{
    message: "Any other collaborating parties?",
    name: "collab"
},
{
    message: "What are the guidelines if you are open to other contributions?",
    name: "contributing"
},
{
    message: "Please provide project tests",
    name: "test"
},
{
    message: "Please provide repo link",
    name: "repo"
},
{
    message: "What is your github username?",
    name: "username"
},
];

// function to write read me file
async function writeToFile(fileName, data) {
    await writeAsync(fileName, data);
    
}
// function to initialize program
async function init() {
    const answers = await inquirer.prompt(questions);
    console.log("Successful");

    const htmlString = generateMarkdown(answers);
    
    writeToFile(answers.name + ".md", htmlString);
    // console.log(answers.name, answers.age);
    
}

// function call to initialize program
init();