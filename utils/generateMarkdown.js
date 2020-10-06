// function to generate markdown for Read me
function generateMarkdown(data) {
    return` 
    #**${data.title}**

    
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