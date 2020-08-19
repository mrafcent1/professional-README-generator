const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMd = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

const questions = [
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
        message: "What is your project's title?",
        name: "title"
    },
    {
        type: "input",
        message: "Please write a short description of your project.",
        name: "description"
    },
    {
        type: "list",
        message: "What license should your project have?",
        name: "license",
        choices: [
            "MIT",
            "Unlicense",
            "Apache 2.0",
            "GNU v3"
        ]
    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "installation",
        default: "npm i"
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "tests",
        default: "npm test"
    },
    {
        type: "input",
        message: "What does the user need to know about using the repository?",
        name: "usage"
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repository?",
        name: "contribute"
    },

]


// prompt user - return answers object

const promptUser = () => {
    return inquirer
        .prompt(questions);
}

// take in answers object, create string with markdown

// const makeReadme = () {

// }

// save README to file
// const saveReadme = (mdText) {
//     // write file
// }

// function to write README file
function writeToFile(fileName, data) {
    return writeFileAsync(fileName, data);
}



// // Run README generator
// promptUser().then((answers) => {
//     console.log(answers);
//     // const readmeContent = makeReadme(answers);
//     // saveReadme(readmeContent);
// });

async function init() {
    try {
        const answers = await promptUser();
        console.log(answers);

        const fileContent = generateMd(answers);

        await writeToFile("./output/README.md", fileContent);
        console.log("README.md created");

    } catch (err) {
        console.log(err);
    }
}

init();

// From develop
// // array of questions for user
// const questions = [

// ];



// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();






