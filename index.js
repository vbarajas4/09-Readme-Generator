const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

//Prompting the user question to generate the README.md
inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What installations are needed for this application?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a brief description of your project: ',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How would a user use this application?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Is there a test included?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Explain how users can contribute to your project (if necessary).',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Chose the appropriate license for this project: ',
        choices: [
            "MIT",
            "Apache 2.0",
            "BSD3",
            "ISC",
            "Unlicensed"      
        ]
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username: '
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email: '
    }
])

.then((response) => {
    console.log(response)
    fs.writeFile('ReadmeG.md', generateMarkdown(response), (err) => err ? console.log(err): console.log('success'));
})
