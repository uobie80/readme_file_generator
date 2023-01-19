const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
	      {
		            type: 'input',
		            message: 'Please enter the title name of your project.',
		            name: 'project_title',
		          },
		 {
		            type: 'input',
		            message: 'Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:\n\
                              - What was your motivation?\n\
                              - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")\n\
                              - What problem does it solve?\n\
                              - What did you learn?\n',
		            name: 'description',
		          },
		{
		            type: 'input',
		            message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.\n',
		            name: 'installation',
		          },
                  {

                    type: 'input',
                    message: 'Provide instructions and examples for use. Include screenshots as needed.\n To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it.\n Then, using the relative filepath, add it to your README using the following syntax:\n\
                        ```md\n\
                        ![alt text](assets/images/screenshot.png)\n\
                        ```\n',
                    name: 'usage'

                  },
	    ])
  .then((response) => { 
	      console.log(response);
		 
		  fs.writeFile('log.txt', `${response.project_title}\n ${response.description}\n ${response.installation}`, (err) =>
		 err ? console.error(err) : console.log('Commit logged!')
	   );

  });