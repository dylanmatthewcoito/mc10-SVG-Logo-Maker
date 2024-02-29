const inquirer = require('inquirer')
const fs = require('fs')
const { Circle, Triangle, Square } = require('./lib/shapes.js')


const main = async () => {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to 3 characters for your logo',
            validate: input => input.length <= 3
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Choose a text color(keywords or hexidecimal value)',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose the shape for your logo',
            choices: ['Triangle', 'Circle', 'Square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Choose the shapes color(keywords or hexidecimal value)',
        },
    ]);

    const shapeChoices = {
        Triangle: Triangle,
        Circle: Circle,
        Square: Square,
    };

    const ShapeClass = shapeChoices[answers.shape];
    const shape = new ShapeClass(answers.shapeColor);

    const svgLogo = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape.render()}
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${answers.textColor}" font-size="50">${answers.text}</text>
    </svg>`;

    fs.writeFile('./examples/logo.svg', svgLogo, (err) => {
        if (err) {
            console.error(err);
        }
        console.log("Generated logo.svg");
    });
};


main()