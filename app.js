const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
    
    function createManager () {
        //ask manager if they want employees lost of if else
        inquirer.prompt([{
            type: "input",
            name: "name",
            message: "What is the manager's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the manager's ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the manager's email?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number?"
        }
            ]).then(response => {
                const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
                employees.push(manager);
                return manager;
            });
            addMember();

    };

    function createIntern () {
        inquirer.prompt([{
            type: "input",
            name: "name",
            message: "What is the intern's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the intern's ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the intern's email?"
        },
        {
            type: "input",
            name: "school",
            message: "What is the intern's school?"
        }
        ]).then(response => {
            const intern = new Intern(response.name, response.id, response.email, response.school);
            employees.push(intern);
            return intern;
        });

        addMember();
    };

    function createEngineer () {
        inquirer.prompt([
            {
                type:"input",
                name:"name",
                message:"What is the engineer's name?"
            },
            {
                type:"input",
                name:"id",
                message:"What is the engineer's ID?"
            },
            {
                type:"input",
                name:"email",
                message:"What is the engineer's email?"
            },
            {
                type:"input",
                name:"github",
                message:"What is the engineer's github?"
            },
            ]).then(response => {
            const engineer = new Engineer(response.name, response.id, response.email, response.github);
            employees.push(engineer);
            return engineer;
        });

        addMember();

    };

    const addMember = () => {
        inquirer.prompt([{
            type: "confirm",
            name: "addEmployee",
            message: "Would you like to add an employee?"
        }]).then(response => {
            if (response.addMore) {
                whatRole();
            } else {
                console.log("Great, thanks!");
                buildTeam();
            };
        });
    };
    
    
    const employeeRole = () => {
        inquirer.prompt([{
            type: "list",
            name: "role",
            message: "What is the employee's role?",
            choices: ["Manager", "Engineer", "Intern"]
        }]).then(response => {
            switch (response.role) {
                case "Manager":
                    createManager();
                    break;
                case "Engineer":
                    createEngineer();
                    break;
                case "Intern":
                    createIntern();
                    break;
                default:
                    return;
            };
        });
    };

    function buildTeam () {
        //fs.writefile output path & output directory 
            if (!fs.existsSync(OUTPUT_DIR)) {
                fs.mkdirSync(OUTPUT_DIR)
            }
            fs.writeFileSync(outputPath, render(employees), "UTF-8")
    };
    


employeeRole();