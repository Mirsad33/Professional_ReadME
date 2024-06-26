// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const formattedLicense = license.replace(/ /g, "_").replace(/-/g, "--")
  return `![GitHub license](https://img.shields.io/badge/License-${license}-red.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'IBM': 'https://opensource.org/licenses/IPL-1.0',
    'ISC': 'https://opensource.org/licenses/ISC',
    'GNU GPL v3': 'https://www.gnu.org/licenses/gpl-3.0.en.html'
    // Add more licenses and their corresponding links as needed
  };
  return licenseLinks[license] || ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseTexts = {
    'MIT': 'Licensed under the [MIT License](https://opensource.org/licenses/MIT).',
    'IBM': 'Licensed under the [IBM Public License 1.0](https://opensource.org/licenses/IPL-1.0).',
    'ISC': 'Licensed under the [ISC License](https://opensource.org/licenses/ISC).',
    'GNU GPL v3': 'Licensed under the [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html).'
    // Add more licenses and their corresponding license texts as needed
  };
  return licenseTexts[license] || ''
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  <h1>#Description</h1>

  ${data.description}

  ${data.imageURL ? `
  <h1>#visuals</h1>
  <img src="${data.imageURL}" >` : ''}

  ${data.liveDemo ? `
  <h1>Deployment</h1>
  Live Demo: ([DEMO >](${data.liveDemo}))` : ''}

  <h1>#Usage</h1>

  ${data.usage}

  <h1>#Contact</h1>

  Email: ${data.email}

  <h1>#Credits</h1>
  
  ${data.credits}

  ${renderLicenseBadge(data.license)}

  <h1>#License</h1>

  ${renderLicenseBadge(data.license)}

  Licensed under the ${data.license} license
  

## Description

${data.description}

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

## Usage

Provide instructions and examples for use. Include screenshots as needed.



   
    ![alt text](assets/images/screenshot.png)
   

## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests
`;
}

module.exports = generateMarkdown;
