// Returns a markdown badge for the given license, or an empty string if none was selected
function renderLicenseBadge(license) {
  if (!license || license === "None") return "";
  const badges = {
    "MIT": "https://img.shields.io/badge/License-MIT-yellow.svg",
    "Apache 2.0": "https://img.shields.io/badge/License-Apache%202.0-blue.svg",
    "GPL 3.0": "https://img.shields.io/badge/License-GPLv3-blue.svg",
    "BSD 3-Clause": "https://img.shields.io/badge/License-BSD%203--Clause-orange.svg",
  };
  return `![License](${badges[license]})\n\n`;
}

// Returns a Table of Contents link to the License section, or an empty string if none was selected
function renderLicenseLink(license) {
  if (!license || license === "None") return "";
  return `- [License](#license)\n`;
}

// Returns the License section, or an empty string if none was selected
function renderLicenseSection(license) {
  if (!license || license === "None") return "";
  return `## License\n\nThis project is licensed under the ${license} license.\n\n`;
}

function generateMarkdown(data) {
  return `# ${data.project}

${renderLicenseBadge(data.license)}## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(data.license)}- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

\`\`\`bash
git clone https://github.com/${data.github}/${data.repo}.git
cd ${data.repo}
${data.installation}
\`\`\`

## Usage

${data.usage}

${renderLicenseSection(data.license)}## Contributing

${data.contribution}

## Tests

${data.test}

## Questions

If you have any questions about this project, feel free to reach out:

- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}
`;
}

module.exports = generateMarkdown;