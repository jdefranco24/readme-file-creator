// function to generate markdown for Read me
function generateMarkdown(data) {
    return`# ${data.title}
        ### Welcome to ${data.name}'s page! 

        ## Use 
            - like so..
            - my age: ${data.age}
            -other stuff
    `
}

module.exports = generateMarkdown;