const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
	      {
		            type: 'input',
		            message: 'What is your name?',
		            name: 'name',
		          },
		 {
		            type: 'input',
		            message: 'What languages do you know?',
		            name: 'language',
		          },
		{
		            type: 'input',
		            message: 'What is your preferred method of communication?',
		            name: 'preferred_communication',
		          },
	    ])
  .then((response) => { 
	      console.log(response);
		 
		  fs.writeFile('log.txt', `${response.name}\n ${response.language}\n ${response.preferred_communication}`, (err) =>
		 err ? console.error(err) : console.log('Commit logged!')
	   );

  });