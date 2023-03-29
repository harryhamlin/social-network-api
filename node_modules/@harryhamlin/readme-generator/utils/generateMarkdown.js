// globally calls need variables
let badge;
let link;

// selects badge depending on selected license
const renderLicenseBadge = (license) => {
  !license ? badge === null : (
    license === 'Apache 2.0' ? badge = 'https://img.shields.io/badge/License-Apache_2.0-blue.svg' :
      license === 'Boost 1.0' ? badge = 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg' :
        license === 'BSD 3-Clause' ? badge = 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg' :
          license === 'CC0-1.0' ? badge = 'https://licensebuttons.net/l/zero/1.0/80x15.png' :
            license === 'Eclipse Public License 1.0' ? badge = 'https://img.shields.io/badge/License-EPL_1.0-red.svg' :
              license === 'MIT' ? badge = 'https://img.shields.io/badge/License-MIT-yellow.svg' :
                license === 'MPL-2.0' ? badge = 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg' :
                  badge = 'https://img.shields.io/badge/License-Perl-0298c3.svg'
  )
  return badge
}

// selects license link to text depending on selected license
const renderLicenseLink = (license) => {
  !license ? license === null : (
    license === 'Apache 2.0' ? link = 'https://opensource.org/licenses/Apache-2.0' :
      license === 'Boost 1.0' ? link = 'https://www.boost.org/LICENSE_1_0.txt' :
        license === 'BSD 3-Clause' ? link = 'https://opensource.org/licenses/BSD-3-Clause' :
          license === 'CC0-1.0' ? link = 'http://creativecommons.org/publicdomain/zero/1.0/' :
            license === 'Eclipse Public License 1.0' ? link = 'https://opensource.org/licenses/EPL-1.0' :
              license === 'MIT' ? link = 'https://opensource.org/licenses/MIT' :
                license === 'MPL-2.0' ? link = 'https://opensource.org/licenses/MPL-2.0' :
                  link = 'https://opensource.org/licenses/Artistic-2.0)'
  )
  return link
}

// renders the license section of the readme
const renderLicenseSection = (license) => {
  renderLicenseBadge(license);
  renderLicenseLink(license);
  let licenseSection
  !license ? licenseSection = '' : (
    licenseSection =
      `
## License <img src="${badge}"/>
    
This project is available under the ${license} license. See <a href="${link}">here</a> for more information
`
    )
  return licenseSection
}

// generates table-of-contents depending on if a license is selected of not
const tableOfContentsFx = (license) => {
  let tableOfContents;
  license ? tableOfContents = `
  ## Table of Contents
1. [License](#license)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)
  ` : tableOfContents = `
  ## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Contributing](#contributing)
4. [Tests](#tests)
5. [Questions](#questions)
  `;
  return tableOfContents;
}

// generates the markdown for the readme 
const generateMarkdown = (questions) => {
  const { projectName, description, license, installation, usage, tests, githubUN, email } = questions;
  const licenseSection = renderLicenseSection(license);
  const tableOfContents = tableOfContentsFx(license)
  return `
# ${projectName}

## Description

${description}

${tableOfContents}

${licenseSection}

## Installation

${installation}

## Usage

${usage}

## Contributing

<a href="https://github.com/${githubUN}">github.com/${githubUN}</a>

## Tests

${tests}

## Questions

For any questions, please reach out directly to <a href="mailto:${email}" target="_blank">${email}</a>.

`;
}

// module exports to index.js
module.exports = { generateMarkdown }
