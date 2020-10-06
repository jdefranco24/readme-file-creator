// function to generate markdown for Read me
function generateMarkdown(data) {
    return` 
    #**${data.title}**

    ## Table of Contents

    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#collab)
    - [License](#license)
    - [Badges](#badge)
    - [Contributing](#contributing)
    - [Test](#test)
    - [Repository](#repo) 
    
    ## Description
    
    ${data.description}

    
    
    ## Installation
    
    ${data.installation}
    
    ## Usage
    
    ${data.usage}
    
    ## Credits
    
    ${data.collab}
    
    ## License
    
    ${data.license}

    ## Badges
    ${data.badge}

    ## Contributing

    ${data.contributing}

    ## Test

    ${data.test}

    ## Repository

        - Project Repo: ${data.repo}
        - Username: ${data.username}

    `
}

module.exports = generateMarkdown;