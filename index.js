//index.js houses function calls, inquirer prompts

//lib folder items ONLY hold classes

const initializeEmployee = require('./lib/Employee');

const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const generateHTML = require('./generateHTML');
const generateCSS = require('./generateCSS');
const Employee = require('./lib/Employee');

var currentUserSelection


const menuQuestion = [
    {
        type: 'list',
        name: 'menuSelection',
        message: 'Add one of the following or select done if finished.',
        choices: [
            'Manager',
            'Engineer',
            'Intern',
            'Done'
        ]
    }
]

const engineerQuestions = [{
    type: 'input',
    name: 'name',
    message: 'What is the name?'
},
{
    type: 'input',
    name: 'ID',
    message: 'What is the ID?'
},
{
    type: 'input',
    name: 'email',
    message: 'What is the email?'
},
{
    type: 'input',
    name: 'username',
    message: 'What is the GitHub username?'
}
]

const internQuestions = [{
    type: 'input',
    name: 'name',
    message: 'What is the name?'
},
{
    type: 'input',
    name: 'ID',
    message: 'What is the ID?'
},
{
    type: 'input',
    name: 'email',
    message: 'What is the email?'
},
{
    type: 'input',
    name: 'school',
    message: 'What is the school?'
}
]

const managerQuestions = [{
    type: 'input',
    name: 'name',
    message: 'What is the name?'
},
{
    type: 'input',
    name: 'ID',
    message: 'What is the ID?'
},
{
    type: 'input',
    name: 'email',
    message: 'What is the email?'
},
{
    type: 'input',
    name: 'officeNumber',
    message: 'What is the office number?'
}
]

//Generator function to kick off the application

function Generator() {
    this.engineersArray = [];
    this.managersArray = [];
    this.internsArray = [];
}

//Function if done correctly should take in an employee type from the user prompt, create a new employee, and pass it along
//to be refined into a Manager,Engineer, or Intern via another function
Generator.prototype.initializeEmployee = async function () {

    inquirer.prompt({
        type: 'list',
        name: 'menuSelection',
        message: 'Add one of the following or select done if finished.',
        choices: [
            'Manager',
            'Engineer',
            'Intern',
            'Done'
        ]
    })

        .then(({ menuSelection }) => {
            this.employee = new Employee();
            currentUserSelection = menuSelection;
            this.employeeInformationGenerator()
        });


}

//Function if done correctly should identify the employee type given the user input from a parent function and
//prompt the user for Manager, Intern, or Engineer specific information to create an employee under one of those categories
//the function should then loop back through if the user did not elect to be Done adding employees.
Generator.prototype.employeeInformationGenerator = async function () {

    if (currentUserSelection == 'Manager') {

        const managerAdd = await new Manager();
        console.log('passed through askManagerQuestion')
        managersArray.push(managerAdd);
        reinitialize();

    } else if (currentUserSelection == 'Engineer') {

        const engineerAdd = await new Engineer();
        console.log('passed through askEngineerQuestion')
        engineersArray.push(engineerAdd);
        reinitialize();

    } else if (currentUserSelection == 'Intern') {

        const internAdd = await new Intern();
        console.log('passed through askInternQuestion')
        internsArray.push(internAdd);
        reinitialize();

    } else {

        console.log('User selected DONE for an answer');
        console.log(managersArray, engineersArray, internsArray)
        const contentHTML = generateHTML(managersArray, engineersArray, internsArray);

        fs.writeFile('./dist/HTML.html', contentHTML, err => {
            if (err) throw err
            console.log('HTML File saved!')
        })


        const contentCSS = generateCSS();

        fs.writeFile('./dist/styles.css', contentCSS, err => {
            if (err) throw err
            console.log('CSS File saved!')
        })

    }

}

//Function if done correctly should loop the user back through the initializeEmployee function.
Generator.prototype.reinitialize = function () {
    if (currentUserSelection !== 'Done') {

        console.log('keeping it going from reinitialize function')
        initializeEmployee();

    } else {

        console.log('reinitialize else block executed')

    }
}

//Function if done correctly should return a manager object with values gathered from user input from inquirer prompts.
Generator.prototype.askManagerQuestions = async function () {

    const answers = await inquirer.prompt(managerQuestions);
    const manager = new Manager(answers.name, answers.ID, answers.email, answers.officeNumber, role);
    console.log(manager);
    return manager;
}

//Function if done correctly should return a intern object with values gathered from user input from inquirer prompts.
Generator.prototype.askInternQuestions = async function () {

    const answers = await inquirer.prompt(internQuestions);
    const intern = new Intern(answers.name, answers.ID, answers.email, answers.school);
    console.log(intern);
    return intern;

}

//Function if done correctly should return a Engineer object with values gathered from user input from inquirer prompts.
Generator.prototype.askEngineerQuestions = async function () {

    const answers = await inquirer.prompt(engineerQuestions);
    const engineer = new Engineer(answers.name, answers.ID, answers.email, answers.username);
    console.log(engineer);
    return engineer;

}



new Generator().initializeEmployee();