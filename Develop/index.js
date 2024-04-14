// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./develop/utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please type your project title'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license',
        choices: ['No License', 'MIT', 'IBM', 'ISC', 'GNU GPL v3'],
        
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter description project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter instalation instruction'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please type you email address'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter how someone can use your app'
    },
    {
        type: 'input',
        name: 'liveDemo',
        message: 'Plese enter URL to a live demo of your project(leave blank if none)'
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err)
        }
        console.log('Readme generated successfully')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answersObj) => {
            const markdown = generateMarkdown(answersObj)
            writeToFile('README.md', markdown)
        })
        .catch((err) => {
            console.log(err)
        })

    
}

// Function call to initialize app
init();
