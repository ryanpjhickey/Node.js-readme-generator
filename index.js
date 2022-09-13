// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';


// TODO: Create an array of questions for user input
const questions = ['What is the name of your project?', 'Please enter a brief description of your project', 'Please enter installation intstructions for your project', 'Please enter usage information for your project', 'Please enter contribution guidelines for your project', 'Please enter test intstructions your project', 'Please choose a license for your project', 'What is your GitHub username?', 'What is your e-mail address or the best way to reach you?'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

inquirer.prompt([
    {
        name: 'Name',
        message: questions[0],
        type: 'input',
    },
    {
        name: 'Description',
        message: questions[1],
        type: 'input',
    },
    {
        name: 'Install Instructions',
        message: questions[2],
        type: 'input',
        choices: ['HTML', 'CSS', 'JS', 'Mandarin Chinese']
    },
    {
        name: 'Usage Information',
        message: questions[3],
        type: 'input',
    },
    {
        name: 'Contribution Guidelines',
        message: questions[4],
        type: 'input',
    },
    {
        name: 'Test Instructions',
        message: questions[5],
        type: 'input',
    },
    {
        name: 'License',
        message: questions[6],
        type: 'list',
        choices: ['afl-3.0', 'mit', 'osl-3.0', 'No License']
    },
    {
        name: 'gitUsername',
        message: questions[7],
        type: 'input',
    },
    {
        name: 'email',
        message: questions[8],
        type: 'input'
    }
]).then(answers => {
    console.log(answers)
    const filename = `${answers.Name.toLowerCase().split('').join('')}.md`;
    fs.writeFile(filename, JSON.stringify(answers, null, '\t'), err => err ? console.log(err) : console.log('Success!'))
});

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
