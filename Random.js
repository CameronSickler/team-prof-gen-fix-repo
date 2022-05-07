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

//to hold created employee objects in array but not working atm

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

//function to ask user what employee to add or if done adding employees

function Generator() {
    this.engineersArray = [];
    this.managersArray = [];
    this.internsArray = [];
}

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

Generator.prototype.reinitialize = function () {
    if (currentUserSelection !== 'Done') {

        console.log('keeping it going from reinitialize function')
        initializeEmployee();

    } else {

        console.log('reinitialize else block executed')

    }
}

Generator.prototype.askManagerQuestions = async function () {

    const answers = await inquirer.prompt(managerQuestions);
    const manager = new Manager(answers.name, answers.ID, answers.email, answers.officeNumber, role);
    console.log(manager);
    return manager;
}

Generator.prototype.askInternQuestions = async function () {

    const answers = await inquirer.prompt(internQuestions);
    const intern = new Intern(answers.name, answers.ID, answers.email, answers.school);
    console.log(intern);
    return intern;

}

Generator.prototype.askEngineerQuestions = async function () {

    const answers = await inquirer.prompt(engineerQuestions);
    const engineer = new Engineer(answers.name, answers.ID, answers.email, answers.username);
    console.log(engineer);
    return engineer;

}






// module.exports = initializeEmployee


new Generator().initializeEmployee();