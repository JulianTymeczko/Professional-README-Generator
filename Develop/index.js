// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
       type: 'input',
       message: 'Write a description of your project?',
       name: 'description', 
    },
    {
        type: 'input',
        message: 'What is your table of contents?',
        name: 'tableOfContents'

    },
    {
        type: 'input',
        message: 'How can someone install your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What are some examples of your projects use?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'To whom do you credit your project?',
        name: 'credits'
    },
    {
        type: 'list',
        message: 'What is the liscense associated with your project?',
        name: 'license',
        choices: ['MIT', 'GPL', 'none']
    },
    {
        type: 'input',
        message: 'List your projects features.',
        name: 'features',

    },
    {
        type: 'input',
        message: 'How would you like others to contribute?',
        name: 'howToContribute',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    inquirer
        .prompt(questions)
        .then(answers => {
            const readMeContent = generateMarkdown(answers);
         
            fs.writeFile(fileName, readMeContent, err => {
                if (err) {
                    console.error(err);
                } else {
                    console.log('README file created successfully!');
                }
            });
        });

}

// TODO: Create a function to initialize app
function init() { 
    const filename = process.argv[2] || 'README.md'
    writeToFile(filename);
}

// Function call to initialize app
init();
