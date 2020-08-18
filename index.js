const inquirer = require("inquirer");
const fs = require("fs");


// prompt user - return answers object

const promptUser = () => {
    return inquirer
        .prompt([
            {
                type: "input",
                message: "What is your GitHub user name?",
                name: "username"
            },
            {
                type: "input",
                message: "What is your email address?",
                name: "email"
            },
            {
                type: "input",
                message: "What is your project's name?",
                name: "projectName"
            },
            {
                type: "input",
                message: "Please write a short description of your project.",
                name: "description"
            },

        ])
}

// take in answers object, create string with markdown

// const makeReadme = () {

// }

// save README to file
// const saveReadme = (mdText) {
//     // write file
// }



// Run README generator
promptUser().then((answers) => {
    console.log(answers);
    // const readmeContent = makeReadme(answers);
    // saveReadme(readmeContent);
});







