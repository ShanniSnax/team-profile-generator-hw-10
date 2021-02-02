const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)


function initializer () {
    
    function createManager () {
        //ask manager if they want employees lost of if else
        inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: "What is the manager's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the manager`s ID?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the manager`s email address?'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the manager`s office number?'
        }
            ]).then(response => {
                const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
                employees.push(manager);
                return manager;
            });
            addRole();

    };

    function createIntern () {
        inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: "What is the intern's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the intern's ID?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email address?"
        },
        {
            type: 'input',
            name: 'school',
            message: "What school did the intern attend?"
        }
        ]).then(response => {
            const intern = new Intern(response.name, response.id, response.email, response.school);
            employees.push(intern);
            return intern;
        });

        addRole();
    };

    function createEngineer () {
        inquirer.prompt([
            {
                type:'input',
                name:'name',
                message:'What is the name of your engineer?'
            },
            {
                type:'input',
                name:'id',
                message:'What is the ID of your engineer?'
            },
            {
                type:'input',
                name:'email',
                message:'What is the email of your engineer?'
            },
            {
                type:'input',
                name:'github',
                message:"What is your engineer's github?"
            },
            ]).then(response => {
            const engineer = new Engineer(response.name, response.id, response.email, response.github);
            employees.push(engineer);
            return engineer;
        });

        addRole();

    };

    function buildTeam () {
        //fs.writefile output path & output directory 
    }
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
}

initializer();