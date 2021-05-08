//These function will generate the Markdown document

// TODO: Create a function that returns a license badge based on which license is passed in
//function renderLicenseBadge(license) { I used a generic badge inserted in the readme file }

// TODO: Create a function that returns the license link
//Chose a few licenses from https://choosealicense.com/

function renderLicenseLink(license) {
    if(license === "MIT") {
        return `[MIT License](https://opensource.org/licenses/MIT)`
   }
   else if(license === "Apache 2.0") {
        return `[Apache 2.0 License](https://choosealicense.com/licenses/apache-2.0/)`
   }
   else if(license === "BSD3") {
        return `[BDS3 License](https://choosealicense.com/licenses/bsd-3-clause/)`
   }
   else if(license === "ISC") {
        return `[ISC License](https://choosealicense.com/licenses/isc/)`
   }
   else if(license === "Unlicensed") {
        return `[Unlicensed](https://choosealicense.com/licenses/unlicense/)`
   }
}
  
// TODO: Create a function that returns the license section of README
//Information on licenses found on https://choosealicense.com/licenses/

function renderLicenseSection(license) {
    if(license === "MIT") {
        return `A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
    }
    else if(license === "Apache 2.0") {
         return `A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
    } 
    else if(license === "BSD3") {
          return `A permissive license similar to the BSD 2-Clause License, but with a 3rd clause that prohibits others from using the name of the copyright holder or its contributors to promote derived products without written consent.`
    }
    else if(license === "ISC") {
          return `A permissive license lets people do anything with your code with proper attribution and without warranty. The ISC license is functionally equivalent to the BSD 2-Clause and MIT licenses, removing some language that is no longer necessary.`
    }
    else if(license === "Unlicensed") {   
           return `A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.`
    }
}
  

// TODO: Create a function to generate markdown for README
//Creating the markdown document 

function generateMarkdown(data) {
return `# ${data.title}

[![badge](https://img.shields.io/badge/license-${data.license}-yellow.svg)](#license)


## Description
${data.description}

## Table of Contents
 - [Installation](#installation)
 - [Usage](#usage)
 - [Tests](#tests)
 - [Contributing](#contributing)
 - [License](#license)
 - [Questions](#questions)

## Installation
${data.installation}

##Usage
${data.usage}

##Tests
${data.test}

##Contributing
${data.contributing}

## License
![badge](https://img.shields.io/badge/license-${data.license}-yellow)
### This application is licensed under the [${data.license}](${renderLicenseLink(data.license)}) license.
${renderLicenseSection(data.license)}

##Questions
 * GitHub: [${data.github}](https://github.com/${data.github})
 * Email: [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;