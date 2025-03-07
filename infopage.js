const information = (data) => { return `# ${data.title}

![License Badge](https://img.shields.io/badge/license-MIT-brightgreen)

## Description
${data.description}
## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}
## Usage
${data.usage}
## License
${data.license}

This project is licensed under the [MIT](https://opensource.org/licenses/MIT) license.

## Contributing
${data.contribution}
## Tests
${data.test}
## Questions

If you have any questions, feel free to reach out:

- GitHub: [ ${data.username}](https://github.com/your-username)
- Email: [${data.email}](mailto:your-email@example.com)
Conclusion
This simple command-line application allows you to generate a professional README.md file by dynamically taking user input. You can extend this by adding more advanced features such as more templates, file validation, or even integration with other platforms.;`};


module.exports=information;