// function to generate markdown for README
function generateMarkdown(data) {
  // set url for license
  switch (data.license) {
    case "MIT":
      data.licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
      break;
    case "Unlicense":
      data.licenseBadge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
      break;
    case "Apache 2.0":
      data.licenseBadge = "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
      break;
    case "GNU v3":
      data.licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
      break;
  }

  // return markdown content
  return `# ${data.title}

${data.licenseBadge}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
\`
${data.installation}
\`

## Usage

${data.usage}

## License

This repository is licensed under the ${data.license} license.

## Contributing

${data.contribute}

## Tests
\`
${data.tests}
\`

## Questions

Questions about this repository? Please contact me at [${data.email}](mailto:${data.email}). View more of my work at [${data.username}](https://github.com/${data.username}) 

`;
}

module.exports = generateMarkdown;
