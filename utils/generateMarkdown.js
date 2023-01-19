// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
   
   let licenseBadge = "";

   if (license) {
 
   }

   return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  let licenseLink = "";

  if (license) {

  }

  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
 
  let licenseSection = "";

  return licenseSection;

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {


  return `# ${data.title}\n## Description\n${data.description}\n## Installation\n${data.installation}\n## Usage\n${data.usage}\n## Credits\n${data.credits}\n## License\n${data.license}\n## Features\n ${data.features} \n## Contribute\n${data.contribute} \n## Tests\n${data.tests}`;
}

module.exports = generateMarkdown;
