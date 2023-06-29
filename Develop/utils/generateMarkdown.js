// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
  if (license === 'MIT'){
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
   }
   else if (license === 'GPL'){
    return `![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`
   }
   else {
    return '';

   }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT'){
    return `https://mit-license.org/`
   }
   else if (license === 'GPL'){
    return `https://www.gnu.org/licenses/old-licenses/gpl-1.0.html`
   }
   else {
    return '';

   }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MIT'){
    return `${renderLicenseBadge(license)}
    
${renderLicenseLink(license)}`
   }
   else if (license === 'GPL'){
    return `${renderLicenseBadge(license)}
    
${renderLicenseLink(license)}`
   }
   else {
    return '';

   }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

## Description

${answers.description}

## Table of Contents

${answers.tableOfContents}

## Installation

${answers.installation}

## Usage

${answers.usage}

## Credits

${answers.credits}

## License

${renderLicenseSection(answers.license)}

## Features

${answers.features}

## How to Contribute

${answers.howToContribute}

`;
}

module.exports = generateMarkdown;
