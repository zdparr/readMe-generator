// required npm modules
const inquirer = require("inquirer")
const fs = require("fs")
const markdown = require("./assets/markdown.js")
const userData = []

// array of questions
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'projectName'
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'githubUserName'
    },
    {
        type: 'input',
        message: 'Create a description for your project?',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'installInstructions'
    },
    {
        type: 'input',
        message: 'What are the usage instructions?',
        name: 'usageInstructions'
    },
    {
        type: 'input',
        message: 'How do you want contributors to assist with this project?',
        name: 'contributingInstructions'
    },
    {
        type: 'list',
        message: 'What license do you want to use?',
        choices: [
            {
                name: 'MIT',
                value: {
                    name: 'MIT',
                    url: 'https://opensource.org/licenses/MIT',
                },
            },
            {
                name: 'Apache 2.0 License',
                value: {
                    name: 'Apache 2.0 License',
                    url: 'https://opensource.org/licenses/Apache-2.0',
                },
            },
            {
                name: 'GPL 3.0',
                value: {
                    name: 'GPL 3.0',
                    url: 'https://www.gnu.org/licenses/gpl-3.0',
                },
            },
            {
                name: 'BSD 3',
                value: {
                    name: 'BSD 3',
                    url: 'https://opensource.org/licenses/BSD-3-Clause',
                },
            },
            {
                name: 'Unlicense',
                value: {
                    name: 'Unlicense',
                    link: 'Unlicense',
                    url: 'http://unlicense.org/',
                    color: 'orange',
                },
            },
        ]
    }
]

// delete any existing readme file
// fs.unlink("README.md", (err) => {
//     if (err) throw err
// })

// prompt for user input
function questionPrompt() {
    return inquirer.prompt(questions)
}

function writeData(fileName, response) {
    // delete any previous readme file
    fs.unlink("README.md", (err) => { if (err) throw err })

    // write data to readme
    fs.appendFile('README.md', userData, (err) => { if (err) throw err })
}

function appStart() {

}

appStart()