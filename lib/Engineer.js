class Engineer extends Employee {

    constructor(name, ID, email, username) {

        super(name, ID, email);

        this.username = username
    }
}

Engineer.prototype.getGithub = function () {
    console.log('engineer getSchool run success')
}

Engineer.prototype.getRole = function () {
    console.log('engineer getRole run success')
}

var engineer = new Engineer('Mike', 1, 'mike@gmail.com', 'mikey');

console.log(engineer)

// async function askEngineerQuestions() {

//     const answers = await inquirer.prompt(engineerQuestions);
//     const engineer = new Engineer(answers.name, answers.ID, answers.email, answers.username);
//     console.log(engineer);
//     return engineer;
// }

module.exports = askEngineerQuestions;