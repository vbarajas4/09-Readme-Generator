const inquirer = require('inquirer');

inquirer.prompt([
    {
        type: 'input',
        name: 'readmeTitle',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'userStory',
        message: 'Whats is your user story?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a brief description of your project: ',
    },
    {
        type: 'input',
        name: '',
        message: ''
    },
    {
        type: 'list',
        name: 'license',
        message: 'Chose the appropriate license for this project: ',
        choices: [
            "MIT",
            "Mozilla",
            "Open"
        ]
    },
    {
        type: 'input',
        name: '',
        message: '',
    },
    {
        type: 'input',
        name: 'Deployed',
        message: 'Please enter the deployed Project URL ',
    },
    {
        type: 'input',
        name: 'repository',
        message: 'Please enter the Repository URL'
    },
    {
        type: 'input',
        name: 'username',
        message: 'Please enter your GitHub username: '
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email: '
    }
])

.then ()

fs.writefile ()