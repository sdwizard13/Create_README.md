// 02-Challenge — Professional README Generator (Unsolved Starter)

// TODO: Import the required packages:
// - fs for writing files
// - inquirer for collecting user input
// - the generateMarkdown function from ./utils/generateMarkdown

const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input.
// Each question should collect part of the README content:
// - GitHub username
// - Email address
// - Project title
// - Project description
// - License (choose from a list)
// - Installation command
// - Test command
// - Usage information
// - Contribution guidelines
//
// Example shape of a question:
// {
//   type: "input",
//   name: "github",
//   message: "What is your GitHub username?",
// }


const questions = [
  // TODO: Add your question objects here
  {
   type: "input",
   name: "project",
   message: "What is your Project Title??",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a description of your project:",
  },
  {
   type: "input",
   name: "installation",
   message: "What is your installation command?",
  },
  {
   type: "input",
   name: "repo",
   message: "What is your GitHub repository name?",
  },
    {
   type: "input",
   name: "usage",
   message: "What is your usage information?",
  },
  {
   type: "input",
   name: "contribution",
   message: "What are your contribution guidelines?",
  },
  {
   type: "input",
   name: "test",
   message: "What is your test command?",
  },
  {
   type: "list",
   name: "license",
   message: "What license does your project use?",
   choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3-Clause"]
  },
  {
   type: "input",
   name: "github",
   message: "What is your GitHub username?",
  },
  {
   type: "input",
   name: "email",
   message: "What is your email address?",
  },

];

// TODO: Create a function to write the README file.
// It should take a file name and the data to write.
// Use fs.writeFile or fs.writeFileSync inside this function.

function writeToFile(fileName, data) {
  // TODO: Implement this function so it writes "data" to "fileName"
  fs.writeFileSync(fileName, data);
  console.log("README file generated successfully!");
}

// TODO: Create a function to initialize the app.
// Inside it:
// 1. Prompt the user with inquirer.prompt(questions)
// 2.
function init() {
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateMarkdown(answers);
    writeToFile("README.md", readmeContent);
  });
}
 
init();