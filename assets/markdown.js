// markdown template

// function to create markdown
function markdown(answers) {
    return `
    
    # ${answers.projectName}
    ## This project was delevoped by ${answers.githubUserName}

    ## Description
    ${answers.description}

    ## Table of Contents
    * [Installation](#installInstructions)
    * [Usage](#usageInstructions)
    * [Contributing](#contributingInstructions)
    * [Questions](#contributingInstructions)
    * [License](#license)
    
    ## Installation
    To install use the below:
    ${answers.installInstructions}

    ## Usage
    ${answers.usageInstructions}

    ## Contributing
    ${answers.contributingInstructions}

    ## Questions
    For question, please email:
    ${answers.questionInstructions}

    ## License
    ${answers.license}

    
    
    `;
}

module.exports = markdown;