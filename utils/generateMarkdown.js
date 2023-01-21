// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
   
   const licenseBadges = {
                             'Apache 2.0': '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
                              'MIT':'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
                              'Perl':'[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0',
                              'Mozilla':'[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0',
                              'GNU':'[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
                         };

    if (license === "") {
          return "";
      }

   return licenseBadges[license];
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  const licenseLinks = {
                        'Apache 2.0': '[License: Apache 2.0](https://opensource.org/licenses/Apache-2.0)',
                               'MIT':'[License: MIT](https://opensource.org/licenses/MIT)',
                              'Perl':'[License: Artistic-2.0](https://opensource.org/licenses/Artistic-2.0',
                           'Mozilla':'[License: MPL 2.0](https://opensource.org/licenses/MPL-2.0',
                               'GNU':'[License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)',
                       };

    if (license === "") {
      return "";
    }
  
    return licenseLinks[license];
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

   const licenseSections = {
                            'Apache 2.0':  `${ (license != "") ? 'This application is covered under the Apache license.\nSee the Terms & Conditions of Apache License at ' + renderLicenseLink(license): ""}`,
                                  'MIT': `${(license != "") ? 'This application is covered under the MIT license.\nSee the Terms & Conditions of MIT License at ' + renderLicenseLink(license): ""}`,
                                  'Perl': `${(license != "") ? 'This application is covered under the Perl license.\nSee the Terms & Conditions of Perl License at ' + renderLicenseLink(license): ""}`,
                              'Mozilla':`${(license != "") ? 'This application is covered under the Mozilla license.\nSee the Terms & Conditions of Mozilla License at ' + renderLicenseLink(license): ""}`,
                                  'GNU':`${(license != "") ? 'This application is covered under the GNU license.\nSee the Terms & Conditions of GNU License at ' + renderLicenseLink(license): ""}`,
                           };

  if (license === "") {
    return "";
  }

    return licenseSections[license];
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {


  const toc = '## Table of Contents\n\n- [Description](#Description)\n- [Installation](#Installation)\n- [Usage](#Usage)\n- [License](#License)\n- [Contributing](#Contributing)\n- [Tests](#Tests)\n- [Questions](#Questions)\n\n';
  const license_badge = renderLicenseBadge(data.license);
  const license_section = renderLicenseSection(data.license);
  const instructions = "If you have any questions please reach me using my email below."

  return `# ${data.title}\n` + license_badge + '\n\n' + toc + `## Description\n${data.description}\n## Installation\n${data.installation}\n## Usage\n${data.usage}\n## License\n${data.license}\n` + license_section + '\n' + `## Contributing\n${data.contribute} \n## Tests\n${data.tests}\n## Questions\n` + instructions + `\n\nUsername: ${data.username}  \nEmail: ${data.email}\n`;
}

module.exports = generateMarkdown;
 