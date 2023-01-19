// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const create_readme = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
                   'Please enter the title name of your project.',
                   'Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:\n\
                    - What was your motivation?\n\
                    - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")\n\
                    - What problem does it solve?\n\
                    - What did you learn?\n',
                    'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.\n',
                    'Provide instructions and examples for use. Include screenshots as needed.\n To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it.\n Then, using the relative filepath, add it to your README using the following syntax:\n\
                    ```md\n\
                    ![alt text](assets/images/screenshot.png)\n\
                    ```\n',
                    'List your collaborators, if any, with links to their GitHub profiles.\nIf you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.\nIf you followed tutorials, include links to those here as well.\n',
                    'The last section of a high-quality README file is the license.\nThis lets other developers know what they can and cannot do with your project.\nIf you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).\n',
                    'If your project has a lot of features, list them here.\n',
                    'If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so.\n The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you\'d prefer.\n',
                    'Go the extra mile and write tests for your application. Then provide examples on how to run them here.\n'
                  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
