// npm module dependancies
const inquirer = require("inquirer")
const fs = require("fs")

// Delete the existing readme file
fs.unlink("README.md", (err) => {
    if (err) throw err
})

// User input to get information to create readme content
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title_info'
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'github_username'
        },
        {
            type: 'input',
            message: 'Create a description for your project?',
            name: 'description_info'
        },
        {
            type: 'input',
            message: 'What are the installation instructions?',
            name: 'install_instructions'
        },
        {
            type: 'input',
            message: 'What are the usage instructions?',
            name: 'usage_instructions'
        },
        {
            type: 'input',
            message: 'How do you want contributors to assist with this project?',
            name: 'contributing_instructions'
        },
        {
            type: 'input',
            message: 'What license do you want to use?',
            name: 'license_info'
        },
    ])
    .then(function (response) {
        // create variables from user reponses
        let readMeTitle = `# ${response.title_info}`
        console.log(response)

        // Write data to the readme file
        fs.writeFile('README.md', readMeTitle, (err) => {
            if (err) throw err;
            console.log("Readme generated")
        })
    })