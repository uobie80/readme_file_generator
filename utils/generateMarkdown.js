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


  const toc = 'Table of Contents\n\n- [Description](#Description)\n- [Installation](#Installation)\n- [Usage](#Usage)\n- [License](#License)\n- [Contributing](#Contributing)\n- [Tests](#Tests)\n- [Questions](#Questions)\n\n';
  const instructions = "";

  return `# ${data.title}\n` + toc + `## Description\n${data.description}\n## Installation\n${data.installation}\n## Usage\n${data.usage}\n## License\n${data.license}\n## Contributing\n${data.contribute} \n## Tests\n${data.tests}\n## Questions ${data.username}\n${data.email}`;
}

module.exports = generateMarkdown;
