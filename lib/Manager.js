class Manager extends Employee {

    constructor(name, ID, email, officeNumber) {

        super(name, ID, email);

        this.officeNumber = officeNumber
    }
}

Manager.prototype.getRole = function () {
    console.log('manager getRole run success')
}

var manager = new Manager('Sara', 35, 'sara@gmail.com', '333-444-5555');

console.log(manager)

// async function askManagerQuestions() {

//     const answers = await inquirer.prompt(managerQuestions);
//     const manager = new Manager(answers.name, answers.ID, answers.email, answers.officeNumber);
//     console.log(manager);
//     return manager;
// }

module.exports = askManagerQuestions;