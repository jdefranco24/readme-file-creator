// function to generate markdown for Read me
function generateMarkdown(data) {
    return` 
    ${data.title}

    ${data.badge}
    
    Description

    ${data.description}
    
    Installation

    ${data.installation}
    
    Usage
    
    ${data.usage}

    Credits
    

    ## Test

    ${data.test}

    Repository

    - [Project Repo](${data.repo})
    `
}

module.exports = generateMarkdown;